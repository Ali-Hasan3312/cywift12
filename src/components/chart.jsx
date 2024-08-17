import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  { quarter: '', risk: 90 },
  { quarter: '', risk: 75 },
  { quarter: '', risk: 60 },
  { quarter: '', risk: 50 },
  { quarter: '', risk: 35 },
  { quarter: '', risk: 30 },
  { quarter: '', risk: 32 },
];

const RiskTrendChart = () => {
  return (
    <div className="w-[350px] h-60 bg-gray-100 max-sm:h-36 max-sm:w-[200px] p-4 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="quarter" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
          <Line type="monotone" dataKey="risk" stroke="#4ade80" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
     
    </div>
  );
};

export default RiskTrendChart;