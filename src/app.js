const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];



// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    
    for(let i= 0; i<players.length; i++){
        let hero_or_villion = i%2==0? 'hero':'villain'
        value = getRandomStrength()
        let obj = {
            name : players[i],
            strength:value,
            image: `./images/super-${i+1}.png`,
            type: hero_or_villion
        }
        detailedPlayers.push(obj)
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    let randomvalue = Math.ceil(Math.random()*100)
    return randomvalue
}

const buildPlayers = (players, type) => {
    let fragment = '';

    for(let i = 0; i<players.length; i++){
        if (players[i].type == type){
            fragment += `<div class="player">
            <img src="${players[i].image}">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
         </div>`
        }
    }

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    let displaiedPlayers = initPlayers(PLAYERS)
    viewPlayers(initPlayers(PLAYERS));
}