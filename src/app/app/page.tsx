import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/dashboard/page";


export default async function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <p>Page </p>
      </DashboardPageMain>
    </DashboardPage>
  )}