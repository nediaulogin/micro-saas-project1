'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"

export function AuthForm() {
    const form  = useForm()
    const {toast} = useToast()
    
    const handleSubmit = form.handleSubmit(async (data) => {
      try {
        
        await signIn('email', { email: data.email, redirect: false })
        toast({
            title: 'Email Sent',
            description: 'Check your email for the magic link',
        })

      } catch (error) {
          console.error(error)
    }
    })

    return (
        <div className="mx-auto max-w-sm space-y-8">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="example.com" required type="email" {...form.register('email')} />
                </div>
                <Button type="submit" className="w-full">
                    send magic link
                </Button>
            </form>
        </div>
    );
    }
