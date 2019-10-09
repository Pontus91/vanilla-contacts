class Contact {

  constructor(name, phoneNumbers, contactMail) {
    this.name = name;
    this.phoneNumbers = phoneNumbers;
    this.contactMail = contactMail;
  }

}

let contactNumbers = [];
let contactEmails = [];

window.onload = function () {
 displayUsers()
}

function displayUsers(){
  let allContacts = JSON.parse(localStorage.getItem("contacts"));
  if (allContacts == undefined || null) {
  } else if (allContacts.length > 0) {
    allContacts.forEach(element => {
      let li = document.createElement('div');
      li.setAttribute('class', 'li')
      li.innerHTML = element.name + ' ' + element.phoneNumbers + ' ' + element.contactMail;
      document.querySelector('.ul').appendChild(li)
    });
  }
}

window.addEventListener('click', e => {

  /**
   * An event to get information out of the input fields
   * That we will use to create our contact as an instance of a class
   * which is an object. And send this to our localStorage and also display the contact right away.
   */
  if (e.target.closest('.Button')) {
    let nameValue = document.querySelector('#nameValue').value;
    let emailValue = document.querySelector('#emailValue').value;
    let phoneValue = document.querySelector('#phoneValue').value;
    contactNumbers.push(phoneValue);
    contactEmails.push(emailValue);
    contactNumbers = contactNumbers.filter(v => v != '');
    contactEmails = contactEmails.filter(v => v != '');
    let userNumbers = [...contactNumbers]
    let userEmails = [...contactEmails]
    store.contact = new Contact(nameValue, userNumbers, userEmails)
    let contacts;
    if (localStorage.getItem('contacts') === null) {
      contacts = [];
    } else {
      contacts = JSON.parse(localStorage.getItem('contacts'))
    }
    contacts = [...contacts, store.contact];
    localStorage.setItem('contacts', JSON.stringify(contacts));
    let latestUser = contacts.slice(-1)[0];
    let targetWrapper = document.querySelector('.ul');
    let newUser = document.createElement('div');
    targetWrapper.appendChild(newUser);
    newUser.setAttribute('class', 'li');
    newUser.innerHTML = latestUser.name + ' ' + latestUser.phoneNumbers + ' ' + latestUser.contactMail;
    document.querySelector('#nameValue').value = '';
    document.querySelector('#emailValue').value = '';
    document.querySelector('#phoneValue').value = '';
    document.querySelector('#nameValue').select();
    contactNumbers.length = 0;
    contactEmails.length = 0;
   
  }

  /**
   * Function if you want to add multiple phonenumbers to the contact object.
   * Also adding so the number written is the innerHTML of the element.
   */
  if (e.target.closest('.add')) {
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
  if (e.target.closest('.addEmail')) {
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
  if (e.target.closest('.li')) {
    onNavigate('/contact');
    let contactTarget = document.querySelector('.name');
    contactTarget.innerHTML = e.target.innerHTML;
  }
  if(e.target.closest('.back')){
    onNavigate('/');
    location.reload(true);
  }

  if(e.target.closest('.edit')){
    let myCurrentContacts = JSON.parse(localStorage.getItem("contacts"));
    myCurrentContacts.forEach(function (person) {
      let contact = person;
      let contactElement = document.querySelector('.name');
      if(contactElement.innerHTML === contact.name + ' ' + contact.phoneNumbers + ' ' + contact.contactMail){
        let nameInfo = document.createElement('p');
        let nameEdit = document.createElement('input');
        nameInfo.innerHTML = 'Redigera namn här';
        nameInfo.setAttribute('class', 'nameInfo')
        let phoneInfo = document.createElement('p');
        let phoneEdit = document.createElement('input');
        phoneInfo.innerHTML = 'Redigera telefonnummer här';
        phoneInfo.setAttribute('class', 'nameInfo');
        let emailInfo = document.createElement('p');
        let emailEdit = document.createElement('input');
        emailInfo.innerHTML = 'Redigera mailadresser här';
        emailInfo.setAttribute('class', 'nameInfo');
        let saveButton = document.createElement('Button');
        saveButton.setAttribute('class', 'saveButton');
        saveButton.innerHTML = 'Spara redigerad kontakt';
        let targetForElement = document.querySelector('.contactName')
        targetForElement.appendChild(nameInfo);
        targetForElement.appendChild(nameEdit);
        targetForElement.appendChild(phoneInfo);
        targetForElement.appendChild(phoneEdit);
        targetForElement.appendChild(emailInfo);
        targetForElement.appendChild(emailEdit);
        targetForElement.appendChild(saveButton);

        nameEdit.setAttribute('class', 'inputEdit');
        nameEdit.setAttribute('id', 'nameEdit')
        phoneEdit.setAttribute('class', 'inputEdit');
        phoneEdit.setAttribute('id', 'phoneEdit')
        emailEdit.setAttribute('class', 'inputEdit');
        emailEdit.setAttribute('id', 'emailEdit');

        console.log('YES');
        console.log(contact)


      }
    })
    

  }
})

