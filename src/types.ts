type VideoTypes = 'youtube' | 'url' | 'iframe';

export interface VideoOptions {
  videoType: VideoTypes;
  videoURL?: string;
  iframeURL?: string;
  videoId?: string;
  autoPlay: boolean;
  loop: boolean;
}
