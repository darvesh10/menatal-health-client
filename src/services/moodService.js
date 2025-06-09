import axios from '../api/axiosInstance';

export const saveMood = async (moodData, token) => {
  const res = await axios.post('/mood', moodData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getMoods = async (token) => {
  const res = await axios.get('/mood', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
