<template>
    <div class="flex justify-between">
        <div>
            <h1 class="text-left py-3 pt-0 pb-0 text-2xl">
                <b>Assign Bridge</b>
            </h1>
            <p class="text-left py-3 pt-0"><b>Assign Jembatan kepada Perusahaan</b></p>
        </div>
        <div class="flex items-center justify-end">
            <div class="w-[300px] flex justify-end pl-2">
                <!-- Search bar -->
            </div>
        </div> 
    </div>
    <div class="mb-3" v-for="value in bridgeDetail" :key="value.id">
        <div class="flex justify-center">
            <img class="rounded-lg shadow-lg" src="../../../../assets/BridgePict/BridgeDummy.jpg" alt="">
        </div>
        <div class="p-3">
            <h1><b>{{ value.name }}</b></h1>
        </div>
        <div class="pt-3 pb-3 pr-[15%] pl-[15%] text-justify">
            <p>{{ value.description }}</p>
        </div>
        <div class="text-left pl-10">
            <h1><b>Informasi</b></h1>
            <table>
                <tbody>
                    <tr>
                        <td>Alamat</td>
                        <td class="p-1 pr-4 pl-3">:</td>
                        <td>{{ value.detail_address }}</td>
                    </tr>
                    <tr>
                        <td>Bridge Status</td>
                        <td class="p-1 pr-4 pl-3">:</td>
                        <td>{{ value.bridge_status }}</td>
                    </tr>
                    <tr>
                        <td>Bridge Value</td>
                        <td class="p-1 pr-4 pl-3">:</td>
                        <td>{{ value.bridge_value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white     bg-[#1352A0] dark:bg-[#1352A0] dark:text-white">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Perusahaan
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in apilist" :key="user.id" class="bg-white border-b text-black">
                    <td class="py-4 px-6">
                        {{ user.perusahaan }}
                    </td>
                    <td class="py-4 px-6">
                        <button @click="assign(user.id)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Assign</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <br/>
</template>

<script>
    import axios from "axios";
    import {useToast} from 'vue-toast-notification';
    // import BridgeShape from './BridgeShape.vue'
    


    export default {
        data(){
            return {
                apilist: [],
                bridgeDetail: []
            }
        },
        methods: {
            assign(id){
                const $toast = useToast();
                var urlPre = window.location.pathname;
                var idJembatan = urlPre.substring(urlPre.lastIndexOf('/') + 1);

                console.log(id)

                let url = `${process.env.VUE_APP_URL_API}/bridge/assignBridge/${idJembatan}/${id}`

                axios.post(url).then((response) => {
                    if(response.data == 'Bridge Assigned'){
                        $toast.success('Bridge berhasil diassign!');

                        this.$router.push({ name: 'Daftar Jembatan' })
                    }
                })
            }
        },
        mounted(){
            var urlPre = window.location.pathname;
            var id = urlPre.substring(urlPre.lastIndexOf('/') + 1);

            let url = `${process.env.VUE_APP_URL_API}/adminCustomer/getAllCustomer`
            let urlDetailJembatan = `${process.env.VUE_APP_URL_API}/bridge/getBridgeById/${id}`

            axios
            .get(url)
            .then(response => (this.apilist = response.data))
            .catch(error => console.log(error))

            axios
            .get(urlDetailJembatan)
            .then(response => {
                this.bridgeDetail = [response.data]
                console.log(response.data)
            })
            .catch(error => console.log(error))
        },
    }
</script>

<style>

</style>