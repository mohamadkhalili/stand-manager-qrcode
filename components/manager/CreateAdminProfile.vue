<template>
    <v-btn @click="dialog = true" color="primary" style="position: fixed;top: 114px;left: 25px;">ساخت کاربر جدید +</v-btn>
    <v-dialog v-model="dialog" max-width="500px">
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
import { ref } from 'vue'

const dialog = ref(false)
</script>