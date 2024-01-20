

export async function sendPostRequest(content, link) {
    try {
        const requestOptions = {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(content)
        }

        const response = await fetch(link, requestOptions);
        const retrievedData = await response.json();

        console.log(retrievedData);
        return retrievedData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function sendGetRequest(link) {
    try {
        const requestOptions = {
            method: "GET",
            headers: {'Content-type': 'application/json'}
        };

        const response = await fetch(link, requestOptions);
        const retrievedData = await response.json();

        console.log(retrievedData);
        return retrievedData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
