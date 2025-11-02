import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import StoneDivider from "@/components/StoneDivider";

export const metadata: Metadata = {
  title: "Blog - Vedic Priest Mumbai",
  description: "Articles about festivals, muhurats, and Vedic rituals.",
};

const blogPosts = [
  {
    slug: "importance-of-muhurat",
    title: "Understanding Muhurat: Auspicious Timings in Vedic Rituals",
    excerpt: "Learn about the significance of choosing the right time for your ceremonies.",
    date: "2024-01-15",
  },
  {
    slug: "festival-calendar-2024",
    title: "Hindu Festival Calendar 2024",
    excerpt: "Important dates and festivals to mark in your calendar.",
    date: "2024-01-10",
  },
  {
    slug: "preparing-for-puja",
    title: "How to Prepare for a Puja",
    excerpt: "A guide to what you need and how to prepare for your ceremony.",
    date: "2024-01-05",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-20 pb-12 stone-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-indigo-900 mb-4">
              Blog
            </h1>
            <p className="text-xl text-text-muted">
              Insights on festivals, rituals, and Vedic traditions
            </p>
          </div>
        </div>
        <StoneDivider className="max-w-md mx-auto mt-8" />
      </section>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-temple-stone-200 pb-8 last:border-0"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <h2 className="font-heading text-2xl font-semibold text-deep-indigo-900 mb-2 group-hover:text-saffron-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-muted mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-text-muted">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-sm text-saffron-600 group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

