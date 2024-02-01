import {deleteFileDiscord, downloadFileDiscord} from "./handleDiscordConnexion";

export function createDownloadButtons() {
    const storedFiles = JSON.parse(localStorage.getItem('storedFiles'));
    let dynamicDivs = [];

    async function deleteFile(fileId){
        await deleteFileDiscord(fileId);
        window.location.reload();
    }

    async function downloadFile(fileId){
        await downloadFileDiscord(fileId);
        console.log(fileId)
    }

    for (let key in storedFiles) {
        let fileName = storedFiles[key][0];
        let fileSize = storedFiles[key][1]
        dynamicDivs.push(
            <div className="m-3 bg-gray-900 rounded-3xl w-screen max-w-screen-lg mx-auto">
                <div className="m-5 flex">
                    <div className="flex-1">
                        <h1 className="font-bold">{fileName}</h1>
                        <p1>{fileSize}MB</p1>
                    </div>
                    <div className="flex-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-10 m-2"
                                onClick={()=>{downloadFile(key)}}>Download</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-10 m-2"
                                 onClick={()=>{deleteFile(key)}}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
    return dynamicDivs
}
