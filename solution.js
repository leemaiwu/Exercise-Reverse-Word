function reverseWords(str) {
    let words = str.split(' ')
    let word = []
    for (let i = 0; i < words.length; i++) {
        word.push(words[i].split('').reverse().join(''))
    }
    return word.join(' ')
}

console.log(reverseWords('This is an example!')) // sihT si na !elpmaxe
console.log(reverseWords('double spaces')) // elbuod  secaps
