export const postOrder = async (data: any) => {
  return  await fetch(`${process.env.NEXT_PUBLIC_API}/v1/orders`, {
    method: "POST",
    body: data,
  });
}

export const getAllOrders = async () => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/orders`, {
    method: "GET",
  });
  const { data, status } = await response.json();
  if (status == 200) return data as any[];
  return null
};