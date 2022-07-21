<template>
    <Container>
        <div class="news-posts">
            <custom-news-post
                v-for="(value, index) in news"
                :key="index"
                :newsImage="value.image"
                :newsTitle="value.title"
                :newsDescription="value.description"
            >
            </custom-news-post>
        </div>
    </Container>
</template>

<script>
import Container from "../layout/Container";

export default {
    name: "News",
    data: () => ({
        news: [
            {
                image: '',
                title: 'Голливудские мировые кинопремьеры!',
                description: 'Мы приглашаем вас на наши мероприятия, чтобы вместе смотреть долгожданные мировые кинопремьеры на больших экранах в хорошем качестве и дублированные на русский язык.'
            },
            {
                image: '',
                title: 'БЭТМЕН!',
                description: 'Мы приносим свои извинения, прокат картины "Бэтмен" отменён на неопределённый срок.'
            },
            {
                image: '',
                title: 'ПРЕДПОКАЗ "МИСТЕР НОКАУТ"',
                description: 'Друзья! 22 июля в 20:00 состоится предпоказ фильма "Мистер нокаут"'
            },
            {
                image: '',
                title: 'Голливудские мировые кинопремьеры!',
                description: 'Мы приглашаем вас на наши мероприятия, чтобы вместе смотреть долгожданные мировые кинопремьеры на больших экранах в хорошем качестве и дублированные на русский язык.'
            },
            {
                image: '',
                title: 'БЭТМЕН!',
                description: 'Мы приносим свои извинения, прокат картины "Бэтмен" отменён на неопределённый срок.'
            },
            {
                image: '',
                title: 'ПРЕДПОКАЗ "МИСТЕР НОКАУТ"',
                description: 'Друзья! 22 июля в 20:00 состоится предпоказ фильма "Мистер нокаут"'
            },
            {
                image: '',
                title: 'Голливудские мировые кинопремьеры!',
                description: 'Мы приглашаем вас на наши мероприятия, чтобы вместе смотреть долгожданные мировые кинопремьеры на больших экранах в хорошем качестве и дублированные на русский язык.'
            },
            {
                image: '',
                title: 'БЭТМЕН!',
                description: 'Мы приносим свои извинения, прокат картины "Бэтмен" отменён на неопределённый срок.'
            },
            {
                image: '',
                title: 'ПРЕДПОКАЗ "МИСТЕР НОКАУТ"',
                description: 'Друзья! 22 июля в 20:00 состоится предпоказ фильма "Мистер нокаут"'
            }
        ]
    }),
    components: {
        Container
    }
}
</script>

<style scoped lang="scss">
.news-posts {
    display: grid;
    grid-template-columns: calc((100vw - 50px) / 3) calc((100vw - 50px) / 3) calc((100vw - 50px) / 3);
    grid-template-rows: auto;
}
</style>
