import { createRouter, createWebHistory } from "vue-router";

// import Auth
import Login from "../pages/Auth/LoginForm";
import Register from "../pages/Auth/RegisterForm";

// import dashboard
import SUDashboard from "../pages/SuperAdmin/SuperAdminDashboard";

// import HomeComponent
import HomeDashboard from "../pages/SuperAdmin/Components/Home/HomeComponent";

// import Bridge Component
import BridgeList from "../pages/SuperAdmin/Components/Bridge/BridgeList";
import BridgeDetail from "../pages/SuperAdmin/Components/Bridge/BridgeDetail";
import BridgeEdit from "../pages/SuperAdmin/Components/Bridge/BridgeEdit";
import CreateBridge from "../pages/SuperAdmin/Components/Bridge/CreateBridge";
import AssignBridge from "../pages/SuperAdmin/Components/Bridge/AssignBridge";

// import Operator Component
import OperatorList from "../pages/SuperAdmin/Components/Operator/OperatorList";
import OperatorDetail from "../pages/SuperAdmin/Components/Operator/OperatorDetail";
import OperatorEdit from "../pages/SuperAdmin/Components/Operator/OperatorEdit";
import OperatorCreate from "../pages/SuperAdmin/Components/Operator/OperatorCreate";

// import Maintenance Component
import MaintenanceList from "../pages/SuperAdmin/Components/Maintenance/MaintenanceList";
import MaintenanceDetail from "../pages/SuperAdmin/Components/Maintenance/MaintenanceDetail";
import MaintenanceEdit from "../pages/SuperAdmin/Components/Maintenance/MaintenanceEdit";

// import Customer Component
import CustomerList from "../pages/SuperAdmin/Components/Customer/CustomerList";
import CreateCustomer from "../pages/SuperAdmin/Components/Customer/CreateCustomer";
import DetailCustomer from "../pages/SuperAdmin/Components/Customer/DetailCustomer";

// import User Perusahaan Component
import ListUser from "../pages/AdminCustomer/User Perusahaan/ListUser";
import CreateUserPerusahaan from "../pages/AdminCustomer/User Perusahaan/CreateUserPerusahaan";

// import Keluhan Component
import CreateKeluhan from "../pages/UserPerusahaan/CreateKeluhan";

// profile superadmin content
import SUProfil from "../pages/ProfileContent";

// testing halaman
import ApiTest from "../components/TestingAPI";

const routes = [
  {
    name: "SuperAdmin Dashboard",
    path: "/dashboard",
    component: SUDashboard,
    children: [
      {
        name: "SuperAdmin Dashboard",
        path: "/Home",
        component: HomeDashboard,
      },
      {
        name: "Create Customer",
        path: "/Customer/Create",
        component: CreateCustomer,
      },
      {
        name: "Daftar Jembatan",
        path: "/Bridge",
        component: BridgeList,
      },
      {
        name: "Detail Jembatan",
        path: "/Bridge/Detail/:id",
        component: BridgeDetail,
      },
      {
        name: "Edit Bridge",
        path: "/Bridge/Edit",
        component: BridgeEdit,
      },
      {
        name: "Create Bridge",
        path: "/Bridge/Create",
        component: CreateBridge,
      },
      {
        name: "Assign Bridge",
        path: "/Bridge/AssignBridge/:id",
        component: AssignBridge,
      },
      {
        name: "Daftar Operator",
        path: "/Operator",
        component: OperatorList,
      },
      {
        name: "Create Operator",
        path: "/Operator/Create",
        component: OperatorCreate,
      },
      {
        name: "Detail Operator",
        path: "/Operator/Detail",
        component: OperatorDetail,
      },
      {
        name: "Edit Operator",
        path: "/Operator/Edit",
        component: OperatorEdit,
      },
      {
        name: "Create Keluhan",
        path: "/keluhan/create",
        component: CreateKeluhan,
      },
      {
        name: "Daftar Maintenance",
        path: "/Maintenance",
        component: MaintenanceList,
      },
      {
        name: "Detail Maintenance",
        path: "/Maintenance/Detail",
        component: MaintenanceDetail,
      },
      {
        name: "Edit Maintenance",
        path: "/Maintenance/Edit",
        component: MaintenanceEdit,
      },
      {
        name: "Daftar Customer",
        path: "/Customer",
        component: CustomerList,
      },
      {
        name: "Detail Customer",
        path: "/Customer/Detail/:id",
        component: DetailCustomer,
      },
      {
        name: "Profile",
        path: "/Profile",
        component: SUProfil,
      },
      {
        name: "List User",
        path: "/user",
        component: ListUser,
      },
      {
        name: "Create User Perusahaan",
        path: "/UserPerusahaan/create",
        component: CreateUserPerusahaan,
      },
    ],
  },
  {
    name: "Login",
    path: "/Login",
    component: Login,
  },
  {
    name: "Register",
    path: "/Register",
    component: Register,
  },
  {
    name: "Testing",
    path: "/testing",
    component: ApiTest,
  },
];

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.name}`;
  next();
});

router.beforeEach(async (to) => {
  if (to.path == "/") {
    return { path: "/Login" };
  }
});

// router.beforeEach(async (to) => {
//     if (to.path == '/login') {
//         return {
//             path : 'Login',
//             component: Login,
//             props: {
//                 bootstrapcss : "test",
//             },
//         }
//     }
// })

export default router;
