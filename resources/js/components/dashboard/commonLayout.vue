<template>
    <div class="page flex-center">
        <div class="date-choosing">
            <div @click.prevent="changeTab" class="flex-center current-sub-tab">Сегодня</div>
            <div @click.prevent="changeTab" class="flex-center">Завтра</div>
            <div @click.prevent="changeTab" class="flex-center">Неделя</div>
        </div>
        <div class="page-content flex-center">
            <slot></slot>
        </div>
        <div class="pseudo-footer"></div>
    </div>
</template>

<script>
export default {
    name: "custom-common-layout",
    methods: {
        changeTab(event) {
            let currentTab = document.getElementsByClassName('current-sub-tab');
            let target = event.target;

            if (currentTab.length !== 0) {
                currentTab[0].classList.remove('current-sub-tab');
            }

            target.classList.add('current-sub-tab');
        }
    }
}
</script>

<style scoped lang="scss">
.page {
    min-height: calc(100vh - 150px);
    max-height: calc(100vh - 150px);
    justify-content: space-between;
    flex-direction: column;
}

.date-choosing,
.pseudo-footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: var(--color-modal-background);
    color: white;
}

.date-choosing > div {
    height: 80%;
    padding: 5px;
    margin: 3px 10px;
    font-size: 18px;
    cursor: pointer;
}

.date-choosing > div:hover,
.current-sub-tab {
    background-color: var(--color-primary-light);
}

.page-content {
    width: 100%;
    min-height: calc(100vh - 250px);
}
</style>
