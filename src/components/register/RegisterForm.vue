<template>
    <div class="container-fluid align-items-center">
        <div class="d-flex justify-content-center flex-wrap">
            <div class="col-6" style="height: ; align-self: center;">
                <div class="p-5 pt-2 pb-2">
                    <span class="ms-5" style="font-size: 39px; color: #5095E9;">
                        <b>Register</b>
                    </span>
                    <div class="ms-5 d-flex">
                        <p>Already have an account?</p>
                        <a style="color: #5095E9;">Log In</a>
                    </div>
                    <form class="p-5" action="" method="post">
                        <div class="form-outline mb-1">
                            <label style="font-family: 'Poppins', sans-serif;" class="form-label" for="employeeid">Employee ID</label>
                            <input type="text" id="employeeid" name="employeeid" class="form-control rounded-5" placeholder="11102022..."/>
                        </div>
                        <div class="form-outline mb-1">
                            <label style="font-family: 'Poppins', sans-serif;" class="form-label" for="fullname">Full Name</label>
                            <input type="text" id="fullname" name="fullname" class="form-control rounded-5" placeholder="Full Name..."/>
                        </div>
                        <div class="form-outline mb-1">
                            <label style="font-family: 'Poppins', sans-serif;" class="form-label" for="user">Username</label>
                            <input type="text" id="user" name="user" class="form-control rounded-5" placeholder="Username..."/>
                        </div>
                        <div class="form-outline mb-1 col">
                            <label style="font-family: 'Poppins', sans-serif;" class="form-label" for="pass">Password</label>
                            <input type="password" id="password" name="password" class="form-control rounded-5" placeholder="Password..."/>
                        </div>
                        <div class="text-center pt-2 mt-4 pb-1 d-grid">
                            <button class="btn text-white mb-3 rounded-5" type="submit" style="background: #5095E9; font-family: 'Poppins', sans-serif;">Register</button>
                        </div>
                    </form>
                </div>   
            </div>
            <div class="col-6 p-5 d-flex justify-content-center align-items-center">
                <div class="p-5 d-flex align-items-center">
                    <img class="rounded-5" src="../../assets/img/nsplsh_7039764256715f2d6e5859_mv2_d_4000_2250_s_2.webp" alt="" style="height: 69vh; max-width: 100%;">
                </div>
            </div>
        </div>
    </div>
</template>