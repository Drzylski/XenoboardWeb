import { defineStore } from 'pinia'
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ref } from 'vue';

export const useMyAxiosStore = defineStore('AxiosStore', () => {

    const baseURL = 'http://localhost:8080/'; //TODO: use env file

    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers: { 'Content-Type': 'application/json',       
         }
    });

    const instance  = ref<AxiosInstance>(axiosInstance);
    return instance.value
})
