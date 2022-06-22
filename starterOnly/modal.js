function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Vérification et validation du formulaire
function validationFormulaire(){
  if (validationRadioBox()){
    alert('Merci');
    document.getElementById("formulaire").submit();
    //validé l'envoi et affiché message d'envoi reussi.
  }
  else {
    alert('Vous devez choisir une option.');
    //Ne pas validé l'envoi
  }
  
}
function validationRadioBox(){
  if (document.getElementById("location1").checked == true){
    return true;
  }
  else if (document.getElementById("location2").checked == true){
    return true;
  }
  else if (document.getElementById("location3").checked == true){
    return true;
  }
  else if (document.getElementById("location4").checked == true){
    return true;
  }
  else if (document.getElementById("location5").checked == true){
    return true;
  }
  else if (document.getElementById("location6").checked == true){
    return true;
  }
  else{
    return false;
  }
}