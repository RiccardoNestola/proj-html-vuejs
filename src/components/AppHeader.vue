<script>
import { store } from "../store"

export default {

    name: "AppHeader",
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
    <header>
        <div class="container-header">
            <nav class="flex navbar navbar-expand-lg">
                <a href="#" class="logo-link">
                    <img class="logo" src="../assets/img/logo_seo_w_1x.png" alt="Logo">
                </a>
                <ul class="menu collapse navbar-collapse" v-for="item in store.menuList">
                    <li> <a class="" href="#">{{ item }}</a></li>
                </ul>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="my-button-header d-none d-lg-block" href="#">GET IN TOUCH NOW</a>
            </nav>


            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">

                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="" v-for="item in store.menuList">
                        <li> <a class="mobile-menu-text" href="#">{{ item }}</a></li>
                    </ul>
                </div>
            </div>








        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;



.container-header {

    max-width: 1280px;
    height: 100px;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 20px;
    width: 100%;

}

nav.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    a.logo-link {
        flex-grow: 20;
    }

}

ul li {
    text-decoration: none;
    list-style-type: none;
    padding: .8rem;
    color: white;
    font-size: .8rem;


}

a {
    text-decoration: none;
    color: white;
}

img {
    width: 132px;
}

.mobile-menu-text {
    /*   color: $Main-Color; */
    font-size: 1rem;
    font-weight: 700;

}

#offcanvasExample {
    width: 80%;
    height: 50vh;
    padding: 20px;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -20%);
    position: relative;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    border: 1px solid rgba(255, 255, 255, 0.16);


}
</style>