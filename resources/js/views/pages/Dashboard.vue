<template>
    <Container>
        <div class="dashboard-page flex-center">
            Dashboard
        </div>
    </Container>
</template>

<script>
import Container from "../layout/Container";

export default {
    name: "Dashboard",
    components: {
        Container
    }
}
</script>

<style scoped lang="scss">
.dashboard-page {
    min-height: calc(100vh - 150px);
    max-height: calc(100vh - 150px);
}
</style>
