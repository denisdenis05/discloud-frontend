

export async function sendPostRequest(content, link) {
    try {
        const requestOptions = {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(content)
        }

        const response = await fetch(link, requestOptions);
        const retrievedData = await response.json();

        return retrievedData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function sendFilePostRequest(content, link) {
    try {
        const requestOptions = {
            method: "POST",
            body: content
        }

        const response = await fetch(link, requestOptions);
        const retrievedData = await response.json();

        return retrievedData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function sendDownloadFileRequest(content, link){
    try {
        const requestOptions = {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(content)
        }

        const response = await fetch(link, requestOptions);
        const blob = await response.blob();

        const linkToClick = document.createElement("a");
        linkToClick.href = URL.createObjectURL(blob);
        linkToClick.download = "downloaded_file.png";
        document.body.appendChild(linkToClick);
        linkToClick.click();
        document.body.removeChild(linkToClick);
    }
    catch (error) {
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
        return retrievedData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
