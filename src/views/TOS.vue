<template>
<div class="tos">
    <b-container>
    <h1 class="pt-lg-3" id="tos_main_title">Terms of Service</h1>
    <ul id="main-list">
        <li class="tos-title">Artwork Terms of Service:</li>
        <ul class="secondary-list">
            <br><li>My workdays are Monday-Friday. I do not work on Saturday or Sunday.</li><br>
            <li>Commissions are sold as-is when completed. <span>NO REFUNDS</span>!</li><br>
            <li>If you have already given me final approval on completed artwork and wish to make a change,
            I will do so for a fee. I <span>WILL NOT</span> make changes for free after the work is complete.</li><br>
            <li>I <span>WILL NOT</span> draw anything that involves scat, vomit, or any sexual depiction of a minor.</li><br>
            <li>I also <span>REFUSE</span> to draw anything that discriminates against someones race, sexual orientation,
            and/or gender identity.</li><br>
            <li>For commissions that involve gore: If there is someone else's character(s) involved I need their
            written permission first!</li><br>
            <li>You are required to be 18 or older (or of legal age in your state/country), and must provide me your
                legal photo ID to commission me for any sexually explicit and/or NSFW art!</li><br>
            <li>For artwork that is shipped: I will provide a tracking number (if shipping in the U.S.) and provide
            free shipping for any at-convention artwork that requires it. For online commissions, you <span>MUST</span>
                pay full shipping costs. If art gets lost in the mail, you can get your art re-shipped for half of the
            commission cost.</li><br>
            <li>Any commission $100+ USD will be given a free badge of one of their characters!</li><br>
            <li>The only acceptable forms of payment for online commissions are PayPal and DeviantArt Points!</li><br>
            <li>At-convention acceptable forms of payment is PayPal, Debit/Credit card, cash in the form of USD, and DeviantArt
            Points!</li><br>
            <li>Please do not spam or harass me with messages about your artwork! If you do, I will refund you and refuse
            any future commissions/requests/trades from you!</li><br>
            <li>Digital artwork may take up to two weeks to complete, and Traditional artwork up to one week.</li><br>
            <li>I will not start on your commission until payment is made in full.</li><br>
            <li>Full refunds will only be made if I have not started your commission.</li><br>
            <li>If you are commissioning over $100+ USD worth of art from me, it may take a month to fully complete
            all of your artwork.</li><br>
            <li>You <span>MUST</span> credit me as the artist for any art you post on any website or social media page!</li>
            <br><li>I will not accept any partial payments for any artwork <span>NO EXCEPTIONS</span>! If you cannot
            afford to pay, consider doing an art-trade or making a request when I am open for those.</li><br>
            <li>Paid commissions takes priority over art-trades and requests, so they may take longer to complete.</li><br>
            <li>I reserve the right to reject any commission/trade/request that I do not feel comfortable with doing.</li>
        </ul>
    </ul>
    </b-container>
</div>
</template>

<script>
export default {
    name: "tos"

};
</script>

<style scoped lang="scss">
    #tos_main_title {
        margin-left: 25px;
    }
    .tos {
        text-align: center;
        margin-right: 50px;
    }
    .tos-title{
        list-style-type: none;
        text-decoration: underline;
        font-weight: bold;
        font-size: 20px;
    }
    .secondary_list{
        list-style-type: none;
    }
    span {
        color: red;
    }
    ul {
        list-style-type: none;
    }
</style>
