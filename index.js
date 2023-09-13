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
    "fine"
];

const messageGenerator = (mLength) => {
    let message = "";

    for (let i = 0; i < mLength; i++) {
        const wordNum = Math.floor(Math.random() * words.length);
        if (!message.includes(words[wordNum])) {
            message += words[wordNum] + " ";
        }
    }

    return message;
}

console.log(messageGenerator(5));