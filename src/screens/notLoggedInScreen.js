import logo from '../images/logo.svg';
import {connectToDiscord} from "../workers/handleDiscordConnexion";

function NotLoggedInScreen(dataManager, inputValue, setInputValue) {
    console.log("UESSSSS")

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };


    function logIn() {
        function checkIfInputIsOk(){
            if (inputValue.length > 3)
                return true
            return false
        }
        if (checkIfInputIsOk()) {
            (async () => {
                await connectToDiscord(dataManager, inputValue);
            })();
            window.location.reload();
        }
    }


    console.log("UESSSSS")
    return (
        <div className="h-lvh flex items-center justify-center bg-slate-700">
            <div className="flex flex-col items-center justify-center text-white text-lg">
                <img src={logo} className="w-32 animate-spin fixed top-5 left-5 " alt="logo" />
                <h1 className="font-bold text-3xl m-1">DisCloud</h1>
                <p>Input your discord bot token to start</p>
                <br></br>
                <input
                    className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="discordBotId"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type Your Discord bot ID"
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-2"
                    onClick={logIn}
                >
                    Log In
                </button>
                <a
                    className="text-blue-500 hover:text-blue-200"
                    href="https://discordpy.readthedocs.io/en/stable/discord.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    How to create a discord bot
                </a>
            </div>
        </div>
    );
}

export default NotLoggedInScreen;
