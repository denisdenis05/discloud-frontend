export function createDownloadButtons() {
    const storedFiles = JSON.parse(localStorage.getItem('storedFiles'));
    let dynamicDivs = [];
    for (let key in storedFiles) {
        let fileName = storedFiles[key][0];
        let fileSize = storedFiles[key][1]
        dynamicDivs.push(
            <div>
                <p>{fileName}: {fileSize}MB</p>
            </div>
        );
    }
    return dynamicDivs
}
