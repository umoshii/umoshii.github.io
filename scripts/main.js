function app() {
    return {
        headerDescription: "",
        headerDescriptionList: [
            "web developer",
            "game developer",
            "rhythm game addict",
            "minecraft addict",
            "mc speedrunner",
            "puppy"
        ],

        localTime: "",

        getUTC3Time() {
            return new Date().toLocaleString('en-GB', { timeZone: 'Etc/GMT-3', hour: '2-digit', minute: '2-digit', hour12: false });
        },

        selectHeaderDescription() {
            let pick = "";

            do {
                pick = (this.headerDescriptionList[Math.floor(Math.random() * this.headerDescriptionList.length)]);
            } while (pick === this.headerDescription);

            this.headerDescription = pick;
        },

        init() {
            this.localTime = this.getUTC3Time();
            this.selectHeaderDescription();
        }
    };
}