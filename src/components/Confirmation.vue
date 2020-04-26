<template>
    <div class="confirmation text-center">
    <b-container>
        <b-card class="bg-dark text-center">
            <b-card-header>
                <h1>Are you 18 or older?</h1>
            </b-card-header>
            <b-card-body>
                <span class="pr-lg-4">
                <b-button variant="success" @click="confirmAge">Yes</b-button>
                </span><b-button variant="danger" to="/sfwgallery">No</b-button>
                <b-container>
                <p id="agreement" class="mt-3">By clicking "Yes" you are confirming that you are 18 years or older, and have
                agreed to view sexually explicit content.</p>
                </b-container>
            </b-card-body>
        </b-card>
    </b-container>
    </div>
</template>

<script>
    export default {
        name: 'confirmation',
        methods: {
            confirmAge: function() {
                if(!localStorage.confirm){
                    let date = new Date()
                    let expire = 5000
                    let newConfirm = {
                        ofAge: true,
                        expDate: date.getTime() + expire
                    }
                    localStorage.setItem("confirm",JSON.stringify(newConfirm))
                }
                window.location.reload()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
