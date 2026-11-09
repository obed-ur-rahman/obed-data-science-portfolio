import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'Obed Ur Rahman | Data Scientist', description:'Data scientist specializing in machine learning, forecasting, retail analytics, and financial risk.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
