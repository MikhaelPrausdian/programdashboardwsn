<template>
    <div class="flex justify-between">
        <div>
            <h1 class="text-left py-3 pt-0 pb-0 text-2xl">
                <b>Daftar User Perusahaan</b>
            </h1>
        </div>
        <div class="flex items-center justify-end">
            <div class="">
                <router-link :to="('/UserPerusahaan/Create')" name="id" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add User Perusahaan</router-link>
            </div>
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
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white     bg-[#1352A0] dark:bg-[#1352A0] dark:text-white">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        No
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Nama Customer
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Perusahaan
                    </th>
                    <th scope="col" class="py-3 px-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in apilist" :key="user.id" class="bg-white border-b text-black">
                    <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
                        {{ user.id+1 }}
                    </th>
                    <td class="py-4 px-6">
                        {{ user.fullname }}
                    </td>
                    <td class="py-4 px-6">
                        {{ user.perusahaan }}
                    </td>
                    <td class="py-2 px-3">
                        <router-link :to="('/Customer/Detail/' + user.id)" name="id" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from "axios";
    // import BridgeShape from './BridgeShape.vue'
    


    export default {
        data(){
            return {
                apilist: [],
            }
        },
        methods: {
            
        },
        mounted(){
            let url = `${process.env.VUE_APP_URL_API}/userPerusahaan/listUser/userp/${localStorage.getItem('perusahaan')}`

            console.log(url)
            axios
            .get(url)
            .then(response => (this.apilist = response.data))
            .catch(error => console.log(error))
        },
    }
</script>

<style>

</style>