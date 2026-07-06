import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tight text-spot-dark">SpotWise.</div>
          <nav>
            {/* Nav items will go here */}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
