export async function fetchInfo() {
    try {
        loadingSpinner.style.display = "block";
        let response = await fetch("https://jsonplaceholder.typicode.com/users")// fetching from API
        let data = await response.json()

        return data

    } catch (error) {
        throw new Error("Error Retrieveing Data");
    }finally {
        loadingSpinner.style.display = "none";
    }
}
