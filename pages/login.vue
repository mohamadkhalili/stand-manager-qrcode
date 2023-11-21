<template>
    <v-container class="h-100 d-flex">
        <div class="ma-auto" style="min-width: 500px;">
            <v-card-title class="text-center mb-8">ورود به پنل یکپارچه مدیریت سفارشات</v-card-title>
            <v-text-field v-model="phone" class="my-4" variant="outlined" label="شماره تلفن" type="tel" />
            <v-text-field v-model="password" class="my-4" variant="outlined" label="گذرواژه" type="password" />
            <v-btn class="w-100" size="large" color="primary" @click="login">ورود</v-btn>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import { useStore } from '~/store/auth'
import { ref } from 'vue'

const router = useRouter()

const phone = ref('')
const password = ref('')

const store = useStore()

async function login() {
    const { data, status } = await useFetch('/proxy/develop/users/login/', { method: 'post', body: { phone: phone.value, password: password.value } })
    console.log(status);
    store.setRoll(data?.value?.roll)
    if (status.value === "success")
        router.push('/home')

}





</script>~/store/index~/store/auth