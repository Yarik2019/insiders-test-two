export interface AuthUser {
  uid: string;
  displayName: string | null;
  email: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  displayName?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: AuthUser | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string | null;
}
