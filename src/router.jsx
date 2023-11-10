import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import WeekView from "./Pages/WeekView";
import MonthView from "./Pages/MonthView"
import Header from "./Components/Header";
import App from "./App";
import Home from "./Pages/Home";
import {pastWeekLoader, dayLoader} from "./loaders"
import DayView from "./Pages/DayView";
import { MonthPage } from "./Pages/MonthPage";


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path ="/" element={<App/>}>
            <Route path = "" element={<Home/>}/>
            <Route path = "showWeek/:start/:end" element={<WeekView/>} loader ={pastWeekLoader}/>
            <Route path="showMonth/:month/:year" element={<MonthPage/>}/>
            <Route path = "showMonth" element={<MonthView/>} />
            <Route path = "showDay/:day" element = {<DayView/>} loader = {dayLoader}/>
        </Route>
    </>
))

export default router;