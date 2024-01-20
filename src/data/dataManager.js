
export const DataManager = class{
    constructor() {
        this.jsonData = null;
        this.GetJsonData();
    }

    SaveNewLoginData(loginData) {
        this.GetJsonData();
        this.jsonData.loggedIn = true;
        this.jsonData.userDetails.token = loginData;
        this.SaveJsonData();
    }

    RemoveLoginData(){
        this.GetJsonData();
        this.InitializeWithStandardJson();
        this.SaveJsonData();
    }

    IsConnectedToDiscord(){
        return this.jsonData.loggedIn;
    }

    SaveJsonData() {
        const indentationSpaces = 2;
        const jsonString = JSON.stringify(this.jsonData, null, indentationSpaces);
        localStorage.setItem('loginData', jsonString);

    }

    InitializeWithStandardJson(){
        this.jsonData = {
            "loggedIn": false,
            "userDetails": {}
        };
    }

    GetJsonData(){
        const savedData = localStorage.getItem('loginData');
        if (savedData != null) {
            try {
                this.jsonData = JSON.parse(savedData);
            }
            catch{
                this.InitializeWithStandardJson();
            }
        }
        else
            this.InitializeWithStandardJson();

    }
};
