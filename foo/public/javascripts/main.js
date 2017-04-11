/**
 * Created by Suhan on 10/04/2017.
 */
function main(){
    "use strict";
    let InputList = [];
    const start = document.querySelector('.playBtn');
    const form = document.querySelector('.start');
    start.addEventListener('click',function(evt){
        form.style.display = 'none';
        evt.preventDefault();
        InputList = (document.querySelector('#startValues').value).split(',');
        //console.log(InputList);
        let InputList_1 = [];
        InputList.forEach((x)=>{
            if(x=='J'){
                InputList_1.push('jack');
            }
            else if(x=='Q'){
                InputList_1.push('queen');
            }
            else if(x=='K'){
                InputList_1.push('king');
            }
            else if(x=='A'){
                InputList_1.push('ace');
            }
            else{
                InputList_1.push(x);
            }
        })
        InputList = InputList_1;
        let game_cards = arr_subtract(InputList,cards()),cpu_cards=[],ply_cards=[];
        InputList.reverse().forEach(x => game_cards.unshift(x));
        game_cards = append_suit(game_cards);
        for(let i=0;i<52;i++){
            if (i%2){
                ply_cards.push(game_cards[i]);
            }
            else{
                cpu_cards.push(game_cards[i]);
            }
        }
        console.log(game_cards,ply_cards,cpu_cards);
        const game_field = document.querySelector('.game');
        const cpu_div = document.createElement("div");
        const player_div = document.createElement("div");
        const cpuScore_div = document.createElement("div");
        const playerScore_div = document.createElement("div");
        cpu_div.id = "cpu_div";
        player_div.id = "player_div";
        cpuScore_div.id = "#button";
        playerScore_div.class = "button";
        game_field.appendChild(cpuScore_div);
        game_field.appendChild(cpu_div);
        game_field.appendChild(playerScore_div);
        game_field.appendChild(player_div);
        for(let x=0;x<InputList.length;x++){
            let num=x%2
            if(num){
                player_div.appendChild(add_svg("../images/SVG-cards-1.3/"+game_cards[x]+".svg"));

            }
            else{
                cpu_div.appendChild(add_svg("../images/SVG-cards-1.3/"+game_cards[x]+".svg"));
            }
        }


        playerScore_div.appendChild(elt("strong", "Karl Popper"));
        cpuScore_div.appendChild(elt("strong", "Karl Popper"));

    });

}
function elt(type) {
    var node = document.createElement(type);
    for (var i = 1; i < arguments.length; i++) {
        var child = arguments[i];
        if (typeof child == "string")
            child = document.createTextNode(child);
        node.appendChild(child);
    }
    return node;
}
function add_svg(link) {
    var node = document.createElement('object');
    node.id = "svg1";
    node.data = link;
    node.type = "image/svg+xml";
    return node;
}

function append_suit(cards){
    "use strict";
    let suits = ['_of_clubs','_of_diamonds','_of_spades','_of_clubs'];
    for(let a=0;a<52;a++){
        cards[a]+=suits[a%4];
    }
    return cards;

}
function cards(){
    "use strict";
    var deck = [];
    var ranks = [2,3,4,5,6,7,8,9,10,"jack","queen","king","ace"];
    for (let s = 0; s < 4; s++){
        for (let r = 0; r < 13; r++){
            deck[s*13 + r] = ranks[r];
        }
    }
    return shuffle(deck)

}
function cards_suited(){
    var deck = [];
    var suits = ["clubs", "diamonds", "hearts", "spades"];
    var ranks = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
    for (let s = 0; s < 4; s++){
        for (let r = 0; r < 13; r++){
            deck[s*13 + r] = {rank:ranks[r], suit:suits[s]};
        }
    }
    return deck;
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//a=[1,2] b=[1,2,3] result=[3]
function arr_subtract(a,b){
    "use strict";
    a.forEach(x=>{
        b.splice(b.indexOf(x),1);
    })
    return b
}

function elt(type) {
    var node = document.createElement(type);
    for (var i = 1; i < arguments.length; i++) {
        var child = arguments[i];
        if (typeof child == "string")
            child = document.createTextNode(child);
        node.appendChild(child);
    }
    return node;
}
document.addEventListener('DOMContentLoaded', main);

