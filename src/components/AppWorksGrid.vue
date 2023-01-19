<script>
export default {
    
}
</script>

<template>
    <div class="grid">
        <div class="my-container">

            <section class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-10 col-lg-7 p-5 text-center m-auto">
                        <h2 class="pb-2 fw-bold">Our Works</h2>
                        <p class="pb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>
            </section>
        </div>

        <section class="grid container">
            <div class="row mb-4">
                <div class="col-12 col-sm-12 col-md-4 col-lg-4 d-md-flex align-items-md-start flex-column justify-content-center ">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6">
                        <img src="../assets/img/case-study-gallery-3-1-400x300.jpg" class="img-fluid" alt="ferrari image">
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-md-4 col-lg-4 d-md-flex align-items-md-start flex-column justify-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6">
                        <img src="../assets/img/case-study-gallery-3-1-400x300.jpg" class="img-fluid" alt="ferrari image">
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-md-4 col-lg-4 d-md-flex align-items-md-start flex-column justify-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6">
                        <img src="../assets/img/case-study-gallery-3-1-400x300.jpg" class="img-fluid" alt="ferrari image">
                    </div>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12 col-sm-12 col-md-4 col-lg-4 d-md-flex align-items-md-start flex-column justify-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6">
                        <img src="../assets/img/case-study-gallery-3-1-400x300.jpg" class="img-fluid" alt="ferrari image">
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-md-4 col-lg-4 d-md-flex align-items-md-start flex-column justify-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6">
                        <img src="../assets/img/case-study-gallery-3-1-400x300.jpg" class="img-fluid" alt="ferrari image">
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-md-4 col-lg-4 d-md-flex align-items-md-start flex-column justify-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6">
                        <img src="../assets/img/case-study-gallery-3-1-400x300.jpg" class="img-fluid" alt="ferrari image">
                    </div>
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

.grid{
    background-color: $Background-color-light;
    /* padding: 100px 100px 0px 100px; */
}

.grid-text{
    padding-top: 80px;

}

h2{
    font-weight: 700;
    
}
p{
    font-weight: 400;
}

/* .wrapper{
} */

.my-icon{
    font-size: 25px;
}
.my-icon:hover{
    color: $Secondary-Color;
    
}

</style>