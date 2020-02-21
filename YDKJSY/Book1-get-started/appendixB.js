/**
PRACTICE PRACTICE PRACTICE!
*/

//PRACTICING COMPARISONS
    //scheduleMeeting(...) should take a start time as a string ("hh:mm")
        //-Also a meeting duration (number of minutes)
        //-Should return true if meeting falls within 24 hour period
        //- Should return false if meeting violates the work day bounds

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {

    var [ , meetingStartHour, meetingStartMinutes ] =
        startTime.match(/^(\d{1,2}):(\d{2})$/) || [];
    
    durationMinutes = Number(durationMinutes);

    if (
        typeof meetingStartHour == "string" &&
        typeof meetingStartMinutes == "string"
    ) {
        let durationHours = Math.floor(durationMinutes / 60);
        durationMinutes = durationMinutes - (durationHours * 60);
        let meetingEndHour = Number(meetingStartHour) + durationHours;
        let meetingEndMinutes = Number(meetingStartMinutes) + durationMinutes;

        if (meetingEndMinutes >= 60) {
            meetingEndHour = meetingEndHour + 1;
            meetingEndMinutes = meetingEndMinutes - 60;
        }

        let meetingStart = `${meetingStartHour.padStart(2, "0")}:${meetingStartMinutes.padStart(2, "0")}`;

        let meetingEnd = `${String(meetingEndHour).padStart(2, "0")}:${String(meetingEndMinutes).padStart(2, "0")}`;

        return (
            meetingStart >= dayStart && meetingEnd <= dayEnd
        );
    }
    return false;
}



console.log(scheduleMeeting("7:00", 15)) //false
console.log(scheduleMeeting("07:15", 30)) //false
console.log(scheduleMeeting("11:30", 60)) //true
console.log(scheduleMeeting("17:00", 45)) //true

//PRACTICING CLOSURE
    //- range(...) takes a number as first argument, represents first number in range of numbers
    //- second argument is end of range

function range(start, end) {

    let resultArray = [];

    if(end) {
        for(let i = start; i <= end; i++) {
            resultArray.push(i);
        }

        return resultArray
    } else {
        return function range(endVal) {
            for(let i = start; i <= endVal; i++) {
                resultArray.push(i);
            }

            return resultArray
        }
    }
}

//book solution

function solutionRange(start, end) {
    start = Number(start);

    if (end === undefined) {
        return function getEnd(end) {
            return getRange(start, end)
        };
    }
    else {
        end = Number(end);
        return getRange(start, end);
    }

    function getRange(start, end) {
        var ret = [];
        for (let i = start; i <= end; i++) {
            ret.push(i);
        }
        return ret;
    }
}

console.log(range(3, 3)); //[3]
console.log(range(3, 8)); //[3, 4, 5, 6, 7, 8]
range(3, 0) // [0]

var start3 = range(3);
var start4 = range(4);

console.log(start3(3)); //[3]
console.log(start3(8)); //[3, 4, 5, 6, 7, 8]

console.log(start4(6)); // [4, 5, 6]

//PRACTICING PROTOTYPES
// - Work on this and objects linked via prototype chain
// - Define slot machine with 3 reels - each reel can individually spin();
// - display() should display the current contents of all reels
// - Reel object has basic behavior already defined
// - But, slot machine needs individual reel objects, which should delegate to reel object
//      - Each should have a position property
// - display() should show position, position - 1, and position + 1 in a 3x3 grid

function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
    symbols: [
        "♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length = 1
            );
        }
        return this.symbols[this.position];
    }
};
var slotMachine = {
    reels: [
        Object.create(reel),
        Object.create(reel),
        Object.create(reel)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel) {
            reel.spin();
        });
    },
    display() {
        var lines = [];

        //display all 3 lines on the slot machine
        for ( let linePos = -1; linePos <= 1; linePos++) {
            let line = this.reels.map(
                function getSlot(reel) {
                    var slot = Object.create(reel);
                    slot.position = (
                        reel.symbols.length +
                        reel.position +
                        linePos
                    ) % reel.symbols.length;
                    return reel.display.call(slot)
                }
            );
            lines.push(line.join(" / "));
        }

        return lines.join("\n");
    }
};