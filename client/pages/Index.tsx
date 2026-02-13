                {/* Pie Chart with labels inside */}
                <div className="relative flex-shrink-0 w-48 h-48">
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
                  <div className="absolute top-[15%] left-[30%] font-inter text-sm font-medium text-gray-700">User4</div>
                  <div className="absolute top-[40%] right-[10%] font-inter text-sm font-medium text-gray-700">User1</div>
                  <div className="absolute top-[45%] left-[5%] font-inter text-sm font-medium text-gray-700">User3</div>
                  <div className="absolute bottom-[15%] left-[35%] font-inter text-sm font-medium text-gray-700">User2</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - three columns: Recents, Fairness Insights, Contribution Sources */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Recents</h3>
              <div className="space-y-3 mt-4 font-inter text-sm text-gray-700">
                <p>Uploaded dataset.csv</p>
                <p>Trained model v1.02</p>
                <p>Updated labels</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Fairness Insights</h3>
              <div className="space-y-3 mt-4 font-inter text-sm text-gray-700">
                <p>Accuracy disparity: 4%</p>
                <p>Demographic parity: 89%</p>
                <p>Calibration: Good</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">Contribution Sources</h3>
              <div className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="font-inter text-sm text-gray-700">Docs</span>
                  <div className="w-52 bg-gray-200 h-3 rounded-full overflow-hidden ml-4">
                    <div className="h-3 bg-blue-500 rounded-full" style={{ width: '40%' }} />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-inter text-sm text-gray-700">Notebooks</span>
                  <div className="w-52 bg-gray-200 h-3 rounded-full overflow-hidden ml-4">
                    <div className="h-3 bg-emerald-500 rounded-full" style={{ width: '25%' }} />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-inter text-sm text-gray-700">Scripts</span>
                  <div className="w-52 bg-gray-200 h-3 rounded-full overflow-hidden ml-4">
                    <div className="h-3 bg-pink-500 rounded-full" style={{ width: '20%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="font-inter text-lg font-bold mb-6 text-gray-800">Fairness Insights</h3>
                  <div className="font-inter text-base space-y-4 text-gray-700 leading-relaxed">
                    <p className="flex items-start gap-3 p-3 bg-white rounded-lg">
                      <span className="text-green-600 flex-shrink-0 font-bold text-xl">✓</span>
                      <span>Contribution balance: <span className="font-bold text-green-700">Good</span></span>
                    </p>
                    <p className="flex items-start gap-3 p-3 bg-white rounded-lg">
                      <span className="flex-shrink-0 font-bold text-xl text-red-500">–</span>
                      <span>User4 low activity detected</span>
                    </p>
                    <p className="flex items-start gap-3 p-3 bg-white rounded-lg">
                      <span className="text-green-600 flex-shrink-0 font-bold text-xl">✓</span>
                      <span>Team collaboration <span className="font-bold text-green-700">consistent</span></span>
                    </p>
                    <p className="flex items-start gap-3 p-3 bg-white rounded-lg">
                      <span className="flex-shrink-0 font-bold text-xl text-red-500">–</span>
                      <span>Large gap in contribution size</span>
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="font-inter text-lg font-bold mb-6 text-gray-800">Contribution Sources</h3>
                  <div className="space-y-5 font-inter text-base">
                    <div className="bg-white p-4 rounded-xl">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <span className="text-gray-800 font-semibold">GitHub</span>
                        <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm">40%</span>
                      </div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: '40%' }}></div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <span className="text-gray-800 font-semibold">Google Docs</span>
                        <span className="bg-cyan-100 text-cyan-800 font-bold px-3 py-1 rounded-full text-sm">30%</span>
                      </div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500" style={{ width: '30%' }}></div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <span className="text-gray-800 font-semibold">Figma</span>
                        <span className="bg-pink-100 text-pink-800 font-bold px-3 py-1 rounded-full text-sm">20%</span>
                      </div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-pink-500" style={{ width: '20%' }}></div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <span className="text-gray-800 font-semibold">Notion</span>
                        <span className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full text-sm">10%</span>
                      </div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-fairflow-blue shadow-md flex items-center justify-center gap-20 py-6 px-8 flex-shrink-0 rounded-t-3xl">
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
