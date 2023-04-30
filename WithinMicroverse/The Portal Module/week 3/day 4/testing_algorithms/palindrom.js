
function palindrom() {
    const word = "Racecar";
    let start = 0;
    let end = word.length - 1;
    while (start <= end) {
        if (word[start].toLowerCase() != word[end].toLocaleLowerCase()) {
            return false;
        }
        else {
            start++;
            end--;
        }
    }
    return true
}

const palindrom = word => {
    word = word.toLowerCase();
    return word === word.split('').reverse().join('');
}




console.log(palindrom("racecar"))