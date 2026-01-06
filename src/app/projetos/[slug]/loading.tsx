export default function LoadingProjeto() {
  return (
    <main className="px-6 py-20 max-w-4xl mx-auto animate-pulse">
      {/* Back link */}
      <div className="h-4 w-40 bg-slate-800 rounded mb-10" />

      {/* Title */}
      <div className="h-10 w-3/4 bg-slate-800 rounded mb-4" />
      <div className="h-4 w-48 bg-slate-800 rounded mb-10" />

      {/* Description */}
      <div className="space-y-3 mb-12">
        <div className="h-4 w-full bg-slate-800 rounded" />
        <div className="h-4 w-5/6 bg-slate-800 rounded" />
        <div className="h-4 w-4/6 bg-slate-800 rounded" />
      </div>

      {/* Role */}
      <div className="h-6 w-32 bg-slate-800 rounded mb-4" />
      <div className="space-y-3 mb-12">
        <div className="h-4 w-full bg-slate-800 rounded" />
        <div className="h-4 w-5/6 bg-slate-800 rounded" />
      </div>

      {/* Techs */}
      <div className="h-6 w-40 bg-slate-800 rounded mb-4" />
      <div className="flex flex-wrap gap-3 mb-12">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="h-6 w-24 bg-slate-800 rounded"
          />
        ))}
      </div>

      {/* Button */}
      <div className="h-12 w-40 bg-slate-800 rounded" />
    </main>
  );
}
