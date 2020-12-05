const { result } = require("lodash");

const _ = {

    //clamp- clamps the number to equal or inbetween the lower and outer parameters no matter what the starting value is.
    clamp(number, lower, upper) {
        lowerClampedValue = Math.max(number, lower);
        clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    //inRange - 3 parameters. check if first parameter is in between last 2 parameters.
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        };
        if (start > end) {
            const newEnd = start;
            start = end;
            end = newEnd;
        };
        if (start <= number && number < end) {
            return true;
         } else {
             return false;
         };

    },

    words(strToArray) {
        return strToArray.split(' ');
    },

    pad(string, length) {
       /* if (string.length > length) {
            return string;
        } */
        //startPadding = Math.floor((length - string.length)/2);
        //endPadding = length - (string.length + startPadding);

        //return `${startPadding}string${endPadding}`;

        start = string.padStart(length, " ");
        end = string.padEnd(length, " ");
        return start + string + end;
        
    }

};

//console.log(_.clamp(1, 3, 5)); //passed
//console.log(_.inRange(2, 3, 1)); //passed
console.log(_.words('I love I love Gwenneth Treloar-Tanner')); //passed
console.log(_.pad('Geelong', 10));





// Do not write or modify code below this line.
module.exports = _;