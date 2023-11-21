<template>
    <v-container class="d-flex flex-row flex-wrap">
        <v-card v-for="(stand, index) in 8" :key="index" class="ma-2" width="210px">
            <v-card-title class="text-center text-body-1">سفارش 19584</v-card-title>
            <v-list>
                <v-list-item v-for="(order, orderIndex) in index + 2" class="text-body-2" variant="text"
                    :disabled="order?.active">
                    <div class="w-100 d-flex flex-row justify-space-between my-1">
                        <p class="h-100 align-self-center">قیمه</p>
                        <p class="h-100 align-self-center">2 عدد</p>
                        <v-btn class="h-100 align-self-center" variant="outline" color="primary" size="small"
                            @click="">آماده</v-btn>
                    </div>

                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
</script>