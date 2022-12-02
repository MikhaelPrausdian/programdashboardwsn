<template>
    <div>
        {{  apilist }}
        <div v-for="list in apilist" :key="list.id">
            {{ list.name }}
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data(){
            return {
                apilist: [],
            }
        },
        mounted(){
            axios
            .get("https://634ff9cc78563c1d82b53afb.mockapi.io/Admin")
            .then(response => (this.apilist = response.data))
            .catch(error => console.log(error))
        },
    }
</script>

<style>

</style>