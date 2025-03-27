import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '700'], 
  variable: 'fontFamily',
});


export const metadata = {
  title: 'Spark Properties',
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property'
};





const MainLayout = ({children}) => {
  return (
    <AuthProvider>
    <html suppressHydrationWarning={true} className={poppins.className}>
      <body>
        <Navbar/>
        <main>{ children }</main>
        <Footer/>
      </body>
    </html>
    </AuthProvider>
  );
};

export default MainLayout;
