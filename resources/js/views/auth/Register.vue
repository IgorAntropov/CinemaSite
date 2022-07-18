<template>
    <div>
        <div class="register-page">
            <form>
                <custom-input type="text" placeholder="User name" v-model="user.name" />
                <custom-input type="text" placeholder="E-mail" v-model="user.email" />
                <custom-input type="text" placeholder="Password" v-model="user.password" />
                <custom-input type="text" placeholder="Password" v-model="user.password_confirmation" />
                <custom-button type="submit" @click.prevent="register">register</custom-button >
                <router-link to="/login"> <p class="message">Already registered? <a href="#">Sing In</a></p> </router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    data: () => ({
        user: {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        }
    }),
    methods: {
        register() {
            console.log(this.user)
            this.$store.dispatch('auth/registerUser', this.user);
        }
    }
}
</script>

<style scoped lang="scss">
.register-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
    display: flex;
}

form {
    position: relative;
    z-index: 1;
    background-color: var(--color-modal-background);
    background-size: cover;
    background-position: center;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5), 0 5px 0 rgba(0, 0, 0, 0.2);
}

form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px!important;
    box-sizing: border-box;
    font-size: 14px;
}

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
