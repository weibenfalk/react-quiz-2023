import Image from 'next/image';
import { Quicksand } from 'next/font/google';
// Logo
import Logo from '@/assets/react-quiz-logo.svg';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
});

export const metadata = {
  title: 'React Quiz 2023',
  description: 'Become the quiz master!'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className='bg-[#2b2737] p-4'>
        <main className={`${quicksand.variable} font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center`}>
          <Image className="h-[80px] sm:h-full" src={Logo} alt='logo' />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
