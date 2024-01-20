import logo from '../images/logo.svg';
import {disconnectFromDiscord} from "../workers/handleDiscordConnexion";



function LoggedInScreen(dataManager) {
    function logOut() {
        (async () => { await disconnectFromDiscord(dataManager); })();
        window.location.reload();
    }
    return (
        <div className="h-lvh flex items-center justify-center bg-slate-700">
            <img src={logo} className="w-32 animate-spin fixed top-5 left-5 " alt="logo" />
            <div className="flex flex-col items-center justify-center text-white text-lg">
                    <h1 className="font-bold text-3xl m-1">You're logged in</h1>
                    <p>gg</p>
                    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-2"
                         onClick={logOut}>Log Out</button>
            </div>
        </div>
    );
}

export default LoggedInScreen;
