import LoggedInScreen from './screens/loggedInScreen.js';
import NotLoggedInScreen from './screens/notLoggedInScreen.js';
import LoadingScreen from './screens/loadingScreen';
import ErrorScreen from './screens/errorScreen';
import { DataManager } from './data/dataManager';
import { checkIfServerIsConnectedToDiscord } from './workers/handleDiscordConnexion';
import { useEffect, useMemo, useState } from 'react';

function App() {
    const dataManager = useMemo(() => new DataManager(), []);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [inputValue, setInputValue] = useState('');

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
        return LoggedInScreen(dataManager);
    }

    return NotLoggedInScreen(dataManager, inputValue, setInputValue);
}

export default App;
