// 1 Задание
for (let i = 1; i <= 50; i++) {
    console.log(i);
}console.log("Цикл завершен");

// 2 Задание
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i, "-четное");
    } else {
        console.log(i, "-нечетное");
    }
}

// 3 Задание
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Сумма чисел:", sum);

//4 Задание
for (let i = 7; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//5 Задание
let count = 10;

do {
    console.log(count);
    count--;
} while (count >= 1);

console.log("Старт1");
//6 Задание
for (let i = 1; i <= 35; i++) {
    if (i % 5 === 0) {
        continue;
    }
    console.log(i);
}
//7 Задание
for (let i = 1; i <= 100; i++) {
    if (i === 36) {
        break;
    }
    console.log(i);
}
//8 Задание
let totalStudents = 10;
let present = 0;
let absent = 0;
for (let i = 1; i <= totalStudents; i++) {
    if ( i === 4 || i ===6) {
        console.log(`Студент №${i}: отсутствует`);
        absent++;
    } else {
        console.log(`Студент №${i}: присутствует`);
        present++;
    }
}
console.log("Всего студентов:", totalStudents);
console.log("Присутствуют:", present);
console.log("Отсутствуют:", absent);

//9 Задание
for (let i = 1; i <= 6; i++) {
    let row = "#";
    for (let j = 1; j <= 12; j++) {
        row += "#";
    }
    console.log(row);
}

//10 Задание
let points = 0;
let tasks = 0;

while (points < 100) {
    points += 10;

    tasks++;

    console.log("Баллы:", points);
}

console.log("Выполнено заданий:", tasks);