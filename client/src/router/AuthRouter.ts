import ChangePasswordView from "@/views/Auth/ChangePasswordView.vue";
import ConfirmChangePasswordView from "@/views/Auth/ConfirmChangePasswordView.vue";
import LoginView from "@/views/Auth/LoginView.vue";

const AuthRoutes = [
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: 'forgot-password/',
        name: 'forgot-password',
        component: ChangePasswordView
    },
    {
        path: 'password/reset-confirm/:uid/:token',
        name: 'reset-password',
        component: ConfirmChangePasswordView
    }
]

export default AuthRoutes