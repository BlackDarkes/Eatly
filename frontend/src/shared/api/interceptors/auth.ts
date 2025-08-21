/* eslint-disable @typescript-eslint/no-explicit-any */
// shared/api/interceptors/auth.ts
// shared/api/interceptors/auth.ts
import { baseApi } from '../api-instance';

let isRefreshing = false;
let failedQueue: Array<{ resolve: (value: any) => void; reject: (error: any) => void }> = [];

const processQueue = (error: any = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(baseApi);
    }
  });
  failedQueue = [];
};

export const addAuthInterceptor = () => {
  baseApi.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== '/auth/refresh') {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then(() => baseApi(originalRequest))
            .catch((err) => Promise.reject(err));
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          await baseApi.post('/auth/refresh');
          processQueue();
          return baseApi(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError);

          /* ДЕЛАЕТ РЕДИРЕКТ ЕСЛИ ТОКЕНА НЕТ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
          // if (window.location.pathname !== '/login') {
          //   window.location.href = '/login';
          // }
          
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  )
}