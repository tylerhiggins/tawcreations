<template>
    <div class="prices">
        <h1>Prices</h1>
        <h3>Digital Artwork Prices:</h3>
        <div class="ex_section">
        <b-img class="example" :src="require('@/assets/prices/ref_example.png')"></b-img>
        <p><span>Reference Sheet</span> - Starting at $30 </p>
        </div>
        <div class="ex_section">
            <b-img class="example" :src="require('@/assets/prices/fullb_example.jpg')"></b-img>
            <p><span>Fullbody</span> - Starting at $25 </p>
        </div>
        <div class="ex_section">
            <b-img class="example" :src="require('@/assets/prices/halfb_example.png')"></b-img>
            <p><span>Halfbody</span> - Starting at $20</p>
        </div>
        <div class="ex_section">
            <b-img class="example" :src="require('@/assets/prices/couples_ex.jpg')"></b-img>
            <p><span>Couples</span> - Starting at $30</p>
        </div>
        <div class="ex_section">
            <p><span>NSFW (ID required)</span> - Starting at $25<br></p>
            <b-button href="https://www.furaffinity.net/gallery/toxicangelwolfy/folder/752565/NSFW">
                NSFW Examples</b-button>
        </div>
        <div class="ex_section">
            <b-img class="example" :src="require('@/assets/prices/gore_ex.png')"></b-img>
            <p><span>Gore</span> - Starting at $20</p>
        </div>
        <div class="ex_section">
            <b-img class="example" :src="require('@/assets/prices/feral_ex.png')"></b-img>
            <p><span>Feral</span> - Starting at $15</p>
        </div>
        <div class="ex_section">
            <b-img class="example" :src="require('@/assets/prices/realistic_ex.png')"></b-img>
            <p><span>Realistic</span> - Starting at $20</p>
        </div>
        <div class="ex_section">
            <b-img class="example" :src="require('@/assets/prices/chibi_ex.png')"></b-img>
            <p><span>Chibi</span> - Starting at $10</p>
        </div>
        <div class="ex_section">
            <p><span>Lineart</span> - Starting at $10</p>
        </div>
        <div class="ex_section">
            <b-img class="example" :src="require('@/assets/prices/icon_ex.jpg')"></b-img>
            <p><span>Icons</span> - Starting at $10</p>
        </div>
        <div class="ex_section">
            <p><span>Animated Icon</span> - Starting at $15</p>
        </div>
        <div class="ex_section">
            <b-img class="example" :src="require('@/assets/prices/sticker_ex.png')"></b-img>
            <p><span>Stickers</span> - Small: $1 Medium: $2 Large $5</p>
        </div>
    </div>
</template>

<script>
    export default{
        name: "digitalprices"

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
</style>
