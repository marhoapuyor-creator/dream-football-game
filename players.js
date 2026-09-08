// Football Players Database
const PLAYERS = {
    strikers: [
        {
            id: 1,
            name: "Lionel Messi",
            club: "Inter Miami",
            position: "ST",
            pace: 85,
            shooting: 94,
            passing: 91,
            dribbling: 95,
            defense: 38,
            physical: 65,
            overall: 93,
            image: "🇦🇷"
        },
        {
            id: 2,
            name: "Cristiano Ronaldo",
            club: "Al Nassr",
            position: "ST",
            pace: 89,
            shooting: 93,
            passing: 82,
            dribbling: 87,
            defense: 35,
            physical: 78,
            overall: 92,
            image: "🇵🇹"
        },
        {
            id: 3,
            name: "Kylian Mbappé",
            club: "Paris SG",
            position: "ST",
            pace: 97,
            shooting: 89,
            passing: 85,
            dribbling: 91,
            defense: 38,
            physical: 76,
            overall: 91,
            image: "🇫🇷"
        },
        {
            id: 4,
            name: "Neymar Jr",
            club: "Al-Hilal",
            position: "LW",
            pace: 89,
            shooting: 83,
            passing: 87,
            dribbling: 94,
            defense: 37,
            physical: 61,
            overall: 88,
            image: "🇧🇷"
        },
        {
            id: 5,
            name: "Erling Haaland",
            club: "Manchester City",
            position: "ST",
            pace: 96,
            shooting: 88,
            passing: 71,
            dribbling: 83,
            defense: 45,
            physical: 88,
            overall: 89,
            image: "🇳🇴"
        },
        {
            id: 6,
            name: "Vinicius Jr",
            club: "Real Madrid",
            position: "LW",
            pace: 96,
            shooting: 86,
            passing: 82,
            dribbling: 91,
            defense: 35,
            physical: 80,
            overall: 88,
            image: "🇧🇷"
        }
    ],
    midfielders: [
        {
            id: 7,
            name: "Kevin De Bruyne",
            club: "Manchester City",
            position: "CM",
            pace: 76,
            shooting: 86,
            passing: 93,
            dribbling: 87,
            defense: 61,
            physical: 78,
            overall: 91,
            image: "🇧🇪"
        },
        {
            id: 8,
            name: "Luka Modrić",
            club: "Real Madrid",
            position: "CM",
            pace: 72,
            shooting: 82,
            passing: 91,
            dribbling: 84,
            defense: 72,
            physical: 74,
            overall: 89,
            image: "🇭🇷"
        },
        {
            id: 9,
            name: "Jude Bellingham",
            club: "Real Madrid",
            position: "CM",
            pace: 89,
            shooting: 78,
            passing: 82,
            dribbling: 84,
            defense: 78,
            physical: 85,
            overall: 84,
            image: "🇬🇧"
        },
        {
            id: 10,
            name: "Rodri",
            club: "Manchester City",
            position: "CM",
            pace: 73,
            shooting: 82,
            passing: 91,
            dribbling: 85,
            defense: 86,
            physical: 86,
            overall: 90,
            image: "🇪🇸"
        },
        {
            id: 11,
            name: "Phil Foden",
            club: "Manchester City",
            position: "LM",
            pace: 86,
            shooting: 83,
            passing: 86,
            dribbling: 91,
            defense: 45,
            physical: 71,
            overall: 86,
            image: "🇬🇧"
        },
        {
            id: 12,
            name: "Vinícius Júnior",
            club: "Real Madrid",
            position: "LW",
            pace: 96,
            shooting: 86,
            passing: 82,
            dribbling: 91,
            defense: 35,
            physical: 80,
            overall: 88,
            image: "🇧🇷"
        }
    ],
    defenders: [
        {
            id: 13,
            name: "Rúben Dias",
            club: "Manchester City",
            position: "CB",
            pace: 78,
            shooting: 35,
            passing: 81,
            dribbling: 65,
            defense: 89,
            physical: 86,
            overall: 87,
            image: "🇵🇹"
        },
        {
            id: 14,
            name: "Virgil van Dijk",
            club: "Liverpool",
            position: "CB",
            pace: 79,
            shooting: 40,
            passing: 84,
            dribbling: 68,
            defense: 91,
            physical: 88,
            overall: 89,
            image: "🇳🇱"
        },
        {
            id: 15,
            name: "Kyle Walker",
            club: "Manchester City",
            position: "RB",
            pace: 89,
            shooting: 41,
            passing: 76,
            dribbling: 73,
            defense: 85,
            physical: 83,
            overall: 85,
            image: "🇬🇧"
        },
        {
            id: 16,
            name: "Achraf Hakimi",
            club: "Paris SG",
            position: "RB",
            pace: 96,
            shooting: 62,
            passing: 75,
            dribbling: 86,
            defense: 78,
            physical: 79,
            overall: 86,
            image: "🇲🇦"
        },
        {
            id: 17,
            name: "Alejandro Balde",
            club: "FC Barcelona",
            position: "LB",
            pace: 93,
            shooting: 32,
            passing: 74,
            dribbling: 78,
            defense: 76,
            physical: 75,
            overall: 78,
            image: "🇪🇸"
        },
        {
            id: 18,
            name: "Antonio Rüdiger",
            club: "Real Madrid",
            position: "CB",
            pace: 78,
            shooting: 33,
            passing: 68,
            dribbling: 64,
            defense: 89,
            physical: 88,
            overall: 85,
            image: "🇩🇪"
        }
    ],
    goalkeepers: [
        {
            id: 19,
            name: "Gianluigi Donnarumma",
            club: "Paris SG",
            position: "GK",
            pace: 68,
            shooting: 15,
            passing: 75,
            dribbling: 48,
            defense: 92,
            physical: 82,
            overall: 89,
            image: "🇮🇹"
        },
        {
            id: 20,
            name: "Manuel Neuer",
            club: "Bayern Munich",
            position: "GK",
            pace: 73,
            shooting: 20,
            passing: 87,
            dribbling: 55,
            defense: 90,
            physical: 79,
            overall: 88,
            image: "🇩🇪"
        },
        {
            id: 21,
            name: "Ederson",
            club: "Manchester City",
            position: "GK",
            pace: 86,
            shooting: 27,
            passing: 91,
            dribbling: 60,
            defense: 83,
            physical: 76,
            overall: 88,
            image: "🇧🇷"
        }
    ]
};

