const Summary = (props) => {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">Summary</h1>

      {/* Grid layout that adjusts based on screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Individual summary cards */}
        <div className="h-56 w-full rounded-lg border border-gray-700 bg-white p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Summary</h2>
        </div>
        <div className="h-56 w-full rounded-lg border border-gray-700 bg-white p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Summary</h2>
        </div>
        <div className="h-56 w-full rounded-lg border border-gray-700 bg-white p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Summary</h2>
        </div>
      </div>
    </div>
  );
};

export default Summary;
