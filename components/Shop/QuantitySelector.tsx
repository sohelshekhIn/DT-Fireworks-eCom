const QuantitySelector = () => {
  return (
    <div
      className="py-2 px-3 my-4 bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700"
      data-hs-input-number='{
        "min": 1,
        "max" : 20
      }'
    >
      <div className="w-full flex justify-between items-center gap-x-3">
        <span className="block  py-2 font-medium text-sm text-gray-800 dark:text-white">
          Select Quantity
        </span>
        <div className="flex items-center gap-x-1.5">
          <button
            type="button"
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            data-hs-input-number-decrement="1"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
            </svg>
          </button>
          <input
            className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
            type="text"
            value="0"
            data-hs-input-number-input="1"
          />
          <button
            type="button"
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            data-hs-input-number-increment="1"
          >
            <svg
              className="flex-shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
