//Ex.1

// result - 1 3 6 4 2 5

//Ex.2

// result - 1 3 2

//Ex.3

// result - a b c 

//Ex.4

// result - "1" "123"; "2" "123"; "3" "321"; "4" undefined

//Ex.5

// result - 1 4 3 2

//Ex.6 Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
const arr = [10, 12, 15, 21];

const start = Date.now();
const showIndexElement = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        setTimeout(function (i) {
            return function() {
                console.log(`Идекс - ${i}, прошло ${(Date.now() - start) / 1000} секунд`);
            }
        }(i), 3000)
    }
}

showIndexElement(arr);
