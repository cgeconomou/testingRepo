console.log('Hello, World!');

const unusedVar = 42

let count = 0;
const increment = () => {
  count++
  console.log(`Count is now: ${count}`);
}

async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log("Fetched data:", data)
  } catch(error) {
    console.error('Fetch failed!', error)
  }
}
console.log(object);
increment()
getData()

if (true) {
    const message = "This is a test"
    console.log(message)
}
