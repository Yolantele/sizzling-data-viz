## Sizzling SteamGraph Data Visualisation

This App Aims to Sketch out possible data visualisations for time-based periodic data to reveal new meaning in the large and otherwise difficult to digest data points.

using the test Data provided within the project you can launch the app:

- install dependencies run `yarn` or `npm -i`
- run `yarn start` to see the app on http://localhost:3000/

## About the data parsing:

- the test data came in as 3 large data sets, meters, buildings and half hourly readings (particularly the largest half hourly readings set)
- A lot of parsing and looping is achieved on the FE with the use of useData Hook - where all of data manipulation is handled in isolation away from components - making it easier to test logics.
- The graphs visualize each buildings use of water, gas and electricity values combined into one aggregate number , to give broad overviews of time dependand consumption volumes agnostic of energy type.
- The parsing of data Volume/size does cause some friction with the FE graphs sketches using svg paths - as felay is created between the reeloads - woth further development such issue shouldbe resolved by looking into the modules library settings.

I am diving deeper into d3 and learing more and more on [Data Science](https://github.com/Yolantele/ML-data-clasifier) + Visualizations. Please see my other attempts at d3 visualizations as an exported npm module for [circular sankey visualizations](https://github.com/Yolantele/geofluxus-circular-sankey), or read more on [my blog](https://medium.com/@klpdjolanta/how-to-develop-test-run-and-publish-an-npm-module-react-and-webpack-f436adb54bbb)

## Sizzling Steam graphs UI

<img width="1643" alt="Screenshot 2020-05-13 at 19 13 52" src="https://user-images.githubusercontent.com/30931242/81849842-04943c00-954f-11ea-9a87-396831ecbfbc.png">
