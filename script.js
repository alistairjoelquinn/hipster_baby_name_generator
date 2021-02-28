var vowels = ['a', 'e', 'i', 'o', 'u'];
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'w',];
var rare = ['x', 'z', 'q', 'j', 'p', 'y', 'v'];

var letters = document.getElementsByTagName('DIV');

function letterGet(e) {
    if (e.key === ' ') {
        for (let i = 0; i < letters.length; i++) {
            const rando = Math.random();
            if (rando > 0.5) {
                letters[i].innerText = vowels[Math.floor(Math.random() * 5)];
            } else if (rando < 0.35) {
                letters[i].innerText = consonants[Math.floor(Math.random() * 14)];
            } else {
                letters[i].innerText = rare[Math.floor(Math.random() * 7)];
            }
        }
    }
}

document.addEventListener('keydown', letterGet);
document.addEventListener('touchstart', letterGet);