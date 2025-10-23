import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/dashboard/page";

export default function Page() {
  return (
     <DashboardPage>
          <DashboardPageHeader>
            <DashboardPageHeaderTitle>Configurações</DashboardPageHeaderTitle>
          </DashboardPageHeader>
          <DashboardPageMain>
            <p>Configurações</p>
          </DashboardPageMain>
        </DashboardPage>)
}