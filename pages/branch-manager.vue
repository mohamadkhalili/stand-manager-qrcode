<template>
    <v-card class="mb-10" elevation="0">
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab v-for="(tab, index) in tabComponents" :key="index" :value="tab.name">{{ tab.name }}</v-tab>
        </v-tabs>
        <v-card-text>
            <v-window v-model="tab">
                <v-window-item v-for="(tab, index) in tabComponents" :key="index" :value="tab.name">
                    <component :is="tab.component" v-bind="tab?.bind"></component>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import BranchManagerDashboard from '@/components/manager/BranchManagerDashboard.vue'
import BranchManagerInfomationBranch from '@/components/manager/BranchManagerInfomationBranch.vue'
import BranchManagerPermissions from '@/components/manager/BranchManagerPermissions.vue'
import BranchManagerProducts from '@/components/manager/BranchManagerProducts.vue'
import BranchManagerStands from '@/components/manager/BranchManagerStands.vue'

import { ref } from 'vue'

const tabComponents = ref([
    { name: 'داشبورد', component: BranchManagerDashboard },
    { name: 'اطلاعات شعبه', component: BranchManagerInfomationBranch, bind: { editable: true } },
    { name: 'مدیران', component: BranchManagerPermissions },
    { name: 'محصولات', component: BranchManagerProducts },
    { name: 'استندها', component: BranchManagerStands }
])

const tab = ref(false)
</script>