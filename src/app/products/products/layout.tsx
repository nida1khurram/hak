

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <ul>Order</ul>
        <ul>Return</ul>
        {children}
        </div>
  );
}
