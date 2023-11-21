<template>
    <v-container>
        <v-card>
            <v-tabs v-model="tab" bg-color="primary">
                <v-tab value="one">Item One</v-tab>
                <v-tab value="two">Item Two</v-tab>
                <v-tab value="three">Item Three</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        One
                    </v-window-item>

                    <v-window-item value="two">
                        Two
                    </v-window-item>

                    <v-window-item value="three">
                        Three
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>

    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tab = ref(false)
</script>