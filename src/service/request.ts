import axios, { AxiosResponse, AxiosError } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_EXAM_API_URL,
});

export const getRequest = async (url: string) => {
  try {
    const response: AxiosResponse = await api.get(url);

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error as AxiosError);
    } else {
      handleUnknownError(error);
    }

    throw error;
  }
};

const handleAxiosError = (error: AxiosError): void => {
  if (error.response) {
    console.error('Response error:', error.response.data);
    console.error('Status:', error.response.status);
  } else if (error.request) {
    console.error('No response received:', error.request);
  } else {
    console.error('Error setting up the request:', error.message);
  }
};

const handleUnknownError = (error: unknown): void => {
  if (error instanceof Error) {
    console.error('Error:', error.message);
  } else {
    console.error('Unknown error:', error);
  }
};
