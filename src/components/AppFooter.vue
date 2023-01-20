<script>
import AppLogoFooterComp from './AppLogoFooterComp.vue'
import AppMenuFooterComp from './AppMenuFooterComp.vue'
import AppCreditsFooterComp from './AppCreditsFooterComp.vue'
import AppSocialFooterComp from './AppSocialFooterComp.vue'

export default {

    name: "AppFooter",

    components: {
        AppLogoFooterComp,
        AppMenuFooterComp,
        AppCreditsFooterComp,
        AppSocialFooterComp
    }

}
</script>

<template>
    <footer>
        <AppLogoFooterComp />
        <AppMenuFooterComp />
        <AppCreditsFooterComp />
        <AppSocialFooterComp />
    </footer>

</template>

<style lang="scss">

</style>