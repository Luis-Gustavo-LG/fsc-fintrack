import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import PasswordInput from '@/components/password-input'
import { Input } from '../components/ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../components/ui/button'

const LoginPage = () => {
    const loginSchema = z.object({
        email: z.string().trim().email("Email inválido"),
        password: z.string().trim().min(6, "Senha deve ter pelo menos 6 caracteres"),
    })
    const methods = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
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
                        <CardTitle>Entre na sua conta</CardTitle>
                        <CardDescription>
                            Insira seus dados abaixo
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                        control={methods.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digíte seu email" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={methods.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Senha</FormLabel>
                                <FormControl>
                                    <PasswordInput {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" type="submit">Entrar</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    </div>
  )
}

export default LoginPage