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

let validationFunction = function () {
    /*To be continued*/
}

let strongPasswordRegEx = /^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я])[0-9a-zA-Zа-яА-Я]{8,}$/;
let listOfCities = {
    'England': ['London', 'Liverpool', 'Manchester', 'Brighton', 'Newcastle'],
    'Ukraine': ['Kyiv', 'Lviv', 'Vinnytsia', 'Dnipro', 'Zaporizzhya'],
    'France': ['Lyon', 'Paris', 'Marseille', 'Toulouse', 'Nice']
}

/*По хорошему конечно нужно сделать более серьезную валидацию пароля
* через регулярные выражения.
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