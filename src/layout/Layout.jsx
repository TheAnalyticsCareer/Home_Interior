import { Outlet } from 'react-router-dom';
import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Home/Footer';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;