export const  postOrder = async (data: any) => {
  return  await fetch(`${process.env.NEXT_PUBLIC_API}/v1/orders`, {
    method: "POST",
    body: data,
  });
}