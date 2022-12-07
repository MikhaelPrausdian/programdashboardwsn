<template>
    <div class="flex w-[100%] h-screen">
        <div class="w-[60%] flex justify-center items-center">
            <div class="">
                <span class="text-3xl" style="font-family: 'Poppins', sans-serif; color: #5095E9">
                    <b>Login</b>
                </span>
                <form class="p-10" action="" method="post">
                    <div class="">
                        <label for="user" class="text-left block m-2" style="font-family: 'Poppins', sans-serif;"><span><b>Username</b></span></label>
                        <input type="text" id="user" name="user" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-[500px] p-2.5 " placeholder="Your Username" value="" required="">
                    </div>
                    <div class="">
                        <label for="pass" class="text-left block m-2" style="font-family: 'Poppins', sans-serif;"><span><b>Username</b></span></label>
                        <input type="password" id="pass" name="pass" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Your Password" value="" required="">
                    </div>
                        <div class="pb-2 m-2 text-left flex justify-between">
                            <div>
                                <input class="" type="checkbox" name="remember[]" value="remember" id="remember">
                                <label style="font-family: 'Poppins', sans-serif;" class="" for="remember">Remember me</label><br>
                            </div>
                            <a class="" href="" style="font-family: 'Poppins', sans-serif; color: #5095E9">Forgot Password?</a>
                        </div>
                    <div class="pb-2">
                        <button class="rounded-full w-[50%] text-lg text-white" type="submit" style="background: #5095E9; font-family: 'Poppins', sans-serif;">Log in</button>
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

<script setup>
    // console.log(this.bootstrapcss)
</script>

<style>
    
</style>