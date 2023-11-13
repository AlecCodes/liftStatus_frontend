//this function should recieve an object(month data), a date and return the 'report card' of given date.
//THIS MAY HAVE TO ACCOUNT FOR MORE THAN 2 STATUSES! (switch statement perhaps?)

export async function dayReportCard(monthData, day){
    console.log(monthData)
    let dayList = []
    let openCount = 0
    let closedCount = 0
    let grade = closedCount / openCount
    monthData.forEach((report)=> {
        const reportDate = new Date(report.reportDate)
        if (reportDate.getDate() === day){dayList.push(report.chairs)}
    })
    console.log({"YO DAYLIST":dayList })
    dayList.forEach((status) => {
        Object.values(status).forEach((result) => {
            (result === 'Open') ? openCount++ : closedCount++
        })
    })
    console.log(openCount,closedCount)
}