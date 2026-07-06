export default function DashboardPage() {
  return (
    <div className="h-[calc(100vh-89px)] flex">
      <div className="w-1/3 bg-white border-r border-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      </div>
      <div className="flex-1 bg-gray-50">
        {/* Map will go here */}
      </div>
    </div>
  );
}
