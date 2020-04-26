<template>
    <div class="ych text-center">
        <b-container>
        <div id="intro">
        <h1>YCH Commissions</h1>
            <p>What is a YCH? YCH means Your Character Here. They are commissions where the pose of
            the character is pre-made but will be drawn with your character or fursona. Here are a the
            current YCH's I am offering.</p>
        </div>
            <hr>
            <b-table-simple id="ychtable" borderless>
                <b-thead>

                </b-thead>
                <b-tbody>
                    <b-tr>
                        <b-td>
                            <h4 class="ych_title">Sergal or Shark Headshot Icon - $10</h4>
                            <b-img class="ychimg" :src="require('@/assets/safeych/sergal.jpg')" fluid></b-img>
                            <p class="description"><span class="notes">Note: Sergal or shark characters only.<br></span>
                            Headshot icon of your sergal or shark character with background of your choice! Only $10 per
                            icon!</p>
                            <b-button href="https://www.furaffinity.net/view/35707066/">More Info</b-button>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'ych'

    }
</script>

<style lang="scss" scoped>
    .ych {

    }
    hr {
        border-color: white;
        border-width: 3px;
    }
    .ychimg {
        max-width: 65%;
    }
    #ychtable {
        color: white;
    }
    p {
        font-size: 18px;
        margin-top: 20px;
    }
    .notes {
        color: red;
    }
</style>
