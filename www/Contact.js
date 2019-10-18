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

/**
 * Once you load the site it automatically runs displayUsers() function.
 * The purpose of this is to display your current contacts.
 */
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

/**
 * All my functions using delegerad eventhantering.
 */
window.addEventListener('click', e => {

  /**
   * An event to get information out of the input fields
   * That we will use to create our contact as an instance of a class
   * which is an object. And send this to our localStorage and also display the contact right away.
   */
  if (e.target.closest('.Button')) {

    let nameValue = document.querySelector('#nameValue').value;
    if (!nameValue) {
      alert('Din kontakt måste ha ett namn!');
    } else {
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
            historyText.innerHTML = target.name + ' ' + target.numbers + ' ' + target.emails;
            let restore = document.createElement('button');
            restore.setAttribute('class', 'restore');
            restore.innerHTML = "Återställ";
            historyText.appendChild(restore);
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
   * Add additioanl number to your contact.
   */
  if (e.target.closest('#addNumber')) {
    let newNumberValue = document.querySelector('.addNumberInput').value;
    let targetContactForNewNumber = JSON.parse(localStorage.getItem("contacts"));
    targetContactForNewNumber.forEach(function (myTarget) {
      let myContact = myTarget;
      let contactElement = document.querySelector('.name');
      if (contactElement.innerHTML === myContact.name + ' ' + myContact.phoneNumbers + ' ' + myContact.contactMail) {
        if (newNumberValue <= 0) {
          let numberInput = document.querySelector('.addNumberInput');
          numberInput.setAttribute('placeholder', 'Nummer skrivs här');
        } else {
          myContact.phoneNumbers.push(newNumberValue);
          localStorage.setItem('contacts', JSON.stringify(targetContactForNewNumber));
          let newTarget = document.querySelector('.name');
          let newHTMLforContact = (JSON.stringify(myContact));
          let newContactInfo = JSON.parse(newHTMLforContact);
          newTarget.innerHTML = newContactInfo.name + ' ' + newContactInfo.phoneNumbers + ' ' + newContactInfo.contactMail;
        }
      }
    })
  }

  /**
   * Add additional email to your contact;
   */
  if (e.target.closest('#addNewEmail')) {
    let newEmailValue = document.querySelector('.addEmailInput').value;
    let targetContactForNewNumber = JSON.parse(localStorage.getItem("contacts"));
    targetContactForNewNumber.forEach(function (myTarget) {
      let myContact = myTarget;
      let contactElement = document.querySelector('.name');
      if (contactElement.innerHTML === myContact.name + ' ' + myContact.phoneNumbers + ' ' + myContact.contactMail) {
        if (newEmailValue <= 0) {
          let numberInput = document.querySelector('.addEmailInput');
          numberInput.setAttribute('placeholder', 'Email skrivs här');
        } else {
          myContact.contactMail.push(newEmailValue);
          localStorage.setItem('contacts', JSON.stringify(targetContactForNewNumber));
          let newTarget = document.querySelector('.name');
          let newHTMLforContact = (JSON.stringify(myContact));
          let newContactInfo = JSON.parse(newHTMLforContact);
          newTarget.innerHTML = newContactInfo.name + ' ' + newContactInfo.phoneNumbers + ' ' + newContactInfo.contactMail;
        }
      }
    })
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
          let contactsState = JSON.parse(localStorage.getItem("contacts"));
          contactsState.forEach(function (contactWithHistory) {
            if (contactWithHistory.name + ' ' + contactWithHistory.phoneNumbers + ' ' + contactWithHistory.contactMail === contactElement.innerHTML) {
              let latestHistory = { name: '', numbers: [], emails: [] }
              latestHistory.name = contactWithHistory.name;
              latestHistory.numbers.push(contactWithHistory.phoneNumbers);
              latestHistory.emails.push(contactWithHistory.contactMail);
              contact.history.push(latestHistory);
              let historyText = document.createElement('p');
              historyText.setAttribute('class', 'historyText');
              let historyElement = document.querySelector('.historyDiv');
              let targetLatestChange = contact.history.slice(-1)[0];
              historyText.innerHTML = targetLatestChange.name + ' ' + targetLatestChange.numbers + ' ' + targetLatestChange.emails;
              let restore = document.createElement('button');
              restore.setAttribute('class', 'restore');
              restore.innerHTML = "Återställ";
              historyText.appendChild(restore);
              historyElement.appendChild(historyText);
            }
          })

        } else if (contact.history.length === 0) {
          let checkContacts = JSON.parse(localStorage.getItem("contacts"));
          checkContacts.forEach(function (beforeEdit) {
            if (beforeEdit.name + ' ' + beforeEdit.phoneNumbers + ' ' + beforeEdit.contactMail === contactElement.innerHTML) {
              let newHistory = { name: '', numbers: [], emails: [] }
              newHistory.name = beforeEdit.name;
              newHistory.numbers.push(beforeEdit.phoneNumbers);
              newHistory.emails.push(beforeEdit.contactMail);
              contact.history.push(newHistory);
              let historyText = document.createElement('p');
              historyText.setAttribute('class', 'historyText')
              let historyElement = document.querySelector('.historyDiv');
              historyText.innerHTML = contact.history[0].name + ' ' + contact.history[0].numbers + ' ' + contact.history[0].emails;
              let restore = document.createElement('button');
              restore.setAttribute('class', 'restore');
              restore.innerHTML = "Återställ";
              historyText.appendChild(restore);
              historyElement.appendChild(historyText);
            }
          })
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
   * Reset contact
   */
  if (e.target.closest('.restore')) {
    let resetContact = JSON.parse(localStorage.getItem("contacts"))
    resetContact.forEach(function (reseted) {
      let target = e.target.parentNode.innerHTML.slice(0, -42);
      let contactHistory = reseted.history;
      contactHistory.forEach(function (history) {
        if (history.name + ' ' + history.numbers + ' ' + history.emails === target) {
          reseted.name = history.name;
          reseted.phoneNumbers = history.numbers;
          reseted.contactMail = history.emails;
          let userInfo = document.querySelector('.name');
          userInfo.innerHTML = reseted.name + ' ' + reseted.phoneNumbers + ' ' + reseted.contactMail;
          let historyElement = e.target.parentNode;
          if (history.name + ' ' + history.numbers + ' ' + history.emails === target) {
            let removal = contactHistory.indexOf(history);
            contactHistory.splice(removal, 1);
          }
          historyElement.remove();
          localStorage.setItem('contacts', JSON.stringify(resetContact));
        }
      })
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

