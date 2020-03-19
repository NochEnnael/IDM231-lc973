//WRAP THE ENTRIE DOCUMENT IN WHAT IS BELOW.THE DOM CONTENT LOADED THINGY. 


document.addEventListener('DOMContentLoaded', function () {

/* Creating empy javascript tags to start for my project :) */

const day = document.getElementsByClassName('day_button') //birthday
const month = document.getElementsByClassName('month_button')
//birthmonth
const year = document.getElementsByClassName('year_button')
//birthyear

//submit the dates and find out what zodiac is 



// all of these are for the paragraphs that change- put into modal? 
const intro = document.getElementById('intro-item')

const aquarius = document.getElementById('aquarius')
const pisces = document.getElementById('pisces')
const aries = document.getElementById('aries')
const taurus = document.getElementById('taurus')
const gemini = document.getElementById('gemini')
const cancer = document.getElementById('cancer')
const leo = document.getElementById('leo')
const virgo = document.getElementById('virgo')
const libra = document.getElementById('libra')
const scorpio = document.getElementById('scorpio')
const sagittarius = document.getElementById('sagittarius')
const capricorn = document.getElementById('capricorn')


//all of these are for the images to click onto!!!

const ariel = document.getElementById('ariel')
const incred = document.getElementById('incred')
const mike = document.getElementById('mike')
const apple = document.getElementById('apple')
const peter = document.getElementById('peter')
const mirror = document.getElementById('mirror')
const mal = document.getElementById('mal')
const toy = document.getElementById('toy')
const tiana = document.getElementById('tiana')
const belle = document.getElementById('belle')
const tangled = document.getElementById('tangled')
const up = document.getElementById('up')

const paras = document.getElementsByClassName('description');
// if the button we click is not the one we want, the there is no paragrpah shown. If it is the one that we want/ clicked, then the paragraph will appear.

function changeText(para){
  for (var i = 0; i < paras.length; i++) {
    if(para != paras[i]){
      paras[i].style.display = "none";
    }
    else if (para == paras[i]) {
      paras[i].style.display = 'block';
    }
  }
  /* intro.style.display = 'none'; // hides the intro paragraph
  para.style.display = 'block'; // shows the text that is hidden that mathches the images based on parameter 'para' */
}


const buttonopacity = document.getElementsByClassName('soundtrack');
// If the button we click is not clicked on, then it has an opacity of 0.4. If it IS the butotn clicked on then the opacity is 1.  
function changeOpacity(opaque) {
  for (var i = 0; i < buttonopacity.length; i++) {
    if(opaque != buttonopacity[i]){
      buttonopacity[i].style.opacity = '0.4';
    } else if (opaque == buttonopacity[i]) {
      buttonopacity[i].style.opacity = '1';
    }
  }
}
  ariel.addEventListener('click', function() {
    changeText(aquarius);
    changeOpacity(ariel)
    //Adding event listener to the ariel image. Once it's clicked, it calls a function inside, which is changeText.
  });

  incred.addEventListener('click', function(){
    changeText(pisces);
    changeOpacity(incred)
  });

  mike.addEventListener('click', function(){
    changeText(aries);
    changeOpacity(mike)
  });

  apple.addEventListener('click', function() {
    changeText(taurus);
    changeOpacity(apple);
  });

  peter.addEventListener('click', function() {
    changeText(gemini);
    changeOpacity(peter);
  });

  mirror.addEventListener('click', function(){
    changeText(cancer);
    changeOpacity(mirror);
  });

  mal.addEventListener('click', function(){
    changeText(leo);
    changeOpacity(mal);
  });

  toy.addEventListener('click', function(){
      changeText(virgo);
      changeOpacity(toy);
  });

  tiana.addEventListener('click', function(){
      changeText(libra);
      changeOpacity(tiana);
  });

  belle.addEventListener('click', function(){
    changeText(scorpio);
    changeOpacity(belle);
  });


  tangled.addEventListener('click', function() {
    changeText(sagittarius);
    changeOpacity(tangled);
  });

  up.addEventListener('click', function(){
    changeText(capricorn);
    changeOpacity(up);
  });

  

  const soundButtons = document.querySelectorAll('.soundtrack');
  
  const speakers = document.getElementById('speakers');
  
  soundButtons.forEach(button => {
      const sound = button.dataset.sound;
      button.addEventListener('click', () => {
          speakers.src = `idm231-lc973/audio/${sound}.mp3`;
          speakers.play();

          console.log('sdfghjk');
      })
    })





const submit = document.getElementById('start_button') 

/* const submit = document.getElementById('month'); *///form

//IF STATEMENT FOR THE LOOP!!!   IF STATEMENT FOR THE LOOP!!!

submit.addEventListener('click', function(){ //calls this function when submitting the form

const whichMonth = document.getElementById('choosemonth').value//select element for month
const whichDayOfMonth = document.getElementById('chooseday').value//select element for day


/* console.log('hello');
 */
console.log('which month is ' + whichMonth);
console.log('which day of month is ' + whichDayOfMonth);


 if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
  AstroSign = "capricorn";
  changeText(capricorn);
  changeOpacity(up);
  speakers.src = `idm231-lc973/audio/up.mp3`;
    speakers.play();
} else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
  AstroSign = "sagittarius";
  changeText(sagittarius);
  changeOpacity(tangled);
  speakers.src = `idm231-lc973/audio/tangledsound.mp3`;
    speakers.play();
} else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
  AstroSign = "scorpio";
  changeText(scorpio);
  changeOpacity(belle);
  speakers.src = `idm231-lc973/audio/bellesound.mp3`;
    speakers.play();
} else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
  AstroSign = "libra";
  changeText(libra);
  changeOpacity(tiana);
  speakers.src = `idm231-lc973/audio/tianasound.mp3`;
    speakers.play();
} else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
  AstroSign = "virgo";
  changeText(virgo);
  changeOpacity(toy);
  speakers.src = `idm231-lc973/audio/toystorysound.mp3`;
    speakers.play();
} else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
  AstroSign = "leo";
  changeText(leo);
  changeOpacity(mal);
  speakers.src = `idm231-lc973/audio/malsound.mp3`;
    speakers.play();
} else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
  AstroSign = "cancer";
  changeText(cancer);
  changeOpacity(mirror);
  speakers.src = `idm231-lc973/audio/mirrorsound.mp3`;
    speakers.play();
} else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
  AstroSign = "gemini";
  changeText(gemini);
  changeOpacity(peter);
  speakers.src = `idm231-lc973/audio/pansound.mp3`;
    speakers.play();
} else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
  AstroSign = "taurus";
  changeText(taurus);
  changeOpacity(apple);
  speakers.src = `idm231-lc973/audio/snowsound.mp3`;
    speakers.play();
} else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
  AstroSign = "aries";
  changeText(aries);
  changeOpacity(mike);
  speakers.src = `idm231-lc973/audio/mikesound.mp3`;
    speakers.play();
} else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
  AstroSign = "pisces";
  changeText(pisces);
  changeOpacity(incred);
  speakers.src = `idm231-lc973/audio/incrediblessound.mp3`;
    speakers.play();
} else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
  AstroSign = "aquarius";
  changeText(aquarius);
  changeOpacity(ariel);
  speakers.src = `idm231-lc973/audio/arielsound.mp3`;
    speakers.play();
}


});

