<template>
    <div>
        <div class="header">
            <h1>{{ title }}
            </h1>
        </div>
        <div class="container">
            <button @click="onClickInput">{{ input }}</button>
        </div>
    </div>
    
</template>
<script>
export default {
    name: "Home",
    data () {
        return {
            title: "Account Book",
            input: "入力"
        }
    },
    methods: {
        onClickInput() {
            this.$router.push('/inputDetail')
        }
    }

}
</script>
<style scoped>
    .header {
        color: aquamarine;
    }
</style>