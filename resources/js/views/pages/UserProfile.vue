<template>
    <Container>
        <div class="user-card">
            <div class="border">
                <div class="avatar">
                    <img src="" alt="" />
                </div>
                <hr />
                <div class="flex-center">
                    <h2>Имя:</h2>
                    <p>{{ currentUser.name }}</p>
                </div>
                <hr />
                <div class="flex-center">
                    <h2>E-mail:</h2>
                    <p>{{ currentUser.email }}</p>
                </div>
                <hr />
                <div class="flex-center">
                    <h2>Создан:</h2>
                    <p>{{ currentUser.created_at }}</p>
                </div>
                <hr />
            </div>
        </div>
    </Container>
</template>

<script>
import Container from "../layout/Container";

export default {
    name: "UserProfile",
    components: {
        Container
    },
    computed: {
        currentUser: {
            get() {
                return this.$store.state.auth.userDetails;
            }
        }
    },
    created() {
        this.$store.dispatch('auth/currentUser');
    }
}
</script>

<style scoped lang="scss">
hr {
    margin: 0 30px;
}

.avatar {
    height: 180px;
    width: 180px;
    border-radius: 50%;
    border: 3px solid var(--color-primary-light);
    overflow: hidden;
    margin: 50px auto 30px;
}

.border {
    height: 490px;
    width: 270px;
    border: 3px double #aaa;
}

.border div.flex-center {
    justify-content: space-between;
    margin: 0 30px;
}

h2, p {
    text-align: center;
}

h2 {
    font-size: 18px;
}

p {
    font-size: 16px;
}
</style>
