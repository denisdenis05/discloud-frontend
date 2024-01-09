import jsonData from './data/data.json';
import LoggedInScreen from './screens/loggedInScreen.js'
import NotLoggedInScreen from './screens/notLoggedInScreen.js'
import {DataManager} from "./data/dataManager"


function App() {
    let dataManager = new DataManager()
    if (jsonData.loggedIn == true)
        return LoggedInScreen(dataManager)
    else
        return NotLoggedInScreen(dataManager)
}

export default App;
