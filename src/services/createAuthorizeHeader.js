import CryptoJS from 'crypto-js';

function buildAuthorizationHeader(accountName, accountKey, method, url, headers) {
  const urlObj = new URL(url);
  const canonicalizedResource = `/${accountName}${urlObj.pathname}`;
  const canonicalizedHeaders = Object.keys(headers)
    .filter((key) => key.startsWith('x-ms-'))
    .sort()
    .map((key) => `${key}:${headers[key]}`)
    .join('\n');

  const stringToSign = [
    method,
    headers['Content-Encoding'] || '',
    headers['Content-Language'] || '',
    headers['Content-Length'] || '',
    headers['Content-MD5'] || '',
    headers['Content-Type'] || '',
    headers['Date'] || '',
    headers['If-Modified-Since'] || '',
    headers['If-Match'] || '',
    headers['If-None-Match'] || '',
    headers['If-Unmodified-Since'] || '',
    headers['Range'] || '',
    canonicalizedHeaders,
    canonicalizedResource,
  ].join('\n');

  const signature = CryptoJS.HmacSHA256(stringToSign, CryptoJS.enc.Base64.parse(accountKey)).toString(CryptoJS.enc.Base64);

  return `SharedKey ${accountName}:${signature}`;
}

export default buildAuthorizationHeader;
