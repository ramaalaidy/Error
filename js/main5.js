function handleError(func) {
    try {
        func();
    } catch (error) {
        if (error instanceof RangeError) {
            console.error("RangeError handled:", error.message);
        } else if (error instanceof ReferenceError) {
            console.error("ReferenceError handled:", error.message);
        } else if (error instanceof URIError) {
            console.error("URIError handled:", error.message);
        } else if (error instanceof TypeError) {
            console.error("TypeError handled:", error.message);
        } else {
            console.error("Unhandled error:", error.message);
        }
    }
}

handleError(generateRangeError);
handleError(generateReferenceError);
handleError(generateURIError);
handleError(generateTypeError);
