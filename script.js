var vowels = ['a', 'e', 'i', 'o', 'u'];
var consonantsOne = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'w',];
var consonantsTwo = ['x', 'z', 'q', 'j', 'p', 'y', 'v'];
var tracker = [];

var letters = document.getElementsByTagName('DIV');

function letterGet(e) {
    if (e.key === ' ') {
        for (let i = 0; i < letters.length; i++) {
            var rando = Math.random();
            if (i === 1) {
                console.log('1 - ', tracker);
                if (tracker[0] === 'vowel') {
                    if (rando > 0.3) {
                        letters[i].innerText = consonantsOne[Math.floor(Math.random() * 14)];
                    } else {
                        letters[i].innerText = consonantsTwo[Math.floor(Math.random() * 7)];
                    }
                } else {
                    letters[i].innerText = vowels[Math.floor(Math.random() * 5)];
                }

            } else if (i === 3) {
                console.log('3 - ', tracker);
                if (tracker[1] === 'vowel') {
                    if (rando > 0.3) {
                        letters[i].innerText = consonantsOne[Math.floor(Math.random() * 14)];
                    } else {
                        letters[i].innerText = consonantsTwo[Math.floor(Math.random() * 7)];
                    }
                } else {
                    letters[i].innerText = vowels[Math.floor(Math.random() * 5)];
                }
            } else {
                if (rando > 0.5) {
                    letters[i].innerText = vowels[Math.floor(Math.random() * 5)];
                    tracker.push('vowel')
                } else if (rando < 0.4) {
                    letters[i].innerText = consonantsOne[Math.floor(Math.random() * 14)];
                    tracker.push('consonant')
                } else {
                    letters[i].innerText = consonantsTwo[Math.floor(Math.random() * 7)];
                }
            }

        }
        tracker = [];
    }
}

document.addEventListener('keydown', letterGet);
document.addEventListener('touchstart', letterGet);