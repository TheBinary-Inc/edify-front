import React, { PureComponent } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Dushanba",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Seshanba",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Chorshanba",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Payshanba",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Juma",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Shanba",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Yakshanba",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const SecondChart = {
    editorWrapper: {
        width: "650px",
        height: "248px",
        paddingLeft: "30px"
        // margin: "85px 10px 120px",
    },
};

export default class Diogram extends PureComponent {
    static demoUrl = "https://codesandbox.io/s/stacked-area-chart-ix341";

    render() {
        return (
            <div className="SecondChart" style={SecondChart.editorWrapper}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={600}
                        height={400}
                        data={data}
                        margin={{
                            // top: 10,
                            // right: 30,
                            // left: 0,
                            // bottom: 0,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="pv"
                            stackId="1"
                            stroke="#0968C0"
                            fill="#0968C0"
                        />
                        <Area
                            type="monotone"
                            dataKey="amt"
                            stackId="1"
                            stroke="#FF4062"
                            fill="#FF4062"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
}