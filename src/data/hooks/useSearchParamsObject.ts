import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';

const useSearchParamsObject = (defaultSearchParams?: URLSearchParamsInit) => {
  const [search, setSearchParams] = useSearchParams(defaultSearchParams);
  const searchParams = Object.fromEntries(new URLSearchParams(search));

  return [searchParams as Record<string, string>, setSearchParams];
};

export default useSearchParamsObject;
