<template>
    <v-container class="d-flex flex-row flex-wrap">
        <v-card v-for="(stand, index) in 8" :key="index" class="ma-2" width="260px">
            <div class="d-flex flex-row justify-space-between mx-2 mt-1">
                <v-card-title class="text-center text-body-1 align-center">میز ماه و ستاره </v-card-title>
                <v-btn class="align-self-center" color="success" variant="outlined" icon="mdi-plus" size="small"
                    @click="standOrderDialog = { dialog: true, stand: stand }"></v-btn>
            </div>
            <v-list class="mb-12">
                <v-list-item v-for="(order, orderIndex) in index + 2" class="text-body-2" variant="text"
                    :disabled="order?.active">
                    <div class="w-100 d-flex flex-row justify-space-between my-1">
                        <p class="h-100 align-self-center">قیمه</p>
                        <p class="h-100 align-self-center">2 عدد</p>
                        <p class="h-100 align-self-center">آماده</p>
                    </div>

                </v-list-item>
                <v-list-item class="text-body-2" variant="text" :disabled="order?.active">
                    <div class="w-100 d-flex flex-row justify-space-between my-1">
                        <p class="h-100 align-self-center">قیمه</p>
                        <p class="h-100 align-self-center">2 عدد</p>
                        <p class="h-100 align-self-center">در حال تهیه</p>
                    </div>

                </v-list-item>
            </v-list>
            <v-btn class="w-100 align-self-end mt-auto" style="position: absolute;bottom: 0;" variant="outline"
                color="primary" @click="">اتمام</v-btn>

        </v-card>
        <v-dialog v-model="standOrderDialog.dialog" fullscreen>
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon="mdi-close" @click="standOrderDialog.dialog = false"></v-btn>
                    <v-spacer />
                    <v-card-title>
                        میز خورشید و ماه
                    </v-card-title>
                    <v-spacer></v-spacer>
                    <v-btn @click="standOrderDialog.dialog = false">ثبت سفارش</v-btn>
                </v-toolbar>
                <div class="pa-4">
                    <v-row>
                        <v-col cols="3">
                            <v-card height="160px" width="100%">

                            </v-card>
                        </v-col>
                        <v-col cols="9">

                            <MenuListComponent />
                        </v-col>
                    </v-row>
                </div>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuListComponent from '../components/MenuListComponent.vue';

const standOrderDialog = ref({ dialog: false, stand: {} })

</script>