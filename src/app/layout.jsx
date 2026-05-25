import './globals.css';

export const metadata = {
  title: 'AW Website Builder',
  description: 'Pre-built website templates for 10 industries. AI fills content gaps only.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
