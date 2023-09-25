import { reactive, ref } from "vue";
import type {Ref} from "vue";
import { defineStore } from "pinia";
import type { IData } from "./store.types.ts";

export const useStore = defineStore('store', () => {
    const data: IData[] = reactive([
        { name: 'Василий', surname: 'Иванов', id: 1 },
        { name: 'Александр', surname: 'Александров', id: 2 },
        { name: 'Егор', surname: 'Воронов', id: 3 },
    ]);
    const currentIndex = ref(0);

    const setCurrentIndex = (index: number) => {
        currentIndex.value = index;
    };
    const updateField = (field: keyof IData, value: Ref<string>) => {
        data[currentIndex.value][field] = value as never;
    };

    return {
        data,
        currentIndex,
        setCurrentIndex,
        updateField,
    };
});
