<script>
import AppHero from './AppHero.vue'
import AppGrid from './AppGrid.vue'
import AppDarkGrid from './AppDarkGrid.vue'
import AppWorksGrid from './AppWorksGrid.vue'
import AppPlansGrid from './AppPlansGrid.vue'
import AppNewsGrid from './AppNewsGrid.vue'
import AppClientsComp from './AppClientsComp.vue'

export default {

    name:"AppMain",

    components: {
        AppHero,
        AppGrid,
        AppDarkGrid,
        AppWorksGrid,
        AppPlansGrid,
        AppNewsGrid,
        AppClientsComp
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
</template>

<style lang="scss">
    
</style>