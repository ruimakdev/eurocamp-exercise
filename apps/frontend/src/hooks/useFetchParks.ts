import { useEffect } from "react";
import { useParcStore } from "../store/parcStore";

export const useFetchParcs = () => {
  const { parcs, parcsLoaded, fetchAllParcs, error } = useParcStore();

  useEffect(() => {
    const cachedParcs = JSON.parse(localStorage.getItem('parcs') || '[]');

    if (cachedParcs.length) {
      fetchAllParcs(cachedParcs);
    } else {
      fetchAllParcs();
    }
  }, [fetchAllParcs]);

  return { parcs, parcsLoaded, error };
};
