type ResultsProps = {
  count: number;
  corrected: number;
  ok: number;
  error: number;
};
const Results = ({ corrected, count, error, ok }: ResultsProps) => {
  return (
    <div className='-mb-8 flex justify-between'>
      <div>
        <div className='text-2xl font-semibold text-primary'>
          Wynik sprawdzenia {count} plików:
        </div>
        <div>poprawne: {ok}</div>
        <div>niepoprawnych: {error}</div>
        <div>poprawionych: {corrected}</div>
      </div>
      <div className='flex h-full flex-col justify-end'>
        <button className='rounded-3xl border bg-white py-2 px-4'>
          Generuj raport
        </button>
      </div>
    </div>
  );
};

export default Results;
