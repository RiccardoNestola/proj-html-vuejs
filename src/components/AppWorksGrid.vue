<script>
import { store } from "../store"

export default {
    name: "AppWorksGrid",


    data() {
        return {
            store

        }
    },

    methods: {
        getImagePath: function (imgPath) {
            return new URL(`../assets/img/${imgPath}.jpg`, import.meta.url).href;
        }
    },


}


</script>

<template>
    <div class="grid">
        <div class="my-container">

            <section class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-10 col-lg-7 p-5 text-center m-auto">
                        <h2 class="pb-2 fw-bold">Our Works</h2>
                        <p class="pb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium.</p>
                    </div>
                </div>
            </section>
        </div>

        <section class="grid container">

            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" v-for="image in store.imageWorksList">
                    <img :src="getImagePath(image.image)" class="w-100 shadow-1-strong mb-4" alt="" />
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-sm-12 col-md-10 col-lg-7 p-4 text-center m-auto">
                    <a class="my-button my-button-primary text-uppercase " href="">view out work</a>
                </div>
            </div>
        </section>










    </div>


</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;
@use "bootstrap/scss/bootstrap" as *;

.grid {
    background-color: $Background-color-light;
    /* padding: 100px 100px 0px 100px; */
}

.grid-text {
    padding-top: 80px;

}

h2 {
    font-weight: 700;

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