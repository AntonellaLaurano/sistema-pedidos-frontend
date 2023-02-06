export const  postOrder = async (data: any) => {
  return  await fetch(`${process.env.NEXT_PUBLIC_API}/v1/orders`, {
    method: "POST",
    body: data,
  });
};

export const  getOneOrder = async (data: any) => {
  return  await fetch(`${process.env.NEXT_PUBLIC_API}/v1/orders/get`, {
    method: "POST",
    headers: {'Access-Control-Allow-Origin': '*'},
    body: data,
  });
}