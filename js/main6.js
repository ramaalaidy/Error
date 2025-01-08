function squareNumber(value) {
    if (typeof value !== "number") {
        throw new TypeError("Argument is not a number.");
    }
    return value * value;
}

function handleSquareNumber(input) {
    try {
        const result = squareNumber(input);
        console.log(`The square of ${input} is ${result}`);
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Error handled:", error.message);
        } else {
            throw error; 
        }
    }
}

handleSquareNumber(5); 
handleSquareNumber("test"); 
handleSquareNumber(true); 
