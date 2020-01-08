// Rover Object Goes Here
// ======================
var rover = {
    direction: 'N',
    x: 0,
    y: 0,
};

var travelLog = [
    [rover.x, rover.y]
]



// ======================
function turnLeft(rover) {

    console.log("turnLeft was called!");

    switch (rover.direction) {

        case 'N':
            rover.direction = 'W';
            break;

        case 'W':
            rover.direction = 'S';
            break;

        case 'S':
            rover.direction = 'E';
            break;

        case 'E':
            rover.direction = 'N';
            break;
    }

}

function turnRight(rover) {

    console.log("turnRight was called!");

    switch (rover.direction) {

        case 'N':
            rover.direction = 'E';
            break;

        case 'E':
            rover.direction = 'S';
            break;

        case 'S':
            rover.direction = 'W';
            break;

        case 'W':
            rover.direction = 'N';
            break;
    }

}

function moveForward(rover) {

    if (rover.x <= 9 && rover.y <= 9) {

        console.log("moveForward was called");

        switch (rover.direction) {

            case 'N':
                rover.x++;
                travelLog.push([rover.x, rover.y]);
                break;

            case 'E':
                rover.y++;
                travelLog.push([rover.x, rover.y]);
                break;

            case 'S':
                rover.x--;
                travelLog.push([rover.x, rover.y]);
                break;

            case 'W':
                rover.y--;
                travelLog.push([rover.x, rover.y]);
                break;

        }
        console.log("The current coordinates are:[" + rover.x + "," + rover.y + "]");
    } else {
        console.log("The Rover would fall off the map, please move elsewhere!");
    }

}

function moveBackward(rover) {

    if (rover.x <= 9 && rover.y <= 9) {

        console.log("moveForward was called");

        switch (rover.direction) {

            case 'N':
                rover.x--;
                travelLog.push([rover.x, rover.y]);
                break;

            case 'E':
                rover.y--;
                travelLog.push([rover.x, rover.y]);
                break;

            case 'S':
                rover.x++;
                travelLog.push([rover.x, rover.y]);
                break;

            case 'W':
                rover.y++;
                travelLog.push([rover.x, rover.y]);
                break;
        }
        console.log("The current coordinates are:[" + rover.x + "," + rover.y + "]");
    } else {
        console.log("The Rover would fall off the map, please move elsewhere!")
    }
}


function commands(str) {

    for (var i = 0; i < str.length; i++) {

        if (str[i] === 'f' || str[i] === 'r' || str[i] === 'l' || str[i] === 'b') {

            switch (str[i]) {

                case 'f':
                    moveForward(rover);
                    break;

                case 'b':
                    moveBackward(rover);
                    break;

                case 'r':
                    turnRight(rover);
                    break;

                case 'l':
                    turnLeft(rover);
                    break;

            }
        } else {
            console.log('Wrong command.')
        }
    }
}
