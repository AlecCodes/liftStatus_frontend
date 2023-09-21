function getUTCDateRange(start, end){
    const dateRange = []
    let currentDate = new Date(start)
    let endDate = new Date(end)

    while (currentDate < endDate){
        dateRange.push(new Date(currentDate))
        currentDate.setUTCDate(currentDate.getUTCDate() + 1)
    }

    return dateRange
}

export default getUTCDateRange