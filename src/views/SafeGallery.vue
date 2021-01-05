<template>
  <div class="sfwgallery">
    <h1 id="sfwtitle">My Gallery</h1>
    <div id="jumplinks">
      <span style="font-weight: bold">Jump to:</span><br /><a href="#refsheets"
        >Reference Sheets</a
      >&ensp;|&ensp; <a href="#fullbody">Full Body</a>&ensp;|&ensp;<a
        href="#halfbody"
        >Half Body</a
      >&ensp;|&ensp; <a href="#headshots">Head Shots</a>&ensp;|&ensp;<a
        href="#feral"
        >Feral</a
      ><br />
      <a href="#chibi">Chibi</a>&ensp;|&ensp;<a href="#multi"
        >Multiple Characters</a
      >&ensp;|&ensp; <a href="#real">Realistic</a>&ensp;|&ensp;<a
        href="#sticker"
        >Stickers</a
      >
      | <a href="#gore">Gore</a> |
      <a href="#badges">Badges</a>
    </div>
    <b-container class="mt-4 mb-5">
      <!-- Icon Section -->
      <b-row class="mb-sm-2">
        <b-col class="title-col" id="icons">Icons</b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon21.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/icons/icon19.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/icons/icon20.jpg')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon18.jpg')" fluid />
        </b-col>
      </b-row>
      <b-row class=mt-sm-4>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon17.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon16.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon1.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon2.jpg')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon3.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon4.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon5.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon15.jpg')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon8.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon9.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon12.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon13.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon14.png')" fluid />
        </b-col>
        <b-col cols="6">
          <b-img :src="require('@/assets/sfwgallery/icons/icon11.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon6.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col></b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/icons/icon7.png')" fluid />
        </b-col>
        <b-col></b-col>
      </b-row>
      <!-- refrence sheet section -->
      <b-row class="mt-lg-3 mb-sm-2">
        <b-col class="title-col" id="refsheets">Reference Sheets</b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-img
              :src="require('@/assets/sfwgallery/refs/ref13.jpg')"
              fluid
          />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/refs/ref12.jpg')" fluid />
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mt-sm-4">
          <b-img :src="require('@/assets/sfwgallery/refs/ref11.jpg')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-img :src="require('@/assets/sfwgallery/refs/ref10.jpg')" fluid />
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/refs/ref1.jpg')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/refs/ref2.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/refs/ref3.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/refs/ref4.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/refs/ref5.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/refs/ref6.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/refs/ref7.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/refs/ref8.jpg')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/refs/ref9.png')" fluid />
        </b-col>
      </b-row>
      <!-- fullbody section -->
      <b-row class="mt-lg-3 mb-sm-2">
        <b-col class="title-col" id="fullbody">Full Body</b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/fullbody/fb20.png')"
            fluid
            />
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/fullbody/fb19.jpg')"
            fluid
            />
        </b-col>
        <b-col>
          <b-img
              :src="require('@/assets/sfwgallery/fullbody/fb18.jpg')"
              fluid
            />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/fullbody/fb17.jpg')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/fullbody/fb1.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/fullbody/fb5.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/fullbody/fb6.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/fullbody/fb2.jpg')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/fullbody/fb3.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/fullbody/fb7.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/fullbody/fb8.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/fullbody/fb9.png')" fluid />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/fullbody/fb10.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/fullbody/fb11.png')"
            fluid
          />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/fullbody/fb12.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/fullbody/fb13.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/fullbody/fb14.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/fullbody/fb15.png')"
            fluid
          />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col cols="6">
          <b-img :src="require('@/assets/home/slide2.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/fullbody/fb16.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/fullbody/fb4.png')" fluid />
        </b-col>
      </b-row>
      <!-- halfbody section -->
      <b-row class="mt-lg-3 mb-sm-2">
        <b-col class="title-col" id="halfbody">Half Body</b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/halfbody/hb16.jpg')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/halfbody/hb1.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/halfbody/hb2.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/halfbody/hb3.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/halfbody/hb4.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/halfbody/hb5.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/halfbody/hb6.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/halfbody/hb7.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col cols="6">
          <b-img :src="require('@/assets/sfwgallery/halfbody/hb8.png')" fluid />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/halfbody/hb10.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/halfbody/hb11.png')"
            fluid
          />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/halfbody/hb15.jpg')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/halfbody/hb12.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/halfbody/hb13.jpg')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/halfbody/hb14.jpg')"
            fluid
          />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col></b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/halfbody/hb9.png')" fluid />
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="mt-lg-3 mb-sm-2">
        <!-- headshot section -->
        <b-col class="title-col" id="headshots">Head Shots</b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs24.png')"
            fluid
            />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img
              :src="require('@/assets/sfwgallery/headshots/hs23.png')"
              fluid
          />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/headshots/hs21.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/headshots/hs22.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/headshots/hs25.jpg')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs4.jpg')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs1.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs2.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs3.png')"
            fluid
          />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs5.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs6.jpg')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs7.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs8.png')"
            fluid
          />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs9.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs10.png')"
            fluid
          />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs11.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs12.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs13.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs14.png')"
            fluid
          />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs15.png')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs16.jpg')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs17.jpg')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs18.jpg')"
            fluid
          />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs19.jpg')"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/headshots/hs20.jpg')"
            fluid
          />
        </b-col>
        <b-col></b-col><b-col></b-col>
      </b-row>
      <b-row class="mt-lg-3 mb-sm-2">
        <!-- feral section -->
        <b-col class="title-col" id="feral">Feral</b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/feral/f1.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/feral/f2.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/feral/f3.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/feral/f4.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/feral/f5.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/feral/f6.png')" fluid />
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="mt-lg-3 mb-sm-2">
        <!-- chibi section -->
        <b-col class="title-col" id="chibi">Chibi</b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/chibi/c1.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/chibi/c2.png')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/chibi/c3.png')" fluid />
        </b-col>
      </b-row>
      <!-- multiple characters section -->
      <b-row class="mt-lg-3 mb-sm-2">
        <b-col class="title-col" id="multi">Couples/Multiple Characters</b-col>
      </b-row>
      <b-row>
      <b-col>
        <b-img
            :src="require('@/assets/sfwgallery/multiple/mc3.png')"
            fluid
        />
      </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/home/banner.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/multiple/mc2.png')" fluid />
        </b-col>
      </b-row>
      <b-row class="mt-sm-4">
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/multiple/mc1.jpg')" fluid />
        </b-col>
        <b-col>
          <b-img :src="require('@/assets/home/slide1.png')" fluid />
        </b-col>
      </b-row>
      <!-- realistic section -->
      <b-row class="mt-lg-3 mb-sm-2">
        <b-col class="title-col" id="real">Realistic</b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/realistic/r1.png')" fluid />
        </b-col>
        <b-col></b-col>
      </b-row>
      <!-- stickers section -->
      <b-row class="mt-lg-3 mb-sm-2">
        <b-col class="title-col" id="sticker">Stickers</b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-img
            :src="require('@/assets/sfwgallery/stickers/sticky1.png')"
            fluid
          />
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="mt-lg-3 mb-sm-2">
        <b-col class="title-col" id="gore">Gore</b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-img :src="require('@/assets/prices/gore_ex.png')" fluid />
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="mt-lg-3 mb-sm-2">
        <b-col class="title-col" id="badges">Badges</b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-img :src="require('@/assets/sfwgallery/badges/badge1.png')" fluid />
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "sfwgallery"
};
</script>

<style scoped lang="scss">
.sfwgallery {
  text-align: center;
}
#sfwtitle {
  font-weight: bold;
}
#gallerytable {
  font-size: 20px;
  text-decoration: underline;
  background-color: black;
}
#jumplinks {
  font-size: 16px;
}
.title-col {
  text-decoration: underline;
  font-weight: bold;
  font-size: 18pt;
}
</style>
