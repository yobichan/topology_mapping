let topographyMap;

const cellSideLength = 10;

function mapAltitudeToColor(altitude) {
  //map(value, start1, stop1, start2, stop2, [withinBounds])
  return map(altitude, 0, 5000, 0, 255);
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
