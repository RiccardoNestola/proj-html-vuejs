<script>
export default {
    
}
</script>

<template>
    <div class="hero">
        <div class="my-container">

            <div class="row">
                <div class="col-4 mt-4 hero-text">
                    <h1 class="text-white">
                        SEM Campaigns Made simple with Avada
                    </h1>
                    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis, necessitatibus.</p>
                    <a class="my-button text-uppercase" href="">buy avada now</a>
                    <a class="my-button my-button-secondary text-uppercase mx-3" href="">Contact us</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;
@use "bootstrap/scss/bootstrap" as *; 

.hero{
    background-image: url(../assets/img/1-hero-image.png);
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.hero-text{
    padding-top: 180px;

}

h1{
    font-weight: 700;
}


</style>