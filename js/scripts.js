// Déclaration des variables
const bouton = document.getElementById('submit')
const inputPrenom = document.getElementById('prenom')
const popup = document.getElementById('myPopup')
const popupTitle = document.getElementById('popupTitle')
const close = document.getElementById('closePopup')

// Ouverture de la popup
bouton.addEventListener('click', () => {
  // On affiche la popup
  popupTitle.innerHTML = "J'espere que tu vas bien, " + inputPrenom.value
  popup.style = 'display: flex'
  alert("https://soundcloud.com/user-910533388")
})

// Fermeture de la popup
close.addEventListener('click', () => {
  // On masque la popup
  popup.removeAttribute('style')
})
