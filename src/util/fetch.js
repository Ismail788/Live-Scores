const Demo_key = '6r94GgdPiJ5ciqdx';
const Demo_secret = '70Qx0KjZN2uD6jfdLohrFuhXem9wNm4U';

// export const root_url = "http://livescore-api.com/api-client/";

const addParamToUrl = (url, param) => url += ( url.match( /[\?]/g ) ? '&' : '?' ) + param;

export default (url, options = {}) => {

    let newUrl = addParamToUrl(url, `key=${Demo_key}`)
    newUrl = addParamToUrl(newUrl, `secret=${Demo_secret}`)

    return new Promise((resolve, reject) => {
        return fetch(newUrl, options).then(response => {
          if (response.ok) {
            resolve(response)
          } else {
            reject(new Error('error'))
          }
        }, error => {
          reject(new Error(error.message))
        })
      })
}
