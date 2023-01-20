<script>

import { store } from "../store"

export default {
    name: "AppSponsorComp",

    data() {
        return {
            store

        }
    },

    methods: {
        getImagePath: function (imgPath) {
            return new URL(`../assets/img/${imgPath}.png`, import.meta.url).href;
        }
    },

}
</script>

<template>
    <div class="grid">

        <section class="grid container">


            <div class="row">
                <div class="col-6 col-lg-3 col-md-12 mb-4 mb-lg-0 text-center" v-for="image in store.sponsorImageList">
                    <img :src="getImagePath(image.image)" class="w-50 shadow-1-strong rounded mb-4"
                        alt="" />

                </div>

            </div>
        </section>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;
@use "bootstrap/scss/bootstrap" as *;



.grid-text {
    padding-top: 80px;

}

h2 {
    font-weight: 700;

}

.wrap-text {

    h4 {
        font-weight: 700;
        color: $Secondary-Color;
        font-size: 1rem;

    }

    p {
        font-size: .8rem;
        padding: 0 80px 0 80px;
    }


}

.date p {
    font-size: .5rem;

}

h4 {
    font-weight: 700;
    color: $Secondary-Color;
    font-size: 1rem;

}

p {
    font-weight: 400;
}

/* .wrapper{
} */

.my-icon {
    font-size: 25px;
}

.my-icon:hover {
    color: $Secondary-Color;

}
</style>