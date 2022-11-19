import Image from 'next/image';
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

const NameCorrectionModal = ({
  data,
  onCancel,
  onNewName,
}: NameCorrectionModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState(data?.correctFName || '');
  const [penToggled, setPenToggled] = useState(false);

  const cancel = () => {
    setIsOpen(false);
    onCancel?.();
  };

  const ok = () => {
    setIsOpen(false);
    onNewName?.(newName);
  };

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
          <Image
            width={55}
            height={55}
            src='/images/warningYellow.png'
            alt='warning icon'
          />
          <Image
            width={25}
            height={25}
            onClick={cancel}
            src='/images/x.png'
            alt='warning icon'
          />
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
            {penToggled ? (
              <input
                type='text'
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            ) : (
              <>
                <div>{newName}</div>

                <Image
                  width={30}
                  height={30}
                  onClick={() => setPenToggled(true)}
                  src='/images/pen.png'
                  alt='warning icon'
                />
              </>
            )}
          </div>
        </div>

        <div className='flex justify-end gap-4'>
          <button className='h-9 w-28 border' onClick={ok}>
            Ok
          </button>
          <button className='h-9 w-28 border' onClick={cancel}>
            Anuluj
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NameCorrectionModal;
