import axios from '../api/axiosInstance';

export const createJournal = async (journalData, token) => {
  const res = await axios.post('/journals', journalData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getJournals = async (token) => {
  const res = await axios.get('/journals', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const deleteJournal = async (id, token) => {
  const res = await axios.delete(`/journals/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
