<template>
    <div>
        <div class="header">
            <h1>{{ title }}
            </h1>
        </div>
        <div class="container">
            <div>
                <label for="">金額</label>
                <input type="text" :v-model="price">
            </div>
            <div>
                <label for="">カテゴリー</label>
                <select v-model="selectedCategory">
                    <option v-for="c in categories" :key="c" value="">{{ c }}</option>
                </select>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    name: "InputDetail",
    data () {
        return {
            title: "詳細入力",
            price: 0,
            selectedCategory: "",
            categories: [
                "食費",
                "日用品",
                "趣味・娯楽",
                "交際費",
                "交通費",
                "光熱費"
            ]
        }
    }
}
</script>
<style scoped>
    .header {
        color: aquamarine;
    }
</style>