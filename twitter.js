let twittBtn = document.getElementById('submitBtn');
twittBtn.addEventListener('click', submitTweet, true);

function submitTweet(){
  let tweet = getFormData();  
  createListItem( insertNewMessage(tweet.message) , insertAuthorName(tweet.name) );
  clearForm();
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
  newLi.classList.add('tweet-list-item');
  newLi.appendChild(message);
  newLi.appendChild(name);
  list.appendChild(newLi);
}

function insertNewMessage(content){
  let newMessage = document.createElement('q');
  newMessage.innerHTML = content.replace(/\n/g,'<br>');

  return newMessage;
}

function insertAuthorName(name){
  let newName = document.createElement('footer');
  newName.textContent ="by " + name;

  return newName;
}

let messageInput = document.getElementById('message');
messageInput.addEventListener('keyup',watchMessage, true);

function watchMessage(){
  updateCounter();
  toggleButton();
}

function updateCounter(){
  let maxChar = 140;
  let counter = document.getElementById('counter');
  let message = document.getElementById('message').value;
  let remaining =  maxChar - message.length;

  counter.innerHTML = remaining;

  if(remaining>=20){
    counter.style.color = '#4169E1'
  } else if(remaining>=10){
    counter.style.color = '#FFFF00'
  } else {
    counter.style.color = '#FF0000'
  }

}

function toggleButton(){
  let button = document.getElementById('submitBtn');
  let message = document.getElementById('message').value;

  if (message.length = 0) {
    button.disabled = true;
  } else if(message.length>0 && message.length<=140){
    button.disabled = false;
  } else if (message.length>140) {
    button.disabled = true;
  }
}

function clearForm() {
  // seleciona o elemento <form></form>
  const form = document.getElementById('twitter-form');
  // limpa formulario
  form.reset();
}





