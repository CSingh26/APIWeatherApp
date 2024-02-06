document.addEventListener('DOMContentLoaded', () => {
    const countryDrop = document.querySelector('#country-selector');
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            // Sort the countries by name in alphabetical order
            const sortedCountries = data.sort((a, b) =>
                a.name.common.localeCompare(b.name.common, 'en', { sensitivity: 'base' })
            );

            let output = sortedCountries.map(country =>
                `<option value="${country.cca2}">${country.name.common}</option>`
            ).join(''); // Join the array of strings into a single string

            countryDrop.innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        });
});