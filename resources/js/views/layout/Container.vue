<template>
    <div class="container flex-center">

    </div>
</template>

<script>
export default {
    name: 'Container'
}
</script>

<style scoped lang="scss">
.container {
    max-width: 120rem;
    margin: 8rem auto;
    background-color: var(--color-white-light);
    box-shadow: var(--shadow-dark);
    min-height: 50rem;
    flex-direction: column;

    @media only screen and (max-width: 75rem) {
        margin: 0;
        max-width: 100%;
        width: 100%;
    }
}
</style>
