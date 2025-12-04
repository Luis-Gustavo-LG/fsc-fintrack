import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Link } from 'react-router'
import { EyeOff, Eye } from 'lucide-react'

const SignupPage = () => {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Crie a sua conta</CardTitle>
          <CardDescription>
            Insira seus dados abaixo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Digíte seu nome" />
          <Input placeholder="Digíte seu sobrenome" />
          <Input placeholder="Digíte seu email" />
          <div className='relative'>
            <Input type={showPassword ? "text" : "password"} placeholder="Digíte sua senha" />
            <Button
             variant="ghost"
             className="absolute right-0 top-0 bottom-0 my-auto mr-1 h-8 w-8 text-muted-foreground"
             onClick={(prev) => setShowPassword(!prev)}>
                {showPassword ? <Eye/> : <EyeOff/>}
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Criar conta</Button>
        </CardFooter>
      </Card>
      <div className="flex items-center justify-center">
        <p className='text-center opacity-50'>Já possui uma conta?</p>
        <Button variant="link" asChild>
            <Link to="/login">Faça Login</Link>
        </Button>
      </div>
    </div>
  )
}

export default SignupPage