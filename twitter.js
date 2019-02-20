let twittBtn = document.getElementById('submitBtn');
twittBtn.addEventListener('click', submitTweet,true);

function submitTweet(){
  let tweet = getFormData();  
  createListItem( insertNewMessage(tweet.message) , insertAuthorName(tweet.name) );
}

function getFormData(){
  let form = document.getElementById('twitter-form');
  let formData={
    message: (form.elements['message'].value),
    name: (form.elements['name'].value)
  }
  return formData;
}

function createListItem(message,name){
  const list = document.getElementById('messageList');
  const newLi = document.createElement('li'); 
  newLi.appendChild(message);
  newLi.appendChild(name);
  list.appendChild(newLi);
}

function insertNewMessage(content){
  let newMessage = document.createElement('q');
  newMessage.textContent = content;

  return newMessage;
}

function insertAuthorName(name){
  let newName = document.createElement('footer');
  newName.textContent ="by " + name;

  return newName;
}





