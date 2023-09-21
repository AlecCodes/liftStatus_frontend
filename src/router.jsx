import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import WeekView from "./Pages/WeekView";
import Header from "./Components/Header";
import App from "./App";
import {pastWeekLoader} from "./loaders"


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path ="/" element={<App/>}>
            <Route path = "showWeek/:start/:end" element={<WeekView/>} loader ={pastWeekLoader}/>
        </Route>
    </>
))

export default router;