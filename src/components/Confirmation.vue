<template>
    <div class="confirmation text-center">
    <b-container>
        <b-card class="bg-dark text-center" v-if="!noYCH">
            <b-card-header>
                <h1>Are you 18 or older?</h1>
            </b-card-header>
            <b-card-body>
                <span class="yes_span">
                <b-button variant="success" @click="confirmAge">Yes</b-button>
                </span><b-button variant="danger" @click="lockout">No</b-button>
<!--                <b-button v-if="comingFrom === 'ych'" variant="danger" to="/ych">No</b-button>-->
<!--                <b-button v-if="comingFrom === 'prices'" variant="danger" @click="showMessage">No</b-button>-->
                <b-container>
                <p id="agreement" class="mt-3">By clicking "Yes" you are confirming that you are 18 years or older, and have
                agreed to view sexually explicit content.</p>
                </b-container>
            </b-card-body>
        </b-card>
        <b-card class="bg-dark text-center" v-if="noYCH">
            <b-card-header>
                <h1 id="message">You are not authorized to view this image.</h1>
            </b-card-header>
        </b-card>
    </b-container>
    </div>
</template>

<script>
    export default {
        name: 'confirmation',
        props: {
          comingFrom: {
              type: String,
              require: true
          }
        },
        data () {
          return {
              noYCH: false
          }
        },
        methods: {
            confirmAge: function() {
                if(!localStorage.confirm){
                    let date = new Date()
                    let expire = 7200000
                    let newConfirm = {
                        ofAge: true,
                        expDate: date.getTime() + expire
                    }
                    localStorage.setItem("confirm",JSON.stringify(newConfirm))
                }
                window.location.reload()
            },
            lockout: function() {
                if(!localStorage.confirm){
                    let date = new Date()
                    let expire = 7200000
                    let newConfirm = {
                        ofAge: false,
                        expDate: date.getTime() + expire
                    }
                    localStorage.setItem("confirm",JSON.stringify(newConfirm))
                }
                if(this.comingFrom === 'gallery'){
                    this.$router.push("sfwgallery")
                } else if(this.comingFrom === 'ych'){
                    this.$router.push("ych")
                } else if(this.comingFrom === 'prices'){
                    this.showMessage()
                }
            },
            showMessage: function() {
                if(!this.noYCH) {
                    this.noYCH = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.yes_span {
    padding-right: 15px;
}
#message {
    color: red;
}
</style>
