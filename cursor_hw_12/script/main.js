// ----------------------------------------------------------------------------------------------------------------
// Інформацію про те, як влаштовано АПІ шукайте в документації!

// 1.Cтворіть кнопку: "отримати інформацію". При натисканні на неї отримайте та відобразіть інформацію про усіх персонажів 5 епізоду 
// зоряних війн(films/2). Зверніть увагу, що необхідно вивчити документацію та на її основі вивести інформацію. 
// Виводимо тільки: повне ім'я персонажа, дата народження, стать(якщо зробите іконкою, буде взагалі ідеально). 
// БОНУС ПЛЮС: Якщо додумаєтесь, як зберігати і виводити фотки персонажів – буде дуже круто.

// Я дам підказку: можна створити об'єкт з ключ=посилання_на_персонажа, значення=посилання_на_фотку
// У самому АПІ фотографій нмає, але ДЗшка стане набагато приємніше виглядати з зображеннями персонажів

// Виведіть список усіх планет, які були у зоряних війнах.
// 3. Додайте кнопку next, яка завантажить наступну сторінку зі списком планет. Попередня сторінка при цьому має пропасти. 
// (відбувається заміна даних)

// 4. ADVANCED: додайте до 1 завдання поле вводу з номером фільму(номер по порядку випуску фильму). Тепер при натисканні нa
//  кнопку – необхідно отримати інформацію не про 5тий епізод, а про фільм, номер якого вказано у полі вводу. 
// Якщо вказана цифра 1 – потрібно передати запит на /films/1

// 5. ADVANCED: Додайте кнопку перекладу на вукийську мову. Після натискання на кнопку – весь отриманий по апі контент повинен перекластись
// на мову вуки. Для цього достатньо додати до будь-якого запиту: ?format=wookiee. При фантазії – можете ще і текст кнопок перекласти :)

const BASE_URL = 'https://swapi.dev/api/';
const container = document.querySelector(".container");
// const btnGetCharacter = document.querySelector(".btn-character");
// btnGetCharacter.onclick = getCharacters;

async function getCharacters() {
    const request = await fetch(`${BASE_URL}/films/2/`);
    const films = await request.json();
    const characters = films.characters;

    for (value of characters) {
      getSingleCharacter(value);
      console.log(value);
    }
  
}

// const characters = getCharacters();
// console.log(characters);

async function getSingleCharacter(charactersURL) {
    const request = await fetch(charactersURL);
    const char = await request.json();
    console.log(char.name, char.birth_year, char.gender);
    renderSingleCharacter(char);

  }


function renderSingleCharacter(character) {
  const characterWrapper = document.createElement("div");
  characterWrapper.classList.add("character");

  const name = document.createElement("p");
  name.classList.add("character-name");
  name.textContent = character.name;

  const birthDate = document.createElement("p");
  birthDate.classList.add("character-birth-date");
  birthDate.textContent = character.birth_year;

  const gender = document.createElement("p");
  gender.textContent = character.gender;

  characterWrapper.append(name);
  characterWrapper.append(birthDate);
  characterWrapper.append(gender);

  container.append(characterWrapper);
}

