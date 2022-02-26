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

//Stopwatch Section

var counter=0, mcount=0, scount=0, watchPlay=false;

function stopwatch(){
    if(watchPlay){
        ++counter;
        scount=Math.floor(counter/100)%60;
        mcount=Math.floor(counter/6000);
        $('#ms').html(counter%100);

        if(scount<10) $('#secs').html('0'+scount);
        else $('#secs').html(scount);

        if(mcount<10) $('#mins').html('0'+mcount);
        else $('#mins').html(mcount);
    }
}

function watchAction(){ 
    watchPlay = !watchPlay;
    if(watchPlay) $('#actionBtn').html('<i class="fas fa-pause"></i> Pause');
    else $('#actionBtn').html('<i class="fas fa-play"></i> Start');
}

function watchReset(){ watchPlay=false; counter=0;
    $('#ms').html('00');
    $('#mins').html('00');
    $('#secs').html('00');
}

window.setInterval(stopwatch , 10);

/*-------------------------------------------------------------*/
