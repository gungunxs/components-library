// app.ts
import { routerUtil } from "./config/router";


App<IAppOption>({
  globalData: {
    themeMode:"TDS",
  },
  router:routerUtil,
  onLaunch() {
  },
})