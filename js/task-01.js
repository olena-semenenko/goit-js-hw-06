// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelector('#categories');
// console.log(categories);
const list = categories.querySelectorAll('li.item');

console.log(`Number of categories: ${list.length}`);

list.forEach(item => {
  const category = item.children;

  console.log(`Category: ${category[0].textContent}`);
  console.log(`Elements: ${category[1].children.length}`);
});
