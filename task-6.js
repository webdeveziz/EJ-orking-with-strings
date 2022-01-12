// Задание #6

const userText = prompt('Введите текст').trim()
const wordFromText = prompt('Введите слово из текста').trim()

const indexOfWord = userText.indexOf(wordFromText)

console.log(indexOfWord)

const res = userText.substring(0, indexOfWord)

alert(`'Результат': ${res}`)
