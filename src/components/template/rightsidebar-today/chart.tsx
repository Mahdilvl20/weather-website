import {CardContent} from '@/components/ui/card';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis} from "recharts";

export default function DataChart(){
    const data=[
        {time:"10AM",value:65},
        { time: "11AM", value: 50 },
        { time: "12PM", value: 62 },
        { time: "1PM", value: 72 },
        { time: "2PM", value: 58 },
        { time: "3PM", value: 45 },
        { time: "4PM", value: 78 },
    ];
    return(
        <CardContent className="h-[160px] w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="lineShadow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#a1a1aa" stopOpacity={0.35} />
                            <stop offset="70%" stopColor="#a1a1aa" stopOpacity={0.05} />
                            <stop offset="100%" stopColor="#a1a1aa" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid  vertical={false} horizontal={true} strokeDasharray="1 5" stroke="#FFFFFF"/>
                    <XAxis
                        dataKey="time"
                        stroke="#71717a"
                        tickLine={false}
                        axisLine={false}
                        fontSize={11}
                    />
                    <YAxis
                        domain={[0, 100]}
                        tickFormatter={(v) => `${v}%`}
                        stroke="#71717a"
                        tickLine={false}
                        axisLine={false}
                        fontSize={11}
                    />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#a1a1aa"
                        strokeWidth={2}
                        fill={"url(#lineShadow)"}
                        dot={false}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </CardContent>
    )
}