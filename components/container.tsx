export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row ml-10 sm:ml-24 space-x-10 w-10/12">
      {children}
    </div>
  );
}