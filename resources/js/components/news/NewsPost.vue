<template>
    <div class="news-post">
        <img src="{{ newsImage }}"/>
        <div class="news-post-description">
            <h2>{{ newsTitle }}</h2>
            <p>{{ newsDescription }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "custom-news-post",
    props: [
        'newsImage',
        'newsTitle',
        'newsDescription'
    ]
}
</script>

<style scoped>
.news-post {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 20px;
}

.news-post img {
    width: 100px;
    height: 100px;
    border: 2px solid var(--color-primary-light);
    margin: 10px;
}

h2 {
    color: red;
}

h2, p {
    margin: 0!important;
}

p {
    text-align: justify;
}

.news-post-description {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 200px;
    width: 200px;
}
</style>
