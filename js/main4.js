function generateTypeError() {
    throw new TypeError("This is not the correct type.");
}

try {
    generateTypeError();
} catch (error) {
    console.error(error.name + ": " + error.message);
}
