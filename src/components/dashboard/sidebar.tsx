import { cn } from "@/lib/utils";
import Link from "next/link";

export type SidebarProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
} & T


export function Sidebar({ className, children }: SidebarProps) {
  return (
    <aside className={cn(['border-r border-border flex flex-col space-y-6', className])}>
      {children}

    </aside>
  );
}

export function SidebarHeader({ className, children }: SidebarProps) {
  return (
    <header className={cn(['p-6 ', className])}>
      {children}
    </header>
  );
}

export function SidebarHeaderTitle({ className, children }: SidebarProps) {
  return (
    <h2 className={cn(['', className])}>
      {children}
    </h2>
  );
}
export function SidebarMain({ className, children }: SidebarProps) {
  return (
    <main className={cn(['px-3', className])}>
      {children}
    </main>
  );
}
export function SidebarNav({ className, children }: SidebarProps) {
  return (
    <div className={cn(['', className])}>
      {children}
    </div>
  );
}
export function SidebarNavMain({ className, children }: SidebarProps) {
  return (
    <nav className={cn(['flex flex-col', className])}>
      {children}
    </nav>
  );
}
export function SidebarNavHeader({ className, children }: SidebarProps) {
  return (
    <header className={cn(['', className])}>
      {children}
    </header>
  );
}
export function SidebarNavHeaderTitle({ className, children }: SidebarProps) {
  return (
    <h4 className={cn(['text-xs uppercase text-muted-foreground ml-3', className])}>
      {children}
    </h4>
  );
}
export function SidebarFooter({ className, children }: SidebarProps) {
  return (
    <footer className={cn(['p-6 mt-auto border-t border-border', className])}>
      {children}
    </footer>
  );
}

type SidebarNavLinkProps = {
  href: string;
  active?: boolean;

}

export function SidebarNavLink({ className, children, href, active }: SidebarProps<SidebarNavLinkProps>) {
  return (
    <Link href={href} className={cn([
      'text-sm px-3 py-2 rounded-md flex items-center',
      active && 'bg-secondary',
      className])}>
      {children}
    </Link>
  );
}