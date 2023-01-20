<script>
export default {
    name: "AppLogoFooterComp",

}
</script>

<template>
    <div class="grid">

        <section class="grid container">


            <div class="row">
                <div class="col-12 col-lg-12 col-md-12 mx-auto py-4 py-lg-5">
                    <img src="../assets/img//logo_seo_2x.png" class="image-fluid mx-auto d-block mb-2 mb-lg-2" alt="" />

                </div>

            </div>
        </section>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables.scss" as *;
@use "bootstrap/scss/bootstrap" as *;

img {
    width: 120px;
}
</style>