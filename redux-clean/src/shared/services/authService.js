import { useState } from 'react';

export default function useAuthService() {
  const [isLoading, setIsLoading] = useState(false);

  function signIn(email, password) {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsLoading(false);
        if (email === 'admin@admin.com' && password === 'admin') {
          return resolve({
            id: '62fufrCSpAV9brZWZdOVXPupS8n2',
            name: 'Kylo Ren',
            photoUrl: 'https://vignette.wikia.nocookie.net/fortnite/images/b/b3/Kylo_Ren_-_Outfit_-_Fortnite.png/revision/latest?cb=20191222034729'
          })
        } else {
          return reject({
            message: 'Failed to login. Please try again.'
          })
        }
      }, 2000)
    });
  }

  function sendResetPasswordEmail(email) {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsLoading(false);
        return resolve({
          statusCode: 200
        });
      }, 2000)
    });
  }

  return { isLoading, signIn, sendResetPasswordEmail };
}
