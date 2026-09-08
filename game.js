// Game State
let gameState = {
    team1: null,
    team2: null,
    score1: 0,
    score2: 0,
    matchTime: 0,
    matchDuration: 600, // 10 minutes in seconds
    possession: 50,
    currentTeam: 1,
    currentPlayer: 0,
    isMatchRunning: false,
    events: [],
    selectedClub: null,
    userTeam: null
};

let gameInterval = null;
let canvas = null;
let ctx = null;

// Initialize game
function initGame() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    loadUserTeam();
}

// Menu Navigation
function goToMenu() {
    document.getElementById('mainMenu').classList.remove('hidden');
    document.getElementById('teamBuilder').classList.add('hidden');
    document.getElementById('playerSelection').classList.add('hidden');
    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('leaderboard').classList.add('hidden');
}

function showTeamBuilder() {
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('teamBuilder').classList.remove('hidden');
    document.getElementById('playerSelection').classList.add('hidden');
    renderClubs();
}

function showPlayers() {
    document.getElementById('playerSelection').classList.remove('hidden');
    document.getElementById('mainMenu').classList.add('hidden');
    renderPlayerGrid();
}

function showLeaderboard() {
    document.getElementById('leaderboard').classList.remove('hidden');
    document.getElementById('mainMenu').classList.add('hidden');
    renderLeaderboard();
}

// Club Selection
function selectClub(clubId) {
    gameState.selectedClub = clubId;
    const cards = document.querySelectorAll('.club-card');
    cards.forEach(card => card.classList.remove('selected'));
    event.target.closest('.club-card').classList.add('selected');
}

function renderClubs() {
    const clubList = document.getElementById('clubList');
    clubList.innerHTML = '';
    CLUBS.forEach(club => {
        clubList.innerHTML += createClubCardHTML(club);
    });
}

// Player Selection
function renderPlayerGrid() {
    const playerGrid = document.getElementById('playerGrid');
    playerGrid.innerHTML = '';
    ALL_PLAYERS.forEach(player => {
        playerGrid.innerHTML += createPlayerCardHTML(player);
    });
}

function selectPlayer(playerId) {
    const player = ALL_PLAYERS.find(p => p.id === playerId);
    if (!gameState.userTeam) {
        gameState.userTeam = [];
    }
    
    if (gameState.userTeam.length < 11 && !gameState.userTeam.find(p => p.id === playerId)) {
        gameState.userTeam.push(player);
        event.target.closest('.player-card').classList.add('selected');
        updateSquadDisplay();
    }
}

function updateSquadDisplay() {
    const squadList = document.getElementById('squadList');
    squadList.innerHTML = '<h4>Selected Players:</h4>';
    gameState.userTeam.forEach((player, index) => {
        squadList.innerHTML += `
            <div class="squad-player-item">
                <p>${index + 1}. ${player.image} ${player.name} (${player.position}) - ⭐ ${player.overall}</p>
                <button onclick="removeFromSquad(${index})" style="background: #ff6b6b; padding: 5px 10px; border: none; color: white; border-radius: 3px; cursor: pointer;">Remove</button>
            </div>
        `;
    });
}

function removeFromSquad(index) {
    gameState.userTeam.splice(index, 1);
    updateSquadDisplay();
}

function saveTeam() {
    if (!gameState.userTeam || gameState.userTeam.length < 11) {
        alert('Please select 11 players for your team!');
        return;
    }
    saveTeamToStorage(gameState.userTeam);
    alert('Team saved successfully!');
    goToMenu();
}

function loadUserTeam() {
    const savedTeam = getTeamFromStorage();
    if (savedTeam) {
        gameState.userTeam = savedTeam;
    }
}

// Start Match
function startGame() {
    loadUserTeam();
    
    if (!gameState.userTeam || gameState.userTeam.length < 11) {
        alert('Please build your team first!');
        showTeamBuilder();
        return;
    }
    
    // Create opponent team
    const opponent = [];
    for (let i = 0; i < 11; i++) {
        opponent.push(ALL_PLAYERS[Math.floor(Math.random() * ALL_PLAYERS.length)]);
    }
    
    gameState.team1 = gameState.userTeam;
    gameState.team2 = opponent;
    gameState.score1 = 0;
    gameState.score2 = 0;
    gameState.matchTime = 0;
    gameState.possession = 50;
    gameState.events = [];
    gameState.isMatchRunning = true;
    gameState.currentTeam = Math.random() > 0.5 ? 1 : 2;
    
    // Switch to game screen
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    
    document.getElementById('team1Name').textContent = 'Your Team';
    document.getElementById('team2Name').textContent = 'Opponent';
    
    // Start match timer
    gameInterval = setInterval(updateMatch, 100);
    drawField();
}

