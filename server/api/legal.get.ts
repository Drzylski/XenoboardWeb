export default defineEventHandler(event => {

  //Fetches the text for the legal page.

  try{
    setResponseStatus(event, 200);

    const legalContent = {
      title: 'Legal Text',
      content: 'The Xenoboard site is for educational purposes only. We are not responsible for any damages '+ 
      'and offer no warranties of any kind. All images, videos, names that are not our original works are property '+
      'of their respective owners and we make no claim to own this content. said content is used as fair use. If issues '+ 
      'arise from us hosting such content, please contact us. The Xenoboard site and all original work is property of Damian Zylski '+
      'and reproduction is prohibited.'
    }

    return legalContent;
  }
  catch(error){
    setResponseStatus(event, 404, 'Error fetching legal page content');
    console.error('Error fetching legal page content:', error);
    throw createError({
      status: 404,
      statusText: 'Error fetching legal page content',
    })
  }
  
})
