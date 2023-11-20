//this function should recieve an object(month data), a date and return the 'report card' of given date.
//THIS MAY HAVE TO ACCOUNT FOR MORE THAN 2 STATUSES! (switch statement perhaps?)

export function dayReportCard(monthData, day){
    //console.log(monthData)
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
    let letterGrade = 'No Data';

    switch (true) {
        case (grade >= 97):
            letterGrade = 'A+'
            break;
        case (grade < 97 && grade >= 90):
            letterGrade = 'A'
            break;
        case (grade < 90 && grade >= 83):
            letterGrade = 'A-'
            break;
        case (grade < 87 && grade >= 80):
            letterGrade = 'B+'
            break; 
        case (grade < 80 && grade >= 73):
            letterGrade = 'B'
            break;    
        case (grade < 73 && grade >= 66):
            letterGrade = 'B-'
            break;
        case (grade < 66 && grade >= 59):
            letterGrade = 'C+'
            break;
        case (grade < 59 && grade >= 52):
            letterGrade = 'C'
            break;
        case (grade < 52 && grade >= 45):
            letterGrade = 'C-'
            break;      
        case (grade < 45 && grade >= 38):
            letterGrade = 'D+'
            break;
        case (grade < 38 && grade >= 31):
            letterGrade = 'D'
            break;
        case (grade < 31):
            letterGrade = 'D-'
            break;
    }

    return (letterGrade)
}