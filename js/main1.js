function generateRangeError() {
    throw new RangeError("The provided value is out of range.");
}

try {
    generateRangeError();
} catch (error) {
    console.error(error.name + ": " + error.message);
}
