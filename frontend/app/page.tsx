import Navbar from './components/Navbar';
import Link from 'next/link';
import TypeWriterText from './components/TypeWriterText';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-yellow-400">
            <TypeWriterText />
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create your personalized NFT trading persona powered by AI.
            Let artificial intelligence optimize your trading strategies and maximize your returns.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Create Your Trading Persona"
            description="Generate a unique NFT that represents your trading personality and preferences."
            link="/create-nft"
          />
          <FeatureCard
            title="AI-Powered Trading"
            description="Let our AI model analyze and optimize your trading strategies automatically."
            link="/trading-history"
          />
          {/* TODO: Add leaderboard */}
          <FeatureCard
            title="Track Performance"
            description="Monitor your trading performance and compare with other traders on the leaderboard."
            link="/leaderboard"
          />
        </section>
      </main>
    </div>
  );
}

const FeatureCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
  <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    <p className="text-gray-400 mb-4">{description}</p>
    <Link
      href={link}
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      Get Started
    </Link>
  </div>
);
