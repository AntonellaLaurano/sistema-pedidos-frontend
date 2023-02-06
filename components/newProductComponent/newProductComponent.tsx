import { addProduct, getAllCategories } from 'api';
import { Category } from 'interfaces';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

export const NewProductComponent: React.FC = () => {
	const router = useRouter();
  const { data } = useQuery<any | null>(
		['ALL_CATEGORIES'],
		() => getAllCategories(),
    {
      refetchOnWindowFocus: false,
    }
	);
  
  const formatCategories = (): Category[] => {
    let categories = [];

    if (data) {
      const dataArray = Object.entries(data);
      categories = dataArray.map((item) => ({
        id: item[0],
        name: Object.values(item[1])[0],
      }))
    }
    return categories;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries({
      category_id: data.category_id,
      description: data.description,
      name: data.name,
      price: data .price
    })) {
			formData.append(key, value);
		}
   try {
      await addProduct(formData);
      router.push('/menu');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-10 sm:bg-gray-200">
      <div className="bg-white w-full max-w-[616px] p-0 sm:py-5 sm:px-16 sm:rounded-lg sm:shadow">
        <form className="space-y-6 pt-8 sm:space-y-5 sm:pt-10" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Product</h3>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Name
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="name"
                  {...register('name')}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Description
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="description"
                  {...register('description')}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Price
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="price"
                  {...register('price')}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Category
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <select
                  name="category_id"
                  {...register('category_id')}
                  className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                >
                  {formatCategories()?.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mt-16 mb-8">
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-transparent bg-[#6c0115b3] px-8 py-2 text-base font-medium text-white shadow-sm"
              //disabled={loading}
              //onClick={saveOrder}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
