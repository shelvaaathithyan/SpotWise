import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
