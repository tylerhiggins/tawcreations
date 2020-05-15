<template>
    <div class="prices">
        <b-container>
        <b-alert
                :show="dismissCountDown"
                fade
                variant="info"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
        >
            <p>Please read my <a class="alert-link" href="tos">Terms of Service</a> before commissioning me!</p>
        </b-alert>
        </b-container>
        <h1>Prices</h1>
        <h3>Digital Artwork Prices:</h3>
        <div class="ex_section">
            <p><span>Reference Sheet</span> - Starting at $30 </p>
        <b-img class="ref-example" :src="require('@/assets/prices/ref_example.png')"></b-img>

        </div>
        <div class="ex_section">
            <p><span>Fullbody</span> - Starting at $25 </p>
            <b-img class="ref-example" :src="require('@/assets/prices/fullb_example.jpg')"></b-img>
        </div>
        <div class="ex_section">
            <p><span>Halfbody</span> - Starting at $20</p>
            <b-img class="example" :src="require('@/assets/prices/halfb_example.png')"></b-img>
        </div>
        <div class="ex_section">
            <p><span>Headshot</span> - Starting at $15</p>
            <b-img class="example" :src="require('@/assets/prices/head_ex.png')"></b-img>
        </div>
        <div class="ex_section">
            <p><span>Couples</span> - Starting at $30</p>
            <b-img class="example" :src="require('@/assets/prices/couples_ex.jpg')"></b-img>
        </div>
        <div class="ex_section">
            <p><span>NSFW (ID required)</span> - Starting at $25<br></p>
            <div id="noauth" v-if="!inStorage">
                <confirmation :coming-from="'prices'"></confirmation>
            </div>
            <div id="auth" v-if="ofAge">
                <b-img class="example" :src="require('@/assets/nsfwgallery/nsfw4.png')"/>
            </div>
            <div id="noych" v-if="inStorage && !ofAge">
                <b-container>
                <b-card class="bg-dark text-center">
                    <b-card-header>
                        <h1 id="message">You are not authorized to view this image.</h1>
                    </b-card-header>
                </b-card>
                </b-container>
            </div>
        </div>
        <div class="ex_section">
            <p><span>Gore</span> - Starting at $20</p>
            <b-img class="example" :src="require('@/assets/prices/gore_ex.png')"></b-img>
        </div>
        <div class="ex_section">
            <p><span>Feral</span> - Starting at $15</p>
            <b-img class="example" :src="require('@/assets/prices/feral_ex.png')"></b-img>
        </div>
        <div class="ex_section">
            <p><span>Realistic</span> - Starting at $20</p>
            <b-img class="example" :src="require('@/assets/prices/realistic_ex.png')"></b-img>
        </div>
        <div class="ex_section">
            <p><span>Chibi</span> - Starting at $10</p>
            <b-img class="example" :src="require('@/assets/prices/chibi_ex.png')"></b-img>
        </div>
        <div class="ex_section">
            <p><span>Lineart</span> - Starting at $10</p>
        </div>
        <div class="ex_section">
            <p><span>Icons</span> - Starting at $10</p>
            <b-img class="example" :src="require('@/assets/prices/icon_ex.jpg')"></b-img>
        </div>
        <div class="ex_section">
            <p><span>Animated Icon</span> - Starting at $15</p>
        </div>
        <div class="ex_section">
            <p><span>Stickers</span> - Small: $1 Medium: $2 Large $5</p>
            <b-img class="example" :src="require('@/assets/prices/sticker_ex.png')"></b-img>
        </div>
    </div>
</template>

<script>
    import confirmation from '../components/Confirmation.vue'
    export default{
        components: {
          confirmation
        },
        name: "digitalprices",
        data() {
            return {
                dismissSecs: 10,
                dismissCountdown: 0,
                ofAge: false
            }
        },
        created: function(){
            this.showAlert()
            let confirmStr = localStorage.getItem("confirm")
            if (confirmStr !== null) {
                this.inStorage = true
                let confirm = JSON.parse(confirmStr)
                let date = new Date()
                if (date.getTime() > confirm.expDate) {
                    localStorage.removeItem("confirm")
                    this.inStorage = false
                } else {
                    this.ofAge = confirm.ofAge
                }
            } else {
                this.inStorage = false
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            }
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
        max-width: 30%;
    }
    .ref-example {
        max-width: 50%;
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
    #message{
        color: red;
        text-decoration: none;
    }
</style>
