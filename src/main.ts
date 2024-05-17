import { initialize } from "@openreplyde/web-docker";
import create from "./react.tsx";

initialize({
  configFilePath: import.meta.env.VITE_WEBDOCKER_CONFIG_FILE_PATH as string,
  logEvents: true,
  scope: "webdocker",
}).then(() => {
  create();
});
