import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Spark Properties',
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property'
};





const MainLayout = ({children}) => {
  return (
    <html>
      <body suppressHydrationWarning={true}>
        <Navbar/>
        <main>{ children }</main>
        <Footer/>
      </body>
    </html>
  );
};

export default MainLayout;
