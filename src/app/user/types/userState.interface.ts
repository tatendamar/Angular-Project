import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface"
import { UserResponseInterface } from "./userResponse.interface"

export interface UserStateInterface {
  user: UserResponseInterface | null
  isLoaded: boolean
  validationErrors: BackendErrorsInterface | null
}
