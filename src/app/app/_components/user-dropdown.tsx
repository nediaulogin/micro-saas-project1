import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CirclePlus, LogOut, SettingsIcon } from "lucide-react"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"

type UserUserDropdownProps = {
    user: Session['user']
}

export function UserDropdown({user}: UserUserDropdownProps) {
  if (!user) return 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="relative h-4 items-center w-full justify-between !px-0">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.image as string} alt={user.name as string} />
            <AvatarFallback>@</AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">shadcn</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <SettingsIcon size={14} className="" />
          Configurações
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CirclePlus size={14} className="" />
            Upgrade
    
          </DropdownMenuItem>
         
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
        <LogOut size={14} />
          Log out
       
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}