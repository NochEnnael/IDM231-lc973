//WRAP THE ENTRIE DOCUMENT IN WHAT IS BELOW.THE DOM CONTENT LOADED THINGY. 


document.addEventListener('DOMContentLoaded', function () {

/* Creating empy javascript tags to start for my project :) */

const day = document.getElementsByClassName('day_button') //birthday
const month = document.getElementsByClassName('month_button')
//birthmonth
const year = document.getElementsByClassName('year_button')
//birthyear
const start = document.getElementsByClassName('start_button') 
//submit the dates and find out what zodiac is 
const restart = document.getElementsByClassName('restart_button')
// restart and bring back to beginning text 



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
    /* ariel.style.opacity = '1';
    incred.style.opacity = '0.4';
    mike.style.opacity = '0.4';
    apple.style.opacity = '0.4';
    peter.style.opacity = '0.4';
    mirror.style.opacity = '0.4';
    mal.style.opacity = '0.4';
    toy.style.opacity = '0.4';
    tiana.style.opacity = '0.4';
    belle.style.opacity = '0.4';
    tangled.style.opacity = '0.4';
    up.style.opacity = '0.4'; */
    
   /*  aquarius.style.display = 'block';
    pisces.style.display = 'none';
    aries.style.display = 'none';
    taurus.style.display = 'none';
    gemini.style.display = 'none';
    cancer.style.display = 'none';
    leo.style.display = 'none';
    virgo.style.display = 'none';
    libra.style.display = 'none';
    scorpio.style.display = 'none';
    sagittarius.style.display = 'none';
    capricorn.style.display = 'none'; */

    //Adding event listener to the ariel image. Once it's clicked, it calls a function inside, which is changeText.
  });

  incred.addEventListener('click', function(){
    changeText(pisces);
    changeOpacity(incred)
    /* ariel.style.opacity = '0.4';
    incred.style.opacity = '1';
    mike.style.opacity = '0.4';
    apple.style.opacity = '0.4';
    peter.style.opacity = '0.4';
    mirror.style.opacity = '0.4';
    mal.style.opacity = '0.4';
    toy.style.opacity = '0.4';
    tiana.style.opacity = '0.4';
    belle.style.opacity = '0.4';
    tangled.style.opacity = '0.4';
    up.style.opacity = '0.4'; */

    /* pisces.style.display = 'block';
    aquarius.style.display = "none";
    aries.style.display = 'none';
    taurus.style.display = 'none';
    gemini.style.display = 'none';
    cancer.style.display = 'none';
    leo.style.display = 'none';
    virgo.style.display = 'none';
    libra.style.display = 'none';
    scorpio.style.display = 'none';
    sagittarius.style.display = 'none';
    capricorn.style.display = 'none'; */
  });

  mike.addEventListener('click', function(){
    changeText(aries);
    changeOpacity(mike)
    /* ariel.style.opacity = '0.4';
    incred.style.opacity = '0.4';
    mike.style.opacity = '1';
    apple.style.opacity = '0.4';
    peter.style.opacity = '0.4';
    mirror.style.opacity = '0.4';
    mal.style.opacity = '0.4';
    toy.style.opacity = '0.4';
    tiana.style.opacity = '0.4';
    belle.style.opacity = '0.4';
    tangled.style.opacity = '0.4';
    up.style.opacity = '0.4'; */

    /* aries.style.display = 'block';
    aquarius.style.display = "none";
    pisces.style.display = 'none';
    taurus.style.display = 'none';
    gemini.style.display = 'none';
    cancer.style.display = 'none';
    leo.style.display = 'none';
    virgo.style.display = 'none';
    libra.style.display = 'none';
    scorpio.style.display = 'none';
    sagittarius.style.display = 'none';
    capricorn.style.display = 'none'; */
  });

  apple.addEventListener('click', function() {
    changeText(taurus);
    changeOpacity(apple);
    /* ariel.style.opacity = '0.4';
    incred.style.opacity = '0.4';
    mike.style.opacity = '0.4';
    apple.style.opacity = '1';
    peter.style.opacity = '0.4';
    mirror.style.opacity = '0.4';
    mal.style.opacity = '0.4';
    toy.style.opacity = '0.4';
    tiana.style.opacity = '0.4';
    belle.style.opacity = '0.4';
    tangled.style.opacity = '0.4';
    up.style.opacity = '0.4'; */

    /* taurus.style.display = 'block';
    aquarius.style.display = "none";
    pisces.style.display = 'none';
    aries.style.display = 'none';
    gemini.style.display = 'none';
    cancer.style.display = 'none';
    leo.style.display = 'none';
    virgo.style.display = 'none';
    libra.style.display = 'none';
    scorpio.style.display = 'none';
    sagittarius.style.display = 'none';
    capricorn.style.display = 'none'; */
  });

  peter.addEventListener('click', function() {
    changeText(gemini);
    changeOpacity(peter);
    /* ariel.style.opacity = '0.4';
    incred.style.opacity = '0.4';
    mike.style.opacity = '0.4';
    apple.style.opacity = '0.4';
    peter.style.opacity = '1';
    mirror.style.opacity = '0.4';
    mal.style.opacity = '0.4';
    toy.style.opacity = '0.4';
    tiana.style.opacity = '0.4';
    belle.style.opacity = '0.4';
    tangled.style.opacity = '0.4';
    up.style.opacity = '0.4'; */

    /* gemini.style.display = 'block';
    aquarius.style.display = "none";
    pisces.style.display = 'none';
    aries.style.display = 'none';
    taurus.style.display = 'none';
    cancer.style.display = 'none';
    leo.style.display = 'none';
    virgo.style.display = 'none';
    libra.style.display = 'none';
    scorpio.style.display = 'none';
    sagittarius.style.display = 'none';
    capricorn.style.display = 'none'; */
  });

  mirror.addEventListener('click', function(){
    changeText(cancer);
    changeOpacity(mirror);
    /* ariel.style.opacity = '0.4';
    incred.style.opacity = '0.4';
    mike.style.opacity = '0.4';
    apple.style.opacity = '0.4';
    peter.style.opacity = '0.4';
    mirror.style.opacity = '1';
    mal.style.opacity = '0.4';
    toy.style.opacity = '0.4';
    tiana.style.opacity = '0.4';
    belle.style.opacity = '0.4';
    tangled.style.opacity = '0.4';
    up.style.opacity = '0.4';
 */
    /* cancer.style.display = 'block';
    aquarius.style.display = "none";
    pisces.style.display = 'none';
    aries.style.display = 'none';
    taurus.style.display = 'none';
    gemini.style.display = 'none';
    leo.style.display = 'none';
    virgo.style.display = 'none';
    libra.style.display = 'none';
    scorpio.style.display = 'none';
    sagittarius.style.display = 'none';
    capricorn.style.display = 'none'; */
  });

  mal.addEventListener('click', function(){
    changeText(leo);
    changeOpacity(mal);
   /*  ariel.style.opacity = '0.4';
    incred.style.opacity = '0.4';
    mike.style.opacity = '0.4';
    apple.style.opacity = '0.4';
    peter.style.opacity = '0.4';
    mirror.style.opacity = '0.4';
    mal.style.opacity = '1';
    toy.style.opacity = '0.4';
    tiana.style.opacity = '0.4';
    belle.style.opacity = '0.4';
    tangled.style.opacity = '0.4';
    up.style.opacity = '0.4';
 */
    /* leo.style.display = 'block';
    aquarius.style.display = "none";
    pisces.style.display = 'none';
    aries.style.display = 'none';
    taurus.style.display = 'none';
    gemini.style.display = 'none';
    cancer.style.display = 'none';
    virgo.style.display = 'none';
    libra.style.display = 'none';
    scorpio.style.display = 'none';
    sagittarius.style.display = 'none';
    capricorn.style.display = 'none'; */
  });

  toy.addEventListener('click', function(){
      changeText(virgo);
      changeOpacity(toy);
      /* ariel.style.opacity = '0.4';
      incred.style.opacity = '0.4';
      mike.style.opacity = '0.4';
      apple.style.opacity = '0.4';
      peter.style.opacity = '0.4';
      mirror.style.opacity = '0.4';
      mal.style.opacity = '0.4';
      toy.style.opacity = '1';
      tiana.style.opacity = '0.4';
      belle.style.opacity = '0.4';
      tangled.style.opacity = '0.4';
      up.style.opacity = '0.4';  */ 

      /* virgo.style.display = 'block';
      aquarius.style.display = "none";
      pisces.style.display = 'none';
      aries.style.display = 'none';
      taurus.style.display = 'none';
      gemini.style.display = 'none';
      cancer.style.display = 'none';
      leo.style.display = 'none';
      libra.style.display = 'none';
      scorpio.style.display = 'none';
      sagittarius.style.display = 'none';
      capricorn.style.display = 'none'; */
  });

  tiana.addEventListener('click', function(){
      changeText(libra);
      changeOpacity(tiana);
      /* ariel.style.opacity = '0.4';
      incred.style.opacity = '0.4';
      mike.style.opacity = '0.4';
      apple.style.opacity = '0.4';
      peter.style.opacity = '0.4';
      mirror.style.opacity = '0.4';
      mal.style.opacity = '0.4';
      toy.style.opacity = '0.4';
      tiana.style.opacity = '1';
      belle.style.opacity = '0.4';
      tangled.style.opacity = '0.4';
      up.style.opacity = '0.4';  */ 

      /* libra.style.display = 'block';
      aquarius.style.display = "none";
      pisces.style.display = 'none';
      aries.style.display = 'none';
      taurus.style.display = 'none';
      gemini.style.display = 'none';
      cancer.style.display = 'none';
      leo.style.display = 'none';
      virgo.style.display = 'none';
      scorpio.style.display = 'none';
      sagittarius.style.display = 'none';
      capricorn.style.display = 'none'; */
  });

  belle.addEventListener('click', function(){
    changeText(scorpio);
    changeOpacity(belle);
    /* ariel.style.opacity = '0.4';
    incred.style.opacity = '0.4';
    mike.style.opacity = '0.4';
    apple.style.opacity = '0.4';
    peter.style.opacity = '0.4';
    mirror.style.opacity = '0.4';
    mal.style.opacity = '0.4';
    toy.style.opacity = '0.4';
    tiana.style.opacity = '0.4';
    belle.style.opacity = '1';
    tangled.style.opacity = '0.4';
    up.style.opacity = '0.4'; */

    /* scorpio.style.display = 'block';
    aquarius.style.display = "none";
    pisces.style.display = 'none';
    aries.style.display = 'none';
    taurus.style.display = 'none';
    gemini.style.display = 'none';
    cancer.style.display = 'none';
    leo.style.display = 'none';
    virgo.style.display = 'none';
    libra.style.display = 'none';
    sagittarius.style.display = 'none';
    capricorn.style.display = 'none'; */
  });


  tangled.addEventListener('click', function() {
    changeText(sagittarius);
    changeOpacity(tangled);
   /*  ariel.style.opacity = '0.4';
    incred.style.opacity = '0.4';
    mike.style.opacity = '0.4';
    apple.style.opacity = '0.4';
    peter.style.opacity = '0.4';
    mirror.style.opacity = '0.4';
    mal.style.opacity = '0.4';
    toy.style.opacity = '0.4';
    tiana.style.opacity = '0.4';
    belle.style.opacity = '0.4';
    tangled.style.opacity = '1';
    up.style.opacity = '0.4'; */

    /* sagittarius.style.display = 'block';
    aquarius.style.display = "none";
    pisces.style.display = 'none';
    aries.style.display = 'none';
    taurus.style.display = 'none';
    gemini.style.display = 'none';
    cancer.style.display = 'none';
    leo.style.display = 'none';
    virgo.style.display = 'none';
    libra.style.display = 'none';
    scorpio.style.display = 'none';
    capricorn.style.display = 'none'; */

  });

  up.addEventListener('click', function(){
    changeText(capricorn);
    changeOpacity(up);
    /* ariel.style.opacity = '0.4';
    incred.style.opacity = '0.4';
    mike.style.opacity = '0.4';
    apple.style.opacity = '0.4';
    peter.style.opacity = '0.4';
    mirror.style.opacity = '0.4';
    mal.style.opacity = '0.4';
    toy.style.opacity = '0.4';
    tiana.style.opacity = '0.4';
    belle.style.opacity = '0.4';
    tangled.style.opacity = '0.4';
    up.style.opacity = '1'; */

    /* capricorn.style.display = 'block';
    aquarius.style.display = "none";
    pisces.style.display = 'none';
    aries.style.display = 'none';
    taurus.style.display = 'none';
    gemini.style.display = 'none';
    cancer.style.display = 'none';
    leo.style.display = 'none';
    virgo.style.display = 'none';
    libra.style.display = 'none';
    scorpio.style.display = 'none';
    sagittarius.style.display = 'none'; */
  });

  


  const soundButtons = document.querySelectorAll('.soundtrack');
  
  const speakers = document.getElementById('speakers');
  
  soundButtons.forEach(button => {
      const sound = button.dataset.sound;
      button.addEventListener('click', () => {
          speakers.src = `../audio/${sound}.mp3`;
          speakers.play();

      })
  })



