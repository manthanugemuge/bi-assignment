var links = document.getElementsByClassName('links');

function loadPage(pn){
    $('.links').removeClass('selected');
    links[pn-1].classList.add('selected');
    if(pn==3) { $('#main').load('stopwatch.html');}
    if(pn==2) { $('#main').load('tipCalculator.html');}
    if(pn==1) { $('#main').load('simpleCalculator.html');}
    if(pn==4) $('#main').load('colorChange.html');
    if(pn==5) $('#main').load('randomCard.html', randomCardSetup);
    if(pn==6) { $('#main').load('recipeApp.html', recipeSetup);}
}

/*-----------------------------------------------------------------*/

