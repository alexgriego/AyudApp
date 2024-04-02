from django.test import TestCase
from .models import UserAccount

class UserAccountTestCase(TestCase):
    
    def setUp(self):
        self.user_data = {
            'email': 'test@example.com',
            'password': 'testpassword',
            'username': 'testuser',
            'first_name': 'John',
            'last_name': 'Doe'
        }
        
    def test_create_user(self):
        user = UserAccount.objects.create_user(**self.user_data)
        self.assertEqual(user.email, self.user_data['email'])
        self.assertEqual(user.username, self.user_data['username'])
        self.assertEqual(user.first_name, self.user_data['first_name'])
        self.assertEqual(user.last_name, self.user_data['last_name'])
        self.assertTrue(user.check_password(self.user_data['password']))
        self.assertFalse(user.is_superuser)
        self.assertFalse(user.is_staff)
        
    def test_create_superuser(self):
        superuser = UserAccount.objects.create_superuser(**self.user_data)
        self.assertEqual(superuser.email, self.user_data['email'])
        self.assertEqual(superuser.username, self.user_data['username'])
        self.assertEqual(superuser.first_name, self.user_data['first_name'])
        self.assertEqual(superuser.last_name, self.user_data['last_name'])
        self.assertTrue(superuser.check_password(self.user_data['password']))
        self.assertTrue(superuser.is_superuser)
        self.assertTrue(superuser.is_staff)
