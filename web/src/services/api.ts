import axios from 'axios';

// 创建axios实例
const api = axios.create({
  baseURL: '/api', // 基础URL，与后端配置匹配
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 从localStorage获取token并添加到请求头
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 处理错误响应
    let errorMessage = 'Network error';
    
    if (error.response) {
      // 服务器返回错误状态码
      switch (error.response.status) {
        case 401:
          errorMessage = 'Unauthorized: Please login again';
          // 清除token并跳转到登录页
          localStorage.removeItem('token');
          break;
        case 403:
          errorMessage = 'Forbidden: You don\'t have permission';
          break;
        case 404:
          errorMessage = 'Not found: The requested resource doesn\'t exist';
          break;
        case 500:
          errorMessage = 'Server error: Please try again later';
          break;
        default:
          errorMessage = error.response.data?.message || `Error ${error.response.status}`;
      }
    } else if (error.request) {
      // 请求已发送但没有收到响应
      errorMessage = 'No response from server';
    }
    
    return Promise.reject(new Error(errorMessage));
  }
);

// 登录接口
export const login = async (credentials: {
  login: string;
  password: string;
  remember_me: boolean;
}) => {
  try {
    // 注意：这里的路径需要与后端实际的登录接口路径匹配
    // 如果后端没有现成的登录接口，可以先模拟一个响应
    const response = await api.post('/auth/login', credentials);
    
    // 保存token - 由于响应拦截器已经返回了response.data
    if (response && typeof response === 'object' && 'token' in response && typeof response.token === 'string') {
      localStorage.setItem('token', response.token);
    }
    
    return response;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// 退出登录
export const logout = async () => {
  try {
    await api.post('/auth/logout');
  } catch (error) {
    console.error('Logout error:', error);
  } finally {
    // 无论成功失败都清除token
    localStorage.removeItem('token');
  }
};

export default api;