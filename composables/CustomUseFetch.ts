export const useCustomUseFetch = createUseFetch({

  baseURL: 'http://localhost:8080/',
  server: true,
  immediate: true,
  onRequest({ request, options }) {
    // const { session } = useUserSession();
    // if (session.value?.token) {
    //   options.headers.set('Authorization', `Bearer ${session.value.token}`)
    // }
  },
  onRequestError ({ request, options, error }) {
    //Handle the request errors
  },
  onResponse({ request, response, options }) {
    console.log(response);
    //return response;
  },
  async onResponseError ({ response }) {
    let message;
    if (response.status === 401) {
      //await navigateTo('/login')
      message = '401: User is not authenticated';
      console.log(message);
    }
    else if (response.status === 403) {
      //await navigateTo('/login')
       message = '403: Insufficient Privileges';
       console.log(message);
    }
    else if (response.status === 404) {
      //await navigateTo('/login')
      message = '404: Not found';
      console.log(message);
    }
    else  {
      //await navigateTo('/login')
       message = response.status+': Error - '+response.statusText;
       console.log(message);
    }
  },
})
