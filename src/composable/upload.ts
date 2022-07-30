import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@/config';
import type { UploadDto } from '@/types/upload.dto';
import type { ResultDto } from '@/types/result.dto';

export async function upload(payload: UploadDto): Promise<ResultDto> {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `${BASE_URL}/upload`,
    headers: { 'Transaction-ID': `${Math.floor(Math.random() * 10000)}` },
    data: payload,
  };
  const { data } = await axios(config);
  return data;
}

export async function uploadWithProgress(
  payload: UploadDto,
  f: (progressEvent: any) => void
): Promise<ResultDto> {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `${BASE_URL}/upload`,
    headers: { 'Transaction-ID': `${Math.floor(Math.random() * 10000)}` },
    data: payload,
    onUploadProgress: f,
  };
  const { data } = await axios(config);
  return data;
}
