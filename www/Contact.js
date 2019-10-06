class Contact {

  constructor(name, phoneNumbers, contactMail) {
    this.name = name;
    this.phoneNumbers = phoneNumbers;
    this.contactMail = contactMail;
  }

}

let contactNumbers = [];
let contactEmails = [];

window.addEventListener('click', e => {

  /**
   * An event to get information out of the input fields
   * That we will use to create our contact as an instance of a class
   * which is an object.
   */
  if (e.target.closest('.Button')) {
    let nameValue = document.querySelector('#nameValue').value;
    let emailValue = document.querySelector('#emailValue').value;
    let phoneValue = document.querySelector('#phoneValue').value;
    contactNumbers.push(phoneValue);
    contactEmails.push(emailValue);
    contactNumbers = contactNumbers.filter(v=>v!='');
    contactEmails = contactEmails.filter(v=>v!='');
    let myContact = new Contact(nameValue, contactNumbers, contactEmails);
    console.log(myContact);
  }

  /**
   * Function if you want to add multiple phonenumbers to the contact object.
   * Also adding so the number written is the innerHTML of the element.
   */
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

 /**
  * Function if you want to add multiple email adresses to the contact object.
  */
 if (e.target.closest('.addEmail')){
  let emailValue = document.querySelector('#emailValue').value;
  contactEmails.push(emailValue);
  let emailElement = document.createElement('div');
  emailElement.innerHTML = emailValue;
  document.querySelector('.emailText').appendChild(emailElement);
  emailElement.setAttribute('class', 'adressText');
  document.querySelector('#emailValue').value = '';
  document.querySelector('#emailValue').select();
 }

 /** 
  * Test function
  */
 if (e.target.closest('.txx')){
   onNavigate('/contact'); return false;
 }
})

