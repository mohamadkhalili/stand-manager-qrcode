<template>
    <v-card v-for="(category, index) in categories" :key="index" class="mt-4" variant="outlined" color="primary">
        <v-card class="rounded-0" variant="tonal" color="primary">
            <v-card-title>{{ category }}</v-card-title>
        </v-card>
        <v-row class="pa-4">
            <v-col v-for="(product, indexItem) in data?.products?.filter((item: any) => item.category === category)"
                :key="indexItem" cols="12" md="6">
                <MenuElementComponent :product="product" />
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup lang="ts">
import MenuElementComponent from './MenuElementComponent.vue'
import { computed } from 'vue'

const { data } = await useFetch('/proxy/develop/products/', { query: { pk: 1 } })

const categories = computed(() => [...new Set(data?.value?.products?.map((item: any) => item.category))])
</script>
