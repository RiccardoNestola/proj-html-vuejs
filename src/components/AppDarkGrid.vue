<script>
export default {
    
}
</script>

<template>
    <div class="grid">
        <div class="my-container">

            <section class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-10 col-lg-7 pt-5 text-center m-auto">
                        <h2 class="pb-2 fw-bold text-white">See Our Top Notch Services</h2>
                        <p class="pb-2 text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                </div>
            </section>
        </div>

        <section class="grid container">
            <div class="row mb-4">

                <div class="col-12 col-sm-12 col-md-4 col-lg-3 d-md-flex align-items-md-start flex-column justify-content-center align-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6 text-center">
                        <div class="pt-3 wrapper">
                            <div class="pt-3 my-icon">
                                <i class="fa-solid fa-road"></i>
                            </div>
                            <div class="pt-3 text-center text-white">
                                <h3>Establish Goals</h3>
                            </div>
                            <div class="pt-3 text-center text-white">
                                <p>Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis mi ligula euismod odio vel dictum mi risus a mi.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-12 col-sm-12 col-md-4 col-lg-3 d-md-flex align-items-md-start flex-column justify-content-center align-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6 text-center">
                        <div class="pt-3 wrapper">
                            <div class="pt-3 icon my-icon">
                                <i class="fa-solid fa-video"></i>
                            </div>
                            <div class="pt-3 text-center text-white">
                                <h3>Establish Goals</h3>
                            </div>
                            <div class="pt-3 text-center text-white">
                                <p>Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis mi ligula euismod odio vel dictum mi risus a mi.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-md-4 col-lg-3 d-md-flex align-items-md-start flex-column justify-content-center align-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6 text-center">
                        <div class="pt-3 wrapper">
                            <div class="pt-3 my-icon">
                                <i class="fa-solid fa-droplet"></i>
                            </div>
                            <div class="pt-3 text-center text-white">
                                <h3>Establish Goals</h3>
                            </div>
                            <div class="pt-3 text-center text-white">
                                <p>Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis mi ligula euismod odio vel dictum mi risus a mi.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-md-4 col-lg-3 d-md-flex align-items-md-start flex-column justify-content-center align-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6 text-center">
                        <div class="pt-3 wrapper">
                            <div class="pt-3 my-icon">
                                <i class="fa-solid fa-droplet"></i>
                            </div>
                            <div class="pt-3 text-center text-white">
                                <h3>Establish Goals</h3>
                            </div>
                            <div class="pt-3 text-center text-white">
                                <p>Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis mi ligula euismod odio vel dictum mi risus a mi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </section>

        <div class="row">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-12 text-center">
                            <div class="pt-3">
                        
                            </div>
                    
                    </div>
                </div>




    </div>

    
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;
@use "bootstrap/scss/bootstrap" as *; 

.grid{
    background-color: $Deep-Cove;
    background-image: url(../assets/img/pattern_background.png);
    padding: 100px;
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
    background-color:$Lucky-Point;
    padding: 35px;
}

.my-icon{
    font-size: 25px;
    color: white;
}
.my-icon:hover{
    color: $Secondary-Color;
    
}

</style>