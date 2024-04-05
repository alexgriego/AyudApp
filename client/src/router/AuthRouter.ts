import ActivateView from "@/views/Auth/ActivateView.vue";
import ChangePasswordView from "@/views/Auth/ChangePasswordView.vue";
import ConfirmChangePasswordView from "@/views/Auth/ConfirmChangePasswordView.vue";
import LoginView from "@/views/Auth/LoginView.vue";
import RegisterView from "@/views/Auth/RegisterView.vue";

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
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    {
        path: 'activation/:uid/:token',
        name: 'activation',
        component: ActivateView
    }
]

export default AuthRoutes