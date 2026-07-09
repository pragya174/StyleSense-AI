function LoadingSpinner() {
  return (
    <div className="flex h-[450px] flex-col items-center justify-center">

      <div className="h-20 w-20 animate-spin rounded-full border-4 border-pink-600 border-t-transparent"></div>

      <h2 className="mt-8 text-2xl font-bold">
        Generating AI Preview...
      </h2>

      <p className="mt-3 text-slate-400">
        This usually takes 10-20 seconds.
      </p>

      <div className="mt-8 h-2 w-72 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full w-2/3 animate-pulse rounded-full bg-pink-600"></div>
      </div>

    </div>
  );
}

export default LoadingSpinner;