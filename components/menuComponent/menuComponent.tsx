import { getAllProducts } from 'api';
import clsx from 'clsx';
import { Product } from 'interfaces';
import { useQuery } from 'react-query';
import styles from '../../styles/index.module.css';

const image = 'https://images.unsplash.com/photo-1634069564622-99a828554a02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=863&q=80';

export const MenuComponent: React.FC = () => {
  const { data } = useQuery<Product[] | null>(
		['ALL_PRODUCTS'],
		() => getAllProducts(),
    {
      refetchOnWindowFocus: false,
    }
	);

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-10 sm:bg-gray-200">
      <div className="bg-white w-[90%] xl:w-[80%] p-0 sm:py-5 sm:px-16 sm:rounded-lg sm:shadow">
        <h1 className={clsx(styles.fontFamily, 'w-full text-6xl')}>Menu</h1>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-6">
          {data?.map((item, index) => (
            <li
              key={index}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={image} alt="" />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{item.name}</h3>
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
                    >
                      -
                    </button>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <button
                      className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
