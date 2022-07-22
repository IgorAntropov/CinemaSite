<template>
    <div class="header flex-center">
        <div class="dashboard-tab">
            <router-link @click.prevent="changeTab" to="/dashboard">Расписание</router-link>
        </div>
        <div class="posters-tab">
            <router-link @click.prevent="changeTab" to="/posters">Афиша</router-link>
        </div>
        <div class="news-tab">
            <router-link @click.prevent="changeTab" to="/news">Новости</router-link>
        </div>
        <div class="about-tab">
            <router-link @click.prevent="changeTab" to="/about">О кинотеатре</router-link>
        </div>
        <div v-if="this.$store.getters.auth.loggedIn" class="profile-tab icon-div" title="Личный кабинет">
            <router-link @click.prevent="changeTab" to="/profile" class="flex-center"><i class="material-icons">account_circle</i></router-link>
        </div>
        <div v-if="!this.$store.getters.auth.loggedIn" class="icon-div" title="Войти">
            <router-link @click.prevent="changeTab" to="/login" class="flex-center"><i class="material-icons">login</i></router-link>
        </div>
        <div v-if="this.$store.getters.auth.loggedIn" class="icon-div" title="Выйти" @click="logout">
            <a @click.prevent="changeTab" href="#" class="flex-center"><i class="material-icons">logout</i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "custom-header",
    created() {
        this.checkUserState();
    },
    mounted() {
        this.chooseTab();
    },
    methods: {
        changeTab(event) {
            let target = event.target;
            let parent = '';

            if (target.localName !== 'div') {
                parent = target.parentNode;
            } else {
                parent = target;
            }

            if (parent.localName !== 'div') {
                parent = parent.parentNode;
            }

            let tabName = parent.classList[0];

            this.$store.dispatch('changeCurrentTab', tabName);
        },
        logout() {
            this.$store.dispatch('auth/logout');
        },
        checkUserState() {
            this.$store.dispatch('auth/setLoggedInState');
        },
        chooseTab() {
            let currentTab = this.$store.getters.currentTab;

            document.getElementsByClassName(currentTab)[0].classList.add('current-tab');
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

.current-tab {
    background-color: var(--color-primary-light);
}
</style>
