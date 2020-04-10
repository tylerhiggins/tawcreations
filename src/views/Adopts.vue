<template>
    <div class="adopts">
        <b-alert
                :show="dismissCountDown"
                fade
                variant="info"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
        >
            <p>Please read my <a class="alert-link" href="tos">Terms of Service</a> before buying an adopt.</p>
        </b-alert>
        <h1>Current Adopts!</h1>
        <b-table-simple class="adopt-table" borderless>
            <colgroup><col><col></colgroup>
            <b-thead>

            </b-thead>
            <b-tbody>
                <b-tr>
                    <b-th>
                        <h4 class="adopt-desc">Eastern Dragon Adopt: $20</h4>
                <b-img class="adopt-img" :src="require('@/assets/adopts/slide4.jpg')" fluid></b-img>
                <p>Description: Fixed price for $20 for this Eastern Dragon!
                    <br>You can get a feral ref for an extra $10, chibi commission for an extra $5, and/or an icon for an extra $10!
                    <br>Base made by: <a href="https://www.furaffinity.net/user/ignitetheblaize"><font-awesome-icon icon="paw"/>&ensp;IgniteTheBlaize</a>
                    </p>  
                    <b-button href="https://www.furaffinity.net/view/35843385/">Claim this Eastern Dragon OC here!</b-button>
                    </b-th>
                    <b-th>
                        <h4 class="adopt-desc">Mystery Egg Adopts! (Only 4 Left!): $5</h4>
                <b-img class="adopt-img" :src="require('@/assets/adopts/eggadopts.png')" fluid style="max-width: 75%"></b-img>
                <p>Choose an egg and you will receive a mystery character reference sheet based on the egg color!<br>
                Price is $5 per egg, or egg with head shot commission for $15!</p>
                <b-button href="https://www.furaffinity.net/view/34595548/">Claim Here!</b-button>
                    </b-th>
                </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>
    export default {
        name: "adopts",
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
    .adopts {
        text-align: center;
    }
    .adopt-table {
        margin-top: 20px;
        margin-bottom: 20px;
        color: white;
    }
    .adopt-img {
    }
    .adopt-desc {
        font-weight: bolder;
        text-decoration: underline;
        margin-bottom: 25px;
    }
    p {
        font-size: 20px;
        margin-top: 20px;
        font-weight: bold;
    }
</style>
