const getDayInfo = (date) => {
    let dateForFunction = new Date(date.slice(-4), (date.slice(3, 5) - 1), date.slice(0, 2))
    let weekDay = new Array(7);
    weekDay[0] = "Воскресенье";
    weekDay[1] = "Понедельник";
    weekDay[2] = "Вторник";
    weekDay[3] = "Среда";
    weekDay[4] = "Четверг";
    weekDay[5] = "Пятница";
    weekDay[6] = "Суббота";
    let nameOfTheDay = weekDay[dateForFunction.getDay()]
    let monthName = new Array(12);
    monthName[0] = "Января";
    monthName[1] = "Февраля";
    monthName[2] = "Марта";
    monthName[3] = "Апреля";
    monthName[4] = "Мая";
    monthName[5] = "Июня";
    monthName[6] = "Июля";
    monthName[7] = "Августа";
    monthName[8] = "Сентября";
    monthName[9] = "Октября";
    monthName[10] = "Ноября";
    monthName[11] = "Декабря";
    let nameOfTheMonth = monthName[dateForFunction.getMonth()]
    let numberOfTheWeek
    if (date.slice(0, 2) >= 1 && date.slice(0, 2) <= 7) numberOfTheWeek = 1
    if (date.slice(0, 2) >= 8 && date.slice(0, 2) <= 14) numberOfTheWeek = 2
    if (date.slice(0, 2) >= 15 && date.slice(0, 2) <= 21) numberOfTheWeek = 3
    if (date.slice(0, 2) >= 22 && date.slice(0, 2) <= 28) numberOfTheWeek = 4
    if (date.slice(0, 2) >= 29 && date.slice(0, 2) <= 31) numberOfTheWeek = 5
    return nameOfTheDay + ", " + numberOfTheWeek + " неделя " + nameOfTheMonth + " " + date.slice(-4) + " года"
}

console.log(getDayInfo("08.03.2022"))
// Вторник, 2 неделя Марта 2022 года