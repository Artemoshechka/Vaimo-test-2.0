let countrySelect = document.querySelector('#countrySelect');
let citySelect = document.querySelector('#citySelect');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#ConfirmPassword');
let passwordStrength = document.querySelector('#strength');

let strongPasswordRegEx = /^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я])[0-9a-zA-Zа-яА-Я]{8,}$/;
let listOfCities = {
    'England': ['London', 'Liverpool', 'Manchester', 'Brighton', 'Newcastle'],
    'Ukraine': ['Kyiv', 'Lviv', 'Vinnytsia', 'Dnipro', 'Zaporizzhya'],
    'France': ['Lyon', 'Paris', 'Marseille', 'Toulouse', 'Nice']
}

/*
password.addEventListener('input', () => {
    if (password.value === '') {
        passwordStrength.innerHTML = 'No Password';
    }
    if (password.value.length >= 1 && password.value.length < 6) {
        passwordStrength.innerHTML = 'Should be at least 6 characters'
    }
    if (password.value.length >= 6 && !strongPasswordRegEx.test(password.value)) {
        passwordStrength.className = 'red';
        passwordStrength.innerHTML = 'Weak';
    }
    if (mediocrePasswordRegEx.test(password.value)) {
        passwordStrength.className = 'yellow';
        passwordStrength.innerHTML = 'Medium';
    }
    if (strongPasswordRegEx.test(password.value)) {
        passwordStrength.className = 'green';
        passwordStrength.innerHTML = 'Strong'
    }
})
 */

countrySelect.addEventListener('change', () => {
    citySelect.innerHTML = `<option value="" disabled selected>Select your City</option>`;
    let cities = listOfCities[countrySelect.options[countrySelect.selectedIndex].text];
    cities.forEach((city) => {
        let option = document.createElement('option')
        option.innerHTML = city;
        citySelect.appendChild(option);
    })
})