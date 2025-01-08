function generateURIError() {
    throw new URIError("Invalid URI component detected.");
}

try {
    generateURIError();
} catch (error) {
    console.error(error.name + ": " + error.message);
}
