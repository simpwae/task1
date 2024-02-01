// const country = "Pakistan";
// const continent = "Asia";
// var popuation;
// popuation = 241492197;
// console.log(`the information is ${country} \n ${continent}\n ${popuation}`);
// let isIsland = false;
// let language;
// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof popuation);
// console.log(typeof isIsland);
// console.log(typeof language);

// language = "Urdu";
// // popuation = "241 mill";
// // console.log(popuation);

// let halfPoppu = popuation / 2;
// console.log("half of the poppulation is :", halfPoppu);
// popuation++;
// console.log(popuation);

// let finland = 6000000;
// console.log(
//   "pakistan has less population then Finlanf?::",
//   popuation > finland
// );

// let avg = 33000000;
// console.log("Is Pakistan population avg?", popuation <= avg);

// let discription = `Portugal is in Europe ,and its 11 million people speak portuguese`;

// if (popuation > 33000000) {
//   console.log(`Portugal's populetion is above avg`);
// } else {
//   console.log(`purtugals poppulation is below avg`);
// }

// // popuation = 13;

// // if (popuation > 33000000) {
// //   console.log(`Portugal's populetion is above avg`);
// // } else {
// //   console.log(`purtugals poppulation is below avg`);
// // }

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" + "13" - 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// let numNeighbour = prompt(
//   "How many neighbour countries does your country have?"
// );
// if (Number(numNeighbour) === 1) {
//   console.log("1 noice");
// } else if (numNeighbour > 1) {
//   console.log("good relations noice");
// } else {
//   console.log("no border");
// }

// let language = prompt(`Is the native langauge eng?(true/false) ::`);
// let population = parseInt(
//   prompt(`what's the popullatation there? in millons::`)
// );
// let isIsland = prompt(
//   `Is the Place you are refering to an Island? (true/false)`
// );

// let conName = prompt(`what's the name of the country you are refering to?`);

// if (language === "true" && population < 50 && isIsland === "false") {
//   console.log("you have met the Requrements");
// } else {
//   console.log(`sorry but it dosen't meet the criteria.`);
// }
// console.log(conName);

// let langauge = prompt("enter a language::");
// switch (langauge) {
//   case "chinese":
//     console.log("Most number of native speakers");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("greate language too :D");
//     break;
// }

// let poppulation = 341841;
// poppulation > 33000000
//   ? console.log("purtugal population is above avg")
//   : console.log("purtugal population is below avg");

// for (let i = 0; i <= 1000; i++) {
//   console.log(i);
// }

// for (let i = 1000; i >= 0; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }
let arr = [12, 23, 43, 12, 33];
console.log("original Array:: ", arr);

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      let amp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = amp;
      console.log(arr[j + 1]);
    }
  }
}
console.log("sorted array:: ", arr);
