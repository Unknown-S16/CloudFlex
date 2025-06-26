// app/layout.js
import './globals.css';

export const metadata = {
  title: 'CloudFlex',
  description: 'Interactive product showcase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
