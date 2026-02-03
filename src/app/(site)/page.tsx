import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          {/* Logo/Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-sand mb-8">
            HOLDRY
          </h1>
          
          {/* Cryptic tagline */}
          <p className="text-xl md:text-2xl text-sand/60 font-light max-w-2xl leading-relaxed mb-16">
            Private operations across technology, infrastructure, and essential systems.
          </p>
          
          {/* Abstract capabilities - single line */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-sand/40 mb-20">
            <span>Infrastructure</span>
            <span className="text-sand/20">·</span>
            <span>Intelligence</span>
            <span className="text-sand/20">·</span>
            <span>Capital</span>
            <span className="text-sand/20">·</span>
            <span>Operations</span>
          </div>
        </div>
        
        {/* Manifesto section */}
        <div className="border-t border-white/10 pt-16 max-w-2xl">
          <p className="text-lg md:text-xl text-sand/50 leading-relaxed">
            We build, acquire, and operate within sectors that compound over decades. 
            Our work is private. Our timelines are long.
          </p>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-sand/40">
        <div className="flex items-center gap-6">
          <span>Los Angeles</span>
          <span className="text-sand/20">·</span>
          <span>Private</span>
        </div>
        <Link 
          href="/contact" 
          className="text-sand/60 hover:text-sand transition-colors duration-300"
        >
          Inquiries →
        </Link>
      </footer>
    </div>
  );
}
