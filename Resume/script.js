import { createApp, ref } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.1.4/vue.esm-browser.min.js'

AOS.init();

createApp({
    setup() {
        const user = ref({
            name: "朱建安",
            job: "前端工程師",
            seniority: "2~3年工作經驗",
            gitweb: "https://github.com/ANplayer4056",
            gmail: "gior4056@gmail.com"
        })

        const experience = ref([
            {
                id: 1, delayS: "200", years: "2019/5~2021/10", title: "大成資訊有限公司", subTitle: "網頁前端工程師 | 台中市西屯區",
                text: `開發 forntend/backend 等專案及維護，規劃與調整 RWD 建置，處理資料視覺化、多語系建置等需求`, img: "./image/icrown.png"
            },
            { id: 2, delayS: "600", years: "2015/9~2017/7", title: "國立高雄第一科技大學", subTitle: "資訊管理所 | 碩士畢業", text: "", img: "./image/nkfust.png" },
            { id: 3, delayS: "1000", years: "2011/9~2015/7", title: "私立亞洲大學", subTitle: "資訊多媒體應用學系 | 大學畢業", text: "", img: "./image/asia.png" },
        ])

        const frontendList = ref([
            { id: 1, title: "Pokemon 雷達分析", url: "https://anplayer4056.github.io/pokemon.github.io/", styleObj: { "background-Image": "url('./image/frontend1.JPG')" }, text: "使用 ECharts 製作資料視覺化的呈現 (雷達圖)。" },
            { id: 2, title: "翻牌配對小遊戲", url: "https://anplayer4056.github.io/vue3CardGame.github.io/", styleObj: { "background-Image": "url('./image/frontend2.JPG')" }, text: "使用 vue.js 製作簡單的 4 * 4 卡牌配對小遊戲。" },
            { id: 3, title: "線上刮刮樂", url: "https://anplayer4056.github.io/Lottery.github.io/", styleObj: { "background-Image": "url('./image/frontend3.JPG')" }, text: "使用 pixi.js 搭配 原生 canvas 模擬出來的線上刮刮樂小遊戲，配合亂數可以隨機中獎不同點數。" },
            { id: 4, title: "SQUID GAME", url: "https://anplayer4056.github.io/SQUID.github.io/", styleObj: { "background-Image": "url('./image/frontend4.JPG')" }, text: "形象網頁排版作品，透過 Bootstrap 以及 css 來編排 RWD 版面，讓網頁在不同裝置上，都能盡量呈現出最好的畫面。" },
            { id: 5, title: "隨機交友", url: "https://anplayer4056.github.io/Dating.github.io/", styleObj: { "background-Image": "url('./image/frontend5.JPG')" }, text: "使用 vue.js  並透過 Axios套件串接randomuser.me API 模擬出來的隨機交友抽卡。" },
            { id: 6, title: "旅行規劃小幫手", url: "https://anplayer4056.github.io/Travel.github.io/", styleObj: { "background-Image": "url('./image/frontend6.JPG')" }, text: "使用 vue.js 並透過 Axios套件串接高雄 open API  的景點 / 旅館 / Youbike2.0 三項 API，利用經緯度距離的計算，篩選提供相對應的參考選擇。" },
        ])


        const backendList = ref([
            { id: 1, title: "docker 練習", proj: [{ id: 1001, btnText: "nginx 環境", url: "https://github.com/ANplayer4056/docker-practice/tree/master/hello" }, { id: 1002, btnText: "node 環境1", url: "https://github.com/ANplayer4056/docker-practice/tree/master/vue_node" }, { id: 1003, btnText: "node 環境2", url: "https://github.com/ANplayer4056/docker-practice/tree/master/vuett" }], text: "運用 docker, docker-compose 並透過 dockerfile 來自製 image 模擬各環境使用情境 ，練習分別以 nginx 與 node 呈現自己在本地開發的結果。" },
            { id: 2, title: "後端練習", proj: [{ id: 2001, btnText: "golang 練習", url: "https://github.com/ANplayer4056/user-center" }], text: "運用 docker 建置 golang 環境，並搭配使用 phpmyadmin 及 mariadb , mysql ....等 container 以及 Gorm , gin 等套件練習 golang restful API，並在後續的練習中加入 redis 的使用。" }
        ])

        return {
            user,
            experience,
            frontendList,
            backendList
        }
    }
}).mount('#app')