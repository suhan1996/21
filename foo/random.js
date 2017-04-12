/**
 * Created by Suhan on 10/04/2017.
 */
//function cards(){
//    "use strict";
//    var deck = [];
//    var suits = ["clubs", "diamonds", "hearts", "spades"];
//    var ranks = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
//    for (let s = 0; s < 4; s++){
//        for (let r = 0; r < 13; r++){
//            deck[s*13 + r] = {rank:ranks[r], suit:suits[s]};
//        }
//    }
//    return deck;
//}
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
function cards(){
    "use strict";
    var deck = [];
    var ranks = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
    for (let s = 0; s < 4; s++){
        for (let r = 0; r < 13; r++){
            deck[s*13 + r] = ranks[r];
        }
    }
    return shuffle(deck)

}

//a=[1,2] b=[1,2,3] result=[3]
function arr_subtract(a,b){
    "use strict";
    a.forEach(x=>{
        b.splice(b.indexOf(x),1);
    })
    return b
}
console.log(arr_subtract([1],[1,2,3]).unshift([9,9,9,9]));
let ary = [1,2,3];
[2,3].reverse().forEach(x => ary.unshift(x))
console.log(ary);


function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
};
//console.log(arr_diff(cards(),[1,2,3]));
let a = [1,2,4]
console.log(a.splice(0,1),a)