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
                        <h2 class="pb-2 fw-bold">Our News</h2>
                        <p class="pb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium.</p>
                    </div>
                </div>
            </section>
        </div>

        <section class="grid container">

            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img src="../assets/img/case-study-gallery-3-1-400x300.jpg" class="w-100 shadow-1-strong mb-4"
                        alt="" />
                    <div class="wrap-text">
                        <h4 class="text-center">Why You Need A SEO Agency Now</h4>
                        <p class="date text-center">November 1st, 2017</p>
                        <p class="text-center">ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et
                            scelerisque sem. Nunc molestie neque augue, at gravida mi blandit</p>
                    </div>


                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img src="../assets/img/case-study-gallery-3-1-400x300.jpg" class="w-100 shadow-1-strong mb-4"
                        alt="" />
                    <div class="wrap-text">
                        <h4 class="text-center">Why You Need A SEO Agency Now</h4>
                        <p class="date text-center">November 1st, 2017</p>
                        <p class="text-center">ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et
                            scelerisque sem. Nunc molestie neque augue, at gravida mi blandit</p>
                    </div>


                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img src="../assets/img/case-study-gallery-3-1-400x300.jpg" class="w-100 shadow-1-strong mb-4"
                        alt="" />
                    <div class="wrap-text">
                        <h4 class="text-center">Why You Need A SEO Agency Now</h4>
                        <p class="date text-center">November 1st, 2017</p>
                        <p class="text-center">ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et
                            scelerisque sem. Nunc molestie neque augue, at gravida mi blandit</p>
                    </div>


                </div>
            </div>

            <div class="row">
                <div class="col-12 col-sm-12 col-md-10 col-lg-7 p-4 text-center m-auto">
                    <a class="my-button my-button-primary text-uppercase " href="">go to news</a>
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
    background-color: $Background-color-light;
    /* padding: 100px 100px 0px 100px; */
}

.grid-text {
    padding-top: 80px;

}

h2 {
    font-weight: 700;

}

.wrap-text {

    h4 {
        font-weight: 700;
        color: $Secondary-Color;
        font-size: 1rem;

    }

    p {
        font-size: .8rem;
        padding: 0 80px 0 80px;
    }


}

.date p {
    font-size: .5rem;

}

h4 {
    font-weight: 700;
    color: $Secondary-Color;
    font-size: 1rem;

}

p {
    font-weight: 400;
}

/* .wrapper{
} */

.my-icon {
    font-size: 25px;
}

.my-icon:hover {
    color: $Secondary-Color;

}

@media (max-width: 992px) {
    .grid {
        padding: 20px;
    }

}
</style>