
//создаю массив

let cars = [
    'ford',
    'mazda',
    'kia',
    'bmw'
]

console.log(cars);

// добавляю элемент в конец массива


cars.push('audi'); 

// удаляю элемент в конце массива и вывожу его отдельно

let audi = cars.pop();
console.log(cars, audi)

// удаляю и возвращаю первый элемент

let ford = cars.shift()
console.log(cars, ford)

// добавляет в начало

cars.unshift(audi)
console.log(cars)

// номер в массиве

let index = cars.indexOf('kia')
let kia = cars[index]
console.log(kia)