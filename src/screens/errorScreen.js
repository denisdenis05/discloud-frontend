import logo from '../images/logo.svg';


function ErrorScreen(error) {
    return (
        <div className="h-lvh flex items-center justify-center bg-red-700">
            <img src={logo} className="w-32 animate-spin fixed top-5 left-5 " alt="logo" />
            <div className="flex flex-col items-center justify-center text-white text-lg">
                <h1>{error.toString()}</h1>
            </div>
        </div>
    );
}

export default ErrorScreen;
