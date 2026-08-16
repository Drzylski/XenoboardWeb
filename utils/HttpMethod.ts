export default () => {

  enum HttpMethods {
    GET = 'get',
    POST = 'post',
    POSTFORM = 'postform', //For files
    PUT = 'put',
    PUTFORM = 'putform', //For files
    DELETE = 'delete',
  }

  return HttpMethods;
}
