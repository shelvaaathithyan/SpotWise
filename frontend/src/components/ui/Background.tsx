export function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#F8FAFC]">
      {/* Tiny Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(to right, #0F172A 1px, transparent 1px), linear-gradient(to bottom, #0F172A 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Soft blur blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-40 right-1/4 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute -bottom-40 left-1/3 w-[800px] h-[600px] bg-amber-200/20 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-pulse" style={{ animationDuration: '12s' }} />
      
      {/* Bottom fade out to solid color */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFC]" />
    </div>
  );
}
