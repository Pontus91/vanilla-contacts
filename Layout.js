const body = document.querySelector('body');

/**
 * Creating a container div for the website,
 * and then adding more elements into it.
 */
const container = document.createElement('div');
container.setAttribute('class', 'container');

/**
 * Creating a wrapper div for our contactbook.
 */
const wrapper = document.createElement('div');
wrapper.setAttribute('class', 'wrapper');

/**
 * Creating a simple heading.
 */
const heading = document.createElement('h1');
heading.innerHTML = 'Min Kontaktlista';
heading.setAttribute('class', 'title');

/**
 * Creating a element for input fields that,
 * we will use to create contacts.
 */
const InputWrapper = document.createElement('div');
InputWrapper.setAttribute('class', 'InputWrapper');
const nameDiv = document.createElement('div');
const phoneDiv = document.createElement('div');
const emailDiv = document.createElement('div');

/** 
 * Creating multiple input and labels
 */
const form = document.createElement('form');
const nameLabel = document.createElement('label');
const phoneLabel = document.createElement('label');
const emailLabel = document.createElement('label');
const nameInput = document.createElement('input');
const phoneInput = document.createElement('input');
const emailInput = document.createElement('input');
const addNumber = document.createElement('button');
const holder = document.createElement('div');
const phoneText = document.createElement('div');

/**
 * Creating a Button
 */
const Button = document.createElement('Button');
Button.setAttribute('class', 'Button');
Button.innerHTML = 'Skapa kontakt';
addNumber.innerHTML = 'Lägg till fler nummer';

/**
 * Attributes to form, input and labels
 */
form.setAttribute('class', 'form');
nameDiv.setAttribute('class', 'nameDiv');
nameLabel.setAttribute('class', 'nameLabel');
nameInput.setAttribute('class', 'nameInput');
phoneDiv.setAttribute('class', 'phoneDiv');
phoneLabel.setAttribute('class', 'phoneLabel');
phoneInput.setAttribute('class', 'phoneInput');
emailDiv.setAttribute('class', 'emailDiv');
emailLabel.setAttribute('class', 'emailLabel');
emailInput.setAttribute('class', 'emailInput');

/**
 * Elements for the contacts
 */
const ContactWrapper = document.createElement('div');
ContactWrapper.setAttribute('class', 'contacts');
const ul = document.createElement('ul');
ul.setAttribute('class', 'ul');


/**
 * InnerHTML to all form, input and label elements.
 */
nameLabel.innerHTML = 'Namn';
phoneLabel.innerHTML = 'Nummer';
emailLabel.innerHTML = 'E-mail';

/**
 * Adding child elements to the elements.
 */
container.appendChild(wrapper);
wrapper.appendChild(heading);
wrapper.appendChild(InputWrapper);
wrapper.appendChild(ContactWrapper);
ContactWrapper.appendChild(ul);
InputWrapper.appendChild(nameDiv);
InputWrapper.appendChild(phoneDiv);
InputWrapper.appendChild(phoneText);
InputWrapper.appendChild(emailDiv);
InputWrapper.appendChild(Button);
nameDiv.appendChild(nameLabel);
nameDiv.appendChild(nameInput);
phoneDiv.appendChild(phoneLabel);
phoneDiv.appendChild(holder);
holder.appendChild(phoneInput);
holder.appendChild(addNumber);
emailDiv.appendChild(emailLabel);
emailDiv.appendChild(emailInput);
body.append(container);


/**
 * Attributes for the input and button.
 */
nameInput.setAttribute('id', 'nameValue');
phoneInput.setAttribute('id', 'phoneValue');
phoneInput.setAttribute('list', 'phoneNumbers');
emailInput.setAttribute('id', 'emailValue');
phoneInput.setAttribute('type', 'text');
addNumber.setAttribute('class', 'add');
holder.setAttribute('class', 'holder');
phoneText.setAttribute('class', 'phoneText');

