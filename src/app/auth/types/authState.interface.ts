import { AuthResponseInterface } from "./authResponse.interface"
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean
  registeredUser: AuthResponseInterface | null
  isLoggedIn: boolean
  validationErrors: BackendErrorsInterface | null
}
