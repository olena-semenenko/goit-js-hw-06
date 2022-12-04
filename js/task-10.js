// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const boxesEl = document.querySelector('#boxes');
const form = document.querySelector('#controls');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesNumb = form.firstElementChild;

boxesNumb.addEventListener('input', enterNumber);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', deleteBoxes);
let amount = 0;

function enterNumber() {
  amount = boxesNumb.valueAsNumber;
}

function createBoxes() {
  const markup = [];
  for (let i = 1; i <= amount; i += 1) {
    const color = getRandomHexColor();
    const box = document.createElement('div');
    const index = 30 + i * 10;

    box.style.width = `${index}px`;
    console.log(index);
    box.style.height = `${index}px`;
    box.style.backgroundColor = `${color}`;
    console.log(box);
    markup.push(box);
  }
  boxesEl.append(...markup);
}

function deleteBoxes() {
  //   console.dir(boxesEl.childNodes
  // );
  const boxesCollection = boxesEl.childNodes;
  boxesCollection.forEach(item => {
    item.remove();
  });
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(boxesEl.children)
