<script setup lang="ts">
import { useStore } from "../stores/store.ts";
import { computed, ref} from "vue";
import List from "./List.vue";
import Form from "./Form.vue";

const store = useStore();

const getCurrentName = computed(() => store.data[store.currentIndex].name);
const getCurrentSurname = computed(() => store.data[store.currentIndex].surname);

const draftName = ref(getCurrentName.value);
const draftSurname = ref(getCurrentSurname.value);

const resetData = () => {
    draftName.value = getCurrentName.value;
    draftSurname.value = getCurrentSurname.value;
};
</script>

<template>
    <div class="container">
        <List
            :resetData="resetData"
        />
        <Form
            :draftName="draftName"
            :draftSurname="draftSurname"
            :resetData="resetData"
            @update:draftName="draftName = $event"
            @update:draftSurname="draftSurname = $event"
        />
    </div>
</template>
<!--            можно еще реализовать без эмитов, через стейты в pinia или через прокси значения-->

<style scoped>
.container {
    width: 700px;
    height: 450px;

    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    display: flex;
    justify-content: space-between;
}

.side {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;

    padding: 30px;
    gap: 10px;
}
</style>