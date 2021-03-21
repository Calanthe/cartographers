import { MAP_WIDTH, MAP_HEIGHT, WASTELAND_LENGTH, MOUNTAINS_NO, RUINS_NO, TILE_TYPES } from "./constants";


/**
 * Get a random number between 0 and range - 1
 * Returns a number.
*/
function getRandomValue(range) {
    return Math.round(Math.random() * (range - 1));
}

/**
 * Get all neighbors of given tile's coords.
 * Returns an object with all four neighbors.
*/
function getNeighbors(x, y, mapArray) {
    return {
        left: mapArray[x][y - 1] ? mapArray[x][y - 1] : undefined,
        right: mapArray[x][y + 1] ? mapArray[x][y + 1] : undefined,
        top: mapArray[x - 1] ? mapArray[x - 1][y] : undefined,
        bottom: mapArray[x + 1] ? mapArray[x + 1][y] : undefined
    }
}

/**
 * Get a random wasteland's neighbor.
 * Returns an object with coords.
*/
function getRandomNeighbor(mapArray) {
    let availableNeighbors = [],
        randomVal, neightborCoords;

    // check every empty tile around existing wasteland
    mapArray.forEach((tileColumn, x) => {
        tileColumn.forEach((tile , y) => {
            if (tile.type === TILE_TYPES[1]) {
                let leftNeighbor = mapArray[x][y - 1] ? mapArray[x][y - 1] : undefined,
                    rightNeighbor = mapArray[x][y + 1] ? mapArray[x][y + 1] : undefined,
                    topNeighbor = mapArray[x - 1] ? mapArray[x - 1][y] : undefined,
                    bottomNeighbor = mapArray[x + 1] ? mapArray[x + 1][y] : undefined;

                if (leftNeighbor?.type === TILE_TYPES[0]) {
                    availableNeighbors.push({x: x, y: y - 1});
                }
                if (rightNeighbor?.type === TILE_TYPES[0]) {
                    availableNeighbors.push({x: x, y: y + 1});
                }
                if (topNeighbor?.type === TILE_TYPES[0]) {
                    availableNeighbors.push({x: x - 1, y: y});
                }
                if (bottomNeighbor?.type === TILE_TYPES[0]) {
                    availableNeighbors.push({x: x + 1, y: y});
                }
            }
        });
    })

    randomVal = getRandomValue(availableNeighbors.length - 1);
    neightborCoords = availableNeighbors[randomVal];

    return {
        x: neightborCoords.x, 
        y: neightborCoords.y 
    };
}

/**
 * Generate Wasteland. 
 * Returns modified mapArray.
*/
function generateWasteland(mapArray) {
    let randomCoordX, randomCoordY, randomNeightborCoords;

    // get one random empty tile to start the wasteland
    randomCoordX = getRandomValue(MAP_WIDTH);
    randomCoordY = getRandomValue(MAP_HEIGHT);

    mapArray[randomCoordY][randomCoordX] = {
        type: TILE_TYPES[1] // all spaces are empty by default
    }

    // get the rest of the wasteland tiles
    for (let i = 0; i < WASTELAND_LENGTH - 1; i++) {
        randomNeightborCoords = getRandomNeighbor(mapArray);
        mapArray[randomNeightborCoords.x][randomNeightborCoords.y] = {
            type: TILE_TYPES[1]
        }
    }

    return mapArray;
}

/**
 * Generate Mountains. 
 * Returns modified mapArray.
*/
function generateMountains(mapArray) {
    let randomCoordX, randomCoordY, neighbors,
        isMountainAdded = true;

    for (let i = 0; i < MOUNTAINS_NO; i++) {   
        do {
            isMountainAdded = false;

            // get a random tile
            randomCoordX = getRandomValue(MAP_WIDTH);
            randomCoordY = getRandomValue(MAP_HEIGHT);

            neighbors = getNeighbors(randomCoordX, randomCoordY, mapArray);

            //check if the random tile is empty and has no other mountains in the neighborhood
            if (mapArray[randomCoordX][randomCoordY].type === TILE_TYPES[0]
                && neighbors.left?.type !== TILE_TYPES[2] 
                && neighbors.right?.type !== TILE_TYPES[2] 
                && neighbors.top?.type !== TILE_TYPES[2]
                && neighbors.bottom?.type !== TILE_TYPES[2]) {
                    mapArray[randomCoordX][randomCoordY] = {
                        type: TILE_TYPES[2]
                    }
                    isMountainAdded = true;
                }
            } while (!isMountainAdded);
    }

    return mapArray;
}

export function GenerateMap() {
    let tiles = new Array(MAP_WIDTH);

    for (let i = 0; i < MAP_WIDTH; i++) {
        tiles[i] = new Array(MAP_HEIGHT);
        for (let j = 0; j < MAP_HEIGHT; j++) {
            tiles[i][j] = {
                type: TILE_TYPES[0] // all spaces are empty by default
            }
        }
    }

    // generate wasteland
    tiles = generateWasteland(tiles);

    // generate mountains
    tiles = generateMountains(tiles);

    return tiles;
}