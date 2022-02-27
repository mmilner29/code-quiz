var hsTable = document.getElementById('hs-table')

//Retrieve high scores from local storage
var scoreLog = localStorage.getItem('scoreLog');
scoreLog = JSON.parse(scoreLog);

//Display high scores on page
function displayScores() {
    if (scoreLog !== null) {
        for(var i = 0; i < scoreLog.length; i++) {

            //create table row to hold data
            var createTableRow = document.createElement("tr");
            hsTable.appendChild(createTableRow);

            //create column in row to hold initials
            var createTableInitial = document.createElement("td");
            createTableInitial.textContent = scoreLog[i].initials;
            createTableRow.appendChild(createTableInitial);
            
            //create column in row to hold score
            var createTableScore = document.createElement("td");
            createTableScore.textContent = scoreLog[i].score;
            createTableRow.appendChild(createTableScore);
        }
    }
};

displayScores();