import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0E15] text-[#e3e1ec] font-inter selection:bg-[#00F0FF] selection:text-[#0D0E15]">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0D0E15]/80 backdrop-blur-md border-b border-[#3b494b]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-space-grotesk text-2xl font-bold tracking-widest text-[#00F0FF]">STAKE.SYNTH</div>
          <div className="hidden md:flex gap-8 font-space-grotesk text-sm uppercase tracking-widest">
            <a href="#features" className="hover:text-[#00F0FF] transition-colors">Features</a>
            <a href="#pricing" className="hover:text-[#00F0FF] transition-colors">Tiers</a>
            <a href="#staking" className="hover:text-[#00F0FF] transition-colors">Protocol</a>
          </div>
          <button className="px-6 py-2 bg-[#00F0FF]/10 border border-[#00F0FF] text-[#00F0FF] font-space-grotesk uppercase tracking-widest text-sm hover:bg-[#00F0FF] hover:text-[#0D0E15] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00F0FF] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-1 mb-6 border border-[#FF003C]/30 bg-[#FF003C]/10 text-[#FF003C] font-space-grotesk text-sm uppercase tracking-widest">
              V2 Protocol Live
            </div>
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tighter mb-6 leading-tight">
              YIELD <br/>GENERATION <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00dbe9]">REIMAGINED.</span>
            </h1>
            <p className="text-xl text-[#b9cacb] mb-10 max-w-lg">
              Stake your assets in the cyber realm. Earn up to <strong className="text-[#00F0FF]">14.2% APY</strong> with ironclad smart contract security.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-[#FF003C] to-[#ff525c] text-white font-space-grotesk font-bold uppercase tracking-[0.2em] text-lg hover:shadow-[0_0_30px_rgba(255,0,60,0.4)] transition-all">
              START STAKING
            </button>
          </div>
          <div className="h-[500px] bg-[#1a1b22]/50 border border-[#3b494b]/30 backdrop-blur-sm relative flex items-center justify-center group overflow-hidden">
             {/* Spline Placeholder */}
             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,240,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[gradient_3s_linear_infinite]"></div>
             <p className="font-space-grotesk text-[#00F0FF] tracking-widest animate-pulse">[ 3D SPLINE SCENE: NEON COIN ROTATING ]</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-[#0a0b10] border-t border-b border-[#3b494b]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-space-grotesk font-bold uppercase tracking-widest text-[#e3e1ec]">Protocol Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {title: "HYPER-SWAP", desc: "Execute trades with zero slippage using our quantum-routing algorithm."},
              {title: "LIQUIDITY POOLS", desc: "Provide liquidity to earn dual-token rewards in real-time."},
              {title: "IRONCLAD SECURITY", desc: "Audited by top tier firms. Your assets are locked in the void, untouchable."}
            ].map((f, i) => (
              <div key={i} className="bg-[#1a1b22]/40 backdrop-blur-xl border border-[#00F0FF]/20 p-8 hover:border-[#00F0FF]/60 hover:bg-[#1a1b22]/80 transition-all group">
                <div className="w-12 h-12 bg-[#00F0FF]/10 flex items-center justify-center text-[#00F0FF] mb-6 font-mono text-xl group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">0{i+1}</div>
                <h3 className="text-xl font-space-grotesk font-bold text-[#00F0FF] mb-4 uppercase tracking-widest">{f.title}</h3>
                <p className="text-[#b9cacb] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Tiers */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-space-grotesk font-bold uppercase tracking-widest text-[#e3e1ec]">Access Tiers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
             {/* Free Tier */}
             <div className="bg-[#1a1b22]/40 border border-[#3b494b]/50 p-10">
               <h3 className="text-2xl font-space-grotesk text-[#b9cacb] uppercase tracking-widest mb-2">Standard</h3>
               <div className="text-5xl font-bold font-space-grotesk text-[#e3e1ec] mb-8">Free</div>
               <ul className="space-y-4 mb-10 text-[#b9cacb] font-inter">
                 <li className="flex gap-3">✓ 0.3% Swap Fee</li>
                 <li className="flex gap-3">✓ Standard APY Rates</li>
                 <li className="flex gap-3">✓ Basic Analytics</li>
               </ul>
               <button className="w-full py-3 border border-[#b9cacb] text-[#b9cacb] hover:bg-[#b9cacb] hover:text-[#0D0E15] font-space-grotesk uppercase tracking-widest transition-colors">Start Standard</button>
             </div>
             {/* Pro Tier */}
             <div className="bg-[#1e1f27] border-2 border-[#FF003C] p-12 relative shadow-[0_0_30px_rgba(255,0,60,0.15)] transform md:-translate-y-4">
               <div className="absolute top-0 right-0 bg-[#FF003C] text-white text-xs font-space-grotesk uppercase tracking-widest px-4 py-1">Recommended</div>
               <h3 className="text-2xl font-space-grotesk text-[#FF003C] uppercase tracking-widest mb-2">Pro Node</h3>
               <div className="text-5xl font-bold font-space-grotesk text-[#e3e1ec] mb-8">250 <span className="text-xl text-[#b9cacb] font-light">SYNTH/mo</span></div>
               <ul className="space-y-4 mb-10 text-[#e3e1ec] font-inter">
                 <li className="flex gap-3 text-[#FF003C]">✓ 0.05% Swap Fee</li>
                 <li className="flex gap-3">✓ 1.5x APY Multiplier</li>
                 <li className="flex gap-3">✓ Real-time On-chain Data</li>
               </ul>
               <button className="w-full py-4 bg-[#FF003C] text-white font-space-grotesk font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,0,60,0.4)] transition-shadow">Upgrade to Pro</button>
             </div>
          </div>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="py-32 bg-[#00F0FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-space-grotesk font-bold text-[#0D0E15] uppercase tracking-tighter mb-8 leading-none">
            JOIN THE <br/>CYBER REALM
          </h2>
          <p className="text-xl text-[#00363a] mb-10 font-medium">Stop waiting. Start earning.</p>
          <button className="px-12 py-5 bg-[#0D0E15] text-[#00F0FF] font-space-grotesk font-bold text-xl uppercase tracking-widest hover:bg-white hover:text-[#0D0E15] transition-colors">
            ENTER THE PROTOCOL
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#3b494b]/30 py-12 bg-[#0D0E15]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="font-space-grotesk text-xl font-bold tracking-widest text-[#b9cacb] mb-4 md:mb-0">STAKE.SYNTH © 2024</div>
          <div className="flex gap-6 font-mono text-sm text-[#b9cacb]">
            <a href="#" className="hover:text-[#00F0FF]">Twitter</a>
            <a href="#" className="hover:text-[#00F0FF]">Discord</a>
            <a href="#" className="hover:text-[#00F0FF]">Docs</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
