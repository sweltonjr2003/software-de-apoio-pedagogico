<script setup lang="ts">
import { ref } from 'vue'

const selectedCategory = ref('Production')
const categories = ref([
    { name: 'Resposta 1', key: 'A' },
    { name: 'Resposta 2', key: 'M' },
    { name: 'Resposta 3', key: 'P' },
    { name: 'Resposta 4', key: 'R' },
])
</script>

<template>
    <Card>
        <template #title>
            <h1>Pergunta</h1>
        </template>
        <template #content>
            <div id="answers">
                <div
                    v-for="category in categories"
                    :key="category.key"
                    class="flex align-items-center"
                >
                    <RadioButton
                        v-model="selectedCategory"
                        :inputId="category.key"
                        name="dynamic"
                        :value="category.name"
                        style="margin-right: 8px"
                    />
                    <label :for="category.key" class="ml-2">{{
                        category.name
                    }}</label>
                </div>
            </div>
        </template>
        <template #footer>
            <Button label="Proxima" />
        </template>
    </Card>
</template>

<style scoped lang="scss">
button {
    display: block;
    float: right;
}

.p-card {
    text-align: center;

    #answers {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
</style>
