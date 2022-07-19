<template>
    <div class="footer flex-center">
        <span class="title">Кинотеатр «Кинодом»</span>
        <span>© 2022</span>
    </div>
</template>

<script>
export default {
    name: "custom-footer"
}
</script>

<style scoped lang="scss">
.footer {
    height: 50px;
    background-color: var(--color-modal-background);
    bottom: 0;
    position: absolute;
    width: 100%;
    font-size: 20px;

    @media only screen and (max-width: 75rem) {
        font-size: 14px;
    }
}

.footer .title {
    margin-right: 15px;
}
</style>
