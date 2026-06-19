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
        lastUpdate: new Date("2026-06-19T18:35:00"),
        updateTimeAgo: "",

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

        timeAgo(date) {
            const now = Date.now();
            const diff = now - (date instanceof Date ? date.getTime() : date);

            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours   = Math.floor(minutes / 60);
            const days    = Math.floor(hours / 24);
            const months  = Math.floor(days / 30);
            const years   = Math.floor(days / 365);

            if (years > 0)   return years + 'y ago';
            if (months > 0)  return months + 'mo ago';
            if (days > 0)    return days + 'd ago';
            if (hours > 0)   return hours + 'h ago';
            if (minutes > 0) return minutes + 'm ago';
            if (seconds > 0) return seconds + 's ago';
            return 'just now';
        },

        init() {
            this.localTime = this.getUTC3Time();
            this.selectHeaderDescription();
            this.updateTimeAgo = this.timeAgo(this.lastUpdate);
        }
    };
}