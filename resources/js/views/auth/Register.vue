<template>
    <div>
        <custom-validation-notification v-if="isVisibleErrors" :errors="arrErrors"></custom-validation-notification>

        <div class="auth-page">
            <form>
                <custom-input type="text" placeholder="Имя пользователя" v-model="user.name" />
                <custom-input type="email" placeholder="E-mail" v-model="user.email" />
                <custom-input type="password" placeholder="Пароль" v-model="user.password" />
                <custom-input type="password" placeholder="Подтвердите пароль" v-model="user.password_confirmation" />
                <custom-button type="submit" @click.prevent="register">Регистрация</custom-button >
                <router-link to="/login"> <p class="message">Уже зарегистрирован? <a href="#">Войди!</a></p> </router-link>
            </form>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Register",
    data: () => ({
        user: {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        },
        isVisibleErrors: false,
        arrErrors: []
    }),
    computed: {
        ...mapGetters({
            invalidData: 'auth/invalidData',
            errors: 'auth/errors'
        })
    },
    methods: {
        register() {
            this.$store.dispatch('auth/registerUser', this.user);
            this.visibleErrors();
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
    }
}
</script>

<style scoped lang="scss">
form .message {
    margin: 15px;
    color: #b3b3b3;
    font-size: 12px;
}

form .message a {
    color: #c69963;
    text-decoration: none;
}
</style>
