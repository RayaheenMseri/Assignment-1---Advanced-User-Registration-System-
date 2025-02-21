export async function fetchInfo() {
    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/users")// fetching from API
        let data = await response.json()

        return data

    } catch (error) {
        throw new Error("<li>Error fetching users</li>");
    }
}
