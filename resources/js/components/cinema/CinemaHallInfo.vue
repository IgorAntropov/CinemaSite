<template>
    <div class="cinema-hall-card">
        <img src="{{ hallImage }}"/>
        <div class="cinema-hall-description">
            <h2>{{ hallName }}</h2>
            <ul>
                <li v-for="(value, index) in hallDescription" :key="index">
                    {{ value }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "custom-cinema-hall-info",
    props: [
        'hallImage',
        'hallName',
        'hallDescription'
    ]
}
</script>

<style scoped lang="scss">
.cinema-hall-card {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.cinema-hall-card img {
    width: 100px;
    height: 100px;
    border: 2px solid var(--color-primary-light);
    margin: 10px;
}

h2 {
    color: red;
}
</style>
