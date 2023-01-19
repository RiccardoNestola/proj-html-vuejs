<script>
import AppHero from './AppHero.vue'
import AppGrid from './AppGrid.vue'
import AppDarkGrid from './AppDarkGrid.vue'
import AppWorksGrid from './AppWorksGrid.vue'
import AppPlansGrid from './AppPlansGrid.vue'

export default {

    name:"AppMain",

    components: {
        AppHero,
        AppGrid,
        AppDarkGrid,
        AppWorksGrid,
        AppPlansGrid
}
    
}
</script>

<template>
    <AppHero />
    <AppGrid />
    <AppDarkGrid />
    <AppWorksGrid />
    <AppPlansGrid />
</template>

<style lang="scss">
    
</style>