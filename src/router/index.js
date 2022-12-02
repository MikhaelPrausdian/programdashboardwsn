import { createRouter, createWebHistory } from "vue-router";

// import Auth
import Login from  '../pages/Auth/LoginForm';
import Register from '../pages/Auth/RegisterForm';

// import dashboard
import SUDashboard from '../pages/SuperAdmin/SuperAdminDashboard'

// import HomeComponent
import HomeDashboard from '../pages/SuperAdmin/Components/Home/HomeComponent';

// import Bridge Component
import BridgeList from '../pages/SuperAdmin/Components/Bridge/BridgeList';
import BridgeDetail from '../pages/SuperAdmin/Components/Bridge/BridgeDetail';
import BridgeEdit from '../pages/SuperAdmin/Components/Bridge/BridgeEdit';

// import Operator Component
import OperatorList from '../pages/SuperAdmin/Components/Operator/OperatorList';
import OperatorDetail from '../pages/SuperAdmin/Components/Operator/OperatorDetail';
import OperatorEdit from '../pages/SuperAdmin/Components/Operator/OperatorEdit';

// import Maintenance Component
import MaintenanceList from '../pages/SuperAdmin/Components/Maintenance/MaintenanceList';
import MaintenanceDetail from '../pages/SuperAdmin/Components/Maintenance/MaintenanceDetail';
import MaintenanceEdit from '../pages/SuperAdmin/Components/Maintenance/MaintenanceEdit';

// import Customer Component
import CustomerList from '../pages/SuperAdmin/Components/Customer/CustomerList';

// profile superadmin content
import SUProfil from '../pages/ProfileContent';

// testing halaman
import ApiTest from '../components/TestingAPI';

const routes = [
    {
        name: 'SuperAdmin Dashboard',
        path: '/',
        component: SUDashboard,
        children: [
            {
                name: 'SuperAdmin Dashboard',
                path: '/',
                component: HomeDashboard,
            },
            {
                name: 'SuperAdmin Dashboard',
                path: '/Home',
                component: HomeDashboard,
            },
            {
                name: 'Daftar Jembatan',
                path: '/Bridge',
                component: BridgeList,
            },
            {
                name: 'Detail Jembatan',
                path: '/Bridge/Detail',
                component: BridgeDetail,
            },
            {
                name: 'Edit Bridge',
                path: '/Bridge/Edit',
                component: BridgeEdit,
            },
            {
                name: 'Daftar Operator',
                path: '/Operator',
                component: OperatorList,
            },
            {
                name: 'Detail Operator',
                path: '/Operator/Detail',
                component: OperatorDetail,
            },
            {
                name: 'Edit Operator',
                path: '/Operator/Edit',
                component: OperatorEdit,
            },
            {
                name: 'Daftar Maintenance',
                path: '/Maintenance',
                component: MaintenanceList,
            },
            {
                name: 'Detail Maintenance',
                path: '/Maintenance/Detail',
                component: MaintenanceDetail,
            },
            {
                name: 'Edit Maintenance',
                path: '/Maintenance/Edit',
                component: MaintenanceEdit,
            },
            {
                name: 'Daftar Customer',
                path: '/Customer',
                component: CustomerList,
            },
            {
                name: 'Profile',
                path: '/Profile',
                component: SUProfil,
            },
        ],
    },
    {
        name: 'Login',
        path: '/Login',
        component: Login,
    },
    {
        name: 'Register',
        path: '/Register',
        component: Register,
    },
    {
        name: 'Testing',
        path: '/testing',
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
})

router.beforeEach(async (to) => {
    if (to.path == '/') {
        return { path: '/Home' }
    }
})

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