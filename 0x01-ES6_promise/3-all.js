import { uplodePhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uplodePhoto(), createUser()]).then((values) => {
    console.log(`value1: ${values[0].body} value2: ${values[1].firstName} ${values[1].lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
