import { Button } from "./ui/button"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "./ui/input"
import { useState } from "react"

const PasswordInput = ({ placeholder = 'Digíte sua senha' }) => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='relative'>
        <Input type={showPassword ? "text" : "password"} placeholder={placeholder} />
        <Button
         variant="ghost"
         className="absolute right-0 top-0 bottom-0 my-auto mr-1 h-8 w-8 text-muted-foreground"
         onClick={(prev) => setShowPassword(!prev)}>
            {showPassword ? <Eye/> : <EyeOff/>}
        </Button>
    </div>
  )
}

export default PasswordInput