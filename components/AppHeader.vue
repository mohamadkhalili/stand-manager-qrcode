<template>
    <v-card class="rounded-0">
        <div class="d-flex flex-row justify-space-between" style="height: 60px">
            <!-- right section -->
            <div class="d-flex flex-row py-1">
                <v-img class="ps-2 ms-2 me-8" height="100%" width="100px" cover
                    src="https://cdn.cosmicjs.com/6e6683a0-4108-11ee-82b2-d53af1858037-discord.png" />
                <v-toolbar-items>
                    <v-btn class="h-100" to="/home">خانه</v-btn>
                    <v-btn class="h-100" to="/branches">شعب</v-btn>
                    <v-btn class="h-100" to="/menu/1">منو</v-btn>
                    <v-btn v-if="store?.roll === 'gharson' || store?.roll === 'modir shobe' || store?.roll === 'modir kol'"
                        class="h-100" to="/waiter">گارسون</v-btn>
                    <v-btn v-if="store?.roll === 'ashpaz' || store?.roll === 'modir shobe' || store?.roll === 'modir kol'"
                        class="h-100" to="/chef">آشپز</v-btn>
                    <v-btn
                        v-if="store?.roll === 'sandoghdar' || store?.roll === 'modir shobe' || store?.roll === 'modir kol'"
                        class="h-100" to="/cashier">صندوق دار</v-btn>
                    <v-btn v-if="store?.roll === 'modir shobe' || store?.roll === 'modir kol'" class="h-100"
                        to="/branch-manager">مدیر
                        شعبه</v-btn>
                    <!-- <v-btn v-if="store?.roll === 'modir kol'" to="/general-manager">مدیر کل</v-btn> -->
                </v-toolbar-items>
            </div>
            <div class="h-100 d-flex py-1">
                <v-btn class="h-100 align-self-center" variant="text">سفارشات</v-btn>
                <router-link class="h-100 align-self-center text-decoration-none text-black pt-3 pe-4" v-if="!store?.roll"
                    to="/login">ورود</router-link>
                <v-icon v-else class="align-self-center me-4" icon="mdi-account" @click="" />
            </div>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '~/store/auth'

const store = useStore()
const title = ref('ggg')
</script>