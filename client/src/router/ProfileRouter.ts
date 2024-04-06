import ProfileCreateView from "@/views/Profile/ProfileCreateView.vue";
import ProfileView from "@/views/Profile/ProfileView.vue";
import ProfileUpdateView from "@/views/Profile/ProfileUpdateView.vue";
const ProfileRouter = [
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView
    },
    {
        path: '/profile/add-data',
        name: 'profile-create',
        component: ProfileCreateView
    },
    {
        path: '/profile/edit-data',
        name: 'profile-edit',
        component: ProfileUpdateView
    }
]
export default ProfileRouter