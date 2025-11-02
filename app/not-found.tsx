import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-deep-indigo-900 mb-4">
          404
        </h1>
        <p className="text-xl text-text-muted mb-8">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-saffron-600 text-white rounded-md hover:bg-saffron-600/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

