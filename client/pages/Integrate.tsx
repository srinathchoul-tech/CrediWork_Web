import { useNavigate } from "react-router-dom";

export default function Integrate() {
  const navigate = useNavigate();

  const tools = [
    { name: "GitHub", status: "Connected" },
    { name: "Google Docs", status: "Connected" },
    { name: "Google Drive", status: "Connected" },
    { name: "Notion", status: "Connect" },
    { name: "Figma", status: "Connect" },
    { name: "MS Teams", status: "Connected" },
  ];

  const isConnected = (status: string) => status === "Connected";

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
          {/* Integration Overview Card */}
          <div className="rounded-3xl p-12 shadow-sm" style={{ backgroundColor: 'rgba(232,246,250,0.95)' }}>
            <h2 className="font-oxanium text-3xl font-semibold mb-8 text-gray-800">Integration Overview:</h2>

            <div className="grid grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="font-inter text-lg mb-4">
                  <span className="font-bold text-gray-800">Integrations Connected:</span> <span className="font-bold text-blue-600">4 / 6</span>
                </p>
                <p className="font-inter text-lg">
                  <span className="font-bold text-gray-800">Last Sync:</span> <span className="text-gray-600">5 minutes ago</span>
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="font-inter text-lg mb-4">
                  <span className="font-bold text-gray-800">Auto Sync:</span> <span className="font-bold text-green-600">Enabled</span>
                </p>
                <p className="font-inter text-lg">
                  <span className="font-bold text-gray-800">Tracking Mode:</span> <span className="text-gray-600">Automatic</span>
                </p>
              </div>
            </div>
          </div>

          {/* Tools and Tracking Metrics Card */}
          <div className="rounded-3xl p-12" style={{ backgroundColor: 'rgba(232,246,250,0.95)' }}>
            <div className="grid grid-cols-2 gap-12">
              {/* Tools Section */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-oxanium text-2xl font-semibold mb-6 text-gray-800">Tools:</h3>
                <div className="space-y-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-inter text-base font-semibold text-gray-800">{tool.name}</span>
                      <button
                        className={`font-inter text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors ${
                          isConnected(tool.status)
                            ? "bg-green-200 text-green-800 hover:bg-green-300"
                            : "bg-blue-200 text-blue-800 hover:bg-blue-300"
                        }`}
                      >
                        {tool.status}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tracking Metrics Section */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-oxanium text-2xl font-semibold mb-6 text-gray-800">Tracking metrics:</h3>
                <ul className="font-inter text-base space-y-4 text-gray-700 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-fairflow-blue font-bold text-lg">•</span>
                    <span>Commits tracked: <span className="font-bold text-fairflow-blue">24</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-fairflow-blue font-bold text-lg">•</span>
                    <span>Document edits: <span className="font-bold text-fairflow-blue">16</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-fairflow-blue font-bold text-lg">•</span>
                    <span>Comments added: <span className="font-bold text-fairflow-blue">12</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-fairflow-blue font-bold text-lg">•</span>
                    <span>Versions detected: <span className="font-bold text-fairflow-blue">8</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-fairflow-blue shadow-md flex items-center justify-center gap-20 py-4 px-8 flex-shrink-0">
        <button
          onClick={() => navigate("/")}
          className="font-inter text-base font-medium text-white hover:text-blue-100 hover:font-bold transition-all"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/integrate")}
          className="font-inter text-base font-bold text-white underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
        >
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
