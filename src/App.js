import LoggedInScreen from './screens/loggedInScreen.js';
import NotLoggedInScreen from './screens/notLoggedInScreen.js';
import LoadingScreen from './screens/loadingScreen';
import ErrorScreen from './screens/errorScreen';
import UploadFiles from "./screens/uploadFiles";
import { DataManager } from './data/dataManager';
import { checkIfServerIsConnectedToDiscord } from './workers/handleDiscordConnexion';
import { useEffect, useMemo, useState } from 'react';

function App() {
    const dataManager = useMemo(() => new DataManager(), []);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            try {
                await checkIfServerIsConnectedToDiscord(dataManager);
                setIsLoggedIn(dataManager.IsConnectedToDiscord());
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [dataManager]);

    if (isLoading) {
        return LoadingScreen();
    }

    if (error) {
        return ErrorScreen(error);
    }

    if (isLoggedIn) {
        const homePage = 0;
        const uploadPage = 1;
        if (pageNumber == homePage) {
            return LoggedInScreen(dataManager, setPageNumber);
        }
        else if (pageNumber == uploadPage){
            return UploadFiles(dataManager, setPageNumber, selectedFile, setSelectedFile)
        }
        else
        {
            return
        }
    }
    return NotLoggedInScreen(dataManager, inputValue, setInputValue, setPageNumber);
}

export default App;
