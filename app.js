// Función para crear una tarjeta de jugador
function createPlayerCard(player) {
    return `
        <div class="player-card">
            <img 
                src="${player.image}" 
                alt="${player.name}"
                class="player-image"
                loading="lazy"
            >
            <div class="player-info">
                <h3 class="player-name">${player.name}</h3>
                <p class="player-position">${player.position}</p>
            </div>
        </div>
    `;
}

// Función para crear una sección de equipo
function createTeamSection(team) {
    return `
        <div class="team-section">
            <h2 class="team-title">${team.title}</h2>
            <div class="players-grid">
                ${team.players.map(player => createPlayerCard(player)).join('')}
            </div>
        </div>
    `;
}

// Función para renderizar todos los equipos
function renderTeams() {
    const teamsContainer = document.getElementById('teams');
    const teamsHTML = Object.values(teamsData)
        .map(team => createTeamSection(team))
        .join('');
    
    teamsContainer.innerHTML = teamsHTML;
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', renderTeams);