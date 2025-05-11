export default function Title({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return <div className="w-full">
      <p className="font-sans font-bold">{children}</p>
    </div>
}
