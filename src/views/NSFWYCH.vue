<template>
    <div class="nsfwych">
        <div id="notconfirmed" v-if="!ofAge">
            <confirmation></confirmation>
        </div>
        <div id="confirmed" v-if="ofAge">
            <b-container>
                <h1>Placeholder</h1>
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
                    confirm.expDate = date.getTime() + 5000
                    localStorage.setItem("confirm",JSON.stringify(confirm))
                }
            }
        }
    }
</script>
