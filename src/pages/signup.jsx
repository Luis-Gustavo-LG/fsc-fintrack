import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Link } from 'react-router'
import { EyeOff, Eye } from 'lucide-react'
import PasswordInput from '@/components/password-input'

const SignupPage = () => {

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
          <PasswordInput/>
          <PasswordInput placeholder="Confirme sua senha"/>
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