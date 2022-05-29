export default function PadFrame({ children }: { children: JSX.Element }) {
  return (
    <div className="py-16 grid grid-cols-3 gap-4 max-w-6xl">{children}</div>
  );
}
