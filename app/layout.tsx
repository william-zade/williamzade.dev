// app/layout.tsx
import './globals.css'; // Import your global styles
import NavBar from '../components/NavBar'; // Adjust path if your NavBar is elsewhere
import Footer from '../components/Footer'; // Adjust path if your Footer is elsewhere

export const metadata = {
  title: 'HoarFrost Development',
  description: 'Personal portfolio and projects',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-midnight text-frost-100">
        <NavBar />
        <main className="min-h-screen px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
