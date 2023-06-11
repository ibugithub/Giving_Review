fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => {response.json(); console.log('the response is', response)})
.then((json) => console.log(json));