let buttons = document.querySelectorAll('.button');
let outPutString = "";
let expression;
let resultCheck = false;

Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            if (document.querySelectorAll('.display-input').innerHTML != "") {
                outPutString = eval(outPutString);
                document.querySelector('.display-input').value = outPutString;
                resultCheck = true;
            }

            else {
                document.querySelector('.display-input').value = "Undefined";
            }
        }
        else if (e.target.innerHTML == "RESET") {
            outPutString = "";
            document.querySelector('.display-input').value = outPutString || "0";

        }
        else if (e.target.innerHTML == "DEL") {
            outPutString = document.querySelector('.display-input').value.slice(0, -1);
            document.querySelector('.display-input').value = outPutString;
        }
        else {
            if (resultCheck == true) {
                outPutString = "";
                document.querySelector('.display-input').value = outPutString;
                resultCheck = false;
            }
            if (['+', '-', 'x', '/'].includes(e.target.innerHTML)) {
                if (e.target.innerHTML == "x") {
                    e.target.innerHTML = "*";
                }
            }
            outPutString = outPutString + e.target.innerHTML;
            document.querySelector('.display-input').value = outPutString || "0";

        }
    })
});
// Get the slider element
const themeSlider = document.getElementById('theme-slider');

// Listen for changes in the slider value
themeSlider.addEventListener('input', () => {
    // Get the current slider value (0, 1, 2, etc.)
    console.log(themeSlider.value);
    const sliderValue = parseInt(themeSlider.value);

    // Define color themes based on slider value
    let mainBgColor, mainTextColor,inputText, toggleBg, displayBg, sliderThumb, numberKey, NumberKeyShadow, keyText, deleteBg, deleteShadow,
        equalBg, equalShadow;

    switch (sliderValue) {
        case 0:
            mainBgColor = 'hsl(222, 26%, 31%)'; // Change to your desired color
            mainTextColor = 'hsl(0, 0%, 100%)'; // Change to your desired color
            toggleBg = 'hsl(223, 31%, 20%)';
            displayBg = 'hsl(224, 36%, 15%)';
            sliderThumb = 'hsl(6, 63%, 50%)';
            numberKey = 'hsl(30, 25%, 89%)';
            NumberKeyShadow = 'hsl(28, 16%, 65%)';
            keyText = 'hsl(221, 14%, 31%)';
            deleteBg = 'hsl(225, 21%, 49%)';
            deleteShadow = 'hsl(224, 28%, 35%)';
            equalBg='hsl(6, 63%, 50%)';
            equalShadow='hsl(6, 70%, 34%)';

            document.documentElement.style.setProperty('--main-background-color', mainBgColor);
            document.documentElement.style.setProperty('--main-text-color', mainTextColor);
            document.documentElement.style.setProperty('--toggle-bg', toggleBg);
            document.documentElement.style.setProperty('--display-color', displayBg);
            document.documentElement.style.setProperty('--slider-thumb', sliderThumb);
            document.documentElement.style.setProperty('--number-key-background', numberKey);
            document.documentElement.style.setProperty('--number-key-shadow', NumberKeyShadow);
            document.documentElement.style.setProperty('--key-text-color', keyText);
            document.documentElement.style.setProperty('--delete-key-bg', deleteBg);
            document.documentElement.style.setProperty('--delete-key-shadow', deleteShadow);
            document.documentElement.style.setProperty('--equal-key-bg', equalBg);
            document.documentElement.style.setProperty('--equal-key-shadow', equalShadow);

            break;
        case 1:
            mainBgColor = 'hsl(0, 0%, 90%)'; // Change to your desired color
            mainTextColor = 'hsl(60, 10%, 19%)'; // Change to your desired color
            toggleBg = 'hsl(0, 5%, 81%)';
            displayBg = 'hsl(0, 0%, 93%)';
            sliderThumb = ' hsl(25, 98%, 40%)';
            numberKey = 'hsl(45, 7%, 89%)';
            NumberKeyShadow = 'hsl(35, 11%, 61%)';
            keyText = 'hsl(60, 10%, 19%)';
            deleteBg = 'hsl(185, 42%, 37%)';
            deleteShadow = 'hsl(185, 58%, 25%)';
            equalBg='hsl(25, 98%, 40%)';
            equalShadow='hsl(25, 99%, 27%)';

            document.documentElement.style.setProperty('--main-background-color', mainBgColor);
            document.documentElement.style.setProperty('--main-text-color', mainTextColor);
            document.documentElement.style.setProperty('--toggle-bg', toggleBg);
            document.documentElement.style.setProperty('--display-color', displayBg);
            document.documentElement.style.setProperty('--slider-thumb', sliderThumb);
            document.documentElement.style.setProperty('--number-key-background', numberKey);
            document.documentElement.style.setProperty('--number-key-shadow', NumberKeyShadow);
            document.documentElement.style.setProperty('--key-text-color', keyText);
            document.documentElement.style.setProperty('--delete-key-bg', deleteBg);
            document.documentElement.style.setProperty('--delete-key-shadow', deleteShadow);
            document.documentElement.style.setProperty('--equal-key-bg', equalBg);
            document.documentElement.style.setProperty('--equal-key-shadow', equalShadow);
            break;
        case 2:
            mainBgColor = 'hsl(268, 75%, 9%)'; // Change to your desired color
            mainTextColor = 'hsl(52, 100%, 62%)'; // Change to your desired color
            toggleBg = 'hsl(268, 71%, 12%)';
            displayBg = 'hsl(268, 71%, 12%)';
            sliderThumb = ' hsl(176, 100%, 44%)';
            numberKey = 'hsl(268, 47%, 21%)';
            NumberKeyShadow = 'hsl(290, 70%, 36%)';
            keyText = 'hsl(52, 100%, 62%)';
            deleteBg = 'hsl(281, 89%, 26%)';
            deleteShadow = 'hsl(285, 91%, 52%)';
            equalBg='hsl(176, 100%, 44%)';
            equalShadow='hsl(177, 92%, 70%)';

            document.documentElement.style.setProperty('--main-background-color', mainBgColor);
            document.documentElement.style.setProperty('--main-text-color', mainTextColor);
            document.documentElement.style.setProperty('--toggle-bg', toggleBg);
            document.documentElement.style.setProperty('--display-color', displayBg);
            document.documentElement.style.setProperty('--slider-thumb', sliderThumb);
            document.documentElement.style.setProperty('--number-key-background', numberKey);
            document.documentElement.style.setProperty('--number-key-shadow', NumberKeyShadow);
            document.documentElement.style.setProperty('--key-text-color', keyText);
            document.documentElement.style.setProperty('--delete-key-bg', deleteBg);
            document.documentElement.style.setProperty('--delete-key-shadow', deleteShadow);
            document.documentElement.style.setProperty('--equal-key-bg', equalBg);
            document.documentElement.style.setProperty('--equal-key-shadow', equalShadow);
            document.querySelector(".equal").style.color="hsl(198, 20%, 13%)";
            break;    
        default:
            backgroundColor = '#3b4664'; // Default background color
            textColor = 'white'; // Default text color
    }

    // Update the CSS variables with the chosen color theme
});
