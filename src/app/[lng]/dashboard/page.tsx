// File: Dashboard.tsx
import DashboardPanelLayout from "@/components/layouts/DashboardPanelLayout";

export default async function Dashboard() {
  // Tách phần nội dung vào biến children
  const children = (
    <>
      {/* Bao bọc các phần tử con trong một React.Fragment */}
      <div className="mb:min-h-screen mb-[74px] bg-whiteBase dark:bg-black sm:mb-0">
        <div className="container hidden md:block">
          <div className="bg-primary text-xl">Dashboard</div>
        </div>
      </div>
    </>
  );

  return (
    // Truyền biến children vào DashboardPanelLayout
    <DashboardPanelLayout>{children}</DashboardPanelLayout>
  );
}
