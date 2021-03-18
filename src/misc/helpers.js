import { MAP_WIDTH, MAP_HEIGHT, WASTELAND_LENGTH, TILE_TYPES } from "./constants";


/**
 * Get random number between 0 and range - 1
*/
function getRandomValue(range) {
    return Math.round(Math.random() * (range - 1));
}

/**
 * Get array of wasteland coords
*/
function getWastelandCords(width, height, array) {
    let result = [],
        randomCoordX, randomCoordY;

    for (let i = 0; i < WASTELAND_LENGTH; i++) {
        randomCoordX = getRandomValue(width);
        randomCoordY = getRandomValue(height);

        if (array[randomCoordX][randomCoordY].type === TILE_TYPES[0]) { //if the random space is still empty
            result.push({x: randomCoordX, y: randomCoordY});
        }
    } 

    return result;
}

export function GenerateMap() {
    let tiles = new Array(MAP_WIDTH),
        wastelandCoords = [],
        mountainCoords = [],
        ruinsCoords = [];

    for (let i = 0; i < MAP_WIDTH; i++) {
        tiles[i] = new Array(MAP_HEIGHT);
        for (let j = 0; j < MAP_HEIGHT; j++) {
            tiles[i][j] = {
                type: TILE_TYPES[0] // all spaces are empty by default
            }
        }
    }

    // generate wasteland
    wastelandCoords = getWastelandCords(MAP_WIDTH, MAP_HEIGHT, tiles);

    console.log(wastelandCoords)

    return tiles;
}