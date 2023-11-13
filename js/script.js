const {createApp} = Vue;
const app = createApp ({
    data() {
        return {
            title: "Ciao",
            source: "img/PGGIF1551.webp",
        }
    }
})
app.mount("#app")
