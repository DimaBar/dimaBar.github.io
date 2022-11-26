
const popb = document.getElementById('btn');
const tit = document.querySelector('.modal-title')
const cont = document.querySelector('.modal-body')
const email = document.getElementById("email");
const name = document.getElementById("name");



document.querySelector('form').onsubmit = block;

function block() {
   if((email.value == '')&&(name.value == '')||(email.value == '')||(name.value == '')){
      tit.innerHTML = "Не все поля заполнены";
      cont.innerHTML = "Пожалуйста, заполните обязательные поля"; 
   }
   else {
      tit.innerHTML = "Спасибо за ваш отзыв!";
      cont.innerHTML = "Ваши данные успешно отправлены.";
   }
   console.log(email.value);
   console.log(name.value);

$.ajax({
url: 'ajax.php',
type: 'POST',
cache: false,
data: {'email': email.value, 'name': name.value},
dataType: 'html',
beforeSend: function(){
$("#btn").popb("disabled", true);
},
success: function(){
tit.innerHTML = "Спасибо";
cont.innerHTML = "Ваши данные успешно отравлены";
modal.classList.remove('none');
email.value = '';
name.value = '';
$("#btn").popb("disabled", false);

}
});

   return false;
}