function daysInMonth(year, month){
    const startDate = new Date(year, month -1, 1)
    // setting day to 0 gets last day of previous month (months are 0 indexed, so 9 is oct)
    const endDate = new Date(year, month, 0)
    const monthArr = []

    // console.log(startDate)
    // console.log({endDate})


    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)){
        monthArr.push(new Date(date))
    }

    return monthArr
}

export default daysInMonth