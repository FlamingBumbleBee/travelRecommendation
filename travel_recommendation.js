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
                for (const country of data['countries']) {
                    resultDiv.innerHTML += `<h2>${country.name}</h2>`;
                    for (const city of country['cities']) {
                        resultDiv.innerHTML += `<img src="${city.imageUrl}" width="400">`;
                        resultDiv.innerHTML += `<h3>${city.name}</h3>`;
                        resultDiv.innerHTML += `<p>${city.description}</p>`;
                    }

                }
            } else if (input.substring(0,5) === 'beach') {
                for (const beach of data['beaches']) {
                    resultDiv.innerHTML += `<img src="${beach.imageUrl}" width="400">`;
                    resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                    resultDiv.innerHTML += `<p>${beach.description}</p>`;
                }
            } else if (input.substring(0,6) === 'temple') {
                for (const temple of data['temples']) {
                    resultDiv.innerHTML += `<img src="${temple.imageUrl}" width="400">`;
                    resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                    resultDiv.innerHTML += `<p>${temple.description}</p>`;
                }
            } else {
                resultDiv.innerHTML += 'Destination not found!';
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