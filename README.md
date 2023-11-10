# Mammoth Calendar

## problems
- In order to give each day a "grade", we need to load a month's worth of data each time we click the arrow to see a new month. ~~To do this, we need the month and year state to change upon clicking an arrow, and have those states passed to the calendar component via props, where they can be used to load the data via the /month/:month/:year endpoint~~
- We should create a new route, with month and year params. We will use the UseLoaderData hook in the month page to load the data upon being rendered.

---------

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
