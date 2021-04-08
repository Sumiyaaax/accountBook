<template>
    <form>
        <div>
            <label for="">タイトル</label>
            <input type="text"
            class="input"
            placeholder="お昼ご飯"
            v-model="inputTitle">
        </div>
        <div>
            <label for="">支出額（￥）</label>
            <input type="number"
            class="imput"
            placeholder="1000"
            v-model="inputAmount">
        </div>
        <div>
            <label for="">カテゴリ</label>
            <select v-model="inputCategory">
                <option v-for="(value, key) in categories" :value="key" :key="key">
                    {{ value }}
                </option>
            </select>
        </div>
        <div>
            <label for="">日付</label>
            <input type="date"
            class="input"
            v-model="inputDate">
        </div>
        <div>
            <label for="">メモ</label>
            <textarea name="" id="" cols="40" rows="10"></textarea>
        </div>
        <div>
            <button @click="onClickCancel">キャンセル</button>
            <button @click="onClickSave">保存</button>
        </div>
    </form>
    
</template>
<script>
export default {
    name: "InputExpense",
    data() {
        return {
            inputTitle: "",
            inputAmount: "",
            inputCategory: "",
            inputDate: "",
            categories: [
                "食費",
                "日用品",
                "趣味・娯楽",
                "交際費",
                "交通費",
                "光熱費"
            ],
        }
    },
    methods: {
        onClickCancel() {
            this.$router.push('/')
        },
        onClickSave() {
            this.inputTitle = ""
            this.inputAmount = ""
            this.inputCategory = ""
            this.inputDate = ""
        }
    }
}
</script>
<style scoped>

</style>