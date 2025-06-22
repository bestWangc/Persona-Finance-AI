import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import TechComparison from './components/TechComparison';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';

export default function Home() {
  return (
    <div className="min-h-screen  from-deep-space to-space-dark text-text-light relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-40 z-[-2]"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxwYXRoIGQ9Ik0gMTAgMTAgTCAxMCAxMCBMIDEwIDEwIEwgMTAgMTAgTCAxMCAxMCBMIDEwIDEwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDE4MCwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")`
        }}>
      </div>

      <Navbar />
      <Hero />
      <ValueProposition />
      <TechComparison />
      <Ecosystem />
      <Roadmap />
    </div>
  );
}
