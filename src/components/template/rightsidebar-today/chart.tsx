import { CardContent } from '@/components/ui/card';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface ChartDataProps {
    weatherData?: any;
}

export default function DataChart({ weatherData }: ChartDataProps) {
    const prepareChartData = (data: any) => {

        if (!data || !data.hourly || !data.current) return [];

        const apiTime = data.current.time.toString();
        const currentHourStr = apiTime.slice(0, 13);

        const startIndex = data.hourly.time.findIndex((t: string) => t.startsWith(currentHourStr));

        const safeIndex = startIndex === -1 ? 0 : startIndex;

        const next24Hours = data.hourly.time.slice(safeIndex, safeIndex + 24);
        const next24Precip = data.hourly.precipitation_probability.slice(safeIndex, safeIndex + 24);

        const chartData = next24Hours.map((time: string, index: number) => {
            const dateObj = new Date(time);
            const hours = dateObj.getHours();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedHour = `${hours % 12 || 12} ${ampm}`;

            return {
                time: formattedHour,
                probability: next24Precip[index],
            };
        });

        return chartData;
    }

    const data = prepareChartData(weatherData);
    return (
        <CardContent className="h-[160px] w-full mt-2 p-0">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="lineShadow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#a1a1aa" stopOpacity={0.35} />
                            <stop offset="70%" stopColor="#a1a1aa" stopOpacity={0.05} />
                            <stop offset="100%" stopColor="#a1a1aa" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" stroke="#333" />

                    <XAxis
                        dataKey="time"
                        stroke="#71717a"
                        tickLine={false}
                        axisLine={false}
                        fontSize={10}
                        tickMargin={10}
                        interval={3}
                    />

                    <YAxis
                        domain={[0, 100]}
                        tickFormatter={(v) => `${v}%`}
                        stroke="#71717a"
                        tickLine={false}
                        axisLine={false}
                        fontSize={10}
                    />

                    <Area
                        type="monotone"
                        dataKey="probability"
                        stroke="#a1a1aa"
                        strokeWidth={2}
                        fill="url(#lineShadow)"
                        dot={false}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </CardContent>
    );
}