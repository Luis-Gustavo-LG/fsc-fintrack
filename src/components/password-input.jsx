import { Button } from "./ui/button"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "./ui/input"
import { forwardRef, useState } from "react"

const PasswordInput = forwardRef(({placeholder = "Digíte sua senha", ...props} , ref) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='relative'>
            <Input type={showPassword ? "text" : "password"} placeholder={placeholder} ref={ref} {...props} />
            <Button
             type="button"
             variant="ghost"
             className="absolute right-0 top-0 bottom-0 my-auto mr-1 h-8 w-8 text-muted-foreground"
             onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <Eye/> : <EyeOff/>}
            </Button>
        </div>
      )
})

PasswordInput.displayName = "PasswordInput"

export default PasswordInput