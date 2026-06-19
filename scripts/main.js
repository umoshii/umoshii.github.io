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

        selectHeaderDescription() {
            let pick = "";

            do {
                pick = (this.headerDescriptionList[Math.floor(Math.random() * this.headerDescriptionList.length)]);
            } while (pick === this.headerDescription);

            this.headerDescription = pick;
        },

        init() {
            console.log("meow");
            this.selectHeaderDescription();
        }
    };
}