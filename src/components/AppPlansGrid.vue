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
                        <h2 class="pb-2 fw-bold text-white">Our Plans</h2>
                        <p class="pb-2 px-5 text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium.</p>
                    </div>
                </div>
            </section>
        </div>

        <section class="container">
            <div class="row mb-4">

                <div
                    class="col-12 col-sm-12 col-md-6 col-lg-3 d-md-flex align-items-md-start flex-column justify-content-center align-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6 text-center wrapper mb-2">
                        <div class="pt-3 m-2 ">

                            <div class="pt-3 text-center">
                                <h3>Standard</h3>
                            </div>
                            <div class="panel-body pricing-row">
                                <div class="price price-with-decimal"><span class="currency">$</span><span
                                        class="integer-part">19</span><sup class="decimal-part">99</sup><span
                                        class="time">monthly</span></div>
                                <div class="pt-3 text-center">
                                    <ul class="list-group">
                                        <li class="list-group-item py-4">5 Projects</li>
                                        <li class="list-group-item py-4">5 GB Storage</li>
                                        <li class="list-group-item py-4">Unlimited Users</li>
                                        <li class="list-group-item py-4"><a
                                                class="my-button my-button-outline text-uppercase" href="">start
                                                today</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    class="col-12 col-sm-12 col-md-6 col-lg-3 d-md-flex align-items-md-start flex-column justify-content-center align-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6 text-center wrapper mb-2">
                        <div class="pt-3 m-2">

                            <div class="pt-3 text-center">
                                <h3>Standard</h3>
                            </div>
                            <div class="panel-body pricing-row">
                                <div class="price price-with-decimal"><span class="currency">$</span><span
                                        class="integer-part">19</span><sup class="decimal-part">99</sup><span
                                        class="time">monthly</span></div>
                                <div class="pt-3 text-center">
                                    <ul class="list-group">
                                        <li class="list-group-item py-4">5 Projects</li>
                                        <li class="list-group-item py-4">5 GB Storage</li>
                                        <li class="list-group-item py-4">Unlimited Users</li>
                                        <li class="list-group-item py-4"><a
                                                class="my-button my-button-outline text-uppercase" href="">start
                                                today</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="col-12 col-sm-12 col-md-6 col-lg-3 d-md-flex align-items-md-start flex-column justify-content-center align-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6 text-center wrapper mb-2">
                        <div class="pt-3 m-2">

                            <div class="pt-3 text-center">
                                <h3>Standard</h3>
                            </div>
                            <div class="panel-body pricing-row">
                                <div class="price price-with-decimal"><span class="currency">$</span><span
                                        class="integer-part">19</span><sup class="decimal-part">99</sup><span
                                        class="time">monthly</span></div>
                                <div class="pt-3 text-center">
                                    <ul class="list-group">
                                        <li class="list-group-item py-4">5 Projects</li>
                                        <li class="list-group-item py-4">5 GB Storage</li>
                                        <li class="list-group-item py-4">Unlimited Users</li>
                                        <li class="list-group-item py-4"><a
                                                class="my-button my-button-outline text-uppercase" href="">start
                                                today</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="col-12 col-sm-12 col-md-6 col-lg-3 d-md-flex align-items-md-start flex-column justify-content-center align-content-center">
                    <div class="w-100 col-12 col-sm-12 col-md-7 col-lg-6 text-center wrapper mb-2">
                        <div class="pt-3 m-2">

                            <div class="pt-3 text-center">
                                <h3>Standard</h3>
                            </div>
                            <div class="panel-body pricing-row">
                                <div class="price price-with-decimal"><span class="currency">$</span><span
                                        class="integer-part">19</span><sup class="decimal-part">99</sup><span
                                        class="time">monthly</span></div>
                                <div class="pt-3 text-center">
                                    <ul class="list-group">
                                        <li class="list-group-item py-4">5 Projects</li>
                                        <li class="list-group-item py-4">5 GB Storage</li>
                                        <li class="list-group-item py-4">Unlimited Users</li>
                                        <li class="list-group-item py-4"><a
                                                class="my-button my-button-outline text-uppercase" href="">start
                                                today</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
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

.grid {
    background-color: $Deep-Cove;
    background-image: url(../assets/img/background1.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 80px;
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

.wrapper {
    background-color: $White-Color-text;
    /*  padding: 35px;
    width: 200px; */
}

.my-icon {
    font-size: 25px;
}

.my-icon:hover {
    color: $Secondary-Color;

}


.list-group-item {

    border: none;

}


.panel-body .pricing-row {
    position: absolute;
}

.currency {
    position: relative;
    top: -21px;
    left: 0;
    font-size: 21px;
    font-weight: 700;
    color: $Pale-Slate;
}

.integer-part {
    font-size: 55px;
    font-weight: 700;
    color: $Science-Blue;
}

.decimal-part {
    position: relative;
    top: -30px;
    font-size: 17px;
    font-weight: 700;
    color: $Science-Blue;
}

.time {
    position: relative;
    top: 0px;
    left: -21px;
    font-size: 11px;
    font-weight: 700;
    font-style: italic;
    color: $Regent-Gray;

}
</style>