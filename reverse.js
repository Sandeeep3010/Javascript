function reverseWords(sentence) {
  // Split the sentence into words
  let words = sentence.split(' ');
  let reversedWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reversedWord = reverseWord(word);
    reversedWords.push(reversedWord);
  }

  let reversedSentence = reversedWords.join(' ');
  return reversedSentence;
}

function reverseWord(word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
let inputSentence = "This is a sunny day";
let reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);