import jsonData from './data/data.json';
import LoggedInScreen from './screens/loggedInScreen.js'
import NotLoggedInScreen from './screens/notLoggedInScreen.js'


function App() {
    if (jsonData.loggedIn == true)
        return LoggedInScreen()
    else
        return NotLoggedInScreen()
}

export default App;
