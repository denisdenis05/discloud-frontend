import {sendFilePostRequest, sendPostRequest, sendGetRequest} from "./requests";


export async function checkIfServerIsConnectedToDiscord(dataManager) {
    let returnedData = await sendGetRequest("http://127.0.0.1:5000/api/checkIfLoggedIn");
    if (returnedData == null)
        return;
    if (returnedData.isLoggedIn == true)
        dataManager.SaveNewLoginData();
    if (returnedData.storedFiles != {})
        dataManager.SaveUploadedFiles(returnedData.storedFiles);
}

export async function disconnectFromDiscord(dataManager) {
    dataManager.RemoveLoginData();
    await sendGetRequest("http://127.0.0.1:5000/api/disconnectFromDiscord");
}

export async function connectToDiscord(dataManager, token){
    dataManager.SaveNewLoginData(token);
    const dataToSend = {"token": token}
    await sendPostRequest(dataToSend, "http://127.0.0.1:5000/api/connectToDiscord");
}

export async function deleteFileDiscord(fileId)
{
    console.log(fileId)
    const dataToSend = {"fileId": fileId}
    await sendPostRequest(dataToSend, "http://127.0.0.1:5000/api/deleteFile");
}



export async function uploadFileToDiscord(dataManager, fileData)
{
    await sendFilePostRequest(fileData, "http://127.0.0.1:5000/api/uploadFile");
}
