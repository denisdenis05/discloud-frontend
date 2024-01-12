import LoggedInScreen from './screens/loggedInScreen.js'
import NotLoggedInScreen from './screens/notLoggedInScreen.js'
import {DataManager} from "./data/dataManager"


function App() {
    let dataManager = new DataManager()




    // dataManager.RemoveLoginData()
    if (dataManager.IsConnectedToDiscord() == true)
        return LoggedInScreen(dataManager)
    else
        return NotLoggedInScreen(dataManager)
}

export default App;
