function app() {
    return {
        currentView: "home",

        switchView(view) {
            this.currentView = view;
        },
        
        checkView(view) {
            return view === this.currentView;
        }
    }
}