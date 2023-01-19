<script>
import AppHero from './AppHero.vue'
import AppGrid from './AppGrid.vue'
import AppDarkGrid from './AppDarkGrid.vue'
export default {

    name:"AppMain",

    components: {
        AppHero,
        AppGrid,
        AppDarkGrid
}
    
}
</script>

<template>
    <AppHero />
    <AppGrid />
    <AppDarkGrid />
</template>

<style lang="scss">
    
</style>