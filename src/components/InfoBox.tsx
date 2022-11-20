import { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

type InfoBoxProps = {
  title: ReactNode;
  children: ReactNode;
  icon?: ReactNode;
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>;

const InfoBox = ({ title, children, icon, className }: InfoBoxProps) => {
  return (
    <div
      className={clsxm(
        'relative flex flex-col gap-4 rounded-3xl border border-offGray bg-white p-8 ',
        className
      )}
    >
      {icon}
      <div className='text-3xl font-semibold text-primary'>{title}</div>
      <div className='text-xl'>{children}</div>
    </div>
  );
};

export default InfoBox;
