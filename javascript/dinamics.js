




const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


const popup = document.querySelector(".container__popup.review");

function close_popup_review(){
  popup.setAttribute("style","visibility:hidden; opacity: 0;");
}

function open_popup_review(){
  popup.setAttribute("style","visibility:visible; opacity:1;");
}



const bookerName = document.getElementById("Name");
const bookerTel = document.getElementById("Telephone");
const bookerEmail = document.getElementById("E-mail");
const bookingDate = document.getElementById("DataTime");
const bookerInfo = document.getElementById("Other");
const submit = document.getElementsByClassName('container__popup')[0];



// submit.addEventListener('submit',(e)=>{
//   e.preventDefault();

//   let ebody = "<p>Имя: </p>" + bookerName.value + "<br><p>Телефон: </p>" + bookerTel.value + "<br><p>Электронная Почта: </p>" + bookerEmail.value + "<br><p>Дата: </p>" + bookingDate.value + "<br><p>Пожелания: </p>" + bookerInfo.value + "<br>"

//   Email.send({
//     SecureToken : "051e6564-26dc-43ba-aa74-5ee645f0775d",
//     To : 'vinonetbar@gmail.com',
//     From : "vinonetbar@gmail.com",
//     Subject : "Бронь от " + bookerName.value,
//     Body : ebody
//   }).then(
//     close_popup()
//   )
// });



