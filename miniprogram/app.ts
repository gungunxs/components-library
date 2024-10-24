// app.ts
import { routerUtil } from "./config/router";


App<IAppOption>({
  globalData: {
    themeMode:"",
  },
  router:routerUtil,
  onLaunch() {
  },
})