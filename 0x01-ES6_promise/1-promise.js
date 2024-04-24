/* eslint-disable no-unused-vars */
function getFullResponseFromAPI(success) {
  return new Promise((resolved, rejected) => {
    if (success) resolved({ status: 200, body: 'success' });
    else rejected(Error('The fake API is not working currently'));
  });
}
