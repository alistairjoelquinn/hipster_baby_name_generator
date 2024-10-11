var vowels = ['a', 'e', 'i', 'o', 'u'];
var consonantsOne = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'w',];
var consonantsTwo = ['x', 'z', 'q', 'j', 'p', 'y', 'v'];
tFollows = ['h', 'r', 'w'];
sFollows = ['p', 'm', 'n', 't', 'c'];
var tracker = [];

var letters = document.getElementsByTagName('DIV');

function letterGet(e) {
    if (e.key === ' ' || e.type === 'touchstart') {
        for (let i = 0; i < letters.length; i++) {
            var rando = Math.random();
            if (i === 1) {
                if (tracker[0] === 'vowel') {
                    if (rando > 0.3) {
                        letters[i].innerText = consonantsOne[Math.floor(Math.random() * 14)];
                        tracker.push('consonant');
                    } else {
                        letters[i].innerText = consonantsTwo[Math.floor(Math.random() * 7)];
                        tracker.push('consonant');
                    }
                } else {
                    var rando2 = Math.random();
                    if (letters[0].innerText.toLowerCase() === 't') {
                        if (rando2 > 0.5) {
                            letters[i].innerText = tFollows[Math.floor(Math.random() * 3)];
                            tracker.push('consonant');
                        } else {
                            letters[i].innerText = vowels[Math.floor(Math.random() * 5)];
                            tracker.push('vowel');
                        }
                    } else if (letters[0].innerText.toLowerCase() === 's') {
                        if (rando2 > 0.5) {
                            letters[i].innerText = sFollows[Math.floor(Math.random() * 5)];
                            tracker.push('consonant');
                        } else {
                            letters[i].innerText = vowels[Math.floor(Math.random() * 5)];
                            tracker.push('vowel');
                        }
                    } else {
                        letters[i].innerText = vowels[Math.floor(Math.random() * 5)];
                        tracker.push('vowel');
                    }
                }

            } else if (i === 2) {
                if (tracker[0] === 'consonant' && tracker[1] === 'consonant') {
                    letters[i].innerText = vowels[Math.floor(Math.random() * 5)];
                    tracker.push('vowel');
                } else {
                    if (rando > 0.5) {
                        letters[i].innerText = vowels[Math.floor(Math.random() * 5)];
                        tracker.push('vowel');
                    } else if (rando < 0.4) {
                        letters[i].innerText = consonantsOne[Math.floor(Math.random() * 14)];
                        tracker.push('consonant');
                    } else {
                        letters[i].innerText = consonantsTwo[Math.floor(Math.random() * 7)];
                        tracker.push('consonant');
                    }
                }
            } else if (i === 3) {
                if (tracker[2] === 'vowel') {
                    if (rando > 0.3) {
                        letters[i].innerText = consonantsOne[Math.floor(Math.random() * 14)];
                        tracker.push('consonant');
                    } else {
                        letters[i].innerText = consonantsTwo[Math.floor(Math.random() * 7)];
                        tracker.push('consonant');
                    }
                } else {
                    letters[i].innerText = vowels[Math.floor(Math.random() * 5)];
                    tracker.push('vowel');
                }
            } else {
                if (rando > 0.5) {
                    letters[i].innerText = vowels[Math.floor(Math.random() * 5)];
                    tracker.push('vowel');
                } else if (rando < 0.4) {
                    letters[i].innerText = consonantsOne[Math.floor(Math.random() * 14)];
                    tracker.push('consonant');
                } else {
                    letters[i].innerText = consonantsTwo[Math.floor(Math.random() * 7)];
                    tracker.push('consonant');
                }
            }
        }
        tracker = [];
    }
}

document.addEventListener('keydown', letterGet);
document.addEventListener('touchstart', letterGet);