let dungeon = Array.from({ length: 20 }, () => new Array(20).fill(0));
console.log(dungeon)

startRoomX = Math.floor(Math.random() * 20)
startRoomY = Math.floor(Math.random() * 20)

function getRandomRoom()
{
    
    let chosenPiece = roomList[Math.floor(Math.random()*Object.keys(roomList).length)].map(function (arr) {
        return arr.slice()
    })
    console.log(chosenPiece)
    let rotatedPiece
    let rotation = Math.floor(Math.random()*4)
    console.log(rotation)
        switch(rotation)
        {
            case 0:
                rotatedPiece = chosenPiece.map(function(arr){
                    return arr.slice()
                })
            break

            case 1:
            rotatedPiece = chosenPiece.map((val, index) =>chosenPiece.map(row => row[index]).reverse()) //clockwise
            break

            case 2:
            rotatedPiece = chosenPiece.map((val, index) => chosenPiece.map(row => row[row.length - 1 - index])) //counterclockwise
            break

            case 3:
                rotatedPiece = chosenPiece.map(function (arr) {
                    return arr.slice();
                });
            rotatedPiece.reverse().forEach(function (item) { item.reverse(); });
            break
        }
    return rotatedPiece
}

console.log(getRandomRoom())

// console.log(verifyValidPlacement(startRoomX, startRoomY, 0,false,true))

// function verifyValidPlacement(x, y, pieceType, final,isEndpoint) {

//     let testedDungeon = dungeon.map(function (arr) {
//         return arr.slice()
//     })
//     let testedRoom = roomList[pieceType].map(function (arr) {
//         return arr.slice();
//     })
//     let nextRoom = []

//     let entranceCount = testedRoom.flat().filter(value => value === 1).length
//     for (let i = y; i < testedRoom.length + y; i++) {
//         for (let j = x; j < testedRoom[i - y].length + x; j++) {
//             console.log(testedRoom)
//             switch (testedRoom[i - y][j - x]) {
//                 case 0:
//                     break;

//                 case 1:
//                     if (i >= testedDungeon.length || j >= testedDungeon[i].length || (testedDungeon[i][j] != 1 && !isEndpoint)) {
//                         entranceCount--;
//                         if (entranceCount <= 0) {
//                             return false
//                         }
//                         break
//                     }
//                     nextRoom.push([i, j])
//                     testedDungeon[i][j] = 1
//                     break;

//                 case 2:
//                     if (i >= testedDungeon.length || j >= testedDungeon[i].length || (testedDungeon[i][j] != 0)) {
//                         return false
//                     }
//                     testedDungeon[i][j] = 2
//                     break;
//             }

//         }
//     }
//     console.log(testedDungeon)
//     dungeon = testedDungeon.map(function (arr) {
//         return arr.slice()
//     })
//     if (!final) {
//         for (let i = 0; i < nextRoom.length; i++) {
//            console.log(verifyValidPlacement(nextRoom[i][1],nextRoom[i][0],1,true,false))
//         }
//     }
//     return true;



// }