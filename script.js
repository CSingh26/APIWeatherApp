document.addEventListener('DOMContentLoaded', () => {

    const countryDrop = document.querySelector('#country-selector')
    fetch('https://restcountries.com/v3.1/all').then(res => {
        return res.json();
    }).then(data => {
        let output ="";
        data.forEach(country => {
            output += `<option>${country.name.common}</option>`;
        })
        countryDrop.innerHTML = output
    }).catch(err => {
        console.log(err);
    })
})