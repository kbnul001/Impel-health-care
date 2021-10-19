import { useContext } from "react"
import { AllContext } from "../ContextProvider/ContextProvider"

const useAuth = () => {
    return useContext(AllContext);
}

export default useAuth;