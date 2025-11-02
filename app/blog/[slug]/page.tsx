import { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import StoneDivider from "@/components/StoneDivider";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// This would come from a CMS or content files in production
const blogPosts: Record<string, { title: string; date: string; content: string }> = {
  "importance-of-muhurat": {
    title: "Understanding Muhurat: Auspicious Timings in Vedic Rituals",
    date: "2024-01-15",
    content: `
      Muhurat is a Vedic concept that refers to an auspicious time period chosen for performing ceremonies and rituals. The selection of the right muhurat is considered crucial for the success and effectiveness of any Vedic ceremony.
      
      In Hindu tradition, time is not viewed as uniform. Different periods of time carry different energies, and performing rituals at the right time can enhance their spiritual benefits.
      
      Muhurat calculation takes into account various factors including:
      - Planetary positions
      - Tithi (lunar day)
      - Nakshatra (constellation)
      - Day of the week
      - Time of day
      
      When booking a puja or ceremony, we calculate the most auspicious muhurat based on these factors to ensure maximum benefit for the devotee.
    `,
  },
  "festival-calendar-2024": {
    title: "Hindu Festival Calendar 2024",
    date: "2024-01-10",
    content: `
      The Hindu calendar is rich with festivals and auspicious days throughout the year. Here are some key dates to remember in 2024.
      
      [This would contain a detailed calendar in production]
    `,
  },
  "preparing-for-puja": {
    title: "How to Prepare for a Puja",
    date: "2024-01-05",
    content: `
      Preparing for a puja involves both physical and mental preparation. Here&apos;s a guide to help you get ready for your ceremony.
      
      Physical Preparation:
      - Clean your home or puja space
      - Gather necessary items as per the service requirements
      - Arrange seating for participants
      
      Mental Preparation:
      - Set your intention for the ceremony
      - Approach the ritual with devotion and respect
      - Follow any pre-ceremony observances recommended
      
      The priest will provide a detailed list of items needed for your specific ceremony when you book.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Blog`,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="relative pt-20 pb-12 stone-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-indigo-900 mb-4">
              {post.title}
            </h1>
            <time className="text-text-muted">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
        <StoneDivider className="max-w-md mx-auto mt-8" />
      </section>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-text-muted leading-relaxed">
              {post.content}
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
