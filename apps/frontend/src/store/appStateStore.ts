import { create } from 'zustand';

export type SelectableTabs = 0 | 1 | 2;

type AppStateType = {
  selectedTab: SelectableTabs;
  selectTab: (newTab: SelectableTabs) => void;
};

export const useAppStateStore = create<AppStateType>((set) => ({
  selectedTab: 0,
  selectTab: (newTab) => {
    set({ selectedTab: newTab });
  },
}));
