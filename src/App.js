import LoggedInScreen from './screens/loggedInScreen.js'
import NotLoggedInScreen from './screens/notLoggedInScreen.js'
import {DataManager} from "./data/dataManager"


function App() {
    let dataManager = new DataManager()
    fetch('http://localhost:5000/api/test')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));



    // dataManager.RemoveLoginData()
    if (dataManager.IsConnectedToDiscord() == true)
        return LoggedInScreen(dataManager)
    else
        return NotLoggedInScreen(dataManager)
}

export default App;