/* submit.addEventListener("submit", function(){
  if (AstroSign == "capricorn") {
    changeText(capricorn);
    changeOpacity(up);
  } else if (AstroSign == "sagittarius") {
    changeText(sagittarius);
    changeOpacity(tangled);
  } else if (AstroSign == "scorpio") {
    changeText(scorpio);
    changeOpacity(belle);
  } else if (AstroSign == "libra") {
    changeText(libra);
    changeOpacity(tiana);
  } else if (AstroSign == "virgo") {
    changeText(virgo);
    changeOpacity(toy);
  } else if (AstroSign == "leo") {
    changeText(leo);
    changeOpacity(mal);
  } else if (AstroSign == "cancer") {
    changeText(cancer);
    changeOpacity(mirror);
  } else if (AstroSign == "gemini") {
    changeText(gemini);
    changeOpacity(peter);
  } else if (AstroSign == "taurus") {
    changeText(taurus);
    changeOpacity(apple);
  } else if (AstroSign == "aries") {
    changeText(aries);
    changeOpacity(mike);
  } else if (AstroSign == "pisces") {
    changeText(pisces);
    changeOpacity(incred);
  } else if (AstroSign == "aquarius") {
    changeText(aquarius);
    changeOpacity(ariel);
  }
}); */



}); 