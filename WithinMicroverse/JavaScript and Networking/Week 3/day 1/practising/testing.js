// const sessions = {
//   mobile: [1, 2, 3],
//   tablet: [3, 4, 5],
//   desktop: [6, 7, 8],
// }

// const printData = (id, name, sessions) => {
//   var div = document.createElement('div')
//   div.id = id
//   div.textContent = `${name} : ${sessions}`
//   document.querySelector('body').appendChild(div)
// }

// const list = [];
// const devices = Object.keys(sessions)
// console.log(devices)
// devices.forEach((device) => {
//   const  id = `${device}-container`;
//   const  name = device;
//   const session = sessions[device];
//   printData(id, name, session);
// })



const pets = ['Cat', 'Dog', 'Bird', 'Fish', 'Frog', 'Hamster', 'Pig', 'Horse', 'Lion', 'Dragon'];
// Print all pets
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);
pets.forEach((pet) => console.log(pet));