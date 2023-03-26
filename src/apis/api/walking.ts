import { defaultInstance } from '@/apis/utils/instances';

export const getWalking = async () => {
  try {
    const response = await defaultInstance.get('/walking');
    return response.data;
  } catch (error) {
    console.log(error);
    alert('에러 발생 db.json 확인 및 콘솔확인');
  }
};
