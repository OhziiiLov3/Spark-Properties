import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';
import {GlobalProvider} from '@/context/GlobalContext';
import { Poppins } from 'next/font/google';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '700'], 
  variable: '--font-poppins',
});


export const metadata = {
  title: 'Spark Properties',
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property'
};





const MainLayout = ({children}) => {
  return (
    <AuthProvider>
      <GlobalProvider>
    <html  className={poppins.className}>
      <body>
        <Navbar/>
        <main>{ children }</main>
        <Footer/>
        <ToastContainer/>
      </body>
    </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
