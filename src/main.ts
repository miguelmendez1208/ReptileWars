import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<body>
   
<h1>WAR</h1>
<div class="card-container">
    <div>
        <div id="player1Card" class="card"><img src="cards/back.png" alt="Back of card"></div>
        <div id="player1Score">Rounds Won: 0</div>
    </div>
    <div>
        <div id="player2Card" class="card"><img src="cards/back.png" alt="Back of card"></div>
        <div id="player2Score">Rounds Won: 0</div>
    </div>
</div>
<div id="player1">
    <h2>Player 1</h2>
    <img src="Monsters/orange.gif" alt="Player 1" class="player-img">
</div>

<div id="player2">
    <h2>Player 2</h2>
    <img src="Monsters/green.gif" alt="Player 2" class="player-img">
</div>
<button id="flipButton">Flip Cards</button>
<button id="nextRoundButton" style="display: none;">Next Round</button>
<button id="connect-button">Connect Wallet</button>
   <div id="result"></div>
<script src="game.js"></script>
</body>
`