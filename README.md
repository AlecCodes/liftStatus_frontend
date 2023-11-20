# Mammoth Calendar

## problems
- In order to give each day a "grade", we need to load a month's worth of data each time we click the arrow to see a new month. ~~To do this, we need the month and year state to change upon clicking an arrow, and have those states passed to the calendar component via props, where they can be used to load the data via the /month/:month/:year endpoint~~
- We should create a new route, with month and year params. We will use the UseLoaderData hook in the month page to load the data upon being rendered.
- The backend is saving the results in UTC. This is a problem, because on the last day of a month, 4PM is timestamped on the _next day_ because UTC is a different timezone from California. If we can't find a workaround for the date range endpoints, then we may need to change the backend to save the dates in westcoast time instead of UTC.
- The last hour of the previous day is coming up as the first hour when you click a day. ~~This is likely caused by the showDay endpoint~~ ~~This seems to be because of the frontend converting the ISO date to locale date causes overlap. I'm going to save California time instead to the DB. Wish me luck.~~ NO This is is caused by Daylight savings time! What if we fixed this by making the get day endpoint search by mammoth time parameters rather than UTC Parameters? We fixed it by widening out the time frame to better accomodate DST ending

- The Date Grade doesn't work properly, it's not capturing certain value ranges, such as days with actually open lifts

---------

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
