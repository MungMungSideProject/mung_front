import { baseInstance } from '@/utils/axiosInstance';
import type { AxiosRequestConfig } from 'axios';

/**
 *
 * @param url baseUrl 을 제외한 url
 * @param config 추가적인 axios 설정
 * @returns
 */
const get = async <T>(url: string, config?: AxiosRequestConfig) => {
  try {
    const response = await baseInstance.get<T>(url, { ...config });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param url baseUrl 을 제외한 url
 * @param config 추가적인 axios 설정
 * * @param body 요청에 보낼 body
 * @returns
 */
const post = async <T>(url: string, body: any, config?: AxiosRequestConfig) => {
  try {
    const response = await baseInstance.post<T>(url, body, { ...config });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param url baseUrl 을 제외한 url
 * @param config 추가적인 axios 설정
 * @param body 요청에 보낼 body
 * @returns
 */
const put = async <T>(url: string, body?: any, config?: AxiosRequestConfig) => {
  try {
    const response = await baseInstance.put<T>(url, body, { ...config });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param url baseUrl 을 제외한 url
 * @param config 추가적인 axios 설정
 * @returns
 */
const del = async <T>(url: string, config?: AxiosRequestConfig) => {
  try {
    const response = await baseInstance.delete<T>(url, { ...config });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { get, post, put, del as delete };
