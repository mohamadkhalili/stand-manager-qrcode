<template>
    <v-dialog v-model="dialog" max-width="500px">
        <v-card class="pa-4 ">
            <v-text-field label="نام شعبه" />
            <v-text-field label="آدرس شعبه" />
            <v-text-field label="سال تاسیس" />
            <v-select multiple label="امکانات" :items="possibilities">
                <template #item="{ props, item }">
                    <v-list-item v-bind="props" :prepend-icon="item?.raw?.icon" :title="item?.raw?.name">

                    </v-list-item>
                </template>
                <template #selection="{ item, index }">
                    <v-chip>
                        <v-icon :icon="item?.raw?.icon" />
                        <p class="mx-4">{{ item?.raw.name }}</p>
                    </v-chip>
                </template>
            </v-select>
            <v-text-field label="سال تاسیس" />

        </v-card>
    </v-dialog>
    <v-btn @click="dialog = true" style="position: fixed;top: 114px;left:40px;z-index: 10000;" color="primary"
        icon="mdi-pen" />
</template>
<script setup lang="ts">
import possibilities from '@/components/possibilities.json'
import { ref } from 'vue'

const dialog = ref(false)

</script>