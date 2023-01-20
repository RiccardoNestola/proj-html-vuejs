<script>
import { store } from "../store"

export default {

    name: "AppCreditsFooterComp",
    components: {

    },

    data() {
        return {
            store

        }
    }

}
</script>

<template>
    <nav class="">


        <div class="menu d-flex justify-content-center flex-column flex-md-row flex-lg-row align-items-center">

            <span class="text-dark">© Copyright 2010 - 2021 | Avada Theme by <a href="#">ThemeFusion </a> | All
                Rights Reserved |<a href="#"> Powered by WordPress</a>
            </span>
        </div>

    </nav>



</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;
@use "bootstrap/scss/bootstrap" as *;


span {
    font-size: .6rem;
}

a {
    text-decoration: none;
    color: $Secondary-Color;
}
</style>