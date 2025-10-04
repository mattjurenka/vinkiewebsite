export default function Description({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
    return <p className="mt-4 font-sans">{children}</p>
}
