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

const head = document.getElementById('header')
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



  function changeText(para){
    intro.style.display = 'none'; // hides the intro paragraph
    para.style.display = 'block'; // shows the text that is hidden that mathches the images based on parameter 'para'
  }

  ariel.addEventListener('click', function() {
    changeText(aquarius);
    ariel.style.opacity = '1';
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
    up.style.opacity = '0.4';
    
    aquarius.style.display = 'block';
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
    capricorn.style.display = 'none';

    //Adding event listener to the ariel image. Once it's clicked, it calls a function inside, which is changeText.
  });

  incred.addEventListener('click', function(){
    changeText(pisces);

    ariel.style.opacity = '0.4';
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
    up.style.opacity = '0.4';

    pisces.style.display = 'block';
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
    capricorn.style.display = 'none';
  });

  mike.addEventListener('click', function(){
    changeText(aries);

    ariel.style.opacity = '0.4';
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
    up.style.opacity = '0.4';

    aries.style.display = 'block';
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
    capricorn.style.display = 'none';
  });

  apple.addEventListener('click', function() {
    changeText(taurus);

    ariel.style.opacity = '0.4';
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
    up.style.opacity = '0.4';

    taurus.style.display = 'block';
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
    capricorn.style.display = 'none';
  });

  peter.addEventListener('click', function() {
    changeText(gemini);

    ariel.style.opacity = '0.4';
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
    up.style.opacity = '0.4';

    gemini.style.display = 'block';
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
    capricorn.style.display = 'none';
  });

  mirror.addEventListener('click', function(){
    changeText(cancer);

    ariel.style.opacity = '0.4';
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

    cancer.style.display = 'block';
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
    capricorn.style.display = 'none';
  });

  mal.addEventListener('click', function(){
    changeText(leo);

    ariel.style.opacity = '0.4';
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

    leo.style.display = 'block';
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
    capricorn.style.display = 'none';
  });

  toy.addEventListener('click', function(){
      changeText(virgo);

      ariel.style.opacity = '0.4';
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
      up.style.opacity = '0.4';  

      virgo.style.display = 'block';
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
      capricorn.style.display = 'none';
  });

  tiana.addEventListener('click', function(){
      changeText(libra);

      ariel.style.opacity = '0.4';
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
      up.style.opacity = '0.4';  

      libra.style.display = 'block';
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
      capricorn.style.display = 'none';
  });

  belle.addEventListener('click', function(){
    changeText(scorpio);

    ariel.style.opacity = '0.4';
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
    up.style.opacity = '0.4';

    scorpio.style.display = 'block';
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
    capricorn.style.display = 'none';
  });


  tangled.addEventListener('click', function() {
    changeText(sagittarius);

    ariel.style.opacity = '0.4';
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
    up.style.opacity = '0.4';

    sagittarius.style.display = 'block';
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
    capricorn.style.display = 'none';

  });

  up.addEventListener('click', function(){
    changeText(capricorn);

    ariel.style.opacity = '0.4';
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
    up.style.opacity = '1';

    capricorn.style.display = 'block';
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
    sagittarius.style.display = 'none';
  });



function clickZodiac() {
  // click onto the desired zodiac and have the rest of the icons have a high opacity so the viewer knows which one they chose
}


function playSound() {
    // Play sound when object is clicked on 
  }

function clickSubmit() {
    // click button to submit your birthday and get the text and bring modal with var chosenZodiac
}

function clickRestart(){
    //click button to restart everything
}

function clickClose() {
    // click button to close the Modal out
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





/* if (condition) {
    // if the icon is picked, open modal
  } else {
    //  don't open up any other of the modals and only show the modal fo rth eicon picked 
    
  }
 */

}); 