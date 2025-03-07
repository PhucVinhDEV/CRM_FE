import { useEffect, useState } from "react";

const useCheckHydrationMismatch = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return [mounted];
};

export default useCheckHydrationMismatch;
