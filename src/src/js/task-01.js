// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item
const totalNumberOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${totalNumberOfCategories.length}`);

// 2. Для кожного элемента li.item у списку
// ul#categories, знайде і виведе в консоль
// текст заголовку елемента(тегу < h2 >) і
// кількість елементів в категорії(усіх < li >,
// вкладених в нього).

totalNumberOfCategories.forEach(numCateg => {
    console.log('Category: ', numCateg.querySelector('h2').textContent);
    console.log('Elements: ', numCateg.querySelectorAll('li').length);
});