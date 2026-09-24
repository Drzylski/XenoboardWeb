
import { useFetch } from "nuxt/app";
import { useCustomUseFetch } from "./CustomUseFetch";
import { ref } from "vue";
import HttpMethod from "../utils/HttpMethod";

export const useFetchRequest =  (requestMethod:string, requestUrl:string, requestData:object) => {

  const BASE_URL = ref<string>('http://localhost:8080/'); 
  let httpMethod = HttpMethod().GET;

  //UseFetch doesn't like the enum HTTP values from outside this composable, need to set it here.
  if(requestMethod === 'get') httpMethod = HttpMethod().GET;
  else if(requestMethod === 'post') httpMethod = HttpMethod().POST;
  else if(requestMethod === 'put') httpMethod = HttpMethod().PUT;
  else if(requestMethod === 'delete') httpMethod = HttpMethod().DELETE;

  //console.log(requestData);

  const fetchRequest = useFetch(requestUrl,{
    baseURL: BASE_URL.value,
    method: httpMethod,
    server: true,
    params: requestMethod === 'get' ? requestData : undefined,
    body: requestMethod !== 'get' ? requestData : undefined,
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
    //console.log(response);
  },
  async onResponseError ({ response }) {
    let message;
    if (response.status === 401) {
      //await navigateTo('/login')
      message = '401: User is not authenticated';
      console.log(message);
      throw createError({
        statusCode: 401,
        statusMessage: 'User is not authenticated'
      });
    }
    else if (response.status === 403) {
      //await navigateTo('/login')
       message = '403: Insufficient Privileges';
       console.log(message);
       throw createError({
        statusCode: 403,
        statusMessage: 'Insufficient Privileges'
      });
    }
    else if (response.status === 404) {
      //await navigateTo('/login')
      message = '404: Not found';
      console.log(message);
      throw createError({
        statusCode: 404,
        statusMessage: 'Not found'
      });
    }
    else  {
      //await navigateTo('/login')
       message = response.status+': Error - '+response.statusText;
       console.log(message);
       throw createError({
        statusCode: response.status,
        statusMessage: response.statusText
      });
    }
  },
  },
)

  return fetchRequest; //
}
