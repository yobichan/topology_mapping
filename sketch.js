let topographyMap;

const cellSideLength = 10;

function mapAltitudeToColor(altitude) {
  //map(value, start1, stop1, start2, stop2, [withinBounds])
  //return color()
  let r = map(altitude, 0, 5000, 0, 255);
  let g = map(altitude, 0, 5000, 255, 0);
  let b = map(altitude, 0, 5000, 128, 255);
  return color(r, g, b);
}

function preload() {
  topographyMap = loadTable("topography_map_100x100.csv");
}

function setup() {
  createCanvas(
    cellSideLength * topographyMap.getRowCount(),
    cellSideLength * topographyMap.getColumnCount()
  );
  background(220);
}

function draw() {
  for (let row = 0; row < topographyMap.getRowCount(); row++) {
    for (let column = 0; column < topographyMap.getColumnCount(); column++) {
      let altitude = parseInt(topographyMap.getString(row, column)); // Get altitude as an integer

      let colorValue = mapAltitudeToColor(altitude);
      //upper left corner  x,y, height, width
      fill(colorValue);
      rect(
        column * cellSideLength,
        row * cellSideLength,
        cellSideLength,
        cellSideLength
      );
    }
  }
}
