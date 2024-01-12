

export function sendPostRequest(content, link) {

    const requestOptions = {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({content: content})
    }

    fetch(link, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}
