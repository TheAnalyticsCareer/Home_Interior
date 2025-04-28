// import { Outlet } from 'react-router-dom';
// import './Layout.css';
// import Header from '../Header/Header';
// import Footer from '../Home/Footer';

// function Layout() {
//   return (
//     <div className="layout">
//       <Header />
//       <main className="content">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Layout;










import { Outlet } from 'react-router-dom';  // Outlet renders the matched child route component
import './Layout.css';                      // Import layout-specific CSS for overall page structure
import Header from '../Header/Header';       // Import the site-wide header/navigation component
import Footer from '../Home/Footer';         // Import the site-wide footer component

// Layout component wraps all pages with a header, footer, and dynamic content area
function Layout() {
  return (
    // Wrapper div for the entire page layout (header + content + footer)
    <div className="layout">
      
      {/* Site-wide header/navigation bar */}
      <Header />

      {/* Main content area where nested routes will render */}
      <main className="content">
        {/* Outlet acts as a placeholder for the current route’s component */}
        <Outlet />
      </main>

      {/* Site-wide footer displayed at the bottom of every page */}
      <Footer />
    </div>
  );
}

export default Layout;  // Export the Layout component for use in routing setup
