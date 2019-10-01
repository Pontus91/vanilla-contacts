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
heading.innerHTML = 'Mina Kontakter';
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

/**
 * Creating a Button
 */
const Button = document.createElement('Button');
Button.setAttribute('class', 'Button');
Button.innerHTML = 'Skapa kontakt';

/**
 * Attributes to form, input and labels
 */
form.setAttribute('class', 'form');
nameDiv.setAttribute('class', 'nameDiv');
nameLabel.setAttribute('class', 'nameLabel');
nameInput.setAttribute('class', 'nameInput');
phoneDiv.setAttribute('class', 'nameDiv');
phoneLabel.setAttribute('class', 'nameLabel');
phoneInput.setAttribute('class', 'nameInput');
emailDiv.setAttribute('class', 'nameDiv');
emailLabel.setAttribute('class', 'nameLabel');
emailInput.setAttribute('class', 'nameInput');

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
InputWrapper.appendChild(nameDiv);
InputWrapper.appendChild(phoneDiv);
InputWrapper.appendChild(emailDiv);
InputWrapper.appendChild(Button);
nameDiv.appendChild(nameLabel);
nameDiv.appendChild(nameInput);
phoneDiv.appendChild(phoneLabel);
phoneDiv.appendChild(phoneInput);
emailDiv.appendChild(emailLabel);
emailDiv.appendChild(emailInput);
body.append(container);


