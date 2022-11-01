<template>
    <div class="container-fluid align-items-center">
        <div class="row d-flex justify-content-center flex-wrap">
            <div class="col-6" style="height: ; align-self: center;">
                <div class="p-5 pt-2 pb-2">
                    <span class="ms-5" style="font-size: 39px; color: #5095E9;">
                        <b>Login</b>
                    </span>
                    <form class="p-5" action="" method="post">
                        <div class="form-outline mb-4">
                            <label style="font-family: 'Poppins', sans-serif;" class="form-label" for="user">Username</label>
                            <input type="text" id="user" name="user" class="form-control rounded-5" placeholder="Username..."/>
                        </div>
                        <div class="form-outline mb-4 col">
                            <label style="font-family: 'Poppins', sans-serif;" class="form-label" for="pass">Password</label>
                            <input type="password" id="password" name="password" class="form-control rounded-5" placeholder="Password..."/>
                        </div>
                            <div class="d-flex justify-content-between">
                                <div>
                                    <input class="form-check-input m-1 " type="checkbox" name="remember[]" value="remember" id="remember">
                                    <label style="font-family: 'Poppins', sans-serif;" class="form-check-label" for="remember">Remember me</label><br>
                                </div>
                                <a class="" href="" style="font-family: 'Poppins', sans-serif; color: #5095E9">Forgot Password?</a>
                            </div>
                        <div class="text-center pt-1 mt-4 pb-1 d-grid">
                            <button class="btn text-white mb-3 rounded-5" type="submit" style="background: #5095E9; font-family: 'Poppins', sans-serif;">Log in</button>
                        </div>
                        <div class="text-center pt-1 pb-1 d-grid">
                            <a class="btn mb-3 rounded-5" type="" style="border-color: #5095E9; background: white; color: #5095E9; font-family: 'Poppins', sans-serif;">Register</a>
                        </div>
                    </form>
                </div>   
            </div>
            <div class="col-6 p-5 d-flex justify-content-center align-items-center">
                <div class="p-5 d-flex justify-content-center">
                    <img class="rounded-5" src="../../assets/img/nsplsh_7039764256715f2d6e5859_mv2_d_4000_2250_s_2.webp" alt="" style="height: 69vh; max-width: 100%;">
                </div>
            </div>
        </div>
    </div>
</template>