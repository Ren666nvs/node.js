// console.log('hello');

const { sourceMapsEnabled } = require("process");

// const { log } = require('console');
// const fs = require('fs');

//     fs.readFile('text.txt', 'utf8', (err, data) => {
//         if (err) {
//             console.error('Файл уншихад алдаа гарлаа:', err);
//             return;
//         }
//         console.log('Файлын агуулга:', data);
//     });
//     const fs = require ('fs');
// const { text } = require('stream/consumers');
//     fs.readFile('text.txt' , 'utf8', (err, data) => {
//       if(err) {
//         console.log('text.txt', data);

//       }
//     });
// const text = `
// apple apple apple apple apple apple apple apple apple apple banana monkey apple apple apple apple apple apple
// `;

// const match = text.match(/banana\s+(\w+)/);

// if (match) {
//   console.log(`"banana" үгийн дараах үг: ${match[1]}`);
// } else {
//   console.log('"banana" үгийн дараа үг олдсонгүй.');
// }
// let fs = requare('fs');
// let node = requare('text.txt');
// text.txt
//1
// const fs = require("fs");
// fs.readFile("./text.txt",(err, content) =>{
//     const text = content.toString();
//     console.log(text);

// });
//const fs = require('fs');
//const { createRequire } = require('module');
// Файлыг унших
// fs.readFile('text.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Алдаа гарлаа:', err);
//     return;
//   }

// 'banana' үгийг хайх
//2
// const fs = require("fs");
// const { createRequire } = require('module');
// fs.readFile("text.txt", (err, data) => {
//     if (err) {
//         console.error('Алдаа гарлаа:', err);
//             return;
//     }
//   const searchWord = "banana";
//   const count = (data.match(new RegExp(searchWord, "g")) || []).length;
//   console.log(`'${searchWord}' `);
//   console.log(banana)
//   console.log(searchWord);
//});
//  const fs = require('fs');
//  const file = fs.readFileSync('./text.txt', "utf8");
//  console.log(file);
//      if (err) {
//            console.error('Алдаа гарлаа:', err);
//   return;
// }

// fs.readFile("text.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Файл уншихад алдаа гарлаа:", err);
//     return;
//   }
//   console.log("Файлын агуулга:", data);
// });
// const fs = require("fs");
// const { text } = require("stream/consumers");
// fs.readFile("text.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("text.txt", data);
//   }
// });
// const fs = require('fs');

// Файлыг уншина
// fs.readFile('text.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Файлыг уншихад алдаа гарлаа:', err);
//         return;
//     }

//     // "banana" үгийг тоолох
//     const searchWord = 'banana';
//     const count = (data.match(new RegExp(`\\b${searchWord}\\b`, 'g')) || []).length;

//     console.log(`'${searchWord}' үг ${count} удаа байна.`);
// });
// const fs = require('fs');

// // Файлыг уншина
// fs.readFile('text.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Файлыг уншихад алдаа гарлаа:', err);
//         return;
//     }

//     // Үгсийг массив болгон хуваах
//     const words = data.split(/\s+/); // Зай, шинэ мөр, табаар үгсийг хуваах
//     const searchWord = 'banana';

//     // "banana" үгийн тоог гаргах
//     const count = words.filter(word => word === searchWord).length;

//     console.log(`"${searchWord}" үг ${count} удаа байна.`);
// });
// const fs = require('fs');
// const path = require('path');

// // Одоогийн замыг авна
// const currentDir = process.cwd();

// // Файлууд болон сангуудыг жагсаана
// fs.readdir(currentDir, (err, files) => {
//     if (err) {
//         console.error('Файлуудыг жагсаахад алдаа гарлаа:', err);
//         return;
//     }

//     console.log('Файлууд ба сангууд:');
//     files.forEach(file => {
//         // Файл эсвэл сан гэдгийг шалгах
//         const fullPath = path.join(currentDir, file);
//         const stats = fs.statSync(fullPath);

//         if (stats.isDirectory()) {
//             console.log(`[DIR]  ${file}`);
//         } else {
//             console.log(`       ${file}`);
//         }
//     });
// });

// import chalk from 'chalk';

// // console.log(chalk.blue('hello world'));
// // import chalk from 'chalk';

// const error = chalk.bold.red;
// const warning = chalk.hex('#FFA500'); // Orange color

// console.log(error('Error!'));
// console.log(warning('Warning!'));
// var figlet = require("figlet");
// import figlet from 'figlet';
// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// import ora from 'ora';

// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
// 	spinner.color = 'yellow';
// 	spinner.text = 'Loading rainbows';
// }, 1000);

// import { faker } from '@faker-js/faker';

// function Useprofile(name) {
//     const userProfile = [];
//     for (let i = 0; i < name; i++) {
//         const user = {
//             name: faker.name.firstName() + ' ' + faker.name.lastName(),
//             email: faker.internet.email(),
//             avatar: faker.image.avatar(),
//         };
//         userProfile.push(user);
//     }
//     return userProfile;
// }

//const profiles = Useprofile(2);
//console.log(profiles);
//  const pokemon = require('pokemon');
import pokemon from "pokemon";
export const printTexts = () => {
pokemon.all();
//=> ['Bulbasaur', …]

pokemon.random();
//=> 'Snorlax'

pokemon.getName(147);
//=> 'Dratini'

pokemon.getId('Dratini');
//=> 147



const all = pokemon.all();
//=> ['Bulbasaur', …]

pokemon.random();
//=> 'Snorlax'

pokemon.getName(147);
//=> 'Dratini'

const dratini = pokemon.getId("Dratini");
//=> 147
console.log(all);
}

