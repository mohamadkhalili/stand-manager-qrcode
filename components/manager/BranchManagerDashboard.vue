<template>
    <v-row>
        <v-col cols="6">
            <client-only>
                <apexchart type="line" :key="dataChart.series" height="400" width="100%" :options="dataChart.chartOptions"
                    :series="dataChart.series"></apexchart>
            </client-only>
        </v-col>
        <v-col cols="6">
            <div>
                <!-- @vue-ignore -->
                <v-data-table-virtual :headers="dataTable.headers" :items="dataTable.items"
                    style="height: calc(100vh - 250px)!important;" item-value="name"></v-data-table-virtual>
            </div>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dataChart = ref({
    series: [{
        name: "",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    chartOptions: {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'خروجی سامانه ICTSUN',
            align: 'center'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    },


})

const dataTable = ref({
    headers: [
        { title: 'محصول', align: 'start', key: 'product' },
        { title: 'دسته بندی', align: 'start', key: 'productCategory' },
        { title: 'تعداد', align: 'start', key: 'count' }
    ],
    items: [
        {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        }, {
            product: 'African Elephant',
            productCategory: 'Loxodonta africana',
            count: 'Herbivore',
        },]
})



</script>