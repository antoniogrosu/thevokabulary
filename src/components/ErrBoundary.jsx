export default function ErrBoundary() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <div className="bg-myPurple p-4 rounded-xl w-8/12 mx-auto flex flex-col justify-center md:w-6/12 lg:w-3/12">
        <h1 className="font-semibold text-center mb-2">Word Not Found</h1>
        <button
          className="bg-gray-900 text-gray-50 px-4 py-2 rounded-sm"
          onClick={refreshPage}
        >
          Try Again
        </button>
      </div>
    </>
  );
}
