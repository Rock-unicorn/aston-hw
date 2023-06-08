//Ex.1 Какие бывают алгоритмы сортировок ?
//- Bubble sort (Сортировка пузырьком) один из самых известных, но не самый эффективный способ сортировки. Суть в проходе по массиву двумя циклами слева направо.
// Если текущий элемент больше последующего - меняем их местами. Повторяем пока массив не будет отсортирован. Сложность O(n^2)
//- Shaker sort (Шейкерная сортировка) Основное отличие от предыдущего - проход идет в обоих направлениях с помощью двух указателей (начального и конечного). Сложность O(n^2)
//- Comb sort (Сортировка расческой) Также модификация Bubble sort. Позволяет быстрее распределить меньшие значения к началу массива, большие к концу за счет прохода не по всему по массиву
// а по части, которая вычитается при помщи деления длины массива на коэффециент (1.247) Сложность O(n log n)
//- Insertion sort (Сортировка вставками) Суть - в каждом шаге алогоритма берется один из элемента массива, находится для него позиция в новом массиве и вставляется в него. Сложность O(n^2)
//- SHellsort (Сортировка Шелла) Идея сортировки расческой применяется в сортировке вставками. Сложность в среднем O(n^7/6)
//- Tree sort (Сортировка деревом) Элементыв вставляются в двоичное дерево поиска, зачем дерево проходится в глубину и получаем отсортированный массив. Сложность O(n log n)
//- Selection sort (Сортировка выбором) Находится минимум в массиве после текущего элемента, затем при  необходимости происходит замена Сложность O(n^2)
//- Quicksort (Быстрая сортировка) Определяется опорный элемент, переносим меньшие значения налево, большие направо. Рекурсивно вызывавется для каждогой из полученныхз половин. Сложность O(n^2)
//- Merge sort (Сортировка слиянием) Похож на предыдущий метод, однако, поддерживается два указателя на текущем элементе меньшей и большей частей.Сложность O(n log n)
//- Timsort - гибридная сортировка, совмещающая вставку и слияние. Сложность O(logn)
//- Также существуют следующие методы сортировки: Gnome sort, Counting sort, Bucket sort, Radix sort, Bitonic sort.

//Ex.3  Создать объект Person несколькими способами,
//после создать объект Person2, чтобы в нём были доступны методы объекта Person. 
//Добавить метод logInfo чтоб он был доступен всем объектам.
function createPerson(name, age, city) {
    this.name = name ?? 'Anonim';
    this.age = age ?? 'secret';
    this.city = city ?? 'The best city';
}
createPerson.prototype.sayMyName = function () {
    console.log(`Hi, my name is ${this.name}`);
}

const personF = new createPerson('Sara', 25, 'Saratov');

const personF1 = {
    name: 'Heisenberg',
    age: 64,
    city: 'Albuquerque',
}
Object.setPrototypeOf(personF1, personF);

createPerson.prototype.logInfo = function() {
    console.log(`Data: name - ${this.name}, age - ${this.age}, city - ${this.city}`);
}

class Persons {
    constructor(name, age, city) {
        this.name = name ?? 'Anonim';
        this.age = age ?? 'secret';
        this.city = city ?? 'The best city';
    }

    sayMyName() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

const personC = new Persons('Geralt', 100, 'Rivia');

class Persons1 extends Persons {
    constructor(name, age, city, hobby) {
        super(name, age, city);
        this.hobby = hobby ?? 'Videogames';
    }
}

const personC1 = new Persons1('Alex', 20, 'New York');

Persons.prototype.logInfo = function() {
    console.log(`Data: name - ${this.name}, age - ${this.age}, city - ${this.city}, hobby - ${this.hobby ?? 'Videogames'}`);
}

//Ex.4 Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.
class PersonThree extends Persons {
    constructor(name, age, city) {
        super(name, age, city);
    }
    #surname;

    set setSurname(surname) {
        this.#surname = surname;
    }

    get getSurname() {
        return this.#surname;
    }
}
const personC2 = new PersonThree('Maximus', 23, 'Dulok');
personC2.setSurname = 'Farquaad';
console.log(personC2.getSurname);

//Ex.bonus1 Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] + arr[j] == total) {
                return [arr[i], arr[j]];
            };
        };
    };
};

// Сложность алгоритма - O(n^2)