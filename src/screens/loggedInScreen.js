import logo from '../logo.svg';
import '../App.css';
import {sendPostRequest} from "../workers/requests"


function LoggedInScreen() {
    const linkToRequest = 'http://localhost:5000/login'
    let discordToken = 'dgvu3e73ubdjd33'
    sendPostRequest(discordToken, linkToRequest)
    return (
        <div className="bg-slate-700">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="">Xsss</h1>
            <p>XX</p>
        </div>
    );
}

export default LoggedInScreen;
