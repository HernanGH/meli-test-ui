const apiUrl = 'http://localhost:3005/api';

export class Config {
    static getURL(path) {
        return apiUrl + path;
    }
}