import logo from '../images/logo.svg';
import {disconnectFromDiscord} from "../workers/handleDiscordConnexion";
import {createDownloadButtons} from "../workers/createDownloadButtons";



function LoggedInScreen(dataManager, setPageNumber) {
    function logOut() {

        (async () => { await disconnectFromDiscord(dataManager); })();
        window.location.reload();
    }

    function uploadFile(){
        const uploadPage = 1;
        setPageNumber(uploadPage);
    }

    const  divsWithDownloadButtons = createDownloadButtons();

    return (
        <div className="flex items-center justify-center bg-slate-700">
            <img src={logo} className="w-32 animate-spin fixed top-5 left-5 " alt="logo" />
            <div className="flex flex-col items-center justify-center text-white text-lg">
                    <h1 className="font-bold text-3xl m-10">Your files:</h1>
                {divsWithDownloadButtons}
                <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-10 m-2"
                         onClick={uploadFile}>Upload file</button>
                    <button  className="bg-red-500 hover:bg-red-950 text-white font-bold py-1 px-2 rounded m-2"
                         onClick={logOut}>Log Out</button>
            </div>

        </div>

    );
}

export default LoggedInScreen;
