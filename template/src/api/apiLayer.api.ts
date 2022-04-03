import axios, {AxiosRequestConfig} from 'axios';

const instance = axios.create();

const initInstanceDefaults = () => {
  instance.defaults.headers.common = {
    Accept: 'application/json',
  };

  const postAndPutHeaders = {
    ['Content-Type']: 'application/json',
  };
  instance.defaults.headers.post = postAndPutHeaders;
  instance.defaults.headers.put = postAndPutHeaders;
};

initInstanceDefaults();

class ApiLayer<RequestData> {
  private readonly url?: AxiosRequestConfig<RequestData>['url'];
  private readonly baseURL?: AxiosRequestConfig<RequestData>['baseURL'];
  private method: AxiosRequestConfig<RequestData>['method'];
  private data: AxiosRequestConfig<RequestData>['data'];
  private headers: AxiosRequestConfig<RequestData>['headers'];

  constructor({
    url,
    baseURL,
    method,
    data,
    headers,
  }: AxiosRequestConfig<RequestData>) {
    this.url = url;
    this.baseURL = baseURL;
    this.method = method;
    this.data = data;
    this.headers = headers;
  }

  setMethod(method: AxiosRequestConfig<RequestData>['method']) {
    this.method = method ?? this.method;
    return this;
  }

  setData(data: AxiosRequestConfig<RequestData>['data']) {
    this.data = data ?? this.data;
    return this;
  }

  setHeaders(headers: AxiosRequestConfig<RequestData>['headers']) {
    const baseHeaders = this.headers ?? {};
    this.headers = {
      ...baseHeaders,
      ...headers,
    };
    return this;
  }
}

export default ApiLayer;
