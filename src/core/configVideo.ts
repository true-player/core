import { IConfig } from "../types/IConfig";

export default function configVideo(video: HTMLVideoElement, options: IConfig) {
  Object.entries(options).forEach(([k, v]) => {
    (video as any)[k] = v;
  });
}
