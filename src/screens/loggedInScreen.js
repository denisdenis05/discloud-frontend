import logo from '../logo.svg';
import '../App.css';
import {sendPostRequest} from "../workers/requests"


function LoggedInScreen() {
    const linkToRequest = 'http://localhost:5000/login'
    let discordToken = 'dgvu3e73ubdjd33'
    sendPostRequest(discordToken, linkToRequest)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>X</h1>
                <p>XX</p>
            </header>
        </div>
    );
}

export default LoggedInScreen;
