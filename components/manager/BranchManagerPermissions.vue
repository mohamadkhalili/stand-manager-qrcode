<template>
    <CreateAdminProfile />
    <EditAdminProfile v-model="editItem" />
    <!-- @vue-ignore -->
    <v-data-table-virtual class="mt-12" :headers="dataTable.headers" :items="dataTable.items"
        style="height: calc(100vh - 250px)!important;" item-value="name">
        <template v-slot:item.actions="{ item }">
            <v-icon size="small" class="me-2" @click="editItem = item?.id">
                mdi-pencil
            </v-icon>
            <v-icon size="small" @click="deleteItem(item?.id)">
                mdi-delete
            </v-icon>
        </template>
    </v-data-table-virtual>
</template>

<script setup lang="ts">
import CreateAdminProfile from './CreateAdminProfile.vue';
import { ref } from 'vue'
import EditAdminProfile from './EditAdminProfile.vue';

const editItem = ref(0)

const dataTable = ref({
    headers: [
        { title: 'نام', align: 'start', key: 'name' },
        { title: 'نام کاربری', align: 'start', key: 'username' },
        { title: 'سطح دسترسی', align: 'start', key: 'perms' },
        { title: 'عملیات', key: 'actions', sortable: false },
    ],
    items: [
        {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        }, {
            id: 12,
            name: 'African Elephant',
            username: 'Loxodonta africana',
            perms: 'Herbivore',
        },]
})

function deleteItem(id: number) {

}
</script>