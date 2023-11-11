//this function should recieve an object(month data), a date and return the 'report card' of given date.

export async function dayReportCard(monthData, day){
    console.log(monthData)
    let dayList = []
    monthData.forEach((report)=> {
        const reportDate = new Date(report.reportDate)
        if (reportDate.getDate() === day){dayList.push(report)}
    })
    console.log(dayList)
}