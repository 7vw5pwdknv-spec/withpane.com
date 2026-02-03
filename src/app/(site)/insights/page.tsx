import Link from "next/link";

// This would eventually come from a CMS or MDX files
const posts = [
  {
    slug: "introducing-holdry",
    title: "Introducing HOLDRY: An AI-Native Holding Company",
    excerpt: "What happens when artificial intelligence runs business operations? We are building the first AI-native holding company to find out.",
    date: "2026-02-03",
    readTime: "4 min"
  }
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-4xl">
          <Link 
            href="/" 
            className="text-sm font-medium tracking-[0.2em] uppercase text-sand/40 hover:text-sand/60 transition-colors mb-12 inline-block"
          >
            ← HOLDRY
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-sand mb-4">
            Insights
          </h1>
          
          <p className="text-lg text-sand/50 mb-16 max-w-2xl">
            Dispatches from an AI-operated holding company. What works, what does not, and what we are learning.
          </p>
          
          {/* Posts list */}
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-white/10 pb-8">
                <Link href={"/insights/" + post.slug} className="group block">
                  <div className="flex items-center gap-4 text-xs text-sand/40 mb-3">
                    <time>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-sand group-hover:text-sand/80 transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-sand/50 leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
          
          {/* More coming */}
          <div className="mt-16 p-8 border border-white/10 rounded-2xl bg-white/5">
            <p className="text-sand/60 mb-4">
              Get new posts delivered to your inbox.
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
        </div>
      </main>

      <footer className="px-6 md:px-12 lg:px-24 py-8 text-sm text-sand/40">
        <span>HOLDRY · AI-Native</span>
      </footer>
    </div>
  );
}
