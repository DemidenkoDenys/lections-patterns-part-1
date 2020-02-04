import fetch from 'node-fetch';
import FormData from 'form-data';

class ApiFacade {
  constructor(authToken) {
    this.authToken = authToken;
  }
  get headers() {
    return new FormData({
      'Content-Type': 'application/json',
      'Authorization': this.authToken,
    });
  }
  getFetchParams(options, method) {
    return {
      method,
      headers: this.headers,
      ...options,
    }
  }
  handleResponse(response) {
    const { status, statusText } = response;
    return response.ok
      ? response.json()
      : Promise.reject({ status, statusText });
  }
  get(url, options) {
    return fetch(url, this.getFetchParams(options, 'GET')).then(this.handleResponse);
  }
  put(url, options) {
    return fetch(url, this.getFetchParams(options, 'PUT')).then(this.handleResponse);
  }
  post(url, options) {
    return fetch(url, this.getFetchParams(options, 'POST')).then(this.handleResponse);
  }
  delete(url, options) {
    return fetch(url, this.getFetchParams(options, 'DELETE')).then(this.handleResponse);
  }
}

export default ApiFacade;