// Функция для форматирования чисел, добавляющая ноль к числам < 10
function addZero(num) {
  return num < 10 ? '0' + num : num
}

// Функция для обновления даты и времени
function updateDateTime() {
  // Получаем текущую дату и время
  var currentDate = new Date()

  // Получаем день недели
  var daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ]
  var dayOfWeek = daysOfWeek[currentDate.getDay()]

  // Форматируем дату в формате "дд.мм.гггг"
  var day = addZero(currentDate.getDate())
  var month = addZero(currentDate.getMonth() + 1) // Месяцы начинаются с 0
  var year = currentDate.getFullYear()

  // Форматируем время в формате "чч:мм"
  var hours = addZero(currentDate.getHours())
  var minutes = addZero(currentDate.getMinutes())

  // Формируем строку даты и времени
  var dateTimeString =
    dayOfWeek +
    ', ' +
    day +
    '.' +
    month +
    '.' +
    year +
    ', ' +
    hours +
    ':' +
    minutes

  // Находим контейнер для даты и устанавливаем текст
  var dateContainer = document.getElementById('dateContainer')
  dateContainer.textContent = dateTimeString
}

// Вызываем функцию обновления даты и времени сразу, чтобы отобразить текущее время
updateDateTime()

// Устанавливаем интервал для обновления каждую минуту (60000 миллисекунд)
setInterval(updateDateTime, 1000)
