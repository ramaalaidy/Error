function generateReferenceError() {
    throw new ReferenceError("This variable is not defined.");
}

try {
    generateReferenceError();
} catch (error) {
    console.error(error.name + ": " + error.message);
}
