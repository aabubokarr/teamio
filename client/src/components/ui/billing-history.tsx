
import { IconDownload, IconTrash } from "@tabler/icons-react";

const historyData = [
  {
    invoice: "January 2024",
    date: "Jan 06, 2025",
    plan: "Yearly",
  },
  {
    invoice: "December 2023",
    date: "Jan 06, 2025",
    plan: "Yearly",
  },
  {
    invoice: "November 2023",
    date: "Jan 06, 2025",
    plan: "Yearly",
  },
];

export function BillingHistory() {
  return (
    <div className="w-full mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Billing History</h2>
        <button className="bg-black text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-gray-800 transition">
          <IconDownload className="size-4" />
          Download all
        </button>
      </div>

      <div className="w-full">
        {/* Header */}
        <div className="grid grid-cols-4 pb-4 border-b border-gray-100 text-sm font-medium text-gray-900">
          <div>Invoice</div>
          <div className="text-center">Billing Date</div>
          <div className="text-center">Plan</div>
          <div className="text-right pr-6">Action</div>
        </div>

        {/* Rows */}
        <div className="flex flex-col">
            {historyData.map((item, idx) => (
            <div key={idx} className="grid grid-cols-4 py-6 border-b border-gray-100 items-center text-sm font-semibold text-gray-900">
                <div>{item.invoice}</div>
                <div className="text-center">{item.date}</div>
                <div className="text-center">{item.plan}</div>
                <div className="flex items-center justify-end gap-4 pr-2">
                    <button className="text-gray-500 hover:text-black transition">
                        <IconDownload className="size-6" stroke={1.5} />
                    </button>
                    <button className="text-gray-500 hover:text-red-500 transition">
                        <IconTrash className="size-6" stroke={1.5} />
                    </button>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}
