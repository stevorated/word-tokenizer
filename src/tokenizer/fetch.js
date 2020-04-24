import axios from 'axios';

export const fetch = async (url) => (await axios(url)).data;
