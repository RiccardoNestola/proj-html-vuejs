<script>
import { store } from "../store"
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
    },

    data() {
        return {
            store

        }
    }

}
</script>

<template>
    <main>
        <AppHero />
        <AppGrid />
        <AppDarkGrid />
        <AppWorksGrid />
        <AppPlansGrid />
        <AppNewsGrid />
        <AppClientsComp />
        <AppSponsorComp />
        <AppStartComp />
    </main>

</template>

<style lang="scss">

</style>