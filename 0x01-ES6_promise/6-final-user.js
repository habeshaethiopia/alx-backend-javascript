import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([uploadPhoto(filename), signUpUser(firstName, lastName)])
    .then((value) => {
      value.map((val) => ({
        status: val.status,
        value: val.status === 'fulfilled' ? val.value : String(val.reason),
      }));
    });
}
