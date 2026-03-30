export default (category:String) => {

  const catMap = new Map();

  catMap.set('Discussions','A forum for general discussions about video game related topics. ');
  catMap.set('Bazaar','A place to sell all of your unwanted treasure for maximum profits');
  catMap.set('Events','A place to post about community events and other such topics. Such as contests, etc');
  catMap.set('News','News that you can use about our site and about important events in the gaming world');
  catMap.set('Top Secret','A forum for discussion of Top Secret topics. Aliens, UFOs, Classified information, Government Secrets, Etc. The Truth is out there. Far out.');

  var description = catMap.get(category);

  //Check if category exists
  if (description == null) {
    throw createError({ status: 404, statusText: 'Page Not Found', message: 'Forum does not exist', data: {} })
  }
  
  return description;
}

