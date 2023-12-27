const searchInput = document.getElementById('searchInput');
const predictionList = document.getElementById('predictionList');

const predictions = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Python', 'Java', 'C++'];

function showPredictions() {
    const userInput = searchInput.value.toLowerCase();
    const matchingPredictions = predictions.filter(prediction =>
        prediction.toLowerCase().includes(userInput)
    );

    displayPredictions(matchingPredictions);
}

function displayPredictions(matchingPredictions) {
    predictionList.innerHTML = '';

    if (matchingPredictions.length > 0) {
        matchingPredictions.forEach(prediction => {
            const listItem = document.createElement('li');
            listItem.textContent = prediction;
            listItem.addEventListener('click', () => {
                searchInput.value = prediction;
                predictionList.style.display = 'none';
            });
            predictionList.appendChild(listItem);
        });

        predictionList.style.display = 'block';
    } else {
        predictionList.style.display = 'none';
    }
}



 