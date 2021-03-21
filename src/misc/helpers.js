import { MAP_WIDTH, MAP_HEIGHT, WASTELAND_LENGTH, TILE_TYPES } from "./constants";


/**
 * Get a random number between 0 and range - 1
*/
function getRandomValue(range) {
    return Math.round(Math.random() * (range - 1));
}

/**
 * Get a random wasteland's neighbor.
 * Returns an object with coords.
*/
function getRandomNeighbor(mapArray) {
    let availableNeighbors = [],
        randomVal, neightborCoords;

    // check every empty tile around existing wasteland
    mapArray.forEach((tileRow, x) => {
        tileRow.forEach((tile , y) => {
            if (tile.type === TILE_TYPES[1]) {
                let leftNeighbor = mapArray[x - 1] ? mapArray[x - 1][y] : undefined,
                    rightNeighbor = mapArray[x + 1] ? mapArray[x + 1][y] : undefined,
                    topNeighbor = mapArray[x][y - 1] ? mapArray[x][y - 1] : undefined,
                    bottomNeighbor = mapArray[x][y + 1] ? mapArray[x][y + 1] : undefined;

                if (leftNeighbor?.type === TILE_TYPES[0]) {
                    availableNeighbors.push({x: x - 1, y: y});
                }
                if (rightNeighbor?.type === TILE_TYPES[0]) {
                    availableNeighbors.push({x: x + 1, y: y});
                }
                if (topNeighbor?.type === TILE_TYPES[0]) {
                    availableNeighbors.push({x: x, y: y - 1});
                }
                if (bottomNeighbor?.type === TILE_TYPES[0]) {
                    availableNeighbors.push({x: x, y: y + 1});
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
function generateWasteland(width, height, mapArray) {
    let randomCoordX, randomCoordY, randomNeightborCoords;

    // get one random empty tile to start the wasteland
    randomCoordX = getRandomValue(width);
    randomCoordY = getRandomValue(height);

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
    tiles = generateWasteland(MAP_WIDTH, MAP_HEIGHT, tiles);

    return tiles;
}