/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return new Promise((resolved, rejected) => {
    resolved(promise);
  })
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
