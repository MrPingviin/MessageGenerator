const words = [
    "hello",
    "it's",
    "me",
    "how",
    "are",
    "you",
    "doing",
    "today",
    "I",
    "am",
    "fine",
    "thank"
];

// Creates a message with the given length from the given word array - without repeating words!!
const messageGenerator = (mLength, wordArray) => {
    let message = [];

    if (wordArray.length < mLength) {
        throw new Error("The message length should be bigger or equal to the count of words in the array to avoid word repetition!");
    }

   /*  if (wordArray.length > mLength) {
        console.log("There are more words in the array than the message length so don't expect to see all of them in the message!");
    } */

    if (wordArray === undefined) {
        wordArray = words;
    }

    for (let i = 0; i < mLength; i++) {
        const wordNum = Math.floor(Math.random() * wordArray.length);
        if (!message.includes(wordArray[wordNum])) {
            message.push(wordArray[wordNum]);
        } else {
            i--;
        }
    }

    return message.join(" ");
}

const repeatChecker = (sentence) => {
    const words = sentence.split(" ");
    const uniqueWords = new Set(words);
    return words.length === uniqueWords.size;
}

export { messageGenerator, words, repeatChecker };