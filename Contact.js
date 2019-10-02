class Contact {

  constructor(name, phoneNumbers, contactMail) {
    this.name = name;
    this.phoneNumbers = phoneNumbers;
    this.contactMail = contactMail;
  }

}

window.addEventListener('click', e => {

  if (e.target.closest('.Button')) {
    let nameValue = document.querySelector('#nameValue').value;
    let emailValue = document.querySelector('#emailValue').value;
    let phoneValue = document.querySelector('#phoneValue').value;
    contactNumbers.push(phoneValue);
    contactNumbers = contactNumbers.filter(v=>v!='');
    let myContact = new Contact(nameValue, contactNumbers, emailValue);
    console.log(myContact)
    
  }

  if (e.target.closest('.add')){
    let phoneValue = document.querySelector('#phoneValue').value;
    contactNumbers.push(phoneValue);
    let phoneElement = document.createElement('div');
    phoneElement.innerHTML = phoneValue;
    document.querySelector('.phoneText').appendChild(phoneElement);
    phoneElement.setAttribute('class', 'numberText');
    
    

    document.querySelector('#phoneValue').value = '';
    document.querySelector('#phoneValue').select();
  }
})

let contactNumbers = [];
