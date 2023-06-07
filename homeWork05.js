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