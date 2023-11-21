<template>
    <v-locale-provider rtl>
        <AppHeader />
        <div style="min-height: calc(100vh - 160px);">
            <slot />
        </div>
        <AppFooter />
    </v-locale-provider>
</template>

<script setup lang="ts">

import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

definePageMeta({
    middleware: ["auth"]
    // or middleware: 'auth'
})


</script>