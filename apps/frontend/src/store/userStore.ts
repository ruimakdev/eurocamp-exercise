import { create } from 'zustand';
import { fetchUserById } from '../api/users';

type UserType = {
  id: string;
  name: string;
  email: string;
};

export const hardcodedUserId = '82238f57-3603-4145-8d45-f006fed867ee';

interface UserState {
  userData: UserType;
  userDataFetched: boolean;
  error: string | null;
  fetchUserData: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  userData: {
    id: '',
    name: '',
    email: '',
  },
  error: null,
  userDataFetched: false,
  fetchUserData: async () => {
    try {
      const response = await fetchUserById(hardcodedUserId);
      set({ userData: response, userDataFetched: true, error: null });
    } catch (error) {
      set({ error: 'Failed to fetch user data' }); // Set error message

      console.error('Error fetching user:', error);
    }
  },
}));
