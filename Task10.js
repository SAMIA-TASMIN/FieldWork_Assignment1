function fetchWithTimeout(url, ms) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request Timed Out"));
        }, ms);
    });

    return Promise.race([fetch(url), timeoutPromise]);
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 200)
    .then(response => response.json())
    .then(data => console.log("Data received:", data))
    .catch(error => console.error("Error:", error.message));