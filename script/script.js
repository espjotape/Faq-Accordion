const accordion = document.getElementsByClassName('box');

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}

/*
function clickAccordion(t) {
  const pai = document.getElementByClassName('box')[t].parentElement;
  const img = document.getElementByClassName('icon')[t];
  const conteudo = pai.lastElementChild.classList.contains('on')

  if (conteudo == true) {
    pai.lastElementChild.className = "on";
  }else {
    img.lastElementChild.className ="on"
  }
}
*/