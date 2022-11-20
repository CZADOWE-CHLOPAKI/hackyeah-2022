import { toast } from 'react-toastify';

import { PdfResponse } from '@/lib/types';

const env = process.env.NODE_ENV;

let baseUrl = 'http://157.245.70.41';

if (env == 'development') {
  baseUrl = 'http://localhost:8000';
}

export async function sendFile(file: File): Promise<PdfResponse> {
  const url = `${baseUrl}/documents`;

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    return response.json();
  } catch (error) {
    toast.error(`Nie udało się dodać pliku - błąd serwera.`, {
      position: 'bottom-right',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  return new Promise(() => []);
}
