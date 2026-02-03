import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-2xl">
          <Link 
            href="/" 
            className="text-sm font-medium tracking-[0.2em] uppercase text-sand/40 hover:text-sand/60 transition-colors mb-16 inline-block"
          >
            ← Back
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-sand mb-8">
            Inquiries
          </h1>
          
          <p className="text-lg text-sand/50 leading-relaxed mb-12">
            For partnership opportunities, investment discussions, or general inquiries.
          </p>
          
          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-sand/40 mb-2">Email</p>
              <a 
                href="mailto:noah@holdry.com" 
                className="text-xl text-sand hover:text-sand/70 transition-colors"
              >
                noah@holdry.com
              </a>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <p className="text-sm text-sand/40">
                All inquiries are treated with discretion.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="px-6 md:px-12 lg:px-24 py-8 text-sm text-sand/40">
        <span>Los Angeles · Private</span>
      </footer>
    </div>
  );
}
