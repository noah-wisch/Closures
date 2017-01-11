function oneDance(num) {
    if (Math.random() < 0.8) {
        return true;
    } else {
        return false;
    }
}

function compete() {
    if (oneDance() === true && oneDance() === true && oneDance() === true) {
        return true;
    } else {
        return false;
    }
}

function flipper(tries) {
    let success = 0;

    for (let i =0; i < tries; i++) {
        if (compete() === true) {
            success++;
        }
    }
    return success / tries;
}

console.log(flipper(80000));