export { };

declare global {

  type AllType = [boolean, string, number, object]; 

  interface ModalData {
    topicData: {
        body: null,
    },
    replyData: {
        body: null,
    },
    registerData: {
        firstName: null,
    },
  }

  interface IBreadCrumb{
    path: string;
    title: string;
  }

  const enum UserType {
    User,
    Admin,
  }

  
}