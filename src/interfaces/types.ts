export interface ErrorResponse {
  statusCode: number
  errors: { userMessage: string }[]
}
