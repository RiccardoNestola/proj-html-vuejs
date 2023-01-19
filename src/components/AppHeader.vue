<script>
import { store } from "../store"

export default {

    name:"AppHeader",
    components: {
        
},

data(){
        return{
            store
            
        }
    }
    
}
</script>

<template>
    <header>
    <div class="container-header">
        <nav class="flex">
                <a href="#" class="logo-link">
                    <img class="logo" src="../assets/img/logo_seo_w_1x.png" alt="Logo">
                </a>
                <ul class="menu flex" v-for="item in store.menuList">
                    <li> <a class="" href="#">{{item}}</a></li>
                    <!-- <li> <a class="" href="#">Who We Do</a></li>
                    <li> <a class="" href="#">What We Do</a></li>
                    <li> <a class="" href="#">Where We Work</a></li>
                    <li> <a class="" href="#">Careers</a><span>APPLY</span></li>
                    <li> <a class="" href="#">News</a></li> -->
                </ul>
                <a class="my-button-header" href="#">GET IN TOUCH NOW</a>
            </nav>
            
        
</div>
        



    </header>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;
/* @use "bootstrap/scss/bootstrap" as *; */



.container-header {

    max-width: 1280px;
    height: 100px;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 20px;
    /* border: 1px solid red; */
    width: 100%;
    
}

nav.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    a.logo-link {
    flex-grow: 2;
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

img{
    width: 132px;
}


    
    
</style>