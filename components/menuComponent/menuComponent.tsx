import * as React from 'react';
import { getAllProducts, postOrder } from 'apii'
import clsx from 'clsx';
import { Product } from 'interfaces';
import { useQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../styles/index.module.css';
import router from 'next/router';

const image = 'https://images.unsplash.com/photo-1634069564622-99a828554a02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=863&q=80';

export const MenuComponent: React.FC = () => {
  const notify = () => toast.success('Successfully uploaded', {
                                      position: "top-center",
                                      autoClose: 5000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                      draggable: true,
                                      progress: undefined,
                                      theme: "light",
                                    });

  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const { data } = useQuery<Product[] | null>(
		['ALL_PRODUCTS'],
		() => getAllProducts(),
    {
      refetchOnWindowFocus: false,
    }
	);
  const addItem = (id: number): void => {
    const items = selectedItems;
    items.push(id);
    setSelectedItems([...items]);
  };
  
  const removeItem = (id: number): void => {
    const index = selectedItems.findIndex((item) => item == id);
    const items = selectedItems.filter((item, i) => i != index);
    setSelectedItems([...items]);
  };

  const countItems = (id: number): number => {
    const items = selectedItems.filter((item) => item == id);
    return items.length;
  }

  const saveOrder = async() => {
    setLoading(true);
    //console.log(data)
		const formData = new FormData();
    for (const [key, value] of Object.entries({
      table: '1',
      order_Produdct: JSON.stringify(selectedItems),
    })) {
      console.log(key, value)
			formData.append(key, value);
		}
    await postOrder(formData).then( response => {
      sessionStorage.setItem('order', JSON.stringify(response));
    });
    setLoading(false);
    notify();
    router.push('/waitingOrder');
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-10 sm:bg-gray-200">
      <div className="bg-white w-[90%] xl:w-[80%] p-0 sm:py-5 sm:px-16 sm:rounded-lg sm:shadow">
        <h1 className={clsx(styles.fontFamily, 'w-full text-6xl')}>Menu</h1>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-6">
          {data?.map((item, index) => (
            <li
              key={index}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8 relative">
                {countItems(item.category_id) > 0 && (
                  <div className="absolute top-4 right-5 rounded-full w-6 h-6 bg-[#6c0115b3] flex justify-center items-center">
                    <p className="text-white text-xs">
                      {countItems(item.category_id)}
                    </p>
                  </div>
                )}
                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={image} alt="" />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{`${item.name} - ${item.price}$`}</h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Description</dt>
                  <dd className="text-sm text-gray-500">{item.description}</dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <button
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                      onClick={() => removeItem(item.category_id)}
                    >
                      -
                    </button>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <button
                      className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                      onClick={() => addItem(item.category_id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-end mt-10 mb-8">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-[#6c0115b3] px-8 py-2 text-base font-medium text-white shadow-sm"
            disabled={loading || selectedItems.length < 1}
            onClick={saveOrder}
          >
            Save{loading ? '...' : ''}
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}
