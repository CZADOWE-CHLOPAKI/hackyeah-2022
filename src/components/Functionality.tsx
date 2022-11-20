import Image from 'next/image';

import InfoBox from '@/components/InfoBox';

const Functionality = () => {
  return (
    <InfoBox
      className='w-4/5'
      title={
        <div className='flex items-center gap-4'>
          <Image
            src='/images/funkcjon.png'
            alt='functionality icon'
            height={50}
            width={50}
          />
          Funkcjonalność
        </div>
      }
    >
      Program umożliwia weryfikację plików do druku pod kątem ich zgodności z
      wymaganiami OW. Identyfikuje, wyświetla i w razie możliwości poprawia
      błędy. Sprawdza elementy pisma konieczne dla jego poprawności
      proceduralnej. Pozwala na dodanie kilku dokumentów naraz.
    </InfoBox>
  );
};

export default Functionality;
