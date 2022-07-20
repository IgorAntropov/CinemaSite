<template>
    <div>
        <ul>
            <li class="alert" v-for="(value, index) in validationErrors" :key="index">
                <span class="closebtn" onclick="this.parentElement.style.display='none'"><i class="material-icons">close</i></span>
                {{ value }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "custom-validation-notification",
    props: [
        'errors'
    ],
    computed: {
        validationErrors() {
            return Object.values(this.errors);
        }
    }
}
</script>

<style scoped lang="scss">
.alert {
    padding: 20px;
    background-color: red;
    color: white;
    margin: 15px 0;
}

.closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.closebtn:hover {
    color: black;
}
</style>
