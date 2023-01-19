<script>
import AppHero from './AppHero.vue'
import AppGrid from './AppGrid.vue'
import AppDarkGrid from './AppDarkGrid.vue'
import AppWorksGrid from './AppWorksGrid.vue'

export default {

    name:"AppMain",

    components: {
        AppHero,
        AppGrid,
        AppDarkGrid,
        AppWorksGrid
}
    
}
</script>

<template>
    <AppHero />
    <AppGrid />
    <AppDarkGrid />
    <AppWorksGrid />
</template>

<style lang="scss">
    
</style>