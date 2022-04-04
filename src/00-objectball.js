function gameObject() {
    return {
        "home":{
            "teamName":"Brooklyn Nets",
            "colors":["Black", "White"],
            "players":{
                "Alan Anderson": {
                "Number": 0,
                "shoe":16,
                "points":22,
                "rebounds":12,
                "assists":12,
                "steals":3,
                "blocks":1,
                "slamDunks":1,},
               
                "Reggie Evans": {
                "Number":30,
                "shoe":14,
                "points":12,
                "rebounds":12,
                "assists":12,
                "steals":12,
                "blocks":12,
                "slamDunks":7,},
                
                "Brook Lopez": {
                    "number":11,
                    "shoe":17,
                    "points":17,
                    "rebounds":19,
                    "assists":10,
                    "steals":3,
                    "blocks":1,
                    "slamDunks":15,
                },
                "Mason Plumlee": {
                    "number":1,
                    "shoe":19,
                    "points":26,
                    "rebounds":12,
                    "assists":6,
                    "steals":3,
                    "blocks":8,
                    "slamDunks":5,
                },
                "Jason Terry": {
                    "number":31,
                    "shoe":15,
                    "points":19,
                    "rebounds":2,
                    "assists":2,
                    "steals":4,
                    "blocks":11,
                    "slamDunks":1,
                },
            },
        },
        "away":{
            "teamName":"Charlotte Hornets",
            "colors":["Turquoise", "Purple"],
            "players":{
                "Jeff Adrien": {
                    "Number":4, 
                    "shoe":18,
                    "points":10,
                    "rebounds":1,
                    "assists":1,
                    "steals":2,
                    "blocks":7,
                    "slamDunks":2,
                },
                "Bismak Biyombo": {
                    "Number":0,
                    "shoe":16,
                    "points":12,
                    "rebounds":4,
                    "assists":7,
                    "steals":7,
                    "blocks":15,
                    "slamDunks":10,                },
                
                    "DeSagna Diop": {
                    "number":2,
                    "shoe":14,
                    "points":24,
                    "rebounds":12,
                    "assists":12,
                    "steals":4,
                    "blocks":5,
                    "slamDunks":5,
                },
                "Ben Gordon": {
                    "number":8,
                    "shoe":15,
                    "points":33,
                    "rebounds":3,
                    "assists":2,
                    "steals":1,
                    "blocks":1,
                    "slamDunks":0,
                },
                "Brendan Haywood": {
                    "number":33,
                    "shoe":15,
                    "points":6,
                    "rebounds":12,
                    "assists":12,
                    "steals":22,
                    "blocks":5,
                    "slamDunks":12,
                },
            },
        },
    }
}
const game = gameObject()
const homeTeam = game.home
const awayTeam = game.away
const players = [game.home.players,game.away.players]
function allPlayers(){
    const all = players.map(function(team){
        const newArr = []
        for(const player in team){
            newArr.push({nameOfPlayer: player, ...team[player]})
        }
        return newArr
    })
    return all.flat()
}

function findPlayer(playerName) {
    return allPlayers().find(player => {
        return player.nameOfPlayer === playerName
    }).points
}

function numPointsScored(playersName){
   return findPlayer(playersName).points
    
}   

function shoeSize() {
    return findPlayer(playersName).shoe
}
function isHome(team) {
    return teamName === homeTeam.teamName
}
function teamColors(teamName) {
if(teamName === homeTeam.teamName) {
    return homeTeam.colors
    }
    return awayTeam.colors
}

function doesLongNameStealATon() {
    const longestName = {length:0, player: ''}
    const moststeals = {steals: 0, player: ''}
    for(const player of allPlayers()){
        if(player.nameOfPlayer.length > longestName.length ){
            longestName.length = player.nameOfPlayer.length
           longestName.player = player.nameOfPlayer
        }
        if(player.steals > moststeals.length) {
            moststeals.steals = player.steals
            moststeals.player = player.nameOfPlayer
        }
        
    }
    console.log({player: longestName.player}, {moststeals: moststeals.player})
    return longestName.player === moststeals.player
    //const results = allPlayers().reduce(function(a,b){
        //return Math.max(a.nameOfPlayer.length, b.nameOfPlayer.length)
    //})
    
}
        
    