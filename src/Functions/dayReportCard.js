//this function should recieve an object(month data), a date and return the 'report card' of given date.
//THIS MAY HAVE TO ACCOUNT FOR MORE THAN 2 STATUSES! (switch statement perhaps?)

export async function dayReportCard(monthData, day){
    console.log(monthData)
    let dayList = []
    let openCount = 0
    let closedCount = 0
    monthData.forEach((report)=> {
        const reportDate = new Date(report.reportDate)
        if (reportDate.getDate() === day){dayList.push(report.chairs)}
    })
    dayList.forEach((status) => {
        Object.values(status).forEach((result) => {
            (result === 'Open') ? openCount++ : closedCount++
        })
    })

    const grade = (openCount / closedCount) * 100
    
    switch (grade) {
        case (grade >= 97):
            return 'A+'
            break;
        case (grade < 97 && grade >= 93):
            return 'A'
            break;
        case (grade < 93 && grade >= 90):
            return 'A-'
            break;
        case (grade < 90 && grade >= 87):
            return 'B+'
            break; 
        case (grade < 87 && grade >= 83):
            return 'B'
            break;    
        case (grade < 83 && grade >= 80):
            return 'B-'
            break;
        case (grade < 80 && grade >= 77):
            return 'C+'
            break;
        case (grade < 77 && grade >= 73):
            return 'C'
            break;
        case (grade < 73 && grade >= 70):
            return 'C-'
            break;      
        case (grade < 70 && grade >= 67):
            return 'D+'
            break;
        case (grade < 67 && grade >= 65):
            return 'D'
            break;
        case (grade < 65):
            return 'D-'
            break;
        }
}