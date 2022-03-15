import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";
const data = [
    { name: "Group A", value: 66 },
    { name: "Group B", value: 129 },
];
const COLORS = ["#EF4136", "#FACAC7"];

export default class Example extends PureComponent {
    static demoUrl =
        "https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o";

    render() {
        return (
            <PieChart
                className="firstChart"
                width={300}
                height={300}
                onMouseEnter={this.onPieEnter}
            >
                <Pie
                    data={data}
                    cx={90}
                    cy={90}
                    innerRadius={40}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={1}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell - ${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Pie
                    className="chartCenter"
                    data={data}
                    cx={420}
                    cy={100}
                    startAngle={360}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    // fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell - ${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        );
    }
}