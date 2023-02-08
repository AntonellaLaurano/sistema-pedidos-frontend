export const  postOrder = async (data: any) => {
  //console.log(data, 'aqq')
  let response =  await fetch(`${process.env.NEXT_PUBLIC_API}/v1/orders`, {
    method: "POST",
    // headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true'},
    body: data,
  });
  const dataNew = await response.json();
  if (dataNew) return dataNew as any;
  return null
};

export const  getOneOrder = async (data: any) => {
  //console.log('one order')
  let response =  await fetch(`${process.env.NEXT_PUBLIC_API}/v1/orders/get`, {
    method: "POST",
    // headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true'},
    body: data,
  });
  const dataNew = await response.json();
  //console.log(dataNew)
  if (dataNew) return dataNew as any;
  return null
}