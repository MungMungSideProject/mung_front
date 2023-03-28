import { defaultInstance } from '../utils/instances';

export const getWiki = async () => {
  try {
    const response = await defaultInstance.get('/wiki');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWikiDetail = async ({ id }: any) => {
  try {
    const response = await defaultInstance.get(`/wiki/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
