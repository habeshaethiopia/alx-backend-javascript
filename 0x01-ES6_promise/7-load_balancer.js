import { promises } from 'dns';
import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';
export default function loadBalancer (chinaDownload, USDownload) {
  return promises((resolve) => {
    resolve(signUpUser(chinaDownload, USDownload));
  });
}