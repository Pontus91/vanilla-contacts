let store = window.localStorage;

try {
  store = JSON.parse(localStorage.store);
 }
 catch(e){
  store = {};
 }
  
 store.save = function(){
   localStorage.store = JSON.stringify(this);
 };
 