import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Link } from 'react-router'
import PasswordInput from '@/components/password-input'
import { Checkbox } from '../components/ui/checkbox'
import { Label } from '../components/ui/label'

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
          <div className="flex flex-col gap-6">
      <div className="items-top flex space-x-2 space-y-0">
        <Checkbox id="terms-1" />
        <div className="leading-none">
            <label className="text-xs text-muted-foreground opacity-75" htmlFor="terms-1">
                Ao clicar em "Criar conta" você aceita  <span className='text-white underline'>nosso termo de uso e política de privacidade.</span>
            </label>
        </div>
      </div>
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