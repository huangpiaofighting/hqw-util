import request from 'umi-request';

const url = 'https://tianqiapi.com/api?version=v6&appid=66921759&appsecret=SKnKAyb4';
const getWeather =  async function(userurl = url){
    const data = await request.get(userurl);
    return data;
}
export {
    url,
    getWeather
}