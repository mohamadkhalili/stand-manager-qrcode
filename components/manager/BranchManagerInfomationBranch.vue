<template>
    <BranchManagerInfomationBranchEdit v-if="editable" />
    <v-card class="">
        <v-card-title>
            عنوان شعبه
        </v-card-title>
        <v-divider></v-divider>
        <v-card-subtitle class="my-2 text-subtitle-1">
            آدرس: ایران ، تهران ، میدان آزادی
        </v-card-subtitle>
        <v-card-subtitle class="my-2 text-subtitle-2">
            تاسیس: 1395
        </v-card-subtitle>
        <v-locale-provider ltr>
            <div class="w-100 d-flex justify-end">
                <v-rating class="mt-2 mx-2" half-increments hover readonly :length="5" :size="25" :model-value="4.5"
                    color="yellow-accent-4" />
            </div>
        </v-locale-provider>
        <div class="d-flex flex-row mx-2 mt-3">
            <v-tooltip v-for="(item, index) in possibilities" :key="index" location="top" :text="item.name">
                <template v-slot:activator="{ props }">
                    <v-icon class="mx-2" v-bind="props" :icon="item.icon" />
                </template>
            </v-tooltip>

        </div>
        <!-- <p class="mx-2 mt-3">ساعت کاری از 9 تا 21 </p> -->
        <v-row class="pt-8 px-6 pb-12">
            <v-col v-for="(item, index) in images" :key="index" cols="12" sm="6" md="4" lg="3" xl="2">
                <v-img aspect-ratio="1" :src="item" height="100%" cover />
                <v-btn v-if="editable" style="position: relative; top: calc(-100% - 20px);right: -20px;" color="red"
                    size="small" icon="mdi-close" />
            </v-col>
            <!-- <v-col v-if="editable" cols="12" sm="6" md="4" lg="3" xl="2">
                <v-card @click="addImage" width="100%" height="100%" elevation="0" color="#ccc"><v-icon
                        style="height: 100%;width: 100%;" size="10em">mdi-plus</v-icon></v-card>
            </v-col> -->
        </v-row>
        <div v-if="editable" class="ma-6 mb-12 pb-12 d-flex">
            <v-file-input class="align-self-center" hide-details :rules="rules" accept="image/png, image/jpeg, image/bmp"
                placeholder="افزودن تصاویر" prepend-icon="mdi-camera" label="افزودن تصاویر"></v-file-input>
            <v-btn class="mx-2 align-self-center" color="success">ارسال تصاویر</v-btn>
        </div>
    </v-card>
</template>

<script setup lang="ts">
export interface Props {
    editable: boolean
}
import possibilities from '@/components/possibilities.json'
import { ref } from 'vue'
import BranchManagerInfomationBranchEdit from './BranchManagerInfomationBranchEdit.vue';

const props = withDefaults(defineProps<Props>(), {
    editable: false
})

const rules = ref([
    (value: any) => {
        return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
    },
])
const images = ref([
    'https://picsum.photos/500/300?image=15',
    'https://picsum.photos/500/300?image=40',
    'https://picsum.photos/500/300?image=55',
    'https://picsum.photos/500/300?image=50',
    'https://picsum.photos/500/300?image=45'
])

</script>