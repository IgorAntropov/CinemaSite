<template>
    <div class="header flex-center">
        <div>
            <router-link to="/dashboard">Расписание</router-link>
        </div>
        <div>
            <router-link to="/posters">Афиша</router-link>
        </div>
        <div>
            <router-link to="/news">Новости</router-link>
        </div>
        <div>
            <router-link to="/about">О кинотеатре</router-link>
        </div>
        <div v-if="this.$store.getters.auth.loggedIn" class="icon-div" title="Личный кабинет">
            <router-link to="/profile" class="flex-center"><i class="material-icons">account_circle</i></router-link>
        </div>
        <div v-if="!this.$store.getters.auth.loggedIn" class="icon-div" title="Войти">
            <router-link to="/login" class="flex-center"><i class="material-icons">login</i></router-link>
        </div>
        <div v-if="this.$store.getters.auth.loggedIn" class="icon-div" title="Выйти" @click="logout">
            <a href="#" class="flex-center"><i class="material-icons">logout</i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "custom-header",
    methods: {
        logout() {
            this.$store.dispatch('auth/logout');
        }
    }
}
</script>

<style scoped lang="scss">
.header {
    height: 50px;
    background-color: var(--color-modal-background);
    width: 100%;
}

.header div {
    cursor: pointer;
}

.header div:not(.icon-div),
.header div:not(.icon-div) a {
    color: #f2f2f2;
    margin: 3px;
    padding: 10px;
    font-size: 14px;

    @media only screen and (max-width: 75rem) {
        margin: 1px;
        padding: 3px;
        font-size: 9px;
    }
}

.header div.icon-div a {
    color: #f2f2f2;
    margin: 0;
    padding: 10px;
    font-size: 14px;

    @media only screen and (max-width: 75rem) {
        padding: 3px;
        font-size: 9px;
    }
}

.header div:hover,
.header a:hover {
    background-color: var(--color-primary-light);
}
</style>
