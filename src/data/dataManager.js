
export const DataManager = class{
    constructor() {
        this.jsonData = null
        this.GetJsonData()
    }

    SaveNewLoginData(loginData) {
        this.GetJsonData()
        this.jsonData.loggedIn = true
        this.jsonData.userDetails.botId = loginData
        this.SaveJsonData()
    }

    RemoveLoginData(){
        this.GetJsonData()
        this.jsonData.loggedIn = false
        this.jsonData.userDetails = {}
        this.SaveJsonData()
    }

    SaveJsonData() {
        const indentationSpaces = 2
        const jsonString = JSON.stringify(this.jsonData, null, indentationSpaces);
        localStorage.setItem('myData', jsonString);

    }

    GetJsonData(){
        const savedData = localStorage.getItem('myData');
        console.log(savedData)
        if (savedData == null) {
            try {
                this.jsonData = JSON.parse(savedData);
            }
            catch{
                this.jsonData = {
                    "loggedIn": false,
                    "userDetails": {}
                }
            }
        }
    }
};
