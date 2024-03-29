import logo from '../images/logo.svg';


function LoadingScreen() {
    return (
        <div className="h-lvh flex items-center justify-center bg-slate-700">
            <img src={logo} className="w-32 animate-spin fixed top-5 left-5 " alt="logo" />
            <div className="flex flex-col items-center justify-center text-white text-lg">
                <h1 className="animate-pulse text-4xl">Loading...</h1>
                <p>Do NOT reload this page</p>
            </div>
        </div>
    );
}

export default LoadingScreen;