// Football Clubs Database
const CLUBS = [
    { id: 1, name: "Manchester City", country: "🇬🇧", logo: "⭐" },
    { id: 2, name: "Real Madrid", country: "🇪🇸", logo: "👑" },
    { id: 3, name: "Liverpool", country: "🇬🇧", logo: "🦅" },
    { id: 4, name: "Paris SG", country: "🇫🇷", logo: "🌹" },
    { id: 5, name: "Bayern Munich", country: "🇩🇪", logo: "🦅" },
    { id: 6, name: "Barcelona", country: "🇪🇸", logo: "⚽" },
    { id: 7, name: "Juventus", country: "🇮🇹", logo: "🏆" },
    { id: 8, name: "Chelsea", country: "🇬🇧", logo: "🔵" },
    { id: 9, name: "Arsenal", country: "🇬🇧", logo: "🔴" },
    { id: 10, name: "Manchester United", country: "🇬🇧", logo: "👿" },
    { id: 11, name: "Inter Milan", country: "🇮🇹", logo: "⚫" },
    { id: 12, name: "AC Milan", country: "🇮🇹", logo: "🔴" },
    { id: 13, name: "Atletico Madrid", country: "🇪🇸", logo: "💪" },
    { id: 14, name: "Borussia Dortmund", country: "🇩🇪", logo: "💛" },
    { id: 15, name: "Napoli", country: "🇮🇹", logo: "🔵" }
];

// Combine all players
const ALL_PLAYERS = [
    ...PLAYERS.strikers,
    ...PLAYERS.midfielders,
    ...PLAYERS.defenders,
    ...PLAYERS.goalkeepers
];

// Get all players
function getAllPlayers() {
    return ALL_PLAYERS;
}

// Get players by position
function getPlayersByPosition(position) {
    return ALL_PLAYERS.filter(p => p.position === position);
}

// Get clubs
function getClubs() {
    return CLUBS;
}

// Create player card HTML
function createPlayerCardHTML(player) {
    return `
        <div class="player-card" onclick="selectPlayer(${player.id})">
            <div style="font-size: 2em;">${player.image}</div>
            <div class="player-name">${player.name}</div>
            <div class="player-stats">
                <p>${player.position} - ${player.club}</p>
                <p>⭐ ${player.overall}</p>
                <p>Pace: ${player.pace} | Shoot: ${player.shooting}</p>
                <p>Pass: ${player.passing} | Drib: ${player.dribbling}</p>
            </div>
        </div>
    `;
}

// Create club card HTML
function createClubCardHTML(club) {
    return `
        <div class="club-card" onclick="selectClub(${club.id})">
            <div style="font-size: 2.5em;">${club.logo}</div>
            <div>${club.name}</div>
            <div>${club.country}</div>
        </div>
    `;
}

// Local Storage Management
function saveTeamToStorage(team) {
    localStorage.setItem('userTeam', JSON.stringify(team));
}

function getTeamFromStorage() {
    const team = localStorage.getItem('userTeam');
    return team ? JSON.parse(team) : null;
}

function saveMatchResult(result) {
    let results = localStorage.getItem('matchResults');
    results = results ? JSON.parse(results) : [];
    results.push({
        ...result,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('matchResults', JSON.stringify(results));
}

function getMatchResults() {
    const results = localStorage.getItem('matchResults');
    return results ? JSON.parse(results) : [];
}

function updateLeaderboard(playerName, goals, wins) {
    let leaderboard = localStorage.getItem('leaderboard');
    leaderboard = leaderboard ? JSON.parse(leaderboard) : [];
    
    const existing = leaderboard.find(p => p.name === playerName);
    if (existing) {
        existing.goals += goals;
        existing.wins += wins;
    } else {
        leaderboard.push({ name: playerName, goals, wins });
    }
    
    leaderboard.sort((a, b) => b.wins - a.wins || b.goals - a.goals);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

function getLeaderboard() {
    const leaderboard = localStorage.getItem('leaderboard');
    return leaderboard ? JSON.parse(leaderboard) : [];
}
