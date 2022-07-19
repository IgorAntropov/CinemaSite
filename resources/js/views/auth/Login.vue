<template>
<div>
    <div class="login-page">
        <form>
            <custom-input type="text" placeholder="E-mail" v-model="user.email" />
            <custom-input type="text" placeholder="Password" v-model="user.password" />
            <custom-button type="submit" @click.prevent="login">Войти</custom-button>
            <router-link to="/register" class="new-acc">
                <p class="message">Не зарегистрирован? <a href="#">Создай аккаунт!</a> </p>
            </router-link>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: "Login",
    data: () => ({
        user: {
            email: '',
            password: ''
        }
    }),
    created() {
        this.checkUserState();
    },
    methods: {
        login() {
            this.$store.dispatch('auth/loginUser', this.user);
        },
        checkUserState() {
            this.$store.dispatch('auth/setLoggedInState');
        }
    },
}
</script>

<style scoped lang="scss">
.login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
    display: flex;
}

.login-page form {
    position: relative;
    z-index: 1;
    background-color: var(--color-modal-background);
    background-position: center;
    background-size: cover;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 5px 0 rgba(0, 0, 0, 0.2);
}

form input {
    font-family: 'Roboto', sans-serif;
    outline: 0;
    background: var(--color-white-light);
    width: 100%;
    border: 0;
    margin: 0 0 15px!important;
    box-sizing: border-box;
    font-size: 14px;
}

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
