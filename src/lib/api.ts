import { PdfResponse } from '@/lib/types';

const env = process.env.NODE_ENV;

let baseUrl = 'http://localhost:8000'; //TODO ADD PROD URL
if (env == 'development') {
  baseUrl = 'http://localhost:8000';
}

export async function sendFile(file: File): Promise<PdfResponse> {
  const url = `${baseUrl}/documents`;

  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  return response.json();
}
