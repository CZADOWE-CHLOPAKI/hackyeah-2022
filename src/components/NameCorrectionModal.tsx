import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { ErrorType } from '@/lib/types';
export type ModalData = {
  error: ErrorType[];
  fname: string;
  correctFName: string;
};

type NameCorrectionModalProps = {
  data?: ModalData;
  onNewName?: (newName: string) => void;
  onCancel?: () => void;
};

const NameCorrectionModal = ({ data }: NameCorrectionModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState(data?.correctFName || '');

  useEffect(() => {
    if (data && data.error.length > 0) setIsOpen(true);
  }, [data]);

  if (!data) return null;
  const errArray = data.error.map(({ name }) => name);

  return (
    <Modal
      isOpen={isOpen}
      contentLabel='Example Modal'
      className=' m-auto w-[600px] rounded-3xl border border-offGray bg-white font-light'
    >
      <div className='w-full  p-6'>
        <div className='mb-5 flex justify-between'>
          <div>warn</div>
          <div>X</div>
        </div>

        <div>
          Nazwa pliku <code>{data.fname}</code>{' '}
          <b className='font-normal'>jest niepoprawna</b>. Zmień nazwę, aby
          dodać plik. Wytyczne odnośnie do nazywania plików znajdują się pod tym
          <a href=''>linkiem</a>.
        </div>

        <div className='mb-8'>
          {errArray.map((err, idx) => (
            <div key={idx} className='text-red'>
              {err}
            </div>
          ))}
        </div>

        <div className='mb-2'>
          <div className='mb-0.5'>
            <b className='font-normal'>Sugerowana</b> nazwa pliku:
          </div>
          <div className='flex justify-between'>
            <div>{data.correctFName}</div>
            <input type='text' value={} />
            <button>pen</button>
          </div>
        </div>

        <div className='flex justify-end gap-4'>
          <button className='h-9 w-28 border' onClick={() => setIsOpen(false)}>
            Ok
          </button>
          <button className='h-9 w-28 border'>Anuluj</button>
        </div>
      </div>
    </Modal>
  );
};

export default NameCorrectionModal;
