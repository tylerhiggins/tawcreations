<template>
    <div class="sfwgallery">
        <h1 id="sfwtitle">My Gallery</h1>
        <div id="jumplinks">
            <span style="font-weight: bold">Jump to:</span>&ensp;&ensp;&ensp;<a href="#refsheets">Reference Sheets</a>&ensp;|&ensp;
            <a href=""></a>
        </div>
        <b-container>
            <b-table-simple dark borderless id="gallerytable">
                <colgroup><col></colgroup>
                <colgroup><col><col><col><col><col><col></colgroup>
                <b-thead>
                </b-thead>
                <b-tbody>
                    <b-tr id="icons">
                        <b-th colspan="6">Icons</b-th>
                    </b-tr>
                    <b-tr>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon15.jpg')" fluid></b-img></b-th>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon1.jpg')" fluid></b-img></b-th>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon2.jpg')" fluid></b-img></b-th>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon3.jpg')" fluid></b-img></b-th>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon4.jpg')" fluid></b-img></b-th>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon5.jpg')" fluid></b-img></b-th>
                    </b-tr>
                    <b-tr>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon7.png')" fluid></b-img></b-th>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon8.png')" fluid></b-img></b-th>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon9.jpg')" fluid></b-img></b-th>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon12.png')" fluid></b-img></b-th>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon13.png')" fluid></b-img></b-th>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon14.png')" fluid></b-img></b-th>
                    </b-tr>
                    <b-tr>
                        <b-th><b-img :src="require('@/assets/sfwgallery/icons/icon6.png')" fluid></b-img></b-th>
                        <b-th colspan="3"><b-img :src="require('@/assets/sfwgallery/icons/icon11.jpg')" fluid></b-img></b-th>
                        <b-th colspan="2"><b-img :src="require('@/assets/sfwgallery/icons/icon10.jpg')" fluid></b-img></b-th>
                    </b-tr>
                    <b-tr id="refsheets">
                        <b-th colspan="6">Reference Sheets</b-th>
                    </b-tr>
                    <b-tr>
                        <b-th colspan="3"><b-img :src="require('@/assets/sfwgallery/refs/ref1.jpg')" fluid></b-img></b-th>
                        <b-th colspan="3"><b-img :src="require('@/assets/sfwgallery/refs/ref2.png')" fluid></b-img></b-th>
                    </b-tr>
                    <b-tr>
                        <b-th colspan="3"><b-img :src="require('@/assets/sfwgallery/refs/ref3.png')" fluid></b-img></b-th>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </b-container>
    </div>
</template>

<script>
   export default{
       name: "sfwgallery",
   };
</script>

<style scoped lang="scss">
    .sfwgallery{
        text-align: center;
    }
    #sfwtitle{
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
</style>
