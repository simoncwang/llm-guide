import "./globals.css";

export const metadata = {
  title: 'LLM Use Case Guide',
  description: 'Helps you choose the right AI method for your task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
