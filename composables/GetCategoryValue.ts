export const useGetCategoryValue = (category:String) => {

  //TODO: Should this just be a util? Is this value reactive? 

  const catMap = new Map();

  catMap.set('Discussions',{value: '0', text: 'Discussions'});
  catMap.set('Bazaar',{value: '1', text: 'Bazaar'});
  catMap.set('Events',{value: '2', text: 'Events'});
  catMap.set('News',{value: '3', text: 'News'});
  catMap.set('Top Secret',{value: '4', text: 'Top Secret'});
  
  return catMap.get(category);
}

