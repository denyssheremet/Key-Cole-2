var data = {};
data.chars = " ntesiroahdjglpufywqbkvmcxz1234567890'\",.!?:;/@$%&#*()_ABCDEFGHIJKLMNOPQRSTUVWXYZ~+-={}|^<>`[]\\";
data.consecutive = 10;
data.word_length = 7;
data.level = 3;
data.level_chars = get_level_chars();

function get_level_chars() {
    return data.chars.slice(0, data.level + 1).split('');
}

function oneLetterCombinations(a) {
    return a + a + a + a + a + a;
}

function twoLetterCombinations(a, b) {
    return a + b + a + a + b + b + a + b;
}

function threeLetterCombinations(a, b, c) {
    return a + b + c + a + a + c + b + a + c + a + b + c + c + b + a + c + b + a + c + b + b + c + a + b;
}

function setLevel(level) {
    data.level = level;
    data.level_chars = get_level_chars();
}

function makeCombinations() {
    let mainChar = data.level_chars[data.level_chars.length - 1];
    let res = [];
    res.push(oneLetterCombinations(mainChar));
    let x = 0;
    while (x < data.level_chars.length - 1) {
        res.push(twoLetterCombinations(mainChar, data.level_chars[x]));

        let y = x - 1;
        while (y >= 0) {
            res.push(threeLetterCombinations(mainChar, data.level_chars[x], data.level_chars[y]));
            y--;
        }
        x++;
    }
    return res;
}



// allCombs = [];
// for (let i = 0; i < data.chars.length; i++) {
//     setLevel(i);
//     let res = makeCombinations()
//     for (let j = 0; j < res.length; j++) {
//         allCombs.push(res[j]);
//     }
// }
setLevel(3);



console.log(allCombs)

