import { type } from "os";
import { StringLiteralLike } from "typescript";

export type session = {
  meta: meta;
  results: results;
};

export type meta = {
  title: string;
  description: string;
  fields: {
    race: {
      race_id: string;
      name: string;
      country: string;
      status: string;
      season: string;
      track: string;
    };
    session: {
      general: {
        id: string;
        session_name: string;
        date: string;
      };
      details: {
        laps: string;
        status: string;
        comments: string;
        finished_ts: string;
        updated_ts: string;
      };
      flag_history_array: {
        id: string;
        detail: string;
        flag: string;
        session_timer: string;
        timestamp: string;
      };
    };
    drivers_array: {
      id: string;
      name: string;
      team_id: string;
      team_name: string;
      position: string;
      time: string;
      gap: string;
      interval: string;
      current_tyre: string;
      stops: string;
      current_lap: string;
      comments: string;
      retired: string;
      did_not_start: string;
      disqualified: string;
      last_update: string;
    };
    speed: {
      // "note": "Default is null; will be null for Grid and FastestLap files; sessions prior to 2020 season do not associated speed data",
      last_update: string;
      top_speeds: {
        sector: string;
        drivers_array: {
          driver: string;
          position: string;
          speed: string;
          driver_id: string;
          team_name: string;
          team_id: string;
        };
      };
    };
    weather_array: {
      id: string;
      track_temp: string;
      air_temp: string;
      conditions: string;
      humidity: string;
      pressure: string;
      wind_speed: string;
      timestamp: string;
    };
  };
};

export type results = {
  race: {
    race_id: number;
    name: string;
    country: string;
    status: string;
    season: string;
    track: string;
  };
  session: {
    general: {
      id: number;
      session_name: string;
      date: string;
    };
    details: {
      laps: number;
      status: string;
      comments: string;
      finished_ts: string;
      last_update: string;
    };
    flag_history: flag[];
  };
  drivers: driver[];
  speed: {
    // "note": "Default is null; will be null for Grid and FastestLap files; sessions prior to 2020 season do not associated speed data",
    last_update: string;
    top_speeds: topSpeed[];
  };
  weather: weather[];
};

export type topSpeed = {
  sector: string;
  drivers: speedDriver[];
};

export type WeatherData = {
  id: number;
  track_temp: string;
  tTemp: number;
  air_temp: string;
  aTemp: number;
  conditions: string;
  humidity: string;
  pressure: string;
  wind_speed: string;
  timestamp: string;
};

export type weather = {
  id: number;
  track_temp: string;
  air_temp: string;
  conditions: string;
  humidity: string;
  pressure: string;
  wind_speed: string;
  timestamp: string;
};

export type driver = {
  id: number;
  name: string;
  team_id: number;
  team_name: string;
  position: number;
  time: string;
  gap: string;
  interval: string;
  current_tyre: string;
  stops: number;
  current_lap: number;
  comments: string;
  retired: number;
  did_not_start: number;
  disqualified: number;
  last_update: string;
};

export type flag = {
  id: number;
  detail: string;
  flag: string;
  session_timer: string;
  timestamp: string;
};

export type speedDriver = {
  driver: string;
  position: number;
  speed: string;
  driver_id: number;
  team_name: string;
  team_id: number;
};
