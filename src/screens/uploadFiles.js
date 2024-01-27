import logo from '../images/logo.svg';
import {uploadFileToDiscord} from "../workers/handleDiscordConnexion";

function UploadFiles(dataManager, setPageNumber, selectedFile, setSelectedFile) {

    function uploadFile(){
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            (async () => { await uploadFileToDiscord(dataManager, formData); })();

            const waitUntilFileIsUploaded = 2;
            setPageNumber(waitUntilFileIsUploaded);
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };


    return (
        <div className="h-lvh flex items-center justify-center bg-slate-700">
            <img src={logo} className="w-32 animate-spin fixed top-5 left-5 " alt="logo" />
            <div className="flex flex-col items-center justify-center text-white text-lg">
                <h1 className="font-bold text-3xl m-1">Upload files</h1>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="px-4 py-2 border rounded"
                />
                <button  className="bg-green-300 hover:bg-green-950 text-white font-bold py-1 px-2 rounded m-2"
                         onClick={uploadFile}>Upload</button>
            </div>
        </div>
    );
}

export default UploadFiles;