function updateMatch() {
    gameState.matchTime += 0.1;
    
    // Update possession randomly
    if (Math.random() > 0.98) {
        gameState.possession += (Math.random() - 0.5) * 10;
        gameState.possession = Math.max(20, Math.min(80, gameState.possession));
    }
    
    // Update UI
    document.getElementById('team1Score').textContent = gameState.score1;
    document.getElementById('team2Score').textContent = gameState.score2;
    document.getElementById('matchTime').textContent = formatTime(gameState.matchTime);
    document.getElementById('possession').textContent = `Possession: ${Math.round(gameState.possession)}%`;
    
    // Draw field
    drawField();
    
    // Check if match is over
    if (gameState.matchTime >= gameState.matchDuration) {
        endMatch();
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function drawField() {
    if (!canvas || !ctx) return;
    
    // Clear field
    ctx.fillStyle = '#1b5e20';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grass lines
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    
    // Center line
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    
    // Center circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
    ctx.stroke();
    
    // Goal areas
    ctx.strokeRect(10, canvas.height / 2 - 80, 100, 160);
    ctx.strokeRect(canvas.width - 110, canvas.height / 2 - 80, 100, 160);
    
    // Draw players
    drawTeam(gameState.team1, 100, 'blue');
    drawTeam(gameState.team2, canvas.width - 100, 'red');
    
    // Draw ball
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 8, 0, Math.PI * 2);
    ctx.fill();
}

function drawTeam(team, x, color) {
    const startY = canvas.height / 2 - 150;
    team.forEach((player, index) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, startY + (index * 30), 12, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#fff';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(player.position, x, startY + (index * 30) + 3);
    });
}

// Game Actions
function shootGoal() {
    if (!gameState.isMatchRunning) return;
    
    const accuracy = Math.random() * 100;
    const playerSkill = gameState.currentTeam === 1 ? 
        gameState.team1[gameState.currentPlayer].shooting : 
        gameState.team2[gameState.currentPlayer].shooting;
    
    if (accuracy < playerSkill * 0.7) {
        if (gameState.currentTeam === 1) {
            gameState.score1++;
            addEvent('⚽ GOAL! ' + gameState.team1[gameState.currentPlayer].name + ' scores!');
        } else {
            gameState.score2++;
            addEvent('⚽ GOAL! ' + gameState.team2[gameState.currentPlayer].name + ' scores!');
        }
    } else {
        addEvent('❌ Shot missed!');
    }
    switchPossession();
}

function takePenalty() {
    if (!gameState.isMatchRunning) return;
    
    const accuracy = Math.random() * 100;
    const playerSkill = gameState.currentTeam === 1 ? 
        gameState.team1[gameState.currentPlayer].shooting : 
        gameState.team2[gameState.currentPlayer].shooting;
    
    if (accuracy < playerSkill * 0.8) {
        if (gameState.currentTeam === 1) {
            gameState.score1++;
            addEvent('⚽ PENALTY GOAL! ' + gameState.team1[gameState.currentPlayer].name);
        } else {
            gameState.score2++;
            addEvent('⚽ PENALTY GOAL! ' + gameState.team2[gameState.currentPlayer].name);
        }
    } else {
        addEvent('❌ Penalty saved!');
    }
    switchPossession();
}

function pass() {
    if (!gameState.isMatchRunning) return;
    
    const accuracy = Math.random() * 100;
    const playerSkill = gameState.currentTeam === 1 ? 
        gameState.team1[gameState.currentPlayer].passing : 
        gameState.team2[gameState.currentPlayer].passing;
    
    if (accuracy < playerSkill * 0.75) {
        addEvent('✅ Successful pass!');
    } else {
        addEvent('❌ Pass intercepted!');
        switchPossession();
    }
}

function switchPlayer() {
    if (!gameState.isMatchRunning) return;
    
    const team = gameState.currentTeam === 1 ? gameState.team1 : gameState.team2;
    gameState.currentPlayer = Math.floor(Math.random() * team.length);
    addEvent('🔄 Player switched to ' + team[gameState.currentPlayer].name);
}

function switchPossession() {
    gameState.currentTeam = gameState.currentTeam === 1 ? 2 : 1;
    const team = gameState.currentTeam === 1 ? gameState.team1 : gameState.team2;
    gameState.currentPlayer = Math.floor(Math.random() * team.length);
}

function addEvent(message) {
    gameState.events.push(message);
    const eventsList = document.getElementById('eventsList');
    const eventItem = document.createElement('div');
    eventItem.className = 'event-item';
    eventItem.textContent = message;
    eventsList.insertBefore(eventItem, eventsList.firstChild);
    
    // Keep only last 10 events
    while (eventsList.children.length > 11) {
        eventsList.removeChild(eventsList.lastChild);
    }
}

function endMatch() {
    clearInterval(gameInterval);
    gameState.isMatchRunning = false;
    
    let result = '';
    if (gameState.score1 > gameState.score2) {
        result = 'WON';
        updateLeaderboard('Your Team', gameState.score1, 1);
    } else if (gameState.score2 > gameState.score1) {
        result = 'LOST';
    } else {
        result = 'DRAW';
        updateLeaderboard('Your Team', gameState.score1, 0);
    }
    
    saveMatchResult({
        team1Score: gameState.score1,
        team2Score: gameState.score2,
        result: result,
        duration: gameState.matchTime
    });
    
    setTimeout(() => {
        alert(`Match Over! Final Score: ${gameState.score1} - ${gameState.score2}\nResult: ${result}`);
        goToMenu();
    }, 1000);
}

function renderLeaderboard() {
    const leaderboard = getLeaderboard();
    const leaderboardList = document.getElementById('leaderboardList');
    leaderboardList.innerHTML = '';
    
    if (leaderboard.length === 0) {
        leaderboardList.innerHTML = '<p style="text-align: center; color: #aaa;">No matches played yet</p>';
        return;
    }
    
    leaderboard.forEach((player, index) => {
        leaderboardList.innerHTML += `
            <div class="leaderboard-item">
                <div class="leaderboard-rank">#${index + 1}</div>
                <div class="leaderboard-name">${player.name}</div>
                <div class="leaderboard-wins">🏆 Wins: ${player.wins}</div>
                <div class="leaderboard-goals">⚽ Goals: ${player.goals}</div>
            </div>
        `;
    });
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', initGame);
