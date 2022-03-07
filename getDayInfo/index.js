const getDayInfo = (date) => {
    let monthSlice = date.slice(3, 5)
    let weekSlice = date.slice(0, 2)
    let month = "";
    let week = "";
    if (monthSlice === "01") {
        month = "январь"
        if (weekSlice >= 1 && weekSlice < 2) week = "1"
        if (weekSlice >= 3 && weekSlice < 9) week = "2"
        if (weekSlice >= 10 && weekSlice < 16) week = "3"
        if (weekSlice >= 17 && weekSlice < 23) week = "4"

    }
    return console.log(week)
}


getDayInfo("02.01.2020")

// Среда, 3 неделя Декабря 2021 года