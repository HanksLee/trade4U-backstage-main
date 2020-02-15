import {
  AxiosRequestConfig
} from 'axios';
import { moonAPI as API } from 'utils/request';

const getBrokerList = (config: AxiosRequestConfig): Promise<any> => API.get('/borkers', config);


export default {
  getBrokerList,
};