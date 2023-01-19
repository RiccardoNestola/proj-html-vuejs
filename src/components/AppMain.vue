<script>
import AppHero from './AppHero.vue'
import AppGrid from './AppGrid.vue'
import AppDarkGrid from './AppDarkGrid.vue'
import AppWorksGrid from './AppWorksGrid.vue'
import AppPlansGrid from './AppPlansGrid.vue'
import AppNewsGrid from './AppNewsGrid.vue'
import AppClientsComp from './AppClientsComp.vue'
import AppSponsorComp from './AppSponsorComp.vue'

export default {

    name: "AppMain",

    components: {
        AppHero,
        AppGrid,
        AppDarkGrid,
        AppWorksGrid,
        AppPlansGrid,
        AppNewsGrid,
        AppClientsComp,
        AppSponsorComp
    }

}
</script>

<template>
    <AppHero />
    <AppGrid />
    <AppDarkGrid />
    <AppWorksGrid />
    <AppPlansGrid />
    <AppNewsGrid />
    <AppClientsComp />
    <AppSponsorComp />
</template>

<style lang="scss">

</style>