/* eslint-disable */
import { AxiosInstance } from "axios";
import mockServer from "axios-mock-server";
import mock0 from "./session";

export default (client?: AxiosInstance) =>
  mockServer(
    [
      {
        path: "/sessionD",
        methods: mock0,
      },
    ],
    client,
    ""
  );
