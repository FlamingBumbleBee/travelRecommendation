function searchDest() {
    const input = document.getElementById('locationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    console.log(input);
    resultDiv.innerHTML = '';

    fetch('./travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const countryRec = data.countries.find(item => item.name.toLowerCase() ===input);
            
            if (countryRec) {
                console.log(countryRec.id);
            }
        })
        .catch(error => {
            console.error('Error;', error);
            resultDiv.innerHTML = 'An error occured while fetching data';
        });
}

btnSearch.addEventListener('click', searchDest);

function reset() {
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = ''
    document.getElementById('locationInput').value = ""
}

btnReset.addEventListener('click', reset);