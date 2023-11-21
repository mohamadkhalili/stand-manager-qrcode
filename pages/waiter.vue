<template>
    <v-container class="d-flex flex-row flex-wrap">
        {{ data }}
        <v-card v-for="(stand, index) in 8" :key="index" class="ma-2" width="260px">
            <v-card-title class="text-center text-body-1">میز ماه و ستاره</v-card-title>
            <v-list class="mb-12">
                <v-list-item v-for="(order, orderIndex) in index + 2" class="text-body-2" variant="text"
                    :disabled="order?.active">
                    <div class="w-100 d-flex flex-row justify-space-between my-1">
                        <p class="h-100 align-self-center">قیمه</p>
                        <p class="h-100 align-self-center">2 عدد</p>
                        <p class="h-100 align-self-center">آماده</p>
                        <v-btn class="h-100 align-self-center" variant="outline" color="primary" size="small"
                            @click="">تحویل</v-btn>
                    </div>

                </v-list-item>
                <v-list-item class="text-body-2" variant="text" :disabled="order?.active">
                    <div class="w-100 d-flex flex-row justify-space-between my-1">
                        <p class="h-100 align-self-center">قیمه</p>
                        <p class="h-100 align-self-center">2 عدد</p>
                        <p class="h-100 align-self-center">در حال تهیه</p>

                        <v-btn class="h-100 align-self-center" variant="outline" color="primary" :disabled="true"
                            size="small" @click="">تحویل</v-btn>
                    </div>

                </v-list-item>
            </v-list>
            <v-btn class="w-100 align-self-end mt-auto" style="position: absolute;bottom: 0;" variant="outline"
                color="primary" @click="">اتمام</v-btn>

        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { data } = await useFetch('/proxy/develop/orders/')


const stands = ref([{}])
</script>