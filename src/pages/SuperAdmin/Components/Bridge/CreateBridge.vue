<template>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1>Create Bridge</h1>
        <form>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="nama">
                    Nama Jembatan
                </label>
                <input v-model="nama" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" name="nama" type="text" placeholder="Nama Jembatan">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="kota">
                    Kota
                </label>
                <input v-model="kota" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="kota" type="text" placeholder="Kota">
            </div>
            <div class="mb-3">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="deskripsi">
                    Deskripsi
                </label>
                <textarea v-model="deskripsi" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="deskripsi"></textarea>
            </div>
            <div class="mb-3">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="detail-alamat">
                    Detail Alamat
                </label>
                <textarea v-model="detailAlamat" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="detail-alamat"></textarea>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="kota">
                    Panjang Jembatan
                </label>
                <input v-model="panjang" class="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="kota">
                    Tinggi Jembatan
                </label>
                <input v-model="tinggi" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="kota">
                    Langitude
                </label>
                <input v-model="lang" class="appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="kota">
                    Latitude
                </label>
                <input v-model="lat" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="kota">
                    Status
                </label>
                <select v-model="status" class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option disabled value="">Pilih status dari Jembatan yang ingin diinputkan</option>
                    <option>Active</option>
                    <option>Construction</option>
                    <option>Nonactive</option>
                    <option>Damaged</option>
                </select>
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="kota">
                    Value
                </label>
                <input v-model="value" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                </div>
            </div>
            <div class="flex items-center justify-between">
            <button @click="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Create Bridge
            </button>
            </div>
        </form>
    </div>
</template>

<script>
// import router from '@/router'
import axios from 'axios'
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

    export default {
        data(){
            return {
                nama: '',
                kota: '',
                deskripsi: '',
                detailAlamat: '',
                panjang: '',
                tinggi: '',
                lang: '',
                lat: '',
                status: '',
                value: ''
            }
        },
        methods: {
            submit(){
                const $toast = useToast();
                let url = `${process.env.VUE_APP_URL_API}/bridge/createBridge`

                let payload = {
                    name: this.nama,
                    description: this.deskripsi,
                    detail_address: this.detailAlamat,
                    langitude: this.lang,
                    latitude: this.lat,
                    bridge_status: this.status,
                    bridge_value: 'Rp.' + this.value
                }

                axios.post(url, payload).then((res) => {
                    console.log(res)
                    if(res.data == 'bridge created'){
                        $toast.success('Data berhasil dibuat!');

                        this.$router.push({ name: 'Daftar Jembatan' })
                    }
                })

            }
        }
    }
</script>