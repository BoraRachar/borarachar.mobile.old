import { create } from 'zustand'

interface UserData {
  nome: string
  apelido: string
  email: string
  usuario: string
  password: string
  termoUso: boolean
  politicasPrivacidade: boolean
}

interface CreateUserStore {
  user: UserData
  addUser: (userData: Partial<UserData>) => void
}

const initialState: UserData = {
  nome: '',
  apelido: '',
  email: '',
  usuario: '',
  password: '',
  termoUso: false,
  politicasPrivacidade: false,
}

const useStore = create<CreateUserStore>((set) => ({
  user: { ...initialState },
  addUser: (userData) =>
    set((state) => ({ user: { ...state.user, ...userData } })),
}))

export default useStore
