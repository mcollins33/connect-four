// Y wins horizontally
// var arrayh = [
//     [0,    0,   0,  "Y", "R",  0,  0],
//     [0,    0,   0,  "R", "Y", "R", 0],
//     [0,   "Y", "Y", "R", "R", "R", 0],
//     ["R", "R", "R", "Y", "Y", "Y", "Y"],
//     ["Y", "R", "Y", "Y", "R", "R", "Y"],
//     ["Y", "Y", "R", "R", "Y", "Y", "R"]
// ];

// R wins vertically
// var arrayh = [
//     [0,    0,   0,   0,   0,   0,   0],
//     [0,    0,   0,   0,  "R",  0,   0],
//     [0,    0,  "R", "Y", "R",  0,  "Y"],
//     ["R", "Y", "Y", "Y", "R", "Y", "R"],
//     ["Y", "R", "R", "Y", "R", "R", "Y"],
//     ["R", "Y", "Y", "R", "Y", "R", "Y"]
// ];

//Y wins diagonally
// var arrayh = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [0,    0, "R", 0, 0, 0, 0],
//     ["Y", "R", "Y", "R", "Y", "Y", 0],
//     ["Y", "Y", "Y", "R", "Y", "Y", 0],
//     ["Y", "R", "R", "Y", "Y", "R", 0],
//     ["R", "Y", "Y", "R", "R", "R", "Y"]
// ];

//R wins diagonally
var arrayh = [
    [0,    0,   0,   0,   0,   0,  0],
    [0,    0,  "Y",  0,   0,   0,  0],
    ["Y", "R", "Y", "R", "Y", "Y", 0],
    ["Y", "Y", "Y", "R", "R", "Y", 0],
    ["Y", "R", "R", "Y", "Y", "R", 0],
    ["R", "Y", "Y", "Y", "R", "R", "R"]
];

var arrayv = [];

//This function creates a blank array 6 wide and 7 tall
function transpose(arr, callback) {
    arrayv = new Array(arr[0].length);
    for (var i = 0; i < arr[0].length; i++) {
        arrayv[i] = new Array(arr.length);
    }
    callback(arrayv);
}

//This callback takes the blank array and fills it in with arrayh transposed
transpose(arrayh, function() {
    var m = 0;
    for (var k = 0; k < arrayh.length; k++) {
        for (var l = 0; l < arrayh[k].length; l++) {
            arrayv[l][m] = arrayh[k][l];
        }
        m++;
    }
});

//This function checks the horizontal rows for four chips in a row of the same color
function connectfour(arr, color) {
    for (var i = 0; i < arr.length; i++) {
        var winner = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === color) {
                winner++;
                if (winner === 4) {
                    console.log(color, "wins");
                }
            } else {
                winner = 0;
            }
        }
    }
}

//This function checks diagonal from top left to bottom right for four chips in a row of the same color
function diagonal(arr, color) {
    var test = [
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [0, 2],
        [0, 3]
    ];
    for (var i = 0; i < test.length; i++) {
        var j = test[i][0];
        var k = test[i][1];            
        var winner = 0;
        while (j < arr.length && k < arr[i].length) {
            if (arr[j][k] === color) {
                winner++;
                if (winner === 4) {
                    console.log(color, "wins");
                }
            } else {
                winner = 0;
            }
            j++;
            k++;
        }
    }
}

//This function checks diagonal from top right to bottom left for four chips in a row of the same color
function diagonalrev(arr, color) {
    var test = [
        [0, 3],
        [0, 4],
        [0, 5],
        [0, 6],
        [1, 6],
        [2, 6]
    ];
    for (var i = 0; i < test.length; i++) {
        var j = test[i][0];
        var k = test[i][1];            
        var winner = 0;
        while (j < arr.length && k < arr[i].length) {
            if (arr[j][k] === color) {
                winner++;
                if (winner === 4) {
                    console.log(color, "wins");
                }
            } else {
                winner = 0;
            }
            j++;
            k--;
        }
    }
}

connectfour(arrayh, "R");
connectfour(arrayh, "Y");
connectfour(arrayv, "R");
connectfour(arrayv, "Y");
diagonal(arrayh, "R");
diagonal(arrayh, "Y");
diagonalrev(arrayh, "R");
diagonalrev(arrayh, "Y");