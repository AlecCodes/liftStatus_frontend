//OBSOLETE - snowfall level not updated on an hourly rolling basis

export function getHourlySnowFall(arr){
    //console.log(arr)
    let result = []
    result.push(arr[0])
    for (let i = 1; i < arr.length; i++){   
        result.push({
            base: arr[i].BaseAreaLast24h - arr[i-1].BaseAreaLast24h,
            mid: arr[i].MidMountainAreaLast24h - arr[i-1].MidMountainAreaLast24h,
            summit: arr[i].SummitAreaLast24h - arr[i-1].SummitAreaLast24h
        })

    }
    return result;
}