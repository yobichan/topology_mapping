let map;

const cellSideLength = 10;
function preload(){
    map = loadTable("topography_map_100x100.csv");
}
function setup(){
    

    createCanvas(cellSideLength * map.getRowCount(), cellSideLength * map.getColumnCount());
    background(220);
    console.log(width);
    console.log(height);


    // for (let r = 0; r < map.getRowCount(); r++)
    // for (let c = 0; c < map.getColumnCount(); c++) {
    //   print(map.getString(r, c));
    // }
}

function draw(){
    for (let row = 0; row < map.getRowCount(); row++) {
        for (let column = 0; column < map.getColumnCount(); column++) {
            //upper left corner  x,y, height, width
            rect(row + cellSideLength, column + cellSideLength, cellSideLength, cellSideLength)
            fill(240)
            
        }
        
        
    }

}