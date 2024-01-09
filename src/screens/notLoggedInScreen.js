import logo from '../logo.svg';
import '../App.css';
import {useState} from "react";

function NotLoggedInScreen(dataManager) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    function logIn() {
        dataManager.SaveNewLoginData(inputValue);
        window.location.reload();
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>DisCloud</h1>
                <p>Log into your discord bot to continue</p>
                <input
                    className="App-inputText"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type Your Discord bot ID"
                />
                <button onClick={logIn} className="App-button">Log In</button>
                <a
                    className="App-link"
                    href="https://discordpy.readthedocs.io/en/stable/discord.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >How to create a discord bot</a>
            </header>
        </div>
    );
}

export default NotLoggedInScreen;
