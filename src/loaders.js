import { useEffect } from "react";
import { useParams } from "react-router-dom"

const URI = 'https://pure-wildwood-05827.herokuapp.com/dateRange'

export async function pastWeekLoader({params}){
    const response = await fetch(URI);
    const data = await response.json()
    return data
}

export async function dayLoader({params}){
    const response = await fetch(URI + `/getAllByDate/${params.day}`)
    const data = await response.json()
    return data
}
