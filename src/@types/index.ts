export interface User {
  username: string,
  email: string,
}

export interface TokenResponse {
  user: User,
  token: string,
  expiresIn: number,
}
