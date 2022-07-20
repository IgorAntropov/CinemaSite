<template>
    <custom-header></custom-header>

    <div class="container flex-center">
        <slot></slot>
    </div>

    <custom-footer></custom-footer>
</template>

<script>
export default {
    name: 'Container'
}
</script>

<style scoped lang="scss">

</style>
