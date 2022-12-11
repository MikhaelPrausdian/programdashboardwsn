<template>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1>Create Customer</h1>
        <form>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="nama">
                    Full Name
                </label>
                <input v-model="nama" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" name="nama" type="text" placeholder="Nama Pengguna">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="kota">
                    Username
                </label>
                <input v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="kota">
                    Password
                </label>
                <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="kota">
                    Perusahaan
                </label>
                <input v-model="perusahaan" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="kota" type="text" placeholder="Perusahaan">
            </div>
            <div class="flex items-center justify-between">
            <button @click="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Create Admin Customer
            </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import {useToast} from 'vue-toast-notification';

export default {
    data(){
        return {
            nama: '',
            username: '',
            password: '',
            perusahaan: '',
        }
    },
    methods: {
        submit(){
            let url = `${process.env.VUE_APP_URL_API}/adminCustomer/createCustomer`
            const $toast = useToast();

            let payload = {
                fullname: this.nama,
                username: this.username,
                password: this.password,
                perusahaan: this.perusahaan
            }

            axios.post(url, payload).then((response) => {
                if(response.status == 200){
                    $toast.success('Admin Customer berhasil dibuat !');

                    this.$router.push({ path: '/Customer' })
                }
            })
            
        }
    }
}
</script>

<style>
</style>