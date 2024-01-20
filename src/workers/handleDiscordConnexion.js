import {sendPostRequest} from "./requests";
import {sendGetRequest} from "./requests";


export async function checkIfServerIsConnectedToDiscord(dataManager) {
    let returnedData = await sendGetRequest("http://127.0.0.1:5000/api/checkIfLoggedIn");
    if (returnedData == null)
        return;
    if (returnedData.isLoggedIn == true)
        dataManager.SaveNewLoginData(returnedData.discordToken);
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
