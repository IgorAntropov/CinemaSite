<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
    name: 'custom-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style scoped>
.input {
    width: 100%;
    border: 1px solid var(--color-primary-light);
    padding: 10px 15px;
    margin: 10px 15px;
}
</style>
