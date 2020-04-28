<template>
    <div class="nsfwGallery text-center">
        <div id="notconfirmed" v-if="!ofAge">
            <confirmation></confirmation>
        </div>
        <div id="confirmed" v-if="ofAge">
                <h1 id="title">18+ Gallery</h1>
            <b-container id="nsfwconainter">
                <b-row>
                    <b-col>
                        <b-img :src="require('@/assets/nsfwgallery/nsfw1.png')" fluid></b-img>
                    </b-col>
                    <b-col>
                        <b-img :src="require('@/assets/nsfwgallery/nsfw2.png')" fluid></b-img>
                    </b-col>
                    <b-col>
                        <b-img :src="require('@/assets/nsfwgallery/nsfw3.png')" fluid></b-img>
                    </b-col>
                    <b-col>
                        <b-img :src="require('@/assets/nsfwgallery/nsfw4.png')" fluid></b-img>
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
        name: 'nsfwGallery',
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
                if (date.getTime() > confirm.expDate) {
                    localStorage.removeItem("confirm")
                } else {
                    this.ofAge = confirm.ofAge
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
#title {
    font-weight: bold;
    margin-bottom: 50px;
    margin-top: 30px;
}
    #nsfwconainter {
        margin-bottom: 50px;
    }
</style>
