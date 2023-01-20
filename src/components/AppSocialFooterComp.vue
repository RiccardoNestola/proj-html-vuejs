<script>
import { store } from "../store"

export default {

    name: "AppSocialFooterComp",
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
    <nav>


        <ul class="menu d-flex justify-content-center flex-md-row flex-lg-row align-items-center py-4">
            <!-- v-for="item in store.menuList -->
            <li> <i class="fa-brands fa-facebook-f"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-youtube"></i></li>
        </ul>

    </nav>



</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;
@use "bootstrap/scss/bootstrap" as *;


ul li {
    text-decoration: none;
    list-style-type: none;
    padding: .5rem;
    color: white;
    font-size: 1.2rem;


}

a {
    text-decoration: none;
    font-size: 2rem;
}

i {
    color: $Main-Color;
}
</style>