//SELECTORS: CELSIUS
let celsiusSelect = document.querySelector('.radio_celsius');
let celsiusInput = document.querySelector('.celsius_label');
let celsiusInput2 = document.getElementById('celsius_label2')

//SELECTORS: FAHRENHEIT
let fahrenheitSelect = document.querySelector('.radio_fahrenheit');
let fahrenheitInput = document.querySelector('.fahrenheit_label');
let fahrenheitInput2 = document.getElementById('fahrenheit_label2');

//SELECTORS: SUBMIT AND CLEAR
let submit = document.querySelector('.convert_button');
let clear = document.querySelector('.clear');

//SELECTORS: SWIPE
let flip1 = document.querySelector('.flip1');
let flip2 = document.querySelector('.flip2');
//let fahrenheitValue = fahrenheitInput.value;

//celsiusSelect.addEventListener('click', ));

// CELSIUS CONTROLLER
  celsiusSelect.addEventListener('click', () => {
  flip1.style.display = 'block';
  flip2.style.display = 'none';
  celsiusInput.disabled = false;
  });

  //make the submit button inactive

//

// FAHRENHEIT CONTROLLER
fahrenheitSelect.addEventListener('click', () => {
  flip1.style.display = 'none';
  flip2.style.display = 'block';
  celsiusInput2.disabled = false;
  fahrenheitInput2.disabled = true;

  // flip1.animate([{transform: 'translate(55%, -90%)'}, {duration: 1}, {direction: 'reverse'}])

  // flip2.animate([
  // {transform: 'translate(0%, 10%)'},
  // ], {duration: 1})
  //flip.display = 'block'
})

submit.addEventListener('click', () => { 
  if(flip1.style.display === 'block' && flip2.style.display === 'none') {
    const fahr = ((1.8 * (celsiusInput.value)) + 32);
  fahrenheitInput.value = (fahr.toFixed(2));
  } else if(flip2.style.display === 'block' && flip1.style.display === 'none') {
    const cels = ((celsiusInput2.value - 32) / 1.8);
    fahrenheitInput2.value = (cels.toFixed(2));
  }
  });

  document.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
      const fahr = ((1.8 * (celsiusInput.value)) + 32);
       fahrenheitInput.value = (fahr.toFixed(2));
    }
});

clear.addEventListener('click', event => {
  //if (event.keyCode !== 13) {
    celsiusInput.value = '0.0';
     fahrenheitInput.value = '0.0';
     celsiusInput2.value = '0.0';
     fahrenheitInput2.value = '0.0';

             // }
//  celsiusInput.value = '0.0';
//  fahrenheitInput.value = '0.0';
})