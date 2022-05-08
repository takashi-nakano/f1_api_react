import { Grid, Typography } from "@mui/material";
import React, { VFC, useState, useEffect } from "react";
import { meta, results, session, WeatherData } from "../app/types/type";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import RaceDetail from "./RaceDetail";
import WeatherChart from "./WeatherChart";
import { getSession } from "./getSession";

interface RowData {
  driverId: number;
  name: string;
  team: string;
  cTire: string;
  lastLap: string;
  stops: number;
  gap: string;
  interbal: string;
  status: string;
  //   retired: number;
  //   didNotStart: number;
  //   disqualified: number;
}

function createData(res: results): RowData[] {
  const datas: RowData[] = [];
  res.drivers.map((row) => {
    const data: RowData = {
      driverId: row.id,
      name: row.name,
      team: row.team_name,
      cTire: row.current_tyre,
      lastLap: row.time,
      stops: row.stops,
      gap: row.gap,
      interbal: row.interval,
      status:
        row.disqualified === -1
          ? "not-start"
          : row.disqualified === -1
          ? "disqualified"
          : row.retired === -1
          ? "retired"
          : "",
    };
    datas.push(data);
  });
  return datas;
}

function createWData(res: results): WeatherData[] {
  const wDatas: WeatherData[] = [];
  res.weather.map((wd) => {
    const data: WeatherData = {
      id: wd.id,
      track_temp: wd.track_temp,
      tTemp: Number(wd.track_temp.replace(/[^0-9|.]/g, "")),
      air_temp: wd.air_temp,
      aTemp: Number(wd.air_temp.replace(/[^0-9|.]/g, "")),
      conditions: wd.conditions,
      humidity: wd.humidity,
      pressure: wd.pressure,
      wind_speed: wd.wind_speed,
      timestamp: "",
    };
    wDatas.push(data);
  });
  return wDatas;
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const TimeBoard = () => {
  const [results, setResults] = useState<results>();
  const [rows, setRows] = useState<RowData[]>();
  const [wDatas, setWDatas] = useState<WeatherData[]>([
    {
      id: 0,
      track_temp: "",
      tTemp: 0,
      air_temp: "",
      aTemp: 0,
      conditions: "",
      humidity: "",
      pressure: "",
      wind_speed: "",
      timestamp: "",
    },
  ]);

  const getMock = () => {
    getSession()
      .then((res) => {
        console.log(res?.results);
        if (res?.results) {
          console.log(res.results);
          setResults(res.results);
          setRows(createData(res.results));
          setWDatas(createWData(res.results));
        } else {
          console.log(res);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFetch = () => {
    axios
      .get<session>("https://myjson.dit.upm.es/api/bins/37xn")
      .then((res) => {
        console.log(res.data.results);
        setResults(res.data.results);
        setRows(createData(res.data.results));
        setWDatas(createWData(res.data.results));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>archive</h2>
      <Button color="primary" onClick={getFetch}>
        check
      </Button>
      <Button color="secondary" onClick={getMock}>
        mock
      </Button>
      <Grid container direction="column">
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid xs={8}>
            <Typography variant="h5" component="div">
              {results?.race.name}
            </Typography>
          </Grid>
          <Grid xs={2} container direction="column">
            <Grid>
              <Typography variant="h5" component="div">
                {results?.session.general.date.substring(0, 10)}
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="h5" component="div">
                {results?.session.general.session_name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Pos</StyledTableCell>
                  <StyledTableCell>Driver Name</StyledTableCell>
                  <StyledTableCell>Team</StyledTableCell>
                  <StyledTableCell>tire</StyledTableCell>
                  <StyledTableCell align="center">Last Lap</StyledTableCell>
                  <StyledTableCell>Pit Counts</StyledTableCell>
                  <StyledTableCell align="center">gap</StyledTableCell>
                  <StyledTableCell align="center">interbal</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row, index) => (
                  <StyledTableRow key={row.driverId}>
                    <StyledTableCell align="left">
                      {row.status === "" ? index + 1 : row.status}
                    </StyledTableCell>
                    <StyledTableCell align="left" component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.team}</StyledTableCell>
                    <StyledTableCell align="left">{row.cTire}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.lastLap}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.stops}</StyledTableCell>
                    <StyledTableCell align="right">{row.gap}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.interbal}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={10}>
          <WeatherChart datas={wDatas} />
        </Grid>
      </Grid>
    </>
  );
};

export default TimeBoard;
