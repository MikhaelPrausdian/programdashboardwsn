<template>
    <div class="flex justify-between">
        <div>
            <h1 class="text-left py-3 pt-0 pb-0 text-2xl">
                <b>Daftar Operator</b>
            </h1>
            <p class="text-left py-3 pt-0">Home/Daftar Operator/<b>Detail</b></p>
        </div>
        <div class="flex items-center justify-end">
            <div class="w-[300px] flex justify-end pl-2">
                <!-- Search bar -->
                <form class="flex items-center w-[300px]">
                    <label for="voice-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <font-awesome-icon class="w-4 h-auto text-gray-400" icon="fa-solid fa-magnifying-glass" />
                        </div>
                        <input type="text" id="voice-search" class="bg-white border text-[#518cd5] text-sm rounded-full  block w-full pl-10 p-2.5  dark:border-gray-400 dark:placeholder-gray-400 " placeholder="Search..." required>
                    </div>
                </form>
            </div>
        </div> 
    </div>
    <div class="bg-white h-[calc(100%-80px)] shadow overflow-y-auto rounded-lg">
        <div class="flex justify-end pt-2">
            <router-link to="/Operator/Edit" class="hover:bg-gray-500 focus:ring-4 rounded-full text-sm px-3 p-1 mr-2 mb-2 border-solid border-2 border-gray-400">
                <font-awesome-icon icon="fa-solid fa-pencil" />
                edit
            </router-link>
        </div>
        <div class="flex justify-between">
            <!-- <div class="w-[50%] flex justify-center items-center">
                <img src="../../../../assets/OperatorPict/OperatorDummy.png" alt="">
            </div> -->
            <div class="w-[50%]" v-for="value in userData" :key="value.id">
                <table class="text-left">
                    <tbody>
                        <tr class="">
                            <td class="py-3"><b>Nama Admin</b></td>
                            <td class="px-5">:</td>
                            <td class="w-[350px]">{{ value.user.fullname }}</td>
                        </tr>
                        <tr class="">
                            <td class="py-3"><b>Perusahaan</b></td>
                            <td class="px-5">:</td>
                            <td class="w-[350px]">{{ value.user.perusahaan }}</td>
                        </tr>
                        <tr class="">
                            <td class="py-3"><b>Alamat</b></td>
                            <td class="px-5">:</td>
                            <td class="w-[350px]">Jl. Telekomunikasi. 1, Terusan Buahbatu - 
                                Bojongsoang, Telkom University, Sukapura, 
                                Kec. Dayeuhkolot, Kabupaten Bandung, 
                                Jawa Barat 40257</td>
                        </tr>
                        <tr class="">
                            <td class="py-3"><b>No. Handphone</b></td>
                            <td class="px-5">:</td>
                            <td class="w-[350px]">+6281-3303-7241</td>
                        </tr>
                        <tr class="">
                            <td class="py-3"><b>Jabatan</b></td>
                            <td class="px-5">:</td>
                            <td class="w-[350px]">Operator 4</td>
                        </tr>
                    </tbody>
                </table>
                <div class="h-[50px] flex justify-center text-white items-center bg-[#1352A0] w-full rounded-t-lg">
                    <b>Jembatan yang dikelola</b>
                </div>
                <table class="w-full rounded-lg border-collapse border border-slate-500">
                    <thead class="text-white bg-gray-400">
                        <tr>
                            <th class="">Nama Jembatan</th>
                            <th class="">Kota</th>
                            <th class="">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="bridge in value.bridge" :key="bridge.id">
                            <td class="p-1 border border-slate-700">{{ bridge.name }}</td>
                            <td class="p-1 border border-slate-700">{{ bridge.detailAddress }}</td>
                            <td class="p-1 border border-slate-700">
                                <router-link :to="('/Bridge/Detail/' + bridge.id)" name="id" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return {
            userData: []
        }
    },
    mounted(){
        var urlPre = window.location.pathname;
        var id = urlPre.substring(urlPre.lastIndexOf('/') + 1);

        let url = `${process.env.VUE_APP_URL_API}/adminCustomer/getAdminCustomerById/${id}` 
        
        axios.get(url).then((response) => {
            this.userData = [response.data]
            console.log(response.data.bridge)
        })
    }
    
}
</script>

<style></style>