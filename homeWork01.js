// Ex1. create new object
//1
const counter = {
    count: 0,
    incrementCount() { this.count++ },
    decrementCount() { this.count-- },
};
//2
const counter2 = Object.create({}, {
    count: {
        value: 0,
        enumerable: true,
        writable: true,
        configurable: true,
    },
    incrementCount: {
        value: function () { this.count++ },
        enumerable: true,
    },
    decrementCount: {
        value: function () { this.count++ },
        enumerable: true,
    },
});
//3
const counter3 = Object.assign({ count: 0 }, {
    //this obj can be a separate variable
    incrementCount() { this.count++ },
    decrementCount() { this.count-- },
})
//4
const counter4 = new Object({
    count: 0,
    incrementCount() { this.count++ },
    decrementCount() { this.count-- },
})
//5
function createCounter(count) {
    this.count = count;
    this.incrementCount = function () { this.count++ };
    this.decrementCount = function () { this.count-- };
}
const counter5 = new createCounter(0);
//6
class CreaterCounter {
    constructor(count) {
        this.count = count;
    }
    incrementCount = function () { this.count++ };
    decrementCount = function () { this.count-- };
    //method for copy
    copyCounter() { return new CreaterCounter(this.count) };
}
const counter6 = new CreaterCounter(0);
//Ex.2 copy obj
//1 we can copy an object using the method from example 6 ^
//2 
const counterClone1 = { ...counter };
const counterClone2 = JSON.parse(JSON.stringify(counter)); //but we losing functions
//3
const counterClone3 = {};
for (let key in counter) {
    counterClone3[key] = counter[key];
}
//4
const counterClone4 = structuredClone(counterClone2);//but we can't copy functions
//Functions!
//1 FD
function makeCounter() {
    return {
        count: 0,
        incrementCount() { this.count++ },
        decrementCount() { this.count-- },
    };
};
//2 FE
const makeCounter1 = function () {
    return {
        count: 0,
        incrementCount() { this.count++ },
        decrementCount() { this.count-- },
    };
};
//3 AF
const makeCounter2 = () => {
    return {
        count: 0,
        incrementCount() { this.count++ },
        decrementCount() { this.count-- },
    };
};
//4 IIFE
(function () {
    console.log('A counter has been created!')
})()
//5 NFE
const makeCounter3 = function makeCounter4() {
    return {
        count: 0,
        incrementCount() { this.count++ },
        decrementCount() { this.count-- },
    };
};
//BONUS1
const obj1 = { here: { is: "on", other: "3" }, object: { someValue: 1 } };
const obj2 = { here: { is: "on", other: "3" }, object: { someValue: 1 } };
const obj3 = { here: { is: "off", other: "1" }, object: { someValue: '1' } };

const deepEqual = (obj1, obj2) => {
    const areObjects = typeof obj1 === 'object' && typeof obj2 === 'object';

    if (areObjects) {
        for (let key in obj1) {
            if (!obj2.hasOwnProperty(key)) return false;
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                const res = deepEqual(obj1[key], obj2[key]);
                if (!res) return false;
            } else {
                if (obj1[key] !== obj2[key]) return false;
            }
        }
        return true;
    } else {
        return obj1 === obj2;
    }

};
console.log(deepEqual(obj1, obj2)); //true
console.log(deepEqual(obj1, obj3)); //false

//Bonus2
function reverseStr(str) {
    return str.split('').reverse().join('');
}