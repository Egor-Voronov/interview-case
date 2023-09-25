<script setup lang="ts">
import { useStore } from "../stores/store.ts";

defineProps<{
    resetData: () => void,
}>()

const store = useStore();
</script>

<template>
    <div class="side">
        <div
            v-for="(person, index) in store.data"
            :class="['element', {active: store.currentIndex === index}]"
            @click="store.currentIndex = index; resetData()"
            :key="person.id"
        >
            {{ person.name }} {{ person.surname }}
        </div>
    </div>
</template>

<style scoped>
.element {
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
}

.active {
    background-color: #b4e7e7;
}
</style>