import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { IData } from "./store.types.ts";

export const useStore = defineStore('store', () => {
    const data: IData[] = reactive([
        { name: 'Василий', surname: 'Иванов' },
        { name: 'Александр', surname: 'Александров' },
        { name: 'Егор', surname: 'Воронов' },
    ]);
    const currentIndex = ref(0);

    const setCurrentIndex = (index: number) => {
        currentIndex.value = index;
    };
    const updateField = (field: keyof IData, value: string) => {
        data[currentIndex.value][field] = value;
    };

    return {
        data,
        currentIndex,
        setCurrentIndex,
        updateField,
    };
});
