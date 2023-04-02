import { defaultInstance } from '../utils/instances';

export const getWiki = async () => {
  try {
    const response = await defaultInstance.get('/wiki');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
