/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStore } from '@app/store/store';
import { baseApi, refreshApi } from '../api-instance';

export const addAuthInterceptor = () => {
  baseApi.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.code === 'ECONNABORTED' || !error.response) {
        return Promise.reject(error);
      }

      const originalRequest = error.config;

      if (error.response?.status === 401 && 
          !originalRequest._retry && 
          originalRequest.url !== '/auth/refresh') {

        originalRequest._retry = true;

        try {
          console.log('🔄 Attempting token refresh via interceptor...');
          await refreshApi.post('/auth/refresh');
          console.log('✅ Refresh successful');
          return baseApi(originalRequest);
        } catch (refreshError: any) {
          console.log('❌ Refresh failed:', refreshError.message);
          
          if (refreshError.response?.status === 401) {
            useStore.getState().clearAuth();
          }
          
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};