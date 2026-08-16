export const useHttpRequest = (service: Promise<unknown>) => {

  var responseObject = {
    response: {},
    error: {},
    success: false,
  };
  
   return  new Promise((resolve, reject) => {
        service
          .then((response) => {
            if (response) {
              return response;
            }
          })
          .catch((error) => {
            let message;
            try {
              if (error.response.data) {
                message = error.response.data.status + ' : ' + error.response.data.error;

                console.log(message);

              } else if (error.response && error.response.status === 403) {
                message = '403: Insufficient Privileges';

                console.log(message);

              } else if (error.response.status === 401) {
                message = '401: User is not authenticated';

                console.log(message);
              }

            } catch (e) {
              console.log(error);
            }
            responseObject.success = false;
            responseObject.error = error;
            //return responseObject;
          });
      });

      //return responseObject;

}
