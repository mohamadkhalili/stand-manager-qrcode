<template>
    <v-dialog :model-value="!!modelValue" @update:model-value="emit('update:modelValue', $event ? -1 : 0)" max-width="500px">
        <v-card class="pa-4">
            <v-text-field label="نام و نام خانوادگی" />
            <v-text-field label="نام کاربری" />
            <v-text-field label="گذرواژه" type="password" />
            <v-select label="سطح دسترسی" />
            <v-btn @click="" color="success">افزودن کاربر</v-btn>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
export interface Props {
    modelValue: number
}
import { ref } from 'vue'

const props = defineProps<Props>()
const emit = defineEmits<{
    'update:modelValue': [modelValue: Props['modelValue']]
}>()
</script>