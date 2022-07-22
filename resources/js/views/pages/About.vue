<template>
    <Container>
        <div class="general-info">
            <h2>
                Киноцентр "Кинодом" начал свою работу 21 декабря 2006 года, и на протяжении многих лет остается одним из любимых мест отдыха жителей и гостей нашего региона.
                Киноцентр "Кинодом" - это 3 кинозала, 2 бара, а также 2 двухуровневые охраняемые парковки. Кроме того, для удобства посетителей работает гардероб.
            </h2>

            <div class="cinema-hall-cards flex-center">
                <custom-cinema-hall-info
                    v-for="(value, index) in cinemaHalls"
                    :key="index"
                    :hallImage="value.image"
                    :hallName="value.name"
                    :hallDescription="value.description"
                >
                </custom-cinema-hall-info>
            </div>
        </div>
        <div class="sub-info">
            <div class="sub-info-card">
                <h2>Дополнительная информация</h2>
                <p>
                    Киноцентр располагает площадью и техническими возможностями для проведения различного рода мероприятий: банкеты, презентации, корпоративные праздники и промоакции.
                    На двух этажах здания киноцентра расположены лайтбоксы, которые можно использовать в рекламных целях.
                </p>
            </div>
            <div class="sub-info-card">
                <h2>Контакты</h2>
                <p>
                    634009, г.Томск, ул.Розы Люксембург, 73. Кинотеатр «Кинодом»
                    Автоответчик: +7 (382-2) 40-90-20, +7 (382-2) 90-90-20
                    Кофейня: +7 (382-2) 40-89-22
                </p>
            </div>
            <div class="sub-info-card">
                <h2>Время работы касс</h2>
                <p>
                    пн.-пт. с 09:30 до начала последнего сеанса.
                </p>
                <p>
                    сб.-вс. с 09:00 до начала последнего сеанса.
                </p>
            </div>
        </div>
    </Container>
</template>

<script>
import Container from "../layout/Container";

export default {
    name: "About",
    data: () => ({
        cinemaHalls: [
            {
                image: '',
                name: 'Зал №1',
                description: ['Количество мест - 250', 'Экран - 19,2 х 8,0 м', 'Проектор - Christie CP2230 (2K, лампа 6 кВт)', 'Тип 3D - пассивный (круговая поляризация)']
            },
            {
                image: '',
                name: 'Зал №2',
                description: ['Количество мест - 128', 'Экран - 9,0 х 3,7 м', 'Проектор - Christie CP2230 (2K, лампа 3 кВт)', 'Тип 3D - пассивный (круговая поляризация)']
            },
            {
                image: '',
                name: 'Зал №3',
                description: ['Количество мест - 128', 'Экран - 9,0 х 3,7 м', 'Проектор - Christie CP2230 (2K, лампа 3 кВт)', 'Тип 3D - нет']
            }
        ]
    }),
    components: {
        Container
    }
}
</script>

<style scoped lang="scss">
.general-info,
.sub-info {
    display: flex;
    flex: 50%;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100vw - 50px);
    padding: 0 30px;
}

.general-info {
    justify-content: start;

    @media only screen and (max-width: 767px) {

    }
}

p, h2 {
    text-align: justify;
}

.sub-info {
    justify-content: end;
}

.cinema-hall-cards {
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>
