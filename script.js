let form = document.querySelector('.registration');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let newsLetter = document.querySelector('#newsletter');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#ConfirmPassword');
let passwordStrength = document.querySelector('#strength');
let countryCode = document.querySelector('#countryCode');
let phoneNumber = document.querySelector('#phoneNumber');
let streetAddress = document.querySelector('#streetAddress');
let countrySelect = document.querySelector('#countrySelect');
let citySelect = document.querySelector('#citySelect');
let postalCode = document.querySelector('#postalCode');
let createAccountButton = document.querySelector('.submitButton');

/*
* It's better to create list of all elements that need to be validated, because otherwise there will be lots of repeated
* code lines. Because input and select have different change event, we need to create 2 separated lists (one for inputs
* and one for selectors)
* */

let listOfElementsInput = [firstName, lastName, email, password, confirmPassword, phoneNumber, streetAddress, postalCode];
let listOfElementsChange = [countryCode, countrySelect, citySelect];

let accountInformation = document.querySelector('.accountInformation');
let accountName = document.querySelector('.accountName');
let accountEmail = document.querySelector('.accountEmail');
let subscription = document.querySelector('.subscription');
let street = document.querySelector('.street');
let infoPostalCode = document.querySelector('.postalCode');
let country = document.querySelector('.country');

let validationFunction = function () {
    let validation = firstName.checkValidity() && lastName.checkValidity() && email.checkValidity() &&
        password.checkValidity && confirmPassword.checkValidity && password.value === confirmPassword.value &&
        countryCode.checkValidity() && phoneNumber.checkValidity() && streetAddress.checkValidity() &&
        countrySelect.checkValidity() && citySelect.checkValidity() && postalCode.checkValidity();
    if (validation) {
        createAccountButton.removeAttribute('disabled');
    } else {
        createAccountButton.setAttribute('disabled', 'disabled');
    }
}

let listOfCities = {
    'England': ['London', 'Liverpool', 'Manchester', 'Brighton', 'Newcastle'],
    'Ukraine': ['Kyiv', 'Lviv', 'Vinnytsia', 'Dnipro', 'Zaporizzhya'],
    'France': ['Lyon', 'Paris', 'Marseille', 'Toulouse', 'Nice']
}

/*There is a room for password validation improvement*/

/*
let strongPasswordRegEx = /^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я])[0-9a-zA-Zа-яА-Я]{8,}$/;
*/

password.addEventListener('input', () => {
    if (password.value === '') {
        passwordStrength.className = '';
        passwordStrength.innerHTML = 'No Password';
    }
    if (password.value.length >= 1 && password.value.length < 6) {
        passwordStrength.className = 'red';
        passwordStrength.innerHTML = 'Must consist of 6 characters';
    }
    if (password.value.length >= 6 && password.value.length <= 8) {
        passwordStrength.className = 'red';
        passwordStrength.innerHTML = 'Weak';
    }
    if (password.value.length >= 9 && password.value.length <= 12) {
        passwordStrength.className = 'yellow';
        passwordStrength.innerHTML = 'Medium';
    }
    if (password.value.length > 13) {
        passwordStrength.className = 'green';
        passwordStrength.innerHTML = 'Strong';
    }
})

countrySelect.addEventListener('change', () => {
    citySelect.innerHTML = `<option value="" disabled selected>Select your City</option>`;
    let cities = listOfCities[countrySelect.options[countrySelect.selectedIndex].text];
    cities.forEach((city) => {
        let option = document.createElement('option')
        option.innerHTML = city;
        citySelect.appendChild(option);
    })
})

listOfElementsInput.forEach((element) => {
    element.addEventListener('input', validationFunction);
})

listOfElementsChange.forEach((element) => {
    element.addEventListener('change', validationFunction);
})

createAccountButton.addEventListener('click', () => {
    form.className = 'hidden';
    accountInformation.className = 'shown';
    accountName.innerHTML = `${firstName.value} ${lastName.value}`;
    accountEmail.innerHTML = `${email.value}`;
    street.innerHTML = `${streetAddress.value}`;
    infoPostalCode.innerHTML = `${postalCode.value}`;
    country.innerHTML = `${countrySelect.value}`;
    if (newsLetter.checked) {
        subscription.innerHTML = 'You are subscribed to our newsletter'
    }
})