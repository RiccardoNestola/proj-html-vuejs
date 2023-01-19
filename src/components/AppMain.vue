<script>
import AppHero from './AppHero.vue'
import AppGrid from './AppGrid.vue'
import AppDarkGrid from './AppDarkGrid.vue'
import AppWorksGrid from './AppWorksGrid.vue'
import AppPlansGrid from './AppPlansGrid.vue'
import AppNewsGrid from './AppNewsGrid.vue'
import AppClientsComp from './AppClientsComp.vue'
import AppSponsorComp from './AppSponsorComp.vue'
import AppStartComp from './AppStartComp.vue'

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
        AppSponsorComp,
        AppStartComp
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
    <AppStartComp />
</template>

<style lang="scss">

</style>