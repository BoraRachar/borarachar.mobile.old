interface ErrorResponse {
  statusCode: number
  errors: { userMessage: string }[]
}

interface ResetPasswordData {
  email: string
  code: string
  novaSenha: string
  confirmacaoSenha: string
}

export { ErrorResponse, ResetPasswordData }
