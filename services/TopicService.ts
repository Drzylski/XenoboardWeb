import HttpMethod from "../utils/HttpMethod";
import { useAxiosRequest }  from "../composables/AxiosRequest";
import { useFetchRequest } from "../composables/FetchRequest";

export const useTopicService = () => {

  const urls = {
    //GET
    //POST
    UploadTopicFiles: 'Topics/UploadTopicFiles',
    //PUT
    updateTopicLikes: 'Topics/UpdateTopicLikes',
    updateTopic: 'Topics/UpdateTopic'
    //DELETE
  };

  const serviceList = {
    //GET
    //POST
    UploadTopicFiles(topicId:string, fileUploadListDto:object){
      return useAxiosRequest(HttpMethod().POSTFORM, urls.UploadTopicFiles+'/'+topicId, fileUploadListDto);
    },
    UploadTopicFilesFetch(topicId:string, fileUploadListDto:object){
      return useFetchRequest(HttpMethod().POST, urls.UploadTopicFiles+'/'+topicId, fileUploadListDto);
    },
    //PUT
    UpdateTopicLikes(topicId:string, topicLikeDto:object){
      return useAxiosRequest(HttpMethod().PUT, urls.updateTopicLikes+'/'+topicId, topicLikeDto);
    },
    UpdateTopic(topicId:string, newTopicDto: object){
      return useAxiosRequest(HttpMethod().PUT, urls.updateTopic+'/'+topicId, newTopicDto);
    },
    UpdateTopicFetch(topicId:string, newTopicDto: object){
      return useFetchRequest(HttpMethod().PUT, urls.updateTopic+'/'+topicId, newTopicDto);
    }
    //DELETE
  }

  return serviceList;
}
