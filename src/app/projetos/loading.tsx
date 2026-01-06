export default function LoadingProjetos() {
  return (
    <main className="px-6 py-20 max-w-5xl mx-auto animate-pulse">
      {/* Header */}
      <div className="mb-20">
        <div className="h-10 w-40 bg-slate-800 rounded mb-4" />
        <div className="h-4 w-96 bg-slate-800 rounded" />
      </div>

      {/* Cards */}
      <div className="space-y-16">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="border border-slate-800 rounded-xl p-8 bg-slate-900"
          >
            <div className="h-6 w-64 bg-slate-800 rounded mb-3" />
            <div className="h-4 w-40 bg-slate-800 rounded mb-6" />

            <div className="space-y-3 mb-6">
              <div className="h-4 w-full bg-slate-800 rounded" />
              <div className="h-4 w-5/6 bg-slate-800 rounded" />
              <div className="h-4 w-4/6 bg-slate-800 rounded" />
            </div>

            <div className="flex gap-3 mb-4">
              {[1, 2, 3, 4].map((tech) => (
                <div
                  key={tech}
                  className="h-6 w-20 bg-slate-800 rounded"
                />
              ))}
            </div>

            <div className="h-4 w-32 bg-slate-800 rounded" />
          </div>
        ))}
      </div>
    </main>
  );
}
