import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 shadow-lg flex-shrink-0">
        <div className="mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="font-oxanium text-2xl font-bold leading-[100%] tracking-[-0.45px] text-fairflow-blue">
              CrediWork
            </h1>
            <p className="font-istok text-sm leading-[100%] tracking-[-0.2px] text-gray-600 font-medium">
              Signed in as Group member
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-8">
              <a href="#" className="font-inter text-base text-fairflow-blue hover:text-blue-700 transition-colors font-medium">
                Notifications
              </a>
              <a href="#" className="font-inter text-base text-fairflow-blue hover:text-blue-700 transition-colors font-medium">
                Contributions
              </a>
              <a href="#" className="font-inter text-base text-fairflow-blue hover:text-blue-700 transition-colors font-medium">
                My profile
              </a>
            </nav>
            
            <button className="bg-fairflow-blue text-white font-inter text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
              Signout →
            </button>
          </div>
        </div>
      </header>

      {/* Main Content - Scrollable Content Area */}
      <div className="flex-1 px-8 py-8 overflow-y-auto flex flex-col" style={{ backgroundColor: '#8BB5D1' }}>
        <div className="flex flex-col gap-8">
          {/* Top Section - Team Overview and Top Contributors */}
          <div className="rounded-3xl p-12 shadow-sm" style={{ backgroundColor: 'rgba(232,246,250,0.95)' }}>
            <div className="grid grid-cols-2 gap-12">
              {/* Left: Team Overview */}
              <div className="bg-fairflow-blue rounded-2xl p-8 shadow-sm">
                <h2 className="font-oxanium text-2xl font-semibold mb-6 text-white">Team Overview</h2>
                <div className="space-y-4 font-inter text-base text-white">
                  <p>Hello User...</p>
                  <p><span className="font-semibold">Team:</span> FutureHack</p>
                  <p><span className="font-semibold">Members:</span> 4</p>
                  <p>
                    <span className="font-semibold">Project Status:</span>{" "}
                    <span className="text-green-300 font-bold">Active</span>
                  </p>
                  <p><span className="font-semibold">Last Sync:</span> 10 minutes ago</p>
                </div>
              </div>

              {/* Right: Top Contributors */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-oxanium text-2xl font-semibold mb-6 text-gray-800">Top Contributors</h3>
                <div className="flex items-center gap-8">
                  <div className="flex-1 space-y-3 font-inter text-base text-gray-700">
                    <p>1. User1 - <span className="font-bold">45%</span></p>
                    <p>2. User2 - <span className="font-bold">25%</span></p>
                    <p>3. User3 - <span className="font-bold">20%</span></p>
                    <p>4. User4 - <span className="font-bold">10%</span></p>
                  </div>
                  <div className="relative flex-shrink-0 w-64 h-64">
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

                    {/* User Labels inside the pie segments - positioned in center of each segment */}
                    {/* User4 - Top left segment (10% - smallest) */}
                    <div className="absolute top-[20%] left-[26%] font-inter text-sm font-semibold text-gray-800 whitespace-nowrap">User4</div>
                    {/* User1 - Top right segment (45% - largest) */}
                    <div className="absolute top-[42%] right-[20%] font-inter text-sm font-semibold text-gray-800 whitespace-nowrap">User1</div>
                    {/* User3 - Bottom left segment (20%) */}
                    <div className="absolute bottom-[46%] left-[16%] font-inter text-sm font-semibold text-gray-800 whitespace-nowrap">User3</div>
                    {/* User2 - Bottom right segment (25%) */}
                    <div className="absolute bottom-[20%] right-[46%] font-inter text-sm font-semibold text-gray-800 whitespace-nowrap">User2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - three columns: Recents, Fairness Insights, Contribution Sources */}
          <div className="rounded-3xl p-12 shadow-sm" style={{ backgroundColor: 'rgba(232,246,250,0.95)' }}>
            <div className="grid grid-cols-3 gap-6">
              {/* Recents */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-oxanium text-xl font-semibold mb-4 text-gray-800">Recents:</h3>
                <ul className="space-y-3 mt-4 font-inter text-sm text-gray-700 list-disc list-inside">
                  <li>User1 pushed GitHub commit</li>
                  <li>User3 edited Google Doc</li>
                  <li>User2 updated Figma design</li>
                  <li>Website page modified</li>
                </ul>
              </div>

              {/* Fairness Insights */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-oxanium text-xl font-semibold mb-4 text-gray-800">Fairness Insights</h3>
                <div className="font-inter text-base space-y-4 text-gray-700 leading-relaxed mt-4">
                  <p className="flex items-start gap-3">
                    <span className="text-green-600 flex-shrink-0 font-bold text-xl">✓</span>
                    <span>Contribution balance: <span className="font-bold text-green-700">Good</span></span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="flex-shrink-0 font-bold text-xl text-red-500">–</span>
                    <span>User4 low activity detected</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-green-600 flex-shrink-0 font-bold text-xl">✓</span>
                    <span>Team collaboration <span className="font-bold text-green-700">consistent</span></span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="flex-shrink-0 font-bold text-xl text-red-500">–</span>
                    <span>Large gap in contribution size</span>
                  </p>
                </div>
              </div>

              {/* Contribution Sources */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-oxanium text-xl font-semibold mb-4 text-gray-800">Contribution Sources:</h3>
                <div className="space-y-4 mt-4 font-inter text-base">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-gray-700">GitHub</span>
                    <div className="flex items-center gap-3">
                      <div className="w-52 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400" style={{ width: '40%' }}></div>
                      </div>
                      <span className="text-gray-700 font-semibold w-12 text-right">40%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-gray-700">Google Docs</span>
                    <div className="flex items-center gap-3">
                      <div className="w-52 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400" style={{ width: '30%' }}></div>
                      </div>
                      <span className="text-gray-700 font-semibold w-12 text-right">30%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-gray-700">Figma</span>
                    <div className="flex items-center gap-3">
                      <div className="w-52 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400" style={{ width: '20%' }}></div>
                      </div>
                      <span className="text-gray-700 font-semibold w-12 text-right">20%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-gray-700">Notion</span>
                    <div className="flex items-center gap-3">
                      <div className="w-52 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400" style={{ width: '10%' }}></div>
                      </div>
                      <span className="text-gray-700 font-semibold w-12 text-right">10%</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>

      {/* Bottom Navigation */}
      <div className="bg-fairflow-blue shadow-md flex items-center justify-center gap-20 py-4 px-8 flex-shrink-0">
        <button 
          onClick={() => navigate("/")}
          className="font-inter text-base font-bold text-white underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity">
          Dashboard
        </button>
        <button 
          onClick={() => navigate("/integrate")}
          className="font-inter text-base font-medium text-white hover:text-blue-100 hover:font-bold transition-all">
          Integrate
        </button>
        <button className="font-inter text-base font-medium text-white hover:text-blue-100 hover:font-bold transition-all">
          Reports
        </button>
        <div className="ml-auto">
          <button className="w-12 h-12 rounded-full bg-white text-fairflow-blue font-inter font-bold flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200 shadow-lg text-base">
            ?
          </button>
        </div>
      </div>
    </div>
  );
}
