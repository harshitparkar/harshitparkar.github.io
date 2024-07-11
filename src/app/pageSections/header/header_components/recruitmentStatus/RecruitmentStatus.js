export default function RecruitmentStatus({ getting_recruited }) {
  return (
    <div className="mr-5">
      <p className="text-sm font-semibold">Recruitment Status</p>
      {getting_recruited ? (
        <div className="flex-row flex items-center">
          <div
            className="bg-green-600 w-2.5 h-2.5 rounded-full mt-1 mr-2 animate-pulse"
            style={{
              boxShadow: "0 0 10px 1px rgba(0, 128, 0, 1)",
            }}
          />
          <p className="text-sm">Open for work</p>
        </div>
      ) : (
        <div className="flex-row flex items-center">
          <div
            className="bg-red-600 w-2.5 h-2.5 rounded-full mt-1 mr-2 animate-pulse"
            style={{
              boxShadow: "0 0 20px 5px rgba(255, 0, 0, 0.6)",
            }}
          />
          <p className="text-sm">Still not looking</p>
        </div>
      )}
    </div>
  );
}
