/* Работа со строками */

// Задание #1

const myName = 'Эзиз'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилен Минин'
const reasonText = `люблю веб сферу и конечно же кодить на ${programmingLanguage}`
const numberOfMonth = 10
const curator = 'Вадим'

const myAllInfo = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца с куратором ${curator}!`
console.log(myAllInfo)

// Задание #2
let myInfoText = myAllInfo
myInfoText = myInfoText.replaceAll(
  programmingLanguage,
  programmingLanguage.toUpperCase()
)
console.log(myInfoText)
console.log('Длина строки myInfoText равна: ', myInfoText.length)
console.log('Первый символ строки myInfoText: ', myInfoText[0])
console.log(
  'Последний символ строки myInfoText: ',
  myInfoText[myInfoText.length - 1]
)
