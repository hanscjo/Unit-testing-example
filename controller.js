function updateInfo() {
    const nameInput = getInputValue('nameInput');
    const birthdateInput = getInputValue('birthdateInput');

    if (validateValues(nameInput, birthdateInput)) {
        username = nameInput.trim();
        age = getAge(Number(birthdateInput));
        message = `Hei, ${username}, på ${age} år!`;
    }
    else {
        username = nameInput;
        age = null;
        message = '';
    }
    view();
}

function validateValues(nameInput, birthdateInput) {
    return (checkUsername(nameInput) && checkBirthDate(birthdateInput));
}

function checkUsername(nameInput) {
    nameInput = nameInput.replace(/\s/g,'');
    if (nameInput.length < 2) {
        return false;
    }
    else {
        for (charIndex = 0; charIndex < nameInput.length; charIndex++) {
            if (!checkCharacter(nameInput[charIndex])) {
                return false;
            }; 
        }
        return true;
    }

    
}

function checkCharacter(char) {
    return char.toLowerCase() != char.toUpperCase(); //Dette fungerer ikke for språk uten små og store bokstaver, som f.eks arabisk, kinesisk osv.
}

function checkBirthDate(birthdateInput) {
    const year = Number(birthdateInput);
    
    if (!year) {
        return false;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    if (year < 1900 || year > currentYear) {
        return false;
    }

    else {
        return true;
    }
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function getAge(birthdateInput) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear - birthdateInput;
}