let titles = Array.from(document.querySelectorAll('.tab-titles li'));
console.log(titles);

for(let title of titles) {
  title.addEventListener('click', action)
}

function action(){
  //on recupère le num du tire actif
  let num = this.getAttribute('data-tabtitle');

  //on masque la div actif contenant la classe active
  document.querySelector('#tabs > div.active').classList.remove('active');

  //on réactive la div voulu
  document.querySelector('#tab'+ num).classList.add('active');

  //on masque le li actif contenant la classe active
  document.querySelector('#tabs .tab-titles li.active').classList.remove('active');

  this.classList.add('active')
}