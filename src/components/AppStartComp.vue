<script>
export default {

}
</script>

<template>
    <div class="grid">

        <div class="my-container">

            <section class="container position-relative">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-10 col-lg-7 pt-5 text-center m-auto">
                        <h2 class="pb-2 fw-bold text-white">Start Your Free Consultation</h2>
                        <p class="pb-2 text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium.</p>
                    </div>
                </div>
            </section>
        </div>




        <div class="row position-relative">
            <div class="col-12 col-sm-12 col-md-10 col-lg-7 p-4 text-center m-auto">
                <a class="my-button my-button-primary text-uppercase " href="">view out work</a>
            </div>
        </div>




    </div>


</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;
@use "bootstrap/scss/bootstrap" as *;

.grid {
    background-image: url(../assets/img/CTA-seo-1.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 100px;
    position: relative;
    z-index: 3;

}

.container,
.row {
    z-index: 2;

}


.grid:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background: black;
    z-index: 2;
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
</style>