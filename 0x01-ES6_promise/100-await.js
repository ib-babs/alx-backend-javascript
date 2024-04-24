import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};
  try {
    res = {
      photo: (await uploadPhoto()),
      user: (await createUser()),
    };
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;
}
