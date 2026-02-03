import Link from "next/link";

export default function IntroducingHoldry() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-20">
        <article className="max-w-3xl">
          <Link 
            href="/insights" 
            className="text-sm font-medium tracking-[0.2em] uppercase text-sand/40 hover:text-sand/60 transition-colors mb-12 inline-block"
          >
            ← Insights
          </Link>
          
          <header className="mb-12">
            <div className="flex items-center gap-4 text-xs text-sand/40 mb-4">
              <time>2026-02-03</time>
              <span>·</span>
              <span>4 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-sand mb-6">
              Introducing HOLDRY: An AI-Native Holding Company
            </h1>
            <p className="text-xl text-sand/60 leading-relaxed">
              What happens when artificial intelligence runs business operations? We are building the first AI-native holding company to find out.
            </p>
          </header>
          
          <div className="prose prose-invert prose-sand max-w-none space-y-6 text-sand/70 leading-relaxed">
            <p>
              HOLDRY is an experiment in AI-augmented business operations. The premise is simple: what if an AI system handled the day-to-day operations of a holding company?
            </p>
            
            <p>
              Not as a novelty. Not as a demo. As the actual operating model.
            </p>
            
            <h2 className="text-2xl font-bold text-sand mt-12 mb-4">The Thesis</h2>
            
            <p>
              Most businesses run on human attention. Emails, scheduling, research, analysis, follow-ups, documentation—all of it requires someone to do the work. That attention is finite and expensive.
            </p>
            
            <p>
              AI changes the economics. An AI system can monitor, analyze, and act on information continuously. It does not get tired. It does not forget. It can hold context across months of conversations and thousands of documents.
            </p>
            
            <p>
              HOLDRY is built to test how far this can go. We are using AI to:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Manage communications and scheduling</li>
              <li>Research markets, companies, and opportunities</li>
              <li>Analyze documents and extract insights</li>
              <li>Draft correspondence and reports</li>
              <li>Maintain institutional memory across all operations</li>
              <li>Eventually, help source and evaluate acquisitions</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-sand mt-12 mb-4">What We Are Building</h2>
            
            <p>
              The AI system behind HOLDRY—internally called Thoth—is a custom-built agent running on Claude. It has persistent memory, access to our tools and data, and the ability to take actions on our behalf.
            </p>
            
            <p>
              Thoth is not a chatbot. It is an operating system for the business. It wakes up, checks what needs attention, does the work, and reports back. It learns from corrections and improves over time.
            </p>
            
            <h2 className="text-2xl font-bold text-sand mt-12 mb-4">Why Share This?</h2>
            
            <p>
              Because the question "what can AI actually do in business?" is interesting, and most answers are either hype or dismissal. We want to show what actually works, what fails, and what we learn along the way.
            </p>
            
            <p>
              If you are building something similar, or curious about AI operations, follow along. We will share the real numbers, the real failures, and the real progress.
            </p>
            
            <div className="border-t border-white/10 mt-12 pt-8">
              <p className="text-sand/50">
                This is the beginning. More to come.
              </p>
            </div>
          </div>
          
          {/* Email capture */}
          <div className="mt-16 p-8 border border-white/10 rounded-2xl bg-white/5">
            <p className="text-sand/60 mb-4">
              Follow our progress. Weekly updates on what we are building.
            </p>
            <form 
              action="https://buttondown.com/api/emails/embed-subscribe/holdry"
              method="post"
              target="_blank"
              className="flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sand placeholder:text-sand/30 focus:outline-none focus:border-white/30 transition-colors"
              />
              <button
                type="submit"
                className="bg-sand text-charcoal font-semibold px-6 py-3 rounded-lg hover:bg-sand/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </article>
      </main>

      <footer className="px-6 md:px-12 lg:px-24 py-8 text-sm text-sand/40">
        <span>HOLDRY · AI-Native</span>
      </footer>
    </div>
  );
}
