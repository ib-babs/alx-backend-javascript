import { uploadPhoto, createUser } from './utils';

/* eslint-disable no-unused-vars */
async function asyncUploadUser() {
  return {
    photo: (await uploadPhoto()) || {},
    user: (await createUser()) || {},
  };
}
