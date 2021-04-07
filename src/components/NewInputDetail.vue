<template>
    <div>
        <section class="main-content">
            <div class="container">
                <div class="box expense-list-box">
                    <div class="title-box">
                        <h1 class="title">家計簿</h1>
                        <input-expense />
                    </div>
                </div>
            </div>

        </section>
    </div>  
</template>
<script>
// import InputExpense from '@components/InputExpense';
import InputExpense from './InputExpense.vue';

export default {
    name: "NewInputDetail",
    components: {
        'input-expense': InputExpense,
    },
    data () {
        return {
            title: "NEW詳細入力",
            price: 0,
            selectedCategory: "",
            categories: [
                "食費",
                "日用品",
                "趣味・娯楽",
                "交際費",
                "交通費",
                "光熱費"
            ],
            comment: ""
        }
    },
    methods: {
        onClickSave() {
            this.$router.push("/")
        },
        onClickNewInput() {
            
        }
    }
}
</script>
<style scoped>
    .header {
        color: aquamarine;
    }
</style>