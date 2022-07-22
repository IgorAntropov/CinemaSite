<template>
    <Container>
        <div class="user-card flex-center">
            <div class="border">
                <div class="avatar">
                    <img src="" alt="" @click.prevent="clickUploadImage" />
                    <input type="file" accept="image/jpeg, image/gif, image/png" id="uploadFile"  @change="onFileChange"/>
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
    },
    methods: {
        clickUploadImage: function (e) {
            document.getElementById('uploadFile').click();
        },
        onFileChange: function(e) {
            let files = e.target.files || e.dataTransfer.files;

            if (!files.length)
                return;

            this.createImage(files[0]);
        },
        createImage: function(file) {
            let reader = new FileReader();
            let vm = this;

            reader.onload = function(e) {
                vm.image = e.target.result;
            };

            reader.readAsDataURL(file);

            this.upload();
        },
        upload: function(){
            let data = new FormData();
            let self = this;

            data.append('file', this.image);
            data.append('sizes', this.sizes);
            data.append('root', 'uploads/test');

            //отправка на бек и дальнейшая обработка
        }
    }
}
</script>

<style scoped lang="scss">
.user-card {
    min-height: calc(100vh - 150px);
    max-height: calc(100vh - 150px);
}

hr {
    margin: 0 30px;
}

img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
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

#uploadFile {
    display: none;
}
</style>
