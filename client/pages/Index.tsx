export default function Index() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm flex-shrink-0">
        <div className="mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="font-oxanium text-3xl font-medium leading-[100%] tracking-[-0.45px] text-fairflow-blue">
              FairFlow
            </h1>
            <p className="font-istok text-sm leading-[100%] tracking-[-0.2px] opacity-80 text-black">
              Signed in as Group member
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <a href="#" className="font-inter text-sm text-fairflow-blue hover:opacity-80 transition-opacity">
                Notifications
              </a>
              <a href="#" className="font-inter text-sm text-fairflow-blue hover:opacity-80 transition-opacity">
                Contributions
              </a>
              <a href="#" className="font-inter text-sm text-fairflow-blue hover:opacity-80 transition-opacity">
                My profile
              </a>
            </nav>
            
            <button className="bg-fairflow-blue text-white font-inter text-xs font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
              Signout →
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <div className="bg-[rgba(107,162,196,0.46)] flex-1 px-8 py-6 overflow-hidden flex flex-col">
        <div className="h-full flex flex-col gap-4">
          {/* Top Section - User Info and Top Contributors in one card */}
          <div className="bg-[rgba(222,246,255,0.7)] rounded-xl p-6 flex-shrink-0">
            <div className="grid grid-cols-2 gap-8">
              {/* User Info */}
              <div className="font-instrument text-sm leading-tight">
                <p className="mb-2 text-xs">Hello User...</p>
                <p className="mb-1">
                  <span className="font-semibold">Team:</span> FutureHack
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Members:</span> 4
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Project Status:</span>{" "}
                  <span className="text-fairflow-green font-medium">Active</span>
                </p>
                <p>
                  <span className="font-semibold">Last Sync:</span> 10 minutes ago
                </p>
              </div>

              {/* Top Contributors with Pie Chart */}
              <div className="flex items-center gap-6 relative">
                <div className="flex-shrink-0">
                  <h3 className="font-instrument text-xs font-semibold mb-2">
                    Top Contributors
                  </h3>
                  <div className="font-instrument text-xs leading-tight space-y-0.5">
                    <p>User1 - 45%</p>
                    <p>User2 - 25%</p>
                    <p>User3 - 20%</p>
                    <p>User4 - 10%</p>
                  </div>
                </div>
                
                {/* Pie Chart with labels inside */}
                <div className="relative flex-shrink-0 w-40 h-40">
                  <svg viewBox="0 0 354 335" fill="none" className="opacity-95 w-full h-full">
                    <g opacity="0.95">
                      <mask id="path-1-inside-1" fill="white">
                        <path d="M177 0C274.754 0 354 74.9923 354 167.5C354 260.008 274.754 335 177 335C79.2456 335 0 260.008 0 167.5C0 74.9923 79.2456 0 177 0Z"/>
                      </mask>
                      <path d="M177 0C274.754 0 354 74.9923 354 167.5C354 260.008 274.754 335 177 335C79.2456 335 0 260.008 0 167.5C0 74.9923 79.2456 0 177 0Z" fill="#D9D9D9"/>
                      <path d="M177 0V3C273.256 3 351 76.8029 351 167.5H354H357C357 73.1817 276.253 -3 177 -3V0ZM354 167.5H351C351 258.197 273.256 332 177 332V335V338C276.253 338 357 261.818 357 167.5H354ZM177 335V332C80.7444 332 3 258.197 3 167.5H0H-3C-3 261.818 77.7468 338 177 338V335ZM0 167.5H3C3 76.8029 80.7444 3 177 3V0V-3C77.7468 -3 -3 73.1817 -3 167.5H0Z" fill="#6BA2C4" mask="url(#path-1-inside-1)"/>
                    </g>
                    {/* Division lines */}
                    <line x1="177" y1="167.5" x2="177" y2="0" stroke="white" strokeWidth="3"/>
                    <line x1="177" y1="167.5" x2="241" y2="327.5" stroke="white" strokeWidth="3"/>
                    <line x1="177" y1="167.5" x2="40" y2="283.5" stroke="white" strokeWidth="3"/>
                    <line x1="177" y1="167.5" x2="40" y2="71.5" stroke="white" strokeWidth="3"/>
                  </svg>
                  
                  {/* User Labels inside the pie segments */}
                  <div className="absolute top-[15%] left-[30%] font-inter text-[10px] font-medium">User4</div>
                  <div className="absolute top-[40%] right-[10%] font-inter text-[10px] font-medium">User1</div>
                  <div className="absolute top-[45%] left-[5%] font-inter text-[10px] font-medium">User3</div>
                  <div className="absolute bottom-[15%] left-[35%] font-inter text-[10px] font-medium">User2</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - All three sections in one large card */}
          <div className="bg-[rgba(222,246,255,0.7)] rounded-xl p-6 flex-1 overflow-hidden">
            <div className="grid grid-cols-12 gap-6 h-full">
              {/* Recents */}
              <div className="col-span-4">
                <div className="font-instrument text-xs leading-relaxed">
                  <h3 className="font-bold mb-3 text-xs">Recents:</h3>
                  <ul className="font-medium space-y-1.5 text-xs">
                    <li>• User1 pushed GitHub commit</li>
                    <li>• User3 edited Google Doc</li>
                    <li>• User2 updated Figma design</li>
                    <li>• Website page modified</li>
                  </ul>
                </div>
              </div>

              {/* Fairness Insights */}
              <div className="col-span-4">
                <h3 className="font-instrument text-xs font-bold mb-3">Fairness Insights</h3>
                <div className="font-instrument text-xs space-y-2">
                  <p className="flex items-start gap-1.5">
                    <span className="text-green-600 flex-shrink-0 text-xs">✓</span>
                    <span>Contribution balance: Good</span>
                  </p>
                  <p className="flex items-start gap-1.5">
                    <span className="flex-shrink-0 text-xs">-</span>
                    <span>User4 low activity detected</span>
                  </p>
                  <p className="flex items-start gap-1.5">
                    <span className="text-green-600 flex-shrink-0 text-xs">✓</span>
                    <span>Team collaboration consistent</span>
                  </p>
                  <p className="flex items-start gap-1.5">
                    <span className="flex-shrink-0 text-xs">-</span>
                    <span>Large gap in contribution size</span>
                  </p>
                </div>
              </div>

              {/* Contribution Sources */}
              <div className="col-span-4">
                <h3 className="font-instrument text-xs font-bold mb-3">Contribution Sources:</h3>
                <div className="space-y-2 font-instrument text-xs font-medium">
                  <div className="flex items-center justify-between gap-2">
                    <span className="w-20 flex-shrink-0">GitHub</span>
                    <div className="flex items-center gap-2 flex-1">
                      <div className="flex-1 h-3 bg-gray-300 rounded-sm overflow-hidden min-w-12">
                        <div className="h-full bg-gray-400" style={{ width: '40%' }}></div>
                      </div>
                      <span className="w-8 flex-shrink-0">40%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between gap-2">
                    <span className="w-20 flex-shrink-0">Google Docs</span>
                    <div className="flex items-center gap-2 flex-1">
                      <div className="flex-1 h-3 bg-gray-300 rounded-sm overflow-hidden min-w-12">
                        <div className="h-full bg-gray-400" style={{ width: '30%' }}></div>
                      </div>
                      <span className="w-8 flex-shrink-0">30%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between gap-2">
                    <span className="w-20 flex-shrink-0">Figma</span>
                    <div className="flex items-center gap-2 flex-1">
                      <div className="flex-1 h-3 bg-gray-300 rounded-sm overflow-hidden min-w-12">
                        <div className="h-full bg-gray-400" style={{ width: '20%' }}></div>
                      </div>
                      <span className="w-8 flex-shrink-0">20%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between gap-2">
                    <span className="w-20 flex-shrink-0">Notion</span>
                    <div className="flex items-center gap-2 flex-1">
                      <div className="flex-1 h-3 bg-gray-300 rounded-sm overflow-hidden min-w-12">
                        <div className="h-full bg-gray-400" style={{ width: '10%' }}></div>
                      </div>
                      <span className="w-8 flex-shrink-0">10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-fairflow-blue opacity-85 rounded-t-3xl flex items-center justify-around py-3 px-8 flex-shrink-0 shadow-lg mt-auto">
        <button className="font-instrument text-xs font-medium text-white underline decoration-2 underline-offset-2 hover:opacity-80 transition-opacity drop-shadow-lg">
          Dashboard
        </button>
        <button className="font-instrument text-xs font-medium text-white hover:opacity-80 transition-opacity drop-shadow-lg">
          Integrate
        </button>
        <button className="font-instrument text-xs font-medium text-white hover:opacity-80 transition-opacity drop-shadow-lg">
          Reports
        </button>
      </div>
    </div>
  );
}
