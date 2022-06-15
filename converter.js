
let celsiusSelect = document.querySelector('.radio_celsius');
let fahrenheitSelect = document.querySelector('.radio_fahrenheit');
let celsiusInput = document.querySelector('.celsius_label')
let fahrenheitInput = document.querySelector('.fahrenheit_label');
let submit = document.querySelector('.convert_button');
let clear = document.querySelector('.clear');
let flip = document.querySelector('.flip');
//let fahrenheitValue = fahrenheitInput.value;

//celsiusSelect.addEventListener('click', ));

// CELSIUS CONTROLLER
( function () {
  let addCelcius = celsiusSelect.addEventListener('click', () => {
  celsiusInput.disabled = false;
  flip.style.display = 'none';
  });

  let fahreinheitOutput = submit.addEventListener('click', () => { 
  const fahr = ((1.8 * (celsiusInput.value)) + 32);
  fahrenheitInput.value = (fahr.toFixed(2));
  });

  document.addEventListener('keypress', event => {
          if (event.keyCode === 13) {
            const fahr = ((1.8 * (celsiusInput.value)) + 32);
             fahrenheitInput.value = (fahr.toFixed(2));
          }
      });

  //make the submit button inactive
})();

//

// FAHRENHEIT CONTROLLER

let addfahreinheit = fahrenheitSelect.addEventListener('click', () => {
  celsiusInput.disabled = true;
  
  //flip.display = 'block'
})


clear.addEventListener('click', event => {
  //if (event.keyCode !== 13) {
    celsiusInput.value = '0.0';
     fahrenheitInput.value = '0.0';
             // }
//  celsiusInput.value = '0.0';
//  fahrenheitInput.value = '0.0';
})