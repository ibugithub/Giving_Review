var color = "red";
let animal = "dog"
{
    var color = "blue";
    let animal = "cat"
    
    console.log(`log 1 - color: ${color}`);
    console.log(`log 2 - animal: ${animal}`);
}
console.log(`log 3 - color: ${color}`);
console.log(`log 4 - animal: ${animal}`);



const pr = new Promise(function(resolve,reject){
    setTimeout(() => resolve("foo"), 1000);
    setTimeout(() => resolve("bar"), 500);
})

pr.then(
    res => {
        console.log(res);
    },
    err => {
        console.log(err);
    }
)

const fruit = ['mango', 'lemon', 'bananna', 'orange'];
const fruitNew = [...fruit[3], 'bird'];
console.log(fruitNew);