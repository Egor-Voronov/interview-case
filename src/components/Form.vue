<script setup lang="ts">
import { useStore } from "../stores/store.ts";
import type {Ref} from "vue";

const props = defineProps<{
    draftName: Ref<string>,
    draftSurname: Ref<string>,
    resetData: () => void,
}>()

const emit = defineEmits<{
    'update:draftName': (value: string) => void;
    'update:draftSurname': (value: string) => void;
}>()

const store = useStore();

const saveData = () => {
    store.updateField("name", props.draftName);
    store.updateField("surname", props.draftSurname);
};
</script>

<template>
    <div class="side">
        <input :value="draftName" @input="emit('update:draftName', $event.target.value)" />
        <input :value="draftSurname" @input="emit('update:draftSurname', $event.target.value)" />

        <button class="save" @click="saveData">сохранить</button>
        <button class="del" @click="resetData">обнулить драфт</button>
    </div>
</template>

<style scoped>
.save {
    background-color: #aaffaa;
}

.del {
    background-color: #ce5555;
}
</style>