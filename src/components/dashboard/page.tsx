import { cn } from "@/lib/utils";

export type DashboardPageProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
} & T

export function DashboardPage({ className, children }: DashboardPageProps) {
  return (
    <section className={cn(['h-screen', className])}>
          {children}
    
        </section>
   );
}

export function DashboardPageHeader({ className, children }: DashboardPageProps) {
  return (
    <header className={cn(['px-6 py-3 border-b border-border', className])}>
    {children}

  </header>
  );
}

export function DashboardPageHeaderTitle({ className, children }: DashboardPageProps) {
  return (
    <h1 className={cn(['text-muted-foreground uppercase', className])}>
    {children}

  </h1>
  );
}

export function DashboardPageHeaderNav({ className, children }: DashboardPageProps) {
  return (
    <nav className={cn(['', className])}>
    {children}

  </nav>
  );
}

export function DashboardPageMain({ className, children }: DashboardPageProps) {
  return (
    <main className={cn(['p-6', className])}>
    {children}

  </main>
  );
}