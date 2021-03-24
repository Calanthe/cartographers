import { TILE_TYPES } from "./constants";
import { getNeighbors, ifValidNeighbors } from './mapGenerator';

test('check empty neighbors in getNeighbors()', () => {
    const mapArray = [
        [
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]}
        ],
        [
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]}
        ],
        [
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]}
        ]
    ];

    expect(getNeighbors(1, 1, mapArray)).toStrictEqual({
        "bottom": {type: TILE_TYPES[0]},
        "left": {type: TILE_TYPES[0]},
        "right": {type: TILE_TYPES[0]},
        "top": {type: TILE_TYPES[0]}
    });
});

test('check undefined neighbors in getNeighbors()', () => {
    const mapArray = [
        [
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]}
        ],
        [
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]}
        ],
        [
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]}
        ]
    ];

    expect(getNeighbors(0, 0, mapArray)).toStrictEqual({
        "bottom": {type: TILE_TYPES[0]},
        "left": undefined,
        "right": {type: TILE_TYPES[0]},
        "top": undefined
    });
});

test('check mixed neighbors in getNeighbors()', () => {
    const mapArray = [
        [
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[1]}
        ],
        [
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[2]},
            {type: TILE_TYPES[0]}
        ],
        [
            {type: TILE_TYPES[0]},
            {type: TILE_TYPES[2]},
            {type: TILE_TYPES[1]}
        ]
    ];

    expect(getNeighbors(0, 1, mapArray)).toStrictEqual({
        "bottom": {type: TILE_TYPES[2]},
        "left": {type: TILE_TYPES[0]},
        "right": {type: TILE_TYPES[1]},
        "top": undefined
    });
});

test('check ifValidNeighbors()', () => {
    const neighbors = {
        "bottom": {type: TILE_TYPES[1]},
        "left": {type: TILE_TYPES[0]},
        "right": {type: TILE_TYPES[1]},
        "top": undefined
    };

    expect(ifValidNeighbors({type: TILE_TYPES[2]}, neighbors, TILE_TYPES[2])).toBe(false);

    expect(ifValidNeighbors({type: TILE_TYPES[0]}, neighbors, TILE_TYPES[1])).toBe(false);

    expect(ifValidNeighbors({type: TILE_TYPES[0]}, neighbors, TILE_TYPES[2])).toBe(true);
});
