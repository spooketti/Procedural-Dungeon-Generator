//2 = occupied space
//1 = possible entrance
//0 = empty space
//3 starting room
//
let startRoom = [
    [0,1,0],
    [0,2,0],
    [0,0,0]
]

let OneByOne = 
[
    [0,1,0],
    [1,2,1],
    [0,1,0]
]

let OneByTwo =
[
    [1,0,0,0],
    [2,0,0,0],
    [2,0,0,0],
    [1,0,0,0]
]

let LBend = 
[
    [1,2,2],
    [0,0,2],
    [0,0,1]
]

let TBend = 
[
    [1,2,2,2,1],
    [0,0,2,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]    
]

let OneByThree = 
[
    [1,0,0,0,0],
    [2,0,0,0,0],
    [2,0,0,0,0],
    [2,0,0,0,0],
    [1,0,0,0,0]
]

let TwoByTwo = 
[
    [0,1,0,0],
    [1,2,2,0],
    [0,2,2,1],
    [0,0,1,0]
]

let roomList = {
    0:startRoom,
    1:OneByOne,
    2:OneByTwo,
    3:OneByThree,
    4:TwoByTwo,
    5:LBend
}