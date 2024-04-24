import { uploadPhoto, createUser } from './utils';

/* eslint-disable no-unused-vars */
export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then(
    (val) => {
      console.log(val[0].body, val[1].firstName, val[1].lastName);
    },
    () => console.log('Signup system offline'),
  );
}
