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
     
        startPadding = Math.floor((length - string.length)/2);
        start = string.padStart(startPadding+string.length);
        paddedString = start.padEnd(length);
        return paddedString;
        
    },

    has(object, key) {
        checkedPath = object[key] !== undefined;
        return checkedPath;
    },

    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            const originalValue = object[key];
            invertedObject = {originalValue : key};
            //console.log(invertedObject);
        }
        return invertedObject;
    },

    findKey(obj, predicate) {
        for (let key in obj) {
            let value = obj[key];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue === true) {
                return key;
            };
        };
        undefined
        return undefined;
    },

    drop(array, n) {
        if (n === undefined) {
            n = 1;
        };
        let droppedArray = array.slice(n, array.length);
        return droppedArray;
    },

    dropWhile(array, predicate) {
        const cb = (element, index) => {
            return !predicate(element, index, array);
        }
        let dropNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    chunk(array, size=1) {
        let arrayChunks = [];
        for (let i = 0; i < array.length; i+=size) {
            let arrayChunk = array.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        };
        return arrayChunks;
    }



};


console.log(_.clamp(1, 3, 5)); //passed
console.log(_.inRange(2, 3, 1)); //passed
console.log(_.words('i am the greatest coder alive.')); //passed
console.log(_.pad('geelong', 12)); //passed my tests. but didn't pass codecademy test and not sure why? - main issue was learning to string everything together to stop repeating code
console.log(_.has(_, 'inRange')); //passed - main issue was not inputtting it in console log properly!
//console.log(_.invert(_)); //failed. even followed tutorial and still failed??????
console.log(_.drop([1,2,3,4,5,6,7], 3)); //passed
console.log(_.chunk([1,2,3,4,5,6,7], 3)); //passed






// Do not write or modify code below this line.
module.exports = _;



