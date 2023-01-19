<script>

export default {
    
}
</script>

<template>
    <div class="grid">
        <div class="my-container">

            <section class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-10 col-lg-7 text-center m-auto">
                        <h2 class=" p-4 pb-2 fw-bold">What Our Clients Say</h2>
                    </div>
                </div>
            </section>

        </div>

        <section class="grid container">

            <div class="row">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-12 text-center">
                            <div class="pt-3">
                                <img src="../assets/img/testimonials-2.jpg" class="img-fluid" alt="">
                            </div>
                    
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
    background-color: $White-Color-text;
    padding: 60px 100px 0px 100px;
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

.wrapper{
    background-color: white;
    padding: 35px;
}

.my-icon{
    font-size: 25px;
}
.my-icon:hover{
    color: $Secondary-Color;
    
}

</style>