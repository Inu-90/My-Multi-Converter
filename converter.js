 // CELSIUS SELECTORS
  let celsiusSelect = document.querySelector(".radio_celsius");
  let celsiusInput = document.querySelector(".celsius_label");
  let celsiusInput2 = document.getElementById("celsius_label2");

  // FAHRENHEIT SELECTORS
  let fahrenheitSelect = document.querySelector(".radio_fahrenheit");
  let fahrenheitInput = document.querySelector(".fahrenheit_label");
  let fahrenheitInput2 = document.getElementById("fahrenheit_label2");

  // convert AND reset SELECTORS
  let convert = document.querySelector(".convert-temperature");
  let reset = document.querySelector(".reset-temperature");

  // SWIPE SELECTORS
  let flip1 = document.querySelector(".flip1");
  let flip2 = document.querySelector(".flip2");

  //ALERT BUTTONS SELECTORS
  let tempAlertDiplay = document.querySelector(".temperature-alert");
  let tempAlertDiplayBtn = document.querySelector(".temperature-alert-button");

  //CELSIUS CONTROLLER
  celsiusSelect.addEventListener("click", () => {
    flip1.style.display = "grid";
    flip2.style.display = "none";
    celsiusInput.disabled = false;
  });

  // FAHRENHEIT CONTROLLER
  fahrenheitSelect.addEventListener("click", () => {
    flip1.style.display = "none";
    flip2.style.display = "grid";
    celsiusInput2.disabled = false;
    fahrenheitInput2.disabled = true;
  });

  convert.addEventListener("click", () => {
    if (document.querySelector('input[name="radiobtn"]:checked') === null) {
      tempAlertDiplay.style.display = "block";
      celsiusSelect.disabled = true;
      fahrenheitSelect = true;

      tempAlertDiplayBtn.addEventListener("click", () => {
        tempAlertDiplay.style.display = "none";
        celsiusSelect.disabled = false;
        fahrenheitSelect = false;
      });
    }
    if (flip1.style.display === "grid" && flip2.style.display === "none") {
      const fahr = 1.8 * celsiusInput.value + 32;
      fahrenheitInput.value = fahr.toFixed(2);
    } else if (
      flip2.style.display === "grid" &&
      flip1.style.display === "none"
    ) {
      const cels = (celsiusInput2.value - 32) / 1.8;
      fahrenheitInput2.value = cels.toFixed(2);
    }
  });

  document.querySelector('input[name="radiobtn"]:checked');

  document.addEventListener("keypress", (event) => {
    if (
      event.keyCode === 13 &&
      flip1.style.display === "grid" &&
      flip2.style.display === "none"
    ) {
      const fahr = 1.8 * celsiusInput.value + 32;
      fahrenheitInput.value = fahr.toFixed(2);
    } else if (
      event.keyCode === 13 &&
      flip2.style.display === "grid" &&
      flip1.style.display === "none"
    ) {
      const cels = (celsiusInput2.value - 32) / 1.8;
      fahrenheitInput2.value = cels.toFixed(2);
    }
  });

  reset.addEventListener("click", () => {
    celsiusInput.value = null;
    fahrenheitInput.value = null;
    celsiusInput2.value = null;
    fahrenheitInput2.value = null;
  });


  // Weight Selectors
  let convertWeight = document.querySelector(".convert-btn");
  let resetWeight = document.querySelector(".reset-btn");
  let selectFrom = document.querySelector(".select-from");
  let selectTo = document.querySelector(".select-to");
  let fromInput = document.querySelector(".from-input");
  let toDisplay = document.querySelector(".to-output");
  let fromUnit = document.querySelector(".from-units");
  let toUnit = document.querySelector(".to-units");
  let massAlertDiplay = document.querySelector(".mass-alert-display");
  let massAlertBtn = document.querySelector(".mass-alert-button");
  let massParams = [
    "tonne",
    "kilogram",
    "gram",
    "milligram",
    "microgram",
    "imperial-ton",
    "us-ton",
    "stone",
    "pound",
    "ounce",
  ];
  let massParamsUnits = [
    "t",
    "kg",
    "g",
    "mg",
    "μg",
    "t",
    "t",
    "st",
    "lb",
    "oz",
  ];
  let fromValue, toValue;


  // Weight Conversion
  selectFrom.addEventListener("change", (e) => {
    fromValue = e.target.value;

    if (fromValue === massParams[0]) {
      fromUnit.innerHTML = massParamsUnits[0];
    }
    if (fromValue === massParams[1]) {
      fromUnit.innerHTML = massParamsUnits[1];
    }
    if (fromValue === massParams[2]) {
      fromUnit.innerHTML = massParamsUnits[2];
    }
    if (fromValue === massParams[3]) {
      fromUnit.innerHTML = massParamsUnits[3];
    }
    if (fromValue === massParams[4]) {
      fromUnit.innerHTML = massParamsUnits[4];
    }
    if (fromValue === massParams[5]) {
      fromUnit.innerHTML = massParamsUnits[5];
    }
    if (fromValue === massParams[6]) {
      fromUnit.innerHTML = massParamsUnits[6];
    }
    if (fromValue === massParams[7]) {
      fromUnit.innerHTML = massParamsUnits[7];
    }
    if (fromValue === massParams[8]) {
      fromUnit.innerHTML = massParamsUnits[8];
    }
    if (fromValue === massParams[9]) {
      fromUnit.innerHTML = massParamsUnits[9];
    }
  });

  selectTo.addEventListener("change", (e) => {
    toValue = e.target.value;

    if (toValue === massParams[0]) {
      toUnit.innerHTML = massParamsUnits[0];
    }
    if (toValue === massParams[1]) {
      toUnit.innerHTML = massParamsUnits[1];
    }
    if (toValue === massParams[2]) {
      toUnit.innerHTML = massParamsUnits[2];
    }
    if (toValue === massParams[3]) {
      toUnit.innerHTML = massParamsUnits[3];
    }
    if (toValue === massParams[4]) {
      toUnit.innerHTML = massParamsUnits[4];
    }
    if (toValue === massParams[5]) {
      toUnit.innerHTML = massParamsUnits[5];
    }
    if (toValue === massParams[6]) {
      toUnit.innerHTML = massParamsUnits[6];
    }
    if (toValue === massParams[7]) {
      toUnit.innerHTML = massParamsUnits[7];
    }
    if (toValue === massParams[8]) {
      toUnit.innerHTML = massParamsUnits[8];
    }
    if (toValue === massParams[9]) {
      toUnit.innerHTML = massParamsUnits[9];
    }
  });

  convertWeight.addEventListener("click", () => {
    // Tonne
    if (fromValue === "tonne" && toValue === "tonne") {
      toDisplay.value = fromInput.value;
    }
    if (fromValue === "tonne" && toValue === "kilogram") {
      toDisplay.value = fromInput.value * 1000;
    }
    if (fromValue === "tonne" && toValue === "gram") {
      toDisplay.value = (fromInput.value * 1000000);
    }
    if (fromValue === "tonne" && toValue === "milligram") {
      toDisplay.value = (fromInput.value * 1000000000).toExponential(0);
    }
    if (fromValue === "tonne" && toValue === "microgram") {
      toDisplay.value = (fromInput.value * 1000000000000).toExponential(0);
    }
    if (fromValue === "tonne" && toValue === "imperial-ton") {
      toDisplay.value = (fromInput.value / 1.016).toFixed(6);
    }
    if (fromValue === "tonne" && toValue === "us-ton") {
      toDisplay.value = fromInput.value * 1.10231;
    }
    if (fromValue === "tonne" && toValue === "stone") {
      toDisplay.value = fromInput.value / 157.473;
    }
    if (fromValue === "tonne" && toValue === "pound") {
      toDisplay.value = fromInput.value * 2204.62;
    }
    if (fromValue === "tonne" && toValue === "ounce") {
      toDisplay.value = fromInput.value * 35274;
    }

    // Kilogram
    if (fromValue === "kilogram" && toValue === "kilogram") {
      toDisplay.value = fromInput.value;
    }
    if (fromValue === "kilogram" && toValue === "tonne") {
      toDisplay.value = fromInput.value / 1000;
    }
    if (fromValue === "kilogram" && toValue === "gram") {
      toDisplay.value = fromInput.value * 1000;
    }
    if (fromValue === "kilogram" && toValue === "milligram") {
      toDisplay.value = fromInput.value * 1000000;
    }
    if (fromValue === "kilogram" && toValue === "microgram") {
      toDisplay.value = (fromInput.value * 1000000000).toExponential(0);
    }
    if (fromValue === "kilogram" && toValue === "imperial-ton") {
      toDisplay.value = (fromInput.value / 1016).toFixed(8);
    }
    if (fromValue === "kilogram" && toValue === "us-ton") {
      toDisplay.value = (fromInput.value / 907.159).toFixed(7);
    }
    if (fromValue === "kilogram" && toValue === "stone") {
      toDisplay.value = (fromInput.value / 6.3502949712).toFixed(6);
    }
    if (fromValue === "kilogram" && toValue === "pound") {
      toDisplay.value = fromInput.value * 2.20462;
    }
    if (fromValue === "kilogram" && toValue === "ounce") {
      toDisplay.value = fromInput.value * 35.274;
    }

    // Gram (g)
    if (fromValue === "gram" && toValue === "gram") {
      toDisplay.value = fromInput.value;
    }
    if (fromValue === "gram" && toValue === "tonne") {
      toDisplay.value = fromInput.value * 0.000001;
    }
    if (fromValue === "gram" && toValue === "kilogram") {
      toDisplay.value = fromInput.value * 0.001;
    }
    if (fromValue === "gram" && toValue === "milligram") {
      toDisplay.value = fromInput.value * 1000;
    }
    if (fromValue === "gram" && toValue === "microgram") {
      toDisplay.value = fromInput.value * 1000000;
    }
    if (fromValue === "gram" && toValue === "imperial-ton") {
      toDisplay.value = fromInput.value * 0.00000098421;
    }
    if (fromValue === "gram" && toValue === "us-ton") {
      toDisplay.value = (fromInput.value * 0.0000011023).toExponential(4);
    }
    if (fromValue === "gram" && toValue === "stone") {
      toDisplay.value = fromInput.value * 0.000157473;
    }
    if (fromValue === "gram" && toValue === "pound") {
      toDisplay.value = fromInput.value * 0.00220462;
    }
    if (fromValue === "gram" && toValue === "ounce") {
      toDisplay.value = fromInput.value * 0.035274;
    }

    // Milligram (mg)
    if (fromValue === "milligram" && toValue === "milligram") {
      toDisplay.value = fromInput.value;
    }
    if (fromValue === "milligram" && toValue === "tonne") {
      toDisplay.value = fromInput.value / 1000000000;
    }
    if (fromValue === "milligram" && toValue === "kilogram") {
      toDisplay.value = fromInput.value / 1000000;
    }
    if (fromValue === "milligram" && toValue === "gram") {
      toDisplay.value = fromInput.value / 1000;
    }
    if (fromValue === "milligram" && toValue === "microgram") {
      toDisplay.value = fromInput.value * 1000;
    }
    if (fromValue === "milligram" && toValue === "imperial-ton") {
      toDisplay.value = fromInput.value * 0.00000000098421;
    }
    if (fromValue === "milligram" && toValue === "us-ton") {
      toDisplay.value = fromInput.value * 0.0000000011023;
    }
    if (fromValue === "milligram" && toValue === "stone") {
      toDisplay.value = (fromInput.value * 0.00000015747).toExponential(4);
    }
    if (fromValue === "milligram" && toValue === "pound") {
      toDisplay.value = (fromInput.value * 0.0000022046).toExponential(4);
    }
    if (fromValue === "milligram" && toValue === "ounce") {
      toDisplay.value = (fromInput.value * 0.000035274).toExponential(4);
    }

    // Microgram (μg)
    if (fromValue === "microgram" && toValue === "microgram") {
      toDisplay.value = fromInput.value;
    }
    if (fromValue === "microgram" && toValue === "tonne") {
      toDisplay.value = fromInput.value * 0.000000000001;
    }
    if (fromValue === "microgram" && toValue === "kilogram") {
      toDisplay.value = fromInput.value * 0.000000001;
    }
    if (fromValue === "microgram" && toValue === "gram") {
      toDisplay.value = fromInput.value * 0.000001;
    }
    if (fromValue === "microgram" && toValue === "milligram") {
      toDisplay.value = fromInput.value * 0.001;
    }
    if (fromValue === "microgram" && toValue === "imperial-ton") {
      toDisplay.value = fromInput.value * 0.00000000000098421;
    }
    if (fromValue === "microgram" && toValue === "us-ton") {
      toDisplay.value = fromInput.value * 0.0000000000011023;
    }
    if (fromValue === "microgram" && toValue === "stone") {
      toDisplay.value = fromInput.value * 0.00000000015747;
    }
    if (fromValue === "microgram" && toValue === "pound") {
      toDisplay.value = fromInput.value * 0.0000000022046;
    }
    if (fromValue === "microgram" && toValue === "ounce") {
      toDisplay.value = fromInput.value * 0.000000035274;
    }

    // Imperial (ton)
    if (fromValue === "imperial-ton" && toValue === "imperial-ton") {
      toDisplay.value = fromInput.value;
    }
    if (fromValue === "imperial-ton" && toValue === "tonne") {
      toDisplay.value = fromInput.value * 1.01605;
    }
    if (fromValue === "imperial-ton" && toValue === "kilogram") {
      toDisplay.value = fromInput.value * 1016.05;
    }
    if (fromValue === "imperial-ton" && toValue === "gram") {
      toDisplay.value = (fromInput.value * 1016000).toExponential(3);
    }
    if (fromValue === "imperial-ton" && toValue === "milligram") {
      toDisplay.value = (fromInput.value * 1016000000).toExponential(3);
    }
    if (fromValue === "imperial-ton" && toValue === "microgram") {
      toDisplay.value = (fromInput.value * 1016000000000).toExponential(3);
    }
    if (fromValue === "imperial-ton" && toValue === "us-ton") {
      toDisplay.value = fromInput.value * 1.12;
    }
    if (fromValue === "imperial-ton" && toValue === "stone") {
      toDisplay.value = fromInput.value * 160;
    }
    if (fromValue === "imperial-ton" && toValue === "pound") {
      toDisplay.value = fromInput.value * 2240;
    }
    if (fromValue === "imperial-ton" && toValue === "ounce") {
      toDisplay.value = fromInput.value * 35840;
    }

    // US (ton)
    if (fromValue === "us-ton" && toValue === "us-ton") {
      toDisplay.value = fromInput.value;
    }
    if (fromValue === "us-ton" && toValue === "tonne") {
      toDisplay.value = fromInput.value * 0.907185;
    }
    if (fromValue === "us-ton" && toValue === "kilogram") {
      toDisplay.value = fromInput.value * 907.185;
    }
    if (fromValue === "us-ton" && toValue === "gram") {
      toDisplay.value = fromInput.value * 907185;
    }
    if (fromValue === "us-ton" && toValue === "milligram") {
      toDisplay.value = (fromInput.value * 907200000).toExponential(3);
    }
    if (fromValue === "us-ton" && toValue === "microgram") {
      toDisplay.value = (fromInput.value * 907200000000).toExponential(3);
    }
    if (fromValue === "us-ton" && toValue === "imperial-ton") {
      toDisplay.value = fromInput.value * 0.892857;
    }
    if (fromValue === "us-ton" && toValue === "stone") {
      toDisplay.value = fromInput.value * 142.857;
    }
    if (fromValue === "us-ton" && toValue === "pound") {
      toDisplay.value = fromInput.value * 2000;
    }
    if (fromValue === "us-ton" && toValue === "ounce") {
      toDisplay.value = fromInput.value * 32000;
    }

    // Stone (st)
    if (fromValue === "stone" && toValue === "stone") {
      toDisplay.value = fromInput.value;
    }
    if (fromValue === "stone" && toValue === "tonne") {
      toDisplay.value = fromInput.value * 0.00635029;
    }
    if (fromValue === "stone" && toValue === "kilogram") {
      toDisplay.value = fromInput.value * 6.35029;
    }
    if (fromValue === "stone" && toValue === "gram") {
      toDisplay.value = fromInput.value * 6350.29;
    }
    if (fromValue === "stone" && toValue === "milligram") {
      toDisplay.value = (fromInput.value * 6350000).toExponential(2);
    }
    if (fromValue === "stone" && toValue === "microgram") {
      toDisplay.value = (fromInput.value * 6350000000).toExponential(2);
    }
    if (fromValue === "stone" && toValue === "imperial-ton") {
      toDisplay.value = fromInput.value * 0.00625;
    }
    if (fromValue === "stone" && toValue === "us-ton") {
      toDisplay.value = fromInput.value * 0.007;
    }
    if (fromValue === "stone" && toValue === "pound") {
      toDisplay.value = fromInput.value * 14;
    }
    if (fromValue === "stone" && toValue === "ounce") {
      toDisplay.value = fromInput.value * 224;
    }

    // Pound (lb)
    if (fromValue === "pound" && toValue === "pound") {
      toDisplay.value = fromInput.value;
    }
    if (fromValue === "pound" && toValue === "tonne") {
      toDisplay.value = fromInput.value * 0.000453592;
    }
    if (fromValue === "pound" && toValue === "kilogram") {
      toDisplay.value = fromInput.value * 0.453592;
    }
    if (fromValue === "pound" && toValue === "gram") {
      toDisplay.value = fromInput.value * 453.592;
    }
    if (fromValue === "pound" && toValue === "milligram") {
      toDisplay.value = fromInput.value * 453592;
    }
    if (fromValue === "pound" && toValue === "microgram") {
      toDisplay.value = (fromInput.value * 453600000).toExponential(3);
    }
    if (fromValue === "pound" && toValue === "imperial-ton") {
      toDisplay.value = fromInput.value * 0.000446429;
    }
    if (fromValue === "pound" && toValue === "us-ton") {
      toDisplay.value = fromInput.value * 0.0005;
    }
    if (fromValue === "pound" && toValue === "stone") {
      toDisplay.value = fromInput.value * 0.0714286;
    }
    if (fromValue === "pound" && toValue === "ounce") {
      toDisplay.value = fromInput.value * 16;
    }

    // Ounce (oz)
    if (fromValue === "ounce" && toValue === "ounce") {
      toDisplay.value = fromInput.value;
    }
    if (fromValue === "ounce" && toValue === "tonne") {
      toDisplay.value = (fromInput.value * 0.00002835).toExponential(4);
    }
    if (fromValue === "ounce" && toValue === "kilogram") {
      toDisplay.value = fromInput.value * 0.0283495;
    }
    if (fromValue === "ounce" && toValue === "gram") {
      toDisplay.value = fromInput.value * 28.3495;
    }
    if (fromValue === "ounce" && toValue === "milligram") {
      toDisplay.value = fromInput.value * 28349.5;
    }
    if (fromValue === "ounce" && toValue === "microgram") {
      toDisplay.value = (fromInput.value * 28350000).toExponential(4);
    }
    if (fromValue === "ounce" && toValue === "imperial-ton") {
      toDisplay.value = (fromInput.value * 0.000027902).toExponential(4);
    }
    if (fromValue === "ounce" && toValue === "us-ton") {
      toDisplay.value = (fromInput.value * 0.00003125).toExponential(3);
    }
    if (fromValue === "ounce" && toValue === "stone") {
      toDisplay.value = fromInput.value * 0.00446429;
    }
    if (fromValue === "ounce" && toValue === "pound") {
      toDisplay.value = fromInput.value * 0.0625;
    }

    if (fromValue === undefined || toValue === undefined) {
      massAlertDiplay.style.display = "block";
      fromInput.disabled = true;
    }
    massAlertBtn.addEventListener("click", () => {
      massAlertDiplay.style.display = "none";
      fromInput.disabled = false;
    });
  });

  resetWeight.addEventListener("click", () => {
    fromInput.value = null;
    toDisplay.value = null;
  });


  //TIME SELECTORS
  let inputNanosecond = document.querySelector(".nanosecond");
  let inputMicrosecond = document.querySelector(".microsecond");
  let inputMillisecond = document.querySelector(".millisecond");
  let inputSecond = document.querySelector(".second");
  let inputMinute = document.querySelector(".minute");
  let inputHour = document.querySelector(".hour");
  let inputDay = document.querySelector(".day");
  let inputWeek = document.querySelector(".week");
  let inputMonth = document.querySelector(".month");
  let inputCalendarYear = document.querySelector(".calendar-year");
  let inputDecade = document.querySelector(".decade");
  let inputCentury = document.querySelector(".century");
  let btnClear = document.querySelector(".clear-time-btn");
  let timePanel = document.querySelector(".time-panel");

  
  //TIME CONVERSIONS

  // Nanoseconds
  inputNanosecond.addEventListener("input", (e) => {
    let valNanoSeconds = e.target.value;

    inputMicrosecond.value = valNanoSeconds / 1000;
    inputMillisecond.value = (valNanoSeconds / 1000000).toExponential(0);
    inputSecond.value = (valNanoSeconds / 1000000000).toExponential(0);
    inputMinute.value = (valNanoSeconds / 60000000000).toExponential(4);
    inputHour.value = (valNanoSeconds / 3600000000000).toExponential(4);
    inputDay.value = (valNanoSeconds / 86400000000000).toExponential(4);
    inputWeek.value = (valNanoSeconds / 6.048).toExponential(4);
    inputMonth.value = (valNanoSeconds / 2.628).toExponential(4);
    inputCalendarYear.value = (valNanoSeconds / 3.154).toExponential(3);
    inputDecade.value = (valNanoSeconds / 3.154).toExponential(3);
    inputCentury.value = (valNanoSeconds / 3154000000000000000).toExponential(
      3
    );
  });

  // Microseconds
  inputMicrosecond.addEventListener("input", (e) => {
    let valmicroSeconds = e.target.value;

    inputNanosecond.value = valmicroSeconds * 1000;
    inputMillisecond.value = valmicroSeconds / 1000;
    inputSecond.value = (valmicroSeconds / 1000000).toExponential(0);
    inputMinute.value = (valmicroSeconds / 60000000).toExponential(4);
    inputHour.value = (valmicroSeconds / 3600000000).toExponential(4);
    inputDay.value = (valmicroSeconds / 86400000000).toExponential(4);
    inputWeek.value = (valmicroSeconds / 604800000000).toExponential(4);
    inputMonth.value = (valmicroSeconds / 2628000000000).toExponential(4);
    inputCalendarYear.value = (valmicroSeconds / 31540000000000).toExponential(
      3
    );
    inputDecade.value = (valmicroSeconds / 315400000000000).toExponential(3);
    inputCentury.value = (valmicroSeconds / 3154000000000000).toExponential(3);
  });

  // Milliseconds
  inputMillisecond.addEventListener("input", (e) => {
    let valmilliSeconds = e.target.value;

    inputNanosecond.value = (valmilliSeconds * 1000000).toExponential(3);
    inputMicrosecond.value = valmilliSeconds * 1000;
    inputSecond.value = valmilliSeconds / 1000;
    inputMinute.value = (valmilliSeconds / 60000).toExponential(4);
    inputHour.value = (valmilliSeconds / 3600000).toExponential(4);
    inputDay.value = (valmilliSeconds / 86400000).toExponential(4);
    inputWeek.value = (valmilliSeconds / 604800000).toExponential(4);
    inputMonth.value = (valmilliSeconds / 2628000000).toExponential(4);
    inputCalendarYear.value = (valmilliSeconds / 31540000000).toExponential(3);
    inputDecade.value = (valmilliSeconds / 315400000000).toExponential(3);
    inputCentury.value = (valmilliSeconds / 3154000000000).toExponential(3);
  });

  // Seconds
  inputSecond.addEventListener("input", (e) => {
    let valSeconds = e.target.value;

    inputNanosecond.value = (valSeconds * 1000000000).toExponential(3);
    inputMicrosecond.value = (valSeconds * 1000000).toExponential(3);
    inputMillisecond.value = valSeconds * 1000;
    inputMinute.value = valSeconds / 60;
    inputHour.value = valSeconds / 3600;
    inputDay.value = (valSeconds / 86400).toExponential(4);
    inputWeek.value = (valSeconds / 604800).toExponential(4);
    inputMonth.value = (valSeconds / 2628000).toExponential(4);
    inputCalendarYear.value = (valSeconds / 31540000).toExponential(3);
    inputDecade.value = (valSeconds / 354000000).toExponential(3);
    inputCentury.value = (valSeconds / 3154000000).toExponential(3);
  });

  // Minutes
  inputMinute.addEventListener("input", (e) => {
    let valMinutes = e.target.value;

    inputNanosecond.value = (valMinutes * 60000000000).toExponential(3);
    inputMicrosecond.value = (valMinutes * 60000000).toExponential(3);
    inputMillisecond.value = valMinutes * 60000;
    inputSecond.value = valMinutes * 60;
    inputHour.value = valMinutes / 60;
    inputDay.value = valMinutes / 1440;
    inputWeek.value = (valMinutes / 10080).toExponential(4);
    inputMonth.value = (valMinutes / 43800).toExponential(4);
    inputCalendarYear.value = (valMinutes / 525600).toExponential(4);
    inputDecade.value = (valMinutes / 5256000).toExponential(4);
    inputCentury.value = (valMinutes / 52560000).toExponential(4);
  });

  // Hours
  inputHour.addEventListener("input", (e) => {
    let valHours = e.target.value;

    inputNanosecond.value = (valHours * 3600000000000).toExponential(3);
    inputMicrosecond.value = (valHours * 3600000000).toExponential(3);
    inputMillisecond.value = (valHours * 3600000).toExponential(3);
    inputSecond.value = valHours * 3600;
    inputMinute.value = valHours * 60;
    inputDay.value = valHours / 24;
    inputWeek.value = valHours / 168;
    inputMonth.value = valHours / 730;
    inputCalendarYear.value = valHours / 8760;
    inputDecade.value = (valHours / 87600).toExponential(4);
    inputCentury.value = (valHours / 876000).toExponential(4);
  });

  // Days
  inputDay.addEventListener("input", (e) => {
    let valDays = e.target.value;

    inputNanosecond.value = (valDays * 86400000000000).toExponential(3);
    inputMicrosecond.value = (valDays * 86400000000).toExponential(3);
    inputMillisecond.value = (valDays * 86400000).toExponential(3);
    inputSecond.value = valDays * 86400;
    inputMinute.value = valDays * 1440;
    inputHour.value = valDays * 24;
    inputWeek.value = valDays / 7;
    inputMonth.value = valDays / 30.417;
    inputCalendarYear.value = valDays / 365;
    inputDecade.value = valDays / 3650;
    inputCentury.value = (valDays / 36500).toExponential(4);
  });

  // Weeks
  inputWeek.addEventListener("input", (e) => {
    let valWeeks = e.target.value;

    inputNanosecond.value = (valWeeks * 604800000000000).toExponential(3);
    inputMicrosecond.value = (valWeeks * 604800000000).toExponential(3);
    inputMillisecond.value = (valWeeks * 604800000).toExponential(3);
    inputSecond.value = valWeeks * 604800;
    inputMinute.value = valWeeks * 10080;
    inputHour.value = valWeeks * 168;
    inputDay.value = valWeeks * 7;
    inputMonth.value = valWeeks / 4.345;
    inputCalendarYear.value = valWeeks / 52.143;
    inputDecade.value = valWeeks / 521.4;
    inputCentury.value = valWeeks / 5214;
  });

  // Months
  inputMonth.addEventListener("input", (e) => {
    let valMonths = e.target.value;

    inputNanosecond.value = (valMonths * 2628000000000000).toExponential(3);
    inputMicrosecond.value = (valMonths * 2628000000000).toExponential(3);
    inputMillisecond.value = (valMonths * 2628000000).toExponential(3);
    inputSecond.value = (valMonths * 2628000).toExponential(3);
    inputMinute.value = valMonths * 43800;
    inputHour.value = valMonths * 730;
    inputDay.value = valMonths * 30.417;
    inputWeek.value = valMonths * 4.345;
    inputCalendarYear.value = valMonths / 12;
    inputDecade.value = valMonths / 120;
    inputCentury.value = valMonths / 1200;
  });

  // Calendaryear
  inputCalendarYear.addEventListener("input", (e) => {
    let valCalendarYears = e.target.value;

    inputNanosecond.value = (
      valCalendarYears * 31540000000000000
    ).toExponential(3);
    inputMicrosecond.value = (valCalendarYears * 31540000000000).toExponential(
      3
    );
    inputMillisecond.value = (valCalendarYears * 31540000000).toExponential(3);
    inputSecond.value = (valCalendarYears * 31540000).toExponential(3);
    inputMinute.value = valCalendarYears * 525600;
    inputHour.value = valCalendarYears * 8760;
    inputDay.value = valCalendarYears * 365;
    inputWeek.value = valCalendarYears * 52.143;
    inputMonth.value = valCalendarYears * 12;
    inputDecade.value = valCalendarYears / 10;
    inputCentury.value = valCalendarYears / 100;
  });

  // Decade
  inputDecade.addEventListener("input", (e) => {
    let valDecades = e.target.value;

    inputNanosecond.value = (valDecades * 315400000000000000).toExponential(3);
    inputMicrosecond.value = (valDecades * 315400000000000).toExponential(3);
    inputMillisecond.value = (valDecades * 315400000000).toExponential(3);
    inputSecond.value = (valDecades * 315400000).toExponential(3);
    inputMinute.value = (valDecades * 5256000).toExponential(3);
    inputHour.value = valDecades * 87600;
    inputDay.value = valDecades * 3650;
    inputWeek.value = valDecades * 521.4;
    inputMonth.value = valDecades * 120;
    inputCalendarYear.value = valDecades * 10;
    inputCentury.value = valDecades / 10;
  });

  // Century
  inputCentury.addEventListener("input", (e) => {
    let valCenturies = e.target.value;

    inputNanosecond.value = (valCenturies * 3154000000000000000).toExponential(
      3
    );
    inputMicrosecond.value = (valCenturies * 3154000000000000).toExponential(3);
    inputMillisecond.value = (valCenturies * 3154000000000).toExponential(3);
    inputSecond.value = (valCenturies * 3154000000).toExponential(3);
    inputMinute.value = (valCenturies * 52560000).toExponential(3);
    inputHour.value = valCenturies * 876000;
    inputDay.value = valCenturies * 36500;
    inputWeek.value = valCenturies * 5214;
    inputMonth.value = valCenturies * 1200;
    inputCalendarYear.value = valCenturies * 100;
    inputDecade.value = valCenturies * 10;
  });

  //CLEAR FIELDS
  btnClear.addEventListener("click", () => {
    inputSecond.value = null;
    inputNanosecond.value = null;
    inputMicrosecond.value = null;
    inputMillisecond.value = null;
    inputMinute.value = null;
    inputHour.value = null;
    inputDay.value = null;
    inputWeek.value = null;
    inputMonth.value = null;
    inputCalendarYear.value = null;
    inputDecade.value = null;
    inputCentury.value = null;
  });

let massPanel = document.querySelector(".mass-panel");
let temperaturePanel = document.querySelector(".temperature");


let btnMass = document.querySelector(".btn-mass-display");
let btnTemperature = document.querySelector(".btn-temperature-display");
let btnTime = document.querySelector(".btn-time-display");

btnMass.addEventListener("click", () => {
  massPanel.style.display = "flex";
  timePanel.style.display = "none";
  temperaturePanel.style.display = "none";
});

btnTemperature.addEventListener("click", () => {
  temperaturePanel.style.display = "flex";
  massPanel.style.display = "none";
  timePanel.style.display = "none";
});

btnTime.addEventListener("click", () => {
  timePanel.style.display = "flex";
  massPanel.style.display = "none";
  temperaturePanel.style.display = "none";
});