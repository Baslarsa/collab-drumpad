import ElkLogo from "./ElkLogo";

export default function Header({
  id,
  clearId,
}: {
  id: string;
  clearId: () => void;
}) {
  return (
    <div className="w-full p-5 flex justify-between">
      <div className="text-left">
        <ElkLogo />
        <h2 className="text-white font-bold">Collab Drumpad</h2>
      </div>
      {id && (
        <div className="flex items-center">
          <p>
            <span className="font-bold">Room ID:</span>&nbsp;{id}
          </p>
          <button
            onClick={clearId}
            className="inline-flex my-2 ml-4 items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700"
          >
            Switch Room
          </button>
        </div>
      )}
    </div>
  );
}
