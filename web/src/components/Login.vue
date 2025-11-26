<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <img src="/logo.svg" alt="Odoo Logo" class="company-logo" />
        <h2 class="company-name">My Company</h2>
      </div>
      
      <div class="login-form">
        <div v-if="errors.general" class="general-error">{{ errors.general }}</div>
        <div class="form-group">
          <label for="login">Email or Username</label>
          <input 
            id="login" 
            v-model="loginData.login" 
            type="text" 
            placeholder="Email or Username" 
            :class="{ 'invalid': errors.login }"
            @blur="validateField('login')"
          />
          <span v-if="errors.login" class="error-message">{{ errors.login }}</span>
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input 
            id="password" 
            v-model="loginData.password" 
            type="password" 
            placeholder="Password" 
            :class="{ 'invalid': errors.password }"
            @blur="validateField('password')"
          />
          <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
        </div>
        
        <div class="form-group remember-me">
          <input 
            id="remember_me" 
            v-model="loginData.remember_me" 
            type="checkbox" 
          />
          <label for="remember_me">Remember me</label>
        </div>
        
        <button 
          class="login-button" 
          @click="handleLogin" 
          :disabled="isLoading"
        >
          {{ isLoading ? 'Signing in...' : 'Sign in' }}
        </button>
        
        <div class="login-footer">
          <a href="#" class="forgot-password">Forgot password?</a>
        </div>
      </div>
    </div>
    
    <div class="login-footer-info">
      <span>Odoo</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { login } from '../services/api';

interface LoginData {
  login: string;
  password: string;
  remember_me: boolean;
}

interface ErrorState {
  login: string;
  password: string;
  general: string;
}

const loginData = reactive<LoginData>({
  login: '',
  password: '',
  remember_me: false
});

const errors = reactive<ErrorState>({
  login: '',
  password: '',
  general: ''
});

const isLoading = ref(false);

// Validate specific field
const validateField = (field: 'login' | 'password'): void => {
  if (field === 'login') {
    const trimmedLogin = loginData.login.trim();
    errors.login = '';
    
    if (!trimmedLogin) {
      errors.login = 'Email or Username is required';
    } else if (trimmedLogin.includes('@')) {
      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedLogin)) {
        errors.login = 'Please enter a valid email address';
      }
    } else {
      // Username validation
      if (trimmedLogin.length < 3) {
        errors.login = 'Username must be at least 3 characters long';
      }
    }
  } else if (field === 'password') {
    errors.password = '';
    
    if (!loginData.password) {
      errors.password = 'Password is required';
    } else if (loginData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  }
};

// Validate entire form
const validateForm = (): boolean => {
  let isValid = true;
  
  // Reset errors
  errors.login = '';
  errors.password = '';
  errors.general = '';
  
  // Validate fields individually
  validateField('login');
  validateField('password');
  
  // Check if any errors exist
  if (errors.login || errors.password) {
    isValid = false;
  }
  
  return isValid;
};

const handleLogin = async () => {
  if (!validateForm()) {
    return;
  }
  
  isLoading.value = true;
  errors.general = '';
  
  try {
    // 调用登录API
    const response = await login({
      login: loginData.login,
      password: loginData.password,
      remember_me: loginData.remember_me
    });
    
    console.log('Login successful:', response);
    
    // 如果后端没有现成的登录接口，这里会走模拟响应或失败处理
    // 登录成功后可以重定向到主页或其他受保护的页面
    alert('Login successful!');
    
    // 实际应用中，这里可以添加路由跳转逻辑
    // router.push('/dashboard');
  } catch (error: any) {
    // 显示错误信息
    errors.general = error.message || 'Invalid login or password';
    console.error('Login error:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  font-family: 'Arial', sans-serif;
}

.login-box {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 400px;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.company-logo {
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  object-fit: contain;
  /* Fallback if logo not available */
  background-color: #7c7bad;
  border-radius: 4px;
}

.company-name {
  color: #333;
  font-size: 24px;
  font-weight: normal;
  margin: 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  color: #555;
  font-weight: 500;
}

.form-group input[type="text"],
.form-group input[type="password"] {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-group input[type="text"]:focus,
.form-group input[type="password"]:focus {
  outline: none;
  border-color: #7c7bad;
}

.form-group input.invalid {
  border-color: #e05d44;
}

.error-message {
  color: #e05d44;
  font-size: 12px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: row;
}

.remember-me input[type="checkbox"] {
  width: auto;
}

.remember-me label {
  margin: 0;
  cursor: pointer;
}

.login-button {
  background-color: #7c7bad;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 8px;
}

.login-button:hover:not(:disabled) {
  background-color: #6b6b98;
}

.login-button:disabled {
  background-color: #c4c4c4;
  cursor: not-allowed;
}

.login-footer {
  text-align: right;
  margin-top: 8px;
}

.forgot-password {
  color: #7c7bad;
  text-decoration: none;
  font-size: 14px;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-footer-info {
  margin-top: 24px;
  color: #777;
  font-size: 12px;
}

/* Add general error message styling */
.form-group:first-child {
  margin-bottom: 4px;
}

.general-error {
  color: #e05d44;
  text-align: center;
  font-size: 14px;
  margin-top: 8px;
}
</style>