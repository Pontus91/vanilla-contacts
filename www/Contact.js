class Contact {

  constructor(name, phoneNumbers, contactMail, history) {
    this.name = name;
    this.phoneNumbers = phoneNumbers;
    this.contactMail = contactMail;
    this.history = [];
  }

}

let contactNumbers = [];
let contactEmails = [];
let history = [];

window.onload = function () {
  displayUsers()
}

function displayUsers() {
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
    store.contact = new Contact(nameValue, userNumbers, userEmails, history)
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
   * Navigate function to different route.
   * Using my onNavigate function from routes.js
   */
  if (e.target.closest('.li')) {
    onNavigate('/contact');
    let contactTarget = document.querySelector('.name');
    contactTarget.innerHTML = e.target.innerHTML;
    let targetContacts = JSON.parse(localStorage.getItem("contacts"));
    targetContacts.forEach(function (myTarget) {
      let myContact = myTarget;
      let contactElement = document.querySelector('.name');
      if (contactElement.innerHTML === myContact.name + ' ' + myContact.phoneNumbers + ' ' + myContact.contactMail) {
        let contactHistory = myContact.history;
        if (contactHistory.length > 0) {
          contactHistory.forEach(function (target) {
            let historyText = document.createElement('p');
            historyText.setAttribute('class', 'historyText')
            let historyElement = document.querySelector('.historyDiv');
            historyText.innerHTML = target;
            historyElement.appendChild(historyText);
          })
        }
      }
    })

  }
  if (e.target.closest('.back')) {
    onNavigate('/');
    location.reload(true);
  }

  /** 
   * Edit contact function and adds input element for the new value.
   */
  if (e.target.closest('.edit')) {
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
  }

  /**
   * Saving the user after edit with spread operators 
   * And also adding the history so the user for the application can see how the user was before the edit.
   */
  if (e.target.closest('.saveButton')) {
    let newName = document.querySelector('#nameEdit').value;
    let newPhones = document.querySelector('#phoneEdit').value;
    let newEmails = document.querySelector('#emailEdit').value;
    let myCurrentContacts = JSON.parse(localStorage.getItem("contacts"));
    myCurrentContacts.forEach(function (person) {
      let contact = person;
      let contactElement = document.querySelector('.name');
      if (contactElement.innerHTML === contact.name + ' ' + contact.phoneNumbers + ' ' + contact.contactMail) {
        if (newName === '') {
          contact.name = contact.name;
        } else {
          contact.name = newName;
        }
        if (newPhones === '') {
          contact.phoneNumbers = contact.phoneNumbers;
        } else {
          let newPhoneNumbers = [];
          newPhoneNumbers.push(newPhones);
          contact.phoneNumbers = [...newPhoneNumbers];
        }
        if (newEmails === '') {
          contact.contactMail = contact.contactMail;
        } else {
          let newEmailAdresses = [];
          newEmailAdresses.push(newEmails);
          contact.contactMail = [...newEmailAdresses];
        }

        if (contact.history.length > 0) {
          let newHistory = [...contact.history, contactElement.innerHTML]
          contact.history = newHistory;
          let historyText = document.createElement('p');
          historyText.setAttribute('class', 'historyText')
          let historyElement = document.querySelector('.historyDiv');
          let latestHistory = contact.history.slice(-1)[0];
          historyText.innerHTML = latestHistory;
          historyElement.appendChild(historyText);


        } else if (contact.history.length === 0) {
          contact.history.push(contactElement.innerHTML);
          let historyText = document.createElement('p');
          historyText.setAttribute('class', 'historyText')
          let historyElement = document.querySelector('.historyDiv');
          historyText.innerHTML = contact.history;
          historyElement.appendChild(historyText);
        }

        localStorage.setItem('contacts', JSON.stringify(myCurrentContacts));
        let newTarget = document.querySelector('.name');
        let newHTMLforContact = (JSON.stringify(contact));
        let newContactInfo = JSON.parse(newHTMLforContact);
        newTarget.innerHTML = newContactInfo.name + ' ' + newContactInfo.phoneNumbers + ' ' + newContactInfo.contactMail;
      }
    })
  }

  /**
   * Function to remove an user
   */
  if (e.target.closest('#remove')) {
    let removeContact = JSON.parse(localStorage.getItem("contacts"));
    removeContact.forEach(function (target) {
      let targetContactElement = document.querySelector('.name');
      if (targetContactElement.innerHTML === target.name + ' ' + target.phoneNumbers + ' ' + target.contactMail) {
        const newContacts = removeContact.filter(removeContact => removeContact.name !== target.name);
        localStorage.setItem('contacts', JSON.stringify(newContacts))
        onNavigate('/');
        location.reload(true);
      }
    })
  }

})

