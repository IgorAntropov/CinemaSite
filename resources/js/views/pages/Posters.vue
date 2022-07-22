<template>
    <Container>
        <div class="posters-page flex-center">
            Posters
        </div>
    </Container>
</template>

<script>
import Container from "../layout/Container";

export default {
    name: "Posters",
    components: {
        Container
    }
}
</script>

<style scoped lang="scss">
.posters-page {
    min-height: calc(100vh - 150px);
    max-height: calc(100vh - 150px);
}
</style>