function playSound() {
    // Play sound when object is clicked on 
  }

function clickSubmit() {
    // click button to submit your birthday and get the text and bring modal with var chosenZodiac
}

function clickRestart(){
    //click button to restart everything
}


function clickMonth() {
    // click the button to select the desired month 

}

function clickDay () {
    //click the button to slect the day that you were born
}

function clickYear() {
    //click and have a drop down to show the years 
}











let whichMonth = document.getElementById('choosemonth').value//select element for month
let whichDayOfMonth = document.getElementById('chooseday').value//select element for day

const submit = document.getElementById('month');//form

//IF STATEMENT FOR THE LOOP!!!   IF STATEMENT FOR THE LOOP!!!



submit.addEventListener('submit', function(){ //calls this function when submitting the form
if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
  AstroSign = "capricorn";
  changeText(capricorn);
  changeOpacity(up);
} else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
  AstroSign = "sagittarius";
  changeText(sagittarius);
  changeOpacity(tangled);
} else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
  AstroSign = "scorpio";
  changeText(scorpio);
  changeOpacity(belle);
} else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
  AstroSign = "libra";
  changeText(libra);
  changeOpacity(tiana);
} else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
  AstroSign = "virgo";
  changeText(virgo);
  changeOpacity(toy);
} else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
  AstroSign = "leo";
  changeText(leo);
  changeOpacity(mal);
} else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
  AstroSign = "cancer";
  changeText(cancer);
  changeOpacity(mirror);
} else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
  AstroSign = "gemini";
  changeText(gemini);
  changeOpacity(peter);
} else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
  AstroSign = "taurus";
  changeText(taurus);
  changeOpacity(apple);
} else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
  AstroSign = "aries";
  changeText(aries);
  changeOpacity(mike);
} else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
  AstroSign = "pisces";
  changeText(pisces);
  changeOpacity(incred);
} else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
  AstroSign = "aquarius";
  changeText(aquarius);
  changeOpacity(ariel);
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