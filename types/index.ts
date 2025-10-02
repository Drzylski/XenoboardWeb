export { };

declare global {

  type AllType = [boolean, string, number]; 

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

  const enum UserType {
    User,
    Admin,
  }

  
}