<template>
    <v-card class="ma-2" max-height="160px" :disabled="!product.available">
        <div class="d-flex flex-row">
            <v-img :src="'http://192.168.1.102:8000' + product.image" max-width="35%" height="160px" cover />
            <div style="width: 44%;">
                <v-card-title>
                    {{ product.name }}
                </v-card-title>
                <p class="ps-4 text-medium-emphasis text-caption">
                    {{ product.ingredients }}
                </p>
                <v-card-title class="text-body-1">{{ product.price }}<span class="px-2">تومان</span></v-card-title>
            </div>
            <div class="text-center" style="width: 20%;align-self: center;">
                <v-btn-toggle>
                    <v-btn size="x-small" @click="toggleCounter++">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <span class="pt-3">{{ toggleCounter }}</span>
                    <v-btn size="x-small" @click="toggleCounter > 0 ? toggleCounter-- : ''">
                        <v-icon>mdi-minus</v-icon>
                    </v-btn>
                </v-btn-toggle>
                <v-btn>افزودن</v-btn>
            </div>
        </div>
    </v-card>
</template>

<script setup lang="ts">
export interface Props {
    product: any
}
import { ref } from 'vue'

const props = defineProps<Props>()
const toggleCounter = ref(0)
</script>