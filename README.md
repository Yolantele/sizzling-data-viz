## Sizzling Steam Graphs Data Visualisation

This App Aims to Sketch out possible data visualisations for time-based periodic data to reveal new meaning in the large and otherwise difficult to digest data sets.

using the test Data provided within the project you can launch the app:

- install dependencies run `yarn` or `npm -i`
- run `yarn start` to see the app on http://localhost:3000/

## On the test Data Set

- the test data came in as 3 large data sets: meters, buildings and half hourly readings (the last one being RAM intensive)
- A lot of parsing and looping is achieved on the FE with the useData React custom hook - where all of data manipulation is handled in isolation away from components - making it easier to test logics.
- The graphs visualize each buildings use of water, gas and electricity values combined into one aggregate number, to draw broad overviews of time dependand consumption volumes agnostic of energy type.
- The parsing of data volume/size does cause some friction with the FE graphs sketches using svg paths - with delay in reloads. Further development would focus on resolving such issue by looking into the modules library settings.

I am diving deeper into d3 and learing more and more on [Data Science](https://github.com/Yolantele/ML-data-clasifier) + Visualizations. Please see my other attempts at d3 visualizations as an exported npm module for [circular sankey visualizations](https://github.com/Yolantele/geofluxus-circular-sankey), or read more on [my blog](https://medium.com/@klpdjolanta/how-to-develop-test-run-and-publish-an-npm-module-react-and-webpack-f436adb54bbb).

## Sizzling Steam graphs UI

<img width="1643" alt="Screenshot 2020-05-13 at 19 13 52" src="https://user-images.githubusercontent.com/30931242/81849842-04943c00-954f-11ea-9a87-396831ecbfbc.png">
