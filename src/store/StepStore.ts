import { create } from 'zustand'

interface StepStore {
  step: number
  increaseStep: () => void
  decreaseStep: () => void
}

export const useStepStore = create<StepStore>((set) => ({
  step: 1,
  increaseStep: () => set((state) => ({ step: state.step + 1 })),
  decreaseStep: () => set((state) => ({ step: state.step - 1 })),
}))
