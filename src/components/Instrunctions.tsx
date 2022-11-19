const Instructions = () => {
  return (
    <div className='flex flex-row '>
      <div className='flex max-w-2xl flex-col bg-white'>
        <h1 className='text-xs: m-8 font-semibold text-primary  '>
          Funkcjonalność
        </h1>
        <p className='flex '>
          Program pozwala przesłać plik do druku. Plik winien odpowiadać wymogom
          zdefiniowanym w art. 48 UDE OW. Przesłane pliki zostaną sprawdzone pod
          kątem poprawności, zgodności z wymaganym formatem. Akceptowane
          rozszerzenia pliku to: .txt, .rtf, .pdf, .xps, .odt, .ods, .odp, .doc,
          .xls, .ppt, .docx, .xlsx, .pptx, .csv.
        </p>
      </div>
      <div>
        <h1 className='flex'>Jak przesłać pliki?</h1>
        <ol>
          <li>Kliknij w pole “Dodaj plik:”</li>
          <li>Wybierz docelowy plik i kliknij “Ok”</li>
          <li>
            Jeśli plik zawiera błędy - popraw je według wyświetlonego wzoru.
          </li>
          <li>Prześlij plik ponownie.</li>
        </ol>
      </div>
    </div>
  );
};
export default Instructions;
