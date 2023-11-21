<template>
    <v-btn @click="dialog = true" color="primary" style="position: fixed;top: 114px;left: 25px;">ساخت محصول +</v-btn>
    <v-dialog v-model="dialog" max-width="500px">
        <v-card class="pa-4">
            <v-text-field v-model="name" label="نام" />
            <v-text-field label="ترکیبات" />
            <v-text-field label="قیمت" />
            <v-select label="دسته بندی" />
            <v-file-input class="align-self-center w-100 mb-6" hide-details :rules="rules"
                accept="image/png, image/jpeg, image/bmp" placeholder="افزودن تصاویر" prepend-icon="mdi-camera"
                label="افزودن تصاویر"></v-file-input>
            <v-switch v-model="active" :label="active ? 'فعال' : 'غیر فعال'" color="primary" inset></v-switch>
            <v-btn @click="" color="success">افزودن کاربر</v-btn>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const rules = ref([
    (value: any) => {
        return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
    },
])
const active = ref(true)
const dialog = ref(false)
</script>