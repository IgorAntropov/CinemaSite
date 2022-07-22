<template>
    <div>
        <custom-validation-notification v-if="isVisibleErrors" :errors="arrErrors"></custom-validation-notification>

        <div class="auth-page">
            <form>
                <custom-input type="email" placeholder="E-mail" v-model="user.email"/>
                <custom-input type="password" placeholder="Пароль" v-model="user.password"/>
                <custom-button type="submit" @click.prevent="login">Войти</custom-button>
                <router-link to="/register" class="new-acc">
                    <p class="message">Не зарегистрирован? <a href="#">Создай аккаунт!</a></p>
                </router-link>
                <router-link to="/forgot-password" class="new-acc">
                    <p class="message">Забыл пароль? <a href="#">Восстановить пароль</a></p>
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Login",
    data: () => ({
        user: {
            email: '',
            password: ''
        },
        isVisibleErrors: false,
        arrErrors: []
    }),
    created() {
        this.checkUserState();
    },
    computed: {
        ...mapGetters({
            invalidData: 'auth/invalidData',
            errors: 'auth/errors'
        })
    },
    methods: {
        login() {
            this.$store.dispatch('auth/loginUser', this.user);
            this.visibleErrors();
        },
        checkUserState() {
            this.$store.dispatch('auth/setLoggedInState');
        },
        getAllErrors() {
            let allErrors = this.errors;

            if (this.invalidData) {
                allErrors.push(this.invalidData);
            }

            return allErrors;
        },
        visibleErrors() {
            this.arrErrors = this.getAllErrors();
            this.isVisibleErrors = this.arrErrors.length !== 0;
        }
    },
}
</script>

<style scoped lang="scss">
form .message {
    color: var(--color-white-light);
    margin: 15px;
}

form .message a {
    color: var(--color-gold);
}

form .message,
form .message a {
    font-size: 12px;
}
</style>
