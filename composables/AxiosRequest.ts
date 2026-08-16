import axios, { type AxiosInstance } from 'axios';
import { useMyAxiosStore } from '../store/axios';
import HttpMethod from '../utils/HttpMethod';
import { ref } from 'vue';

export const useAxiosRequest = (requestMethod:string, requestUrl:string, requestData:object | string) => {

  const axiosInstance = useMyAxiosStore();
  
  const token = ref<string>();

  //Get auth bearer token if it exists
  //token.value = useGetAuthToken(); //TODO

  //Add interceptor for requests
  axiosInstance.interceptors.request.use(
    (config) => {
      //Modify request config before sending the request
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      //Handle request error
      return Promise.reject(error)
    },
  );


  //Add interceptor for response
  axiosInstance.interceptors.response.use(
    (response) => {
      //Handle successful response
      return response
    },
    (error) => {
      //Handle response error
      // if (error.response && error.response.status === 401) {
      //   useAuthStore().logout()
      // }
      return Promise.reject(error)
    },
  );

  //return instance;

  //Add params or data
  if(requestMethod == 'get') axiosInstance.defaults.params = requestData
  else axiosInstance.defaults.data = requestData
  axiosInstance.defaults.method = requestMethod;
  axiosInstance.defaults.url = requestUrl;

  //Set method
  let method: AxiosResponse;
  let formData = new FormData();


  if(requestMethod == 'get') method = axiosInstance.get(requestUrl)
  else if(requestMethod == 'post') method = axiosInstance.post(requestUrl, requestData)
  else if(requestMethod == 'put') method = axiosInstance.put(requestUrl, requestData)
  else if(requestMethod == 'postform') method = axiosInstance.postForm(requestUrl, requestData)
  else if(requestMethod == 'putform') method = axiosInstance.putForm(requestUrl, requestData)
  else if(requestMethod == 'delete') method = axiosInstance.delete(requestUrl)

   return new Promise((resolve, reject) => {
    method
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        let message;
            //TODO: Implement some real Middleware, this is temporary
            try {
              if (error.response && error.response.data) {
                message = error.response.status + ': ' + error.response.data.message;
                console.log(message);
              } else if (error.response && error.response.status === 403) {
                message = '403: Insufficient Privileges';
                console.log(message);
              }else if (error.response && error.response.status === 404) {
                message = '404: Not found';
                console.log(message);
              } else if (error.response && error.response.status === 401) {
                message = '401: User is not authenticated';
                console.log(message);
              }
              else {
                message = error.response.status+': Error - '+error.response.statusText;
                console.log(message);
              }
            } catch (e) {
              console.log(''+error);
            }
        reject(error);
      });
  });

  // return new Promise((resolve, reject) => {
  //   axios({
  //     method: requestMethod,
  //     url: requestUrl,
  //     data: requestMethod !== HttpMethod.arguments.GET ? requestData : null,
  //     params: requestMethod == HttpMethod.arguments.GET ? requestData : null
  //   })
  //     .then((response) => {
  //       resolve(response);
  //     })
  //     .catch((error) => {
  //       reject(error);
  //     });
  // });

}
