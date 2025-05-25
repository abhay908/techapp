export default function Tab({ tabData, field, setField }) {
  return (
    <div
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max"
    >
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`${
            field === tab.type
              ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-[0_0_8px_0_rgba(168,85,247,0.5)]"
              : "bg-transparent text-richblack-200 hover:bg-richblack-700"
          } py-2 px-5 rounded-full transition-all duration-200 font-medium relative overflow-hidden`}
        >
          {/* Gradient background for selected tab */}
          {field === tab.type && (
            <span className="absolute inset-0 rounded-full border border-white/10"></span>
          )}
          {tab?.tabName}
        </button>
      ))}
    </div>
  )
}