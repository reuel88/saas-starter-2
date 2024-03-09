type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex">
      <div className="min-h-full">
        <div>
          <h2>Analytics</h2>
          <ul>
            <li>Dashboard</li>
            <li>Reports</li>
          </ul>
        </div>

        <div>
          <h2>Features</h2>
          <ul>
            <li>Investing</li>
            <li>Rewards</li>
            <li>Super</li>
          </ul>
        </div>

        <div>
          <h2>Account</h2>
          <ul>
            <li>Notifications</li>
            <li>Settings</li>
          </ul>
        </div>

        <div>
          <h2>Theme</h2>
        </div>
        <div>
          <h2>Profile</h2>
        </div>
      </div>
      <div className="flex min-h-full w-full justify-center">{children}</div>
    </div>
  );
}
