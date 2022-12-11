<template>
    <div class="flex w-[100%] h-screen">
        <div class="w-[60%] flex justify-center items-center">
            <div class="">
                <span class="text-3xl" style="font-family: 'Poppins', sans-serif; color: #5095E9">
                    <b>Login</b>
                </span>
                <form class="p-10">
                    <div class="">
                        <label for="user" class="text-left block m-2" style="font-family: 'Poppins', sans-serif;"><span><b>Username</b></span></label>
                        <input v-model="username" type="text" id="user" name="user" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-[500px] p-2.5 " placeholder="Your Username" required="">
                    </div>
                    <div class="">
                        <label for="pass" class="text-left block m-2" style="font-family: 'Poppins', sans-serif;"><span><b>Password</b></span></label>
                        <input v-model="password" type="password" id="pass" name="pass" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Your Password" required="">
                    </div>
                    <div class="pb-2 mt-5">
                        <button @click="login" class="rounded-full w-[50%] text-lg text-white" type="submit" style="background: #5095E9; font-family: 'Poppins', sans-serif;">Log in</button>
                    </div>
                    <div class="pb-2">
                        <a class="rounded-full w-[50%]" href="" type="" style="border-color: #5095E9; background: white; color: #5095E9; font-family: 'Poppins', sans-serif;">Register</a>
                    </div>
                </form>
            </div>
        </div>
        <div class="w-[40%] flex justify-center items-center">
            <div class="">
                <img class="rounded" src="../../assets/img/nsplsh_7039764256715f2d6e5859_mv2_d_4000_2250_s_2.webp" alt="" style="height: 69vh; max-width: 100%;">
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {useToast} from 'vue-toast-notification';

    export default {
        data(){
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login(e){
                e.preventDefault();
                const $toast = useToast();
                const url = `${process.env.VUE_APP_URL_API}/api/login`;

                const payload = {
                    username: this.username,
                    password: this.password
                }

                axios.post(url, payload).then((response) => {
                    if(response.status == 200){
                        $toast.success('Berhasil Login !');

                        localStorage.setItem("iduser", response.data[0].id)
                        localStorage.setItem("nama", response.data[0].fullname)
                        if(response.data[0].role == 'superadmin'){
                            localStorage.setItem("role", 'Superadmin');
                        }else if(response.data[0].role == 'adminc'){
                            localStorage.setItem("id_perusahaan", response.data[0].id)
                            localStorage.setItem("role", 'Admin Customer');
                            localStorage.setItem("perusahaan", response.data[0].perusahaan)
                        }else if(response.data[0].role == 'userp'){
                            localStorage.setItem("role", 'User Perusahaan');
                            localStorage.setItem("perusahaan", response.data[0].perusahaan)
                            localStorage.setItem("id_perusahaan", response.data[0].idPerusahaan)
                        }

                        this.$router.push({ path: '/home' })
                    }
                }).catch((err) => {
                    $toast.error('Akun tidak ditemukan !');

                    console.log(err)

                    this.username = ''
                    this.password = ''
                })
            }
        }
    }
</script>

<style>
    
</style>