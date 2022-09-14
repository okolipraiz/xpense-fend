import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const data = [
    {
        amount: 4500,
        spent: 10000,
        month: "January"
    },
    {
        amount: 5000,
        spent: 200,
        month: "Feburuay",
    },
    {
        amount: 4700,
        spent: 2000,
        month: "March",
    },
    {
        amount: 4400,
        spent: 10,
        month: "April",
    },
    {
        amount: 4800,
        spent: 500,
        month: "May",
    },
    {
        amount: 6780,
        spent: 0,
        month: "June",
    },
    {
        amount: 6680,
        spent: 6000,
        month: "July",
    },
    {
        amount: 6500,
        spent: 90,
        month: "August",
    },
    {
        amount: 6300,
        spent: 88,
        month: "September",
    },
    {
        amount: 5900,
        spent: 26,
        month: "October",
    },
    {
        amount: 6000,
        spent: 79,
        month: "November",
    },
    {
        amount: 10000,
        spent: 9000,
        month: "December",
    },
];

const RenderLineChart = () => {
    return (
        <>
            <div className="coins p-3 rounded-3">
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        width={200}
                        height={400}
                        data={data}
                        margin={{ top: 0, left: 0, bottom: 0, right: 0 }}
                    >
                        <Area
                            type="monotone"
                            dataKey="amount"
                            stroke="blue"
                            strokeWidth={4}
                            fill="transparent"
                        />
                        <Area
                            type="monotone"
                            dataKey="spent"
                            stroke="red"
                            strokeWidth={4}
                            fill="transparent"
                        />
                        <XAxis dataKey="month" />
                        <YAxis dataKey="amount" />
                        <Tooltip />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default RenderLineChart;
