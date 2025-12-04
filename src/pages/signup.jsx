import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Link } from 'react-router'
import PasswordInput from '@/components/password-input'
import { Checkbox } from '../components/ui/checkbox'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from '../components/ui/form'

const SignupPage = () => {

    const signupSchema = z.object({
        name: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres"),
        lastName: z.string().trim().min(3, "Sobrenome deve ter pelo menos 3 caracteres"),
        email: z.string().trim().email("Email inválido"),
        password: z.string().trim().min(6, "Senha deve ter pelo menos 6 caracteres"),
        confirmPassword: z.string().trim().min(6, "Confirmação de senha deve ter pelo menos 6 caracteres"),
        terms: z.boolean().refine((value) => value == true, "Você deve aceitar os termos de uso"),
    }).refine((data) => data.password == data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
})

    const methods = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            terms: false,
        },
    })

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}> 
          <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Crie a sua conta</CardTitle>
          <CardDescription>
            Insira seus dados abaixo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormField
            control={methods.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digíte seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input placeholder="Digíte seu sobrenome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Digíte seu email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <PasswordInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar Senha</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Confirme sua senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-6">
      <FormField
        control={methods.control}
        name="terms"
        render={({ field }) => (
          <FormItem className="flex items-center space-x-2 space-y-0">
            <Checkbox id="terms-1" checked={field.value} onCheckedChange={field.onChange} />
            <div className="leading-none">
                <label className={`text-xs text-muted-foreground opacity-75 ${methods.formState.errors.terms && "text-red-500"}`} htmlFor="terms-1">
                    Ao clicar em "Criar conta" você aceita  <span className={`underline ${methods.formState.errors.terms ? "text-red-500" : "text-white"}`}>nosso termo de uso e política de privacidade.</span>
                </label>
            </div>
          </FormItem>
        )}
      />
    </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">Criar conta</Button>
        </CardFooter>
      </Card>
        </form>
      </Form>
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