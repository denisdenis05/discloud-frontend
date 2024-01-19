import {sendPostRequest} from "./requests";
import {sendGetRequest} from "./requests";


export async function checkIfServerIsConnectedToDiscord(dataManager) {
    console.log("HERE")
    let returnedData = await sendGetRequest("http://127.0.0.1:5000/api/checkIfLoggedIn");
    if (returnedData == null)
        return;
    console.log("HERE RETURNED TSSAAA")

    console.log(returnedData)
    if (returnedData.isLoggedIn == true)
        dataManager.SaveNewLoginData(returnedData.discordToken);
}
