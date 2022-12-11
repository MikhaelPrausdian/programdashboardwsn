<template>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1>Create Keluhan</h1>
        <form>
            <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="nama">
                    Pilih Jembatan
            </label>
            <select v-model="status" class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option disabled value="">Pilih keluhan dari Jembatan yang ingin diinputkan</option>
                <option v-for="bridge in apilist" :key="bridge.id" :value="bridge.id">{{ bridge.name }}</option>
            </select>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="nama">
                    Judul Keluhan
                </label>
                <input v-model="judulKeluhan" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" name="nama" type="text" placeholder="Judul Keluhan">
            </div>
            <div class="mb-3">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="deskripsi">
                    Deskripsi
                </label>
                <textarea v-model="deskripsi" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="deskripsi"></textarea>
            </div>
            <div class="flex items-center justify-between">
            <button @click="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit Keluhan
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
            judulKeluhan: '',
            deskripsi: '',
            apilist: []
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
    },
    mounted(){
        let url = ''

        if(localStorage.getItem("role") == 'Admin Customer' || localStorage.getItem("role") == 'User Perusahaan'){
            url = `${process.env.VUE_APP_URL_API}/bridge/getAssignedBridge/${localStorage.getItem("id_perusahaan")}`
        }else{
            url = `${process.env.VUE_APP_URL_API}/bridge/getAllBridge`
        }

        axios
        .get(url)
        .then(response => (this.apilist = response.data))
        .catch(error => console.log(error))
    },
}
</script>

<style>
</style>