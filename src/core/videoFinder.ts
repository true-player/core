import { devExceptions } from "../assets/devExceptions";

export default function videoFinder(id: string): HTMLVideoElement {
  if (document.querySelectorAll(`#${id}`).length > 1)
    throw new Error(devExceptions.duplicateId(id));

  const video = document.querySelector(
    `video#${id}`
  ) as HTMLVideoElement | null;

  if (!video) throw new Error(devExceptions.videoElementNotFound(id));

  return video;
}
