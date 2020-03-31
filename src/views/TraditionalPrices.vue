<template>
    <div class="prices">
        <b-alert
                :show="dismissCountDown"
                fade
                variant="info"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
        >
            <p>Please read my <a class="alert-link" href="tos">Terms of Service</a> before commissioning me!</p>
        </b-alert>
        <h1>Prices</h1>
        <h3>Traditional Artwork Prices:</h3>
        <div class="ex_section">
            <b-img class="example" :src="require('@/assets/tradprices/half_ex.jpg')"></b-img>
            <p><span>Halfbody</span> - Starting at $20</p>
        </div>
        <div class="ex_section">
            <b-img class="example" :src="require('@/assets/tradprices/head_ex.jpg')"></b-img>
            <p><span>Headshot</span> - Starting at $15</p>
        </div>
        <div class="ex_section">
            <p><span>Fullbody</span> - Starting at $25 </p>
        </div>
        <div class="ex_section">
            <p><span>Couples</span> - Starting at $30</p>
        </div>
        <div class="ex_section">
            <p><span>NSFW (ID required)</span> - Starting at $25<br></p>
            <b-button href="https://www.furaffinity.net/gallery/toxicangelwolfy/folder/752565/NSFW">
                NSFW Examples</b-button>
        </div>
        <div class="ex_section">
            <p><span>Gore</span> - Starting at $15</p>
        </div>
        <div class="ex_section">
            <p><span>Feral</span> - Starting at $15</p>
        </div>
        <div class="ex_section">
            <p><span>Realistic</span> - Starting at $15</p>
        </div>
        <div class="ex_section">
            <p><span>Chibi</span> - Starting at $10</p>
        </div>
        <div class="ex_section">
            <p><span>Lineart</span> - Starting at $10</p>
        </div>
        <div class="ex_section">
            <p><span>Stickers</span> - Small: $0.25 Medium: $0.50 Large $1</p>
        </div>
    </div>
</template>

<script>
    export default{
        name: "traditionalprices",
        data() {
            return {
                dismissSecs: 10,
                dismissCountdown: 0,
            }
        },
        created: function(){
            this.showAlert()
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
        }

    }
</script>

<style scoped lang="scss">
    .prices{
        text-align: center;

    }
    h1{
        text-decoration: underline;
        font-weight: bold;
        margin-bottom: 50px;
    }
    h3{
        font-weight: bold;
        margin-bottom: 10px;
    }
    .example {
        max-width: 25%;
    }
    .ex_section {
        margin-top: 25px;
        margin-bottom: 25px;
    }
    span{
        text-decoration: underline;
        font-weight: bold;
    }
    p {
        margin-top: 10px;
    }
</style>
