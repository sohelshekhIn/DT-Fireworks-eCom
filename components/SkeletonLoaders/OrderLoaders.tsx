export const MyOrderLoaderSkeleton = () => {
  return (
    // skeleton loader
    <div className="w-full">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow">
        <div className="mb-4 flex items-center space-x-2">
          <div className="h-4 w-20 animate-pulse rounded bg-gray-300"></div>
          <span>/</span>
          <div className="h-4 w-20 animate-pulse rounded bg-gray-300"></div>
          <span>/</span>
          <div className="h-4 w-40 animate-pulse rounded bg-gray-300"></div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="h-6 w-56 animate-pulse rounded bg-gray-300"></div>
          <div className="h-6 w-24 animate-pulse rounded bg-gray-300"></div>
        </div>

        <div className="mb-4">
          <div className="mb-2 h-6 w-40 animate-pulse rounded bg-gray-300"></div>
          <div className="mb-1 h-4 w-32 animate-pulse rounded bg-gray-300"></div>
          <div className="mb-1 h-4 w-64 animate-pulse rounded bg-gray-300"></div>
          <div className="h-4 w-48 animate-pulse rounded bg-gray-300"></div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="mb-1 h-4 w-16 animate-pulse rounded bg-gray-300"></div>
            <div className="h-6 w-20 animate-pulse rounded bg-gray-300"></div>
          </div>
          <div>
            <div className="mb-1 h-4 w-16 animate-pulse rounded bg-gray-300"></div>
            <div className="h-6 w-24 animate-pulse rounded bg-gray-300"></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="mb-2 h-4 w-32 animate-pulse rounded bg-gray-300"></div>
          <div className="flex space-x-4">
            <div className="h-8 flex-1 animate-pulse rounded-full bg-gray-300"></div>
            <div className="h-8 flex-1 animate-pulse rounded-full bg-gray-300"></div>
            <div className="h-8 flex-1 animate-pulse rounded-full bg-gray-300"></div>
            <div className="h-8 flex-1 animate-pulse rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-2 h-6 w-24 rounded bg-gray-300"></div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded bg-gray-300"></div>
              <div className="flex-1">
                <div className="mb-2 h-4 w-32 rounded bg-gray-300"></div>
                <div className="h-4 w-20 rounded bg-gray-300"></div>
              </div>
              <div className="h-6 w-12 rounded bg-gray-300"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded bg-gray-300"></div>
              <div className="flex-1">
                <div className="mb-2 h-4 w-32 rounded bg-gray-300"></div>
                <div className="h-4 w-20 rounded bg-gray-300"></div>
              </div>
              <div className="h-6 w-12 rounded bg-gray-300"></div>
            </div>
          </div>
        </div>
        {/* Summary section */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="h-4 w-24 rounded bg-gray-300"></div>
            <div className="h-4 w-16 rounded bg-gray-300"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-24 rounded bg-gray-300"></div>
            <div className="h-4 w-16 rounded bg-gray-300"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-24 rounded bg-gray-300"></div>
            <div className="h-4 w-16 rounded bg-gray-300"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-24 rounded bg-gray-300"></div>
            <div className="h-4 w-16 rounded bg-gray-300"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-24 rounded bg-gray-300"></div>
            <div className="h-4 w-16 rounded bg-gray-300"></div>
          </div>
          <div className="flex justify-between font-bold">
            <div className="h-4 w-24 rounded bg-gray-300"></div>
            <div className="h-4 w-20 rounded bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MyOrdersCardSkeleton = () => {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-2xl animate-pulse items-center justify-between rounded-lg bg-white p-6 shadow">
        <div className="space-y-2">
          <div className="h-6 w-48 rounded bg-gray-300"></div>
          <div className="h-4 w-32 rounded bg-gray-300"></div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <div className="h-4 w-16 rounded bg-gray-300"></div>
          <div className="h-6 w-24 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};
