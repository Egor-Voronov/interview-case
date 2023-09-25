<script setup lang="ts">
import { useStore } from "../stores/store.ts";
import { computed, ref} from "vue";

const store = useStore();

const getCurrentName = computed(() => store.data[store.currentIndex].name);
const getCurrentSurname = computed(() => store.data[store.currentIndex].surname);

const draftName = ref(getCurrentName.value);
const draftSurname = ref(getCurrentSurname.value);

const saveData = () => {
    store.updateField("name", draftName.value);
    store.updateField("surname", draftSurname.value);
};

const resetData = () => {
    draftName.value = getCurrentName.value;
    draftSurname.value = getCurrentSurname.value;
};
</script>
<template>
    <div class="container">
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

        <div class="side">
            <input v-model="draftName" />
            <input v-model="draftSurname" />

            <button class="save" @click="saveData">сохранить</button>
            <button class="del" @click="resetData">обнулить драфт</button>
        </div>
    </div>
</template>

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

.element {
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
}

.active {
    background-color: #b4e7e7;
}

.save {
    background-color: #aaffaa;
}

.del {
    background-color: #ce5555;
}
</style>