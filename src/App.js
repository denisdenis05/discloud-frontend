import LoggedInScreen from './screens/loggedInScreen.js'
import NotLoggedInScreen from './screens/notLoggedInScreen.js'
import {DataManager} from "./data/dataManager"
import {checkIfServerIsConnectedToDiscord} from "./workers/handleDiscordConnexion";


function Main(dataManager)
{
    (async () => {
        await checkIfServerIsConnectedToDiscord(dataManager);
        if (dataManager.IsConnectedToDiscord() == true)
            return LoggedInScreen(dataManager);
        else
            return NotLoggedInScreen(dataManager);
    })();
}

function App() {
    let dataManager = new DataManager();
    try{
        return (async () => {Main(dataManager)})();
    }
    catch (error) {
        console.error('Error in synchronousFunction:', error);
    }
}

export default App;
