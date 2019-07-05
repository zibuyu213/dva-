import request from './request';

export async function queryweishou() {
  return request('http://127.0.0.1:3000/weishou');
}
