const jsdom = require('jsdom');
const fs = require('fs');
const { JSDOM } = jsdom;
const html = fs.readFileSync('./index.html', 'utf-8');
const dom = new  JSDOM(html);



const document =  dom.window.document;
let myclass = document.querySelector("#content");

myclass.classList.add('black', 'yellow');
myclass.classList.add("white");
myclass.classList.remove("white");
myclass.classList.replace('yellow', "newyellow")
myclass.classList.toggle('visible')
myclass.classList.add("newVisible")
myclass.classList.toggle('newVisible')
for (let cls of myclass.classList)
{
    console.log(cls);
}
console.log(myclass.classList.contains('black')) 
console.log(myclass.classList.contains('blackd'))
