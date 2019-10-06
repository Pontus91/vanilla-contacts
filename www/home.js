/**
 * Adding html through JavaScript using a variable.
 * This so my SPA router i built shows correct elements on correct url.
 */
const home = `
  <div class="homeWrapper">
    <div class="container">
      <div class="wrapper">
        <h1 class="title">Min Kontaktlista</h1>
        <div class="InputWrapper">
          <div class="nameDiv">
            <label class="nameLabel">Namn</label>
            <input class="nameInput" id="nameValue">
          </div>
          <div class="phoneDiv">
            <label class="phoneLabel">Nummer</label>
            <div class="holder">
              <input class="phoneInput" id="phoneValue" list="phoneNumbers" type="text">
              <button class="add">Lägg till fler nummer</button>
            </div>
          <div class="phoneText"></div>
          <div class="emailDiv">
            <label class="emailLabel">E-mail</label>
            <div class="emailHolder">
              <input class="emailInput" id="emailValue">
              <button class="addEmail">Lägg till fler mailadresser</button>
            </div>
          </div>
          <div class="emailText"></div>
          <button class="Button">Skapa kontakt</button>
          </div>
          <div class="contacts">
            <ul class="ul"></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
`