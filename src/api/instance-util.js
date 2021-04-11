import axios from 'axios';

const apiInstance = axios.create({
    headers: { Accept: 'application/json' },
    baseURL: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data',
});

export default apiInstance;
