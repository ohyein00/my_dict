import { defaultInstance } from '../utils';

const resource: string = '/wordlist';

export default {
  get() {
    return defaultInstance.get(resource).then((res) => res.data);
  },
  post(payload: object) {
    return defaultInstance.post(`${resource}`, payload);
  },
  update(payload: object, id: number) {
    return defaultInstance.put(`${resource}/${id}`, payload);
  },
  delete(id: number) {
    return defaultInstance.delete(`${resource}/${id}`);
  },
};
