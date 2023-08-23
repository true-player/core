import { IConfig } from "../types/IConfig";
import configVideo from "./configVideo";
import videoFinder from "./videoFinder";

export default class TruePlayer {
  public videoElement: HTMLVideoElement;

  constructor(id: string, config: IConfig) {
    this.videoElement = videoFinder(id);
    configVideo(this.videoElement, config);
  }

  /*
    required methods
  */
}
