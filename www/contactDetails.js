const contactDetails = `
  <div class="detailWrapper">
    <h1 class="contactInfo">Kontaktinformation</h1>
    <div class="user">
     <div class="contactName">
      <p class="name"></p>  
      <button class="edit" id="edit">Redigera kontakt</button>
      </div>
      <div class="history">
       <h3 class="historyTitle">Historik</h3>
       <div class="historyDiv">
       
       </div>
      </div>
    </div>
    <button class="back">Gå tillbaka</button>
  </div>
`
let contacts = JSON.parse(localStorage.getItem("contacts"))
