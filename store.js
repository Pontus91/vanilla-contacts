let myStore;

try {
  myStore = JSON.parse(localStorage.myStore)
}

catch(e){
  store = [{}]
}

store.saveContact = function(){
  localStorage.myStore = JSON.stringify(this);
}

