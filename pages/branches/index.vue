<template>
    <v-container>
        <v-card v-for="(shobe, index) in data?.shobes" :key="index" :to="`/branches/${shobe.id}`" class="my-2" width="400px"
            height="360px">
            <v-img src="~/assets/home-slide-1.jpg" height="200px" cover />
            <v-card-title>
                {{ shobe.name }}
            </v-card-title>
            <v-card-subtitle>
                {{ shobe.address }}
            </v-card-subtitle>
            <div class="mx-4">
                <v-locale-provider ltr>
                    <v-rating class="w-100 mt-2" half-increments hover readonly :length="5" :size="25" :model-value="4.5"
                        color="yellow-accent-4" />
                </v-locale-provider>
            </div>
            <div class="d-flex flex-row mx-2 mt-1">
                <v-tooltip v-if="shobe?.emkanat" v-for="(option, indexOption) in getJson(shobe?.emkanat)" :key="indexOption"
                    location="top" :text="option.name">
                    <template v-slot:activator="{ props }">
                        <v-icon class="mx-2" v-bind="props" :icon="option.icon" />
                    </template>
                </v-tooltip>
            </div>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">

const { data } = await useFetch('/proxy/develop/shobes/', { query: { pk: 1 } })

function getJson(params: any) {
    return JSON.parse(params.replace(/'/g, '"'))
}

</script>