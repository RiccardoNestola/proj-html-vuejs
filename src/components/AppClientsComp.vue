<script>

export default {
    name: "AppClientsComp",

}
</script>

<template>
    <div class="grid">
        <div class="my-container">

            <section class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-10 col-lg-7 text-center m-auto pt-4">
                        <h2 class=" p-4 pb-2 fw-bold">What Our Clients Say</h2>
                    </div>
                </div>
            </section>

        </div>

        <section class="grid container">

            <div class="row">
                <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-12 text-center">
                    <div class="d-flex justify-content-center mb-4 circle-image">
                        <img src="../assets/img/testimonials-2.jpg" class="rounded-circle shadow-1-strong img-fliuid" />
                    </div>
                    <figure class="text-center mb-0">
                        <blockquote class="blockquote mb-4">
                            <p>
                                <span class="fst-italic">Ability proceeds from a fusion of skills, knowledge,
                                    understanding and imagination, <br> consolidated by experience.</span>
                            </p>
                        </blockquote>
                        <figcaption class="font-monospace mb-0">
                            <span>
                                <strong>Luis Desalvo,</strong>
                            </span> CREO TECH
                        </figcaption>
                    </figure>
                    <div class="dots pt-4 p-4">
                        <i class="fa-regular fa-circle m-1"></i>
                        <i class="fa-solid fa-circle m-1"></i>
                    </div>
                    <div class="divider"></div>

                </div>
            </div>




        </section>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;
@use "bootstrap/scss/bootstrap" as *;

.grid {
    background-color: $White-Color-text;
    padding: 0 100px 30px 100px;
}

.grid-text {
    padding-top: 40px;

}

h2 {
    font-weight: 700;

}

p {
    font-weight: 400;
}

.circle-image img {
    width: 130px;
}

.divider {
    margin-top: 40px;
    border: .5px solid $Pale-Slate;
}

@media (max-width: 768px) {
    .grid {
        padding: 10px;
    }

}
</style>