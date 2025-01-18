import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const AdminHome = () => {
  // Sample Data
  const totalBalance = 15200; // Example total balance
  const transactions = [
    { id: 1, member: "John Doe", amount: 500, date: "2025-01-10" },
    { id: 2, member: "Jane Smith", amount: 750, date: "2025-01-09" },
    { id: 3, member: "Emily Brown", amount: 400, date: "2025-01-08" },
    { id: 4, member: "Michael Scott", amount: 300, date: "2025-01-07" },
    { id: 5, member: "Dwight Schrute", amount: 600, date: "2025-01-06" },
    { id: 6, member: "Pam Beesly", amount: 450, date: "2025-01-05" },
  ];

  const totalNewsletterSubscribers = 300;
  const totalPaidMembers = 120;

  // Data for Bar and Pie Charts
  const chartData = [
    { name: "Newsletter Subscribers", value: totalNewsletterSubscribers },
    { name: "Paid Members", value: totalPaidMembers },
  ];

  const COLORS = ["#4CAF50", "#2196F3"];

  return (
    <div>
      {/* Total Balance Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Total Balance</h2>
        <p className="text-4xl font-semibold text-green-600">${totalBalance}</p>
      </div>
      <hr className="my-8" />

      {/* Recent Transactions Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Recent Transactions
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="text-left px-4 py-2 border-b">#</th>
                <th className="text-left px-4 py-2 border-b">Member</th>
                <th className="text-left px-4 py-2 border-b">Amount</th>
                <th className="text-left px-4 py-2 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={transaction.id}>
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{transaction.member}</td>
                  <td className="px-4 py-2 border-b text-green-600">
                    ${transaction.amount}
                  </td>
                  <td className="px-4 py-2 border-b">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <hr className="my-8" />

      {/* Chart Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Subscribers vs Paid Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Bar Chart */}
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
