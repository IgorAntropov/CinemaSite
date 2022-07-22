<template>
    <div>
        <custom-validation-notification v-if="isVisibleErrors" :errors="arrErrors"></custom-validation-notification>

        <div class="auth-page">
            <form>
                <custom-input type="email" placeholder="E-mail" v-model="user.email"/>
                <custom-button type="submit" @click.prevent="forgot">Восстановить пароль</custom-button>
                <router-link to="/login"> <p class="message">На страницу авторизации? <a href="#">Войти</a></p> </router-link>
            </form>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "ForgotPassword",
    data: () => ({
        user: {
            email: ''
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
        forgot() {
            this.$store.dispatch('auth/forgotPassword', this.user);
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
