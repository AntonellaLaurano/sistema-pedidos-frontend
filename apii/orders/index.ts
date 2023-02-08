import { Order } from "interfaces/orders";

export const  postOrder = async (data: any) => {
  return  await fetch(`${process.env.NEXT_PUBLIC_API}/v1/orders`, {
    method: "POST",
    // headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true'},
    body: data,
  });
};

export const  getOneOrder = async (data: any) => {
  return  await fetch(`${process.env.NEXT_PUBLIC_API}/v1/orders/get`, {
    method: "POST",
    // headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true'},
    body: data,
  });
}

export const getAllOrders = async () => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/orders`, {
    method: "GET",
  });
  const data = await response.json();
  if (data) return data as Order[];
  return null
};