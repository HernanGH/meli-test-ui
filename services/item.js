import { Config } from '../config/Config';
import axios from 'axios';


export class itemService {
    static path = 'items';

    static searchItems(searchWord) {
        return axios.get(Config.getURL(`/${this.path}?q=${searchWord}`));
    }

    static getItem(id) {
        return axios.get(Config.getURL(`/${this.path}/${id}`));
    }
}