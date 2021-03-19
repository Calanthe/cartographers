import { MAP_WIDTH, MAP_HEIGHT, WASTELAND_LENGTH, TILE_TYPES } from "./constants";


/**
 * Get a random number between 0 and range - 1
*/
function getRandomValue(range) {
    return Math.round(Math.random() * (range - 1));
}

/**
 * Get a random wasteland's neighbor
*/
function getRandomNeighbor(wastelandArray, mapArray) {
    let availableNeighbors = [];

    // check every empty tile around existing wasteland
    wastelandArray.forEach(wasteland => {
        let leftNeighbor = mapArray[wasteland.x - 1] ? mapArray[wasteland.x - 1][wasteland.y] : undefined,
            rightNeighbor = mapArray[wasteland.x + 1] ? mapArray[wasteland.x + 1][wasteland.y] : undefined,
            topNeighbor = mapArray[wasteland.x][wasteland.y - 1] ? mapArray[wasteland.x][wasteland.y - 1] : undefined,
            bottomNeighbor = mapArray[wasteland.x][wasteland.y + 1] ? mapArray[wasteland.x][wasteland.y + 1] : undefined;

        if (leftNeighbor?.type === TILE_TYPES[0]) {
            availableNeighbors.push({x: wasteland.x - 1, y: wasteland.y});
        }
        if (rightNeighbor?.type === TILE_TYPES[0]) {
            availableNeighbors.push({x: wasteland.x + 1, y: wasteland.y});
        }
        if (topNeighbor?.type === TILE_TYPES[0]) {
            availableNeighbors.push({x: wasteland.x, y: wasteland.y - 1});
        }
        if (bottomNeighbor?.type === TILE_TYPES[0]) {
            availableNeighbors.push({x: wasteland.x, y: wasteland.y + 1});
        }    
    })

    let randomNeightbor = getRandomValue(availableNeighbors.length - 1);

    return { x: availableNeighbors[randomNeightbor].x, y: availableNeighbors[randomNeightbor].y };
}

/**
 * Get an array of wasteland coords
*/
function getWastelandCoords(width, height, mapArray) {
    let result = [],
        randomCoordX, randomCoordY;

    // get one random empty tile to start the wasteland
    randomCoordX = getRandomValue(width);
    randomCoordY = getRandomValue(height);

    result.push({ x: randomCoordX, y: randomCoordY });

    result.push(getRandomNeighbor(result, mapArray));

    /*for (let i = 0; i < WASTELAND_LENGTH - 1; i++) {
        randomCoordX = getRandomValue(width);
        randomCoordY = getRandomValue(height);

        if (array[randomCoordX][randomCoordY].type === TILE_TYPES[0]) { //if the random space is still empty
            result.push({x: randomCoordX, y: randomCoordY});
        }
    } */

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
    wastelandCoords = getWastelandCoords(MAP_WIDTH, MAP_HEIGHT, tiles);
    wastelandCoords.forEach(val => {
        tiles[val.y][val.x] = TILE_TYPES[1];
    })

    return tiles;
}