import { create } from 'zustand';
import { fetchParcs } from '../api/parcs';

type ParcType = {
  id: string;
  name: string;
  description: string;
};

interface ParcState {
  parcs: ParcType[];
  error: string | null;
  parcsLoaded: boolean;
  removeParcFromState: (id: string) => void;
  fetchAllParcs: (cachedData?: ParcType[]) => Promise<void>; // Allow passing cached data as an argument
}

export const useParcStore = create<ParcState>((set) => ({
  parcs: [],
  error: null,
  parcsLoaded: false,
  fetchAllParcs: async (cachedData?: ParcType[]) => {
    try {
      let response: ParcType[];

      if (cachedData) {
        // Use cached data if provided
        response = cachedData;
      } else {
        // Fetch data from API
        response = await fetchParcs();
      }

      // Update Zustand store
      set({ parcs: response, parcsLoaded: true, error: null });

      // Cache parcs in localStorage
      localStorage.setItem('parcs', JSON.stringify(response));
    } catch (error) {
      set({ error: 'Failed to fetch parcs' }); // Set error message

      console.error('Error fetching parcs:', error);
    }
  },
  removeParcFromState: (id: string) => {
    // Get the current state
    const currentState = useParcStore.getState();

    // Filter out the parc with the specified id
    const updatedParcs = currentState.parcs.filter((parc) => parc.id !== id);

    // Update the localStorage with the updatedParcs
    localStorage.setItem('parcs', JSON.stringify(updatedParcs));

    // Update the Zustand store
    useParcStore.setState({
      ...currentState, // Spread the current state
      parcs: updatedParcs,
      error: null,
      parcsLoaded: true, // Assuming parcsLoaded should remain true after a removal
    });
  },

}));
