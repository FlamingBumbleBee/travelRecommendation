function searchDest() {
    const input = document.getElementById('locationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    //console.log(input);
    resultDiv.innerHTML = '';

    fetch('./travel_recommendation_api.json')
        .then(response => response.json())

        .then(data => {
            console.log(data['countries']);
            //const travelCategory = data.find(item => )
            if (input.substring(0,6) === 'countr')  {
                for (const country of data) {
                    console.log(data.countries.name);
                    resultDiv.innerHTML =+ `<h2>${countries.name}</h2>`;
                }
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