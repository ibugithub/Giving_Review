// const obj1 = {
//     Name : 'ibrahim',
//     Roll : 1749,
//     ChangeName : function nameChanger () { },
// };

// const obj2 = {
//     Name : 'Rakib',
//     Roll : 1749,
//     ChangeName : function nameChanger () { },
// };


// const newObj = {obj1, ... obj2};
// console.log(newObj.Name);
// // console.log(newObj);
// // console.log(Object.getPrototypeOf(newObj));


function tree (name) {
    this.name = name;
} 

const newTree = new tree('ibrahim');
console.log(newTree.constructor)