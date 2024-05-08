import { create } from 'zustand'

interface UserData {
  nome: string
  apleido: string
  email: string
  usuario: string
  password: string
  confirmPassword: string
  termoUso: boolean
  politicasPrivacidade: boolean
}

interface CreateUserStore {
  user: UserData
  addUser: (userData: Partial<UserData>) => void
}

const initialState: UserData = {
  nome: '',
  apleido: '',
  email: '',
  usuario: '',
  password: '',
  confirmPassword: '',
  termoUso: false,
  politicasPrivacidade: false,
}

const useStore = create<CreateUserStore>((set) => ({
  user: { ...initialState },
  addUser: (userData) =>
    set((state) => ({ user: { ...state.user, ...userData } })),
}))

export default useStore
