function searchDest() {
    const input = document.getElementById('locationInput').value.toLowerCase;
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '';

    fetch('./travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const data.
        })
}