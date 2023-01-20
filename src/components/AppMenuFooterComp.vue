<script>
import { store } from "../store"

export default {

    name: "AppMenuFooterComp",
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
    <nav class="d-flex justify-content-center flex-column flex-md-row flex-lg-row align-items-center">


        <ul class="menu" v-for="item in store.menuList">
            <li> <a class="text-dark" href="#">{{ item }}</a></li>
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
    padding: .8rem;
    color: white;
    font-size: .8rem;


}

a {
    text-decoration: none;
}
</style>