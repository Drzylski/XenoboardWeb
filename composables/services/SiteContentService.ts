import HttpMethod from "../../utils/HttpMethod";
import { useAxiosRequest } from "../AxiosRequest"

export const useSiteContentService = () => {

  const urls = {
    //GET
    getSiteContentById: 'SiteContent/GetSiteContent'
    //POST
    //PUT
    //DELETE
  };

  const serviceList = {
    //GET
    getSiteContentById(contentId:string, userId:string){
      return useAxiosRequest(HttpMethod().GET, urls.getSiteContentById+'/'+contentId, {contentId, userId});
    }
    //POST
    //PUT
    //DELETE
  }

  return serviceList;
}
