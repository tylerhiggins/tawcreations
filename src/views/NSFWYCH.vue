<template>
    <div class="nsfwych text-center">
        <div id="notconfirmed" v-if="!ofAge">
            <confirmation></confirmation>
        </div>
        <div id="confirmed" v-if="ofAge">
            <h1 id="nsfwych_title">Current 18+ YCH's</h1>
            <b-container class="ych_table">
                <b-row>
                    <b-col>
                        <h4 class="ych_title">Tied Up YCH - $20</h4>
                        <b-img class="ychimg" :src="require('@/assets/nsfwych/nsfwych1.png')" fluid></b-img>
                        <p class="ych_description"><span class="ych_notes">Note: Canine or feline female characters only.</span><br>
                        Comes with a clean and messy version! I can make small edits to this piece.<br>
                        This is a pay-to-use base by <a href="https://www.furaffinity.net/user/tailung">
                                tai_lung <font-awesome-icon icon="paw" />
                            </a>
                        </p>
                        <b-button href="https://www.furaffinity.net/view/35265274/">More Info</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    import confirmation from '../components/Confirmation.vue'
    export default {
        components: {
            confirmation
        },
        name: 'nsfwych',
        data() {
            return {
                ofAge: false
            }
        },
        created(){
            let confirmStr = localStorage.getItem("confirm")
            if (confirmStr !== null) {
                let confirm = JSON.parse(confirmStr)
                let date = new Date()
                if(date.getTime() > confirm.expDate){
                    localStorage.removeItem("confirm")
                } else {
                    this.ofAge = confirm.ofAge
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #nsfwych_title {
        font-weight: bold;
        text-decoration: underline;
    }
    .ych_table {
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .ychimg {
        max-width: 60%;
    }
    .ych_description {
        font-size: 18px;
        margin-top: 20px;
    }
    .ych_notes {
        color: red;
    }
</style>
