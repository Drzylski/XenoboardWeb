export default defineEventHandler(event => {

  //Fetches the text for the privacy page.

  async function fetchPrivacyContent() {
    try{
    setResponseStatus(event, 200);


    const response = await $fetch.raw("http://localhost:8080/SiteContent/GetSiteContent/2?contentId=2&userId=666",{
      method: 'GET',
    });


    return response._data;
  }
    catch(error){
      setResponseStatus(event, 404, 'Error fetching privacy page content');
      console.error('Error fetching privacy page content:', error);
      throw createError({
        status: 404,
        statusText: 'Error fetching privacy page content',
      })
    }
  }

  return fetchPrivacyContent();

  
  
})



