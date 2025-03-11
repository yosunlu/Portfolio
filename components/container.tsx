export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row max-w-[100%] ml-10 sm:ml-20 space-x-20">
      {children}
    </div>
  );
}