import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0E15] text-[#e3e1ec] font-inter">
      {/* Top Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-[#3b494b] border-opacity-30 bg-[#1a1b22] bg-opacity-70 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-space-grotesk font-bold text-[#00F0FF] tracking-widest">CRYPTO-STAKING-DASH</div>
        <button className="px-6 py-2 bg-[#006970] text-[#dbfcff] font-space-grotesk tracking-widest hover:bg-[#00f0ff] hover:text-[#002022] hover:shadow-[0_0_20px_#00f0ff] transition-all duration-300">
          CONNECT WALLET
        </button>
      </nav>

      <div className="flex">
        {/* Side Navbar */}
        <aside className="w-64 border-r border-[#3b494b] border-opacity-30 p-6 min-h-[calc(100vh-80px)]">
          <ul className="space-y-4 font-space-grotesk tracking-wider">
            <li className="text-[#00F0FF] flex items-center gap-3">
              <span className="w-1 h-6 bg-[#00F0FF] inline-block shadow-[0_0_10px_#00F0FF]"></span>
              DASHBOARD
            </li>
            <li className="text-[#b9cacb] hover:text-[#e3e1ec] transition-colors cursor-pointer flex items-center gap-3 pl-4">
              POOLS
            </li>
            <li className="text-[#b9cacb] hover:text-[#e3e1ec] transition-colors cursor-pointer flex items-center gap-3 pl-4">
              SWAP
            </li>
            <li className="text-[#b9cacb] hover:text-[#e3e1ec] transition-colors cursor-pointer flex items-center gap-3 pl-4">
              ANALYTICS
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 p-10 space-y-10">
          
          {/* Hero Section: APY Counter */}
          <section className="bg-gradient-to-br from-[#1e1f27] to-[#12131a] p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#00f0ff] opacity-0 group-hover:opacity-5 transition-opacity duration-700 blur-3xl"></div>
            <h1 className="text-xl font-space-grotesk text-[#b9cacb] mb-2 tracking-widest uppercase">Global Network APY</h1>
            <div className="text-7xl font-space-grotesk font-bold text-[#00F0FF] drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]">
              124.5<span className="text-4xl">%</span>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Swap Card */}
            <section className="lg:col-span-1 bg-[#1a1b22] bg-opacity-70 backdrop-blur-md p-8 relative group hover:bg-opacity-90 transition-all">
               <div className="absolute top-0 left-0 w-1 h-full bg-[#FF003C] shadow-[0_0_15px_#FF003C]"></div>
               <h2 className="text-2xl font-space-grotesk mb-6 text-[#FF003C] tracking-widest uppercase">Rapid Swap</h2>
               
               <div className="space-y-6">
                 <div className="border-b-2 border-[#3b494b] pb-2 relative">
                   <label className="text-xs text-[#00F0FF] font-space-grotesk tracking-widest uppercase mb-1 block">Pay With</label>
                   <div className="flex justify-between items-end">
                     <input type="text" className="bg-transparent text-2xl outline-none w-full font-space-grotesk" placeholder="0.00" />
                     <span className="text-[#b9cacb] font-space-grotesk">ETH</span>
                   </div>
                 </div>

                 <div className="flex justify-center my-4">
                    <button className="w-8 h-8 rounded-full border border-[#3b494b] text-[#b9cacb] flex items-center justify-center hover:text-[#00F0FF] hover:border-[#00F0FF] transition-colors">
                      ↓
                    </button>
                 </div>

                 <div className="border-b-2 border-[#3b494b] pb-2 relative">
                   <label className="text-xs text-[#FF003C] font-space-grotesk tracking-widest uppercase mb-1 block">Receive</label>
                   <div className="flex justify-between items-end">
                     <input type="text" className="bg-transparent text-2xl outline-none w-full font-space-grotesk" placeholder="0.00" />
                     <span className="text-[#b9cacb] font-space-grotesk">USDC</span>
                   </div>
                 </div>

                 <button className="w-full mt-8 py-4 bg-[#FF003C] text-white font-space-grotesk tracking-widest hover:bg-[#ff525c] hover:shadow-[0_0_25px_rgba(255,0,60,0.6)] transition-all duration-300">
                    EXECUTE SWAP
                 </button>
               </div>
            </section>

            {/* Staking Pools Table */}
            <section className="lg:col-span-2">
              <h2 className="text-2xl font-space-grotesk mb-6 tracking-widest uppercase text-[#e3e1ec]">Active Pools</h2>
              <div className="bg-[#1a1b22] w-full">
                <table className="w-full text-left font-inter">
                  <thead className="bg-[#292931] font-space-grotesk text-[#b9cacb] text-sm uppercase tracking-wider">
                    <tr>
                      <th className="py-4 px-6">Asset</th>
                      <th className="py-4 px-6">TVL</th>
                      <th className="py-4 px-6">APY</th>
                      <th className="py-4 px-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#12131a]">
                    <tr className="hover:bg-[#1e1f27] transition-colors group">
                      <td className="py-5 px-6 font-space-grotesk flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-[#00F0FF] bg-opacity-20 flex items-center justify-center text-[#00F0FF]">E</div>
                         Ethereum
                      </td>
                      <td className="py-5 px-6 font-mono text-[#e3e1ec]">$1.2B</td>
                      <td className="py-5 px-6 font-mono text-[#00F0FF]">4.5%</td>
                      <td className="py-5 px-6 text-right">
                        <button className="text-[#00F0FF] border-b-2 border-[#00F0FF] border-opacity-50 hover:border-opacity-100 hover:shadow-[0_2px_10px_rgba(0,240,255,0.3)] pb-1 transition-all uppercase tracking-widest text-sm">
                          Stake Now
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-[#1e1f27] hover:bg-[#292931] transition-colors group">
                      <td className="py-5 px-6 font-space-grotesk flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-[#FF003C] bg-opacity-20 flex items-center justify-center text-[#FF003C]">S</div>
                         Solana
                      </td>
                      <td className="py-5 px-6 font-mono text-[#e3e1ec]">$450M</td>
                      <td className="py-5 px-6 font-mono text-[#00F0FF]">8.2%</td>
                      <td className="py-5 px-6 text-right">
                        <button className="text-[#00F0FF] border-b-2 border-[#00F0FF] border-opacity-50 hover:border-opacity-100 hover:shadow-[0_2px_10px_rgba(0,240,255,0.3)] pb-1 transition-all uppercase tracking-widest text-sm">
                          Stake Now
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#1e1f27] transition-colors group">
                      <td className="py-5 px-6 font-space-grotesk flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-white">U</div>
                         USDC
                      </td>
                      <td className="py-5 px-6 font-mono text-[#e3e1ec]">$890M</td>
                      <td className="py-5 px-6 font-mono text-[#00F0FF]">12.4%</td>
                      <td className="py-5 px-6 text-right">
                        <button className="text-[#00F0FF] border-b-2 border-[#00F0FF] border-opacity-50 hover:border-opacity-100 hover:shadow-[0_2px_10px_rgba(0,240,255,0.3)] pb-1 transition-all uppercase tracking-widest text-sm">
                          Stake Now
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
