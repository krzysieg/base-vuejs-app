import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {IResponse} from '@/type';

export default class Api {
    readonly api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: '/api',
            headers: {
                Accept: 'application/json'
            }
        });
    }

    private async sendRequest(config: AxiosRequestConfig): Promise<IResponse> {
        const response: AxiosResponse = await this.api({
            method: config.method,
            url: config.url,
            data: config.data,
            params: config.params
        });

        return response.data;
    }

    async getData(): Promise<any> {
        return (await this.sendRequest({method: 'GET', url: '/'})).data;
    }
}
