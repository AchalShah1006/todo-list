const sayHello = () => {
    return "Hello"
}

const greet = () => {
    return () => {
        return "Hello"
    }
}

let x = greet()
console.log(x())