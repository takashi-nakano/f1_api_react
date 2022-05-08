import React, { VFC, PureComponent } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";
import { WeatherData } from "../app/types/type";

type WPROPS = {
  datas: WeatherData[];
};

const WeatherChart: VFC<WPROPS> = (props) => {
  const wdats: WeatherData[] = props.datas;
  console.log(wdats);
  return (
    <>
      <main className="mainContainer mt5rem">
        <LineChart
          width={800}
          height={300}
          data={wdats}
          syncId="anyId"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            tick={false}
            label={{
              value: "time ",
              position: "inside",
              textAnchor: "middle",
            }}
          />

          <YAxis
            yAxisId="left"
            type="number"
            domain={["dataMin - 3", "dataMax + 3"]}
            label={{
              value: "temp (°C)",
              angle: -90,
              position: "insideLeft",
              textAnchor: "middle",
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="natural"
            dot={false}
            yAxisId="left"
            name="air temp"
            dataKey="aTemp"
            stroke="#82ca9d"
          />
          <Line
            type="natural"
            dot={false}
            yAxisId="left"
            name="track temp"
            dataKey="tTemp"
            stroke="#82ca9d"
          />
        </LineChart>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={800}
            height={200}
            data={wdats}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Brush />
          </LineChart>
        </ResponsiveContainer>
      </main>
    </>
  );
};

export default WeatherChart;
