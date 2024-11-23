let echipa = [];

function addPlayer(playerName, playerId) {
    if (echipa.length < 5) {
        // Adaugarea jucatorului la echipa selectata
        echipa.push(playerId);
        const jucatorAles = document.createElement('div');
        jucatorAles.className = 'selectedPlayer';
        jucatorAles.id = playerId + '_selected';
        jucatorAles.innerHTML = `${playerName} <button onclick="removePlayer('${playerId}')">Șterge</button>`;
        document.getElementById('selectedTeam').appendChild(jucatorAles);

        // Dezactivarea butonului de adaugare pentru jucatorul adaugat
        document.getElementById(playerId).querySelector('button').disabled = true;
    } else {
        alert('Poți selecta doar 5 jucatori.');
    }
}

function removePlayer(playerId) {
    // Eliminarea jucatorului din echipa selectata
    const playerIndex = echipa.indexOf(playerId);
    if (playerIndex > -1) {
        echipa.splice(playerIndex, 1);
        document.getElementById(playerId + '_selected').remove();

        // Reactivarea butonului de adaugare pentru jucatorul eliminat
        document.getElementById(playerId).querySelector('button').disabled = false;
    }
}
