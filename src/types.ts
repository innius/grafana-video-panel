type VideoTypes = 'youtube' | 'url' | 'iframe';

export interface VideoOptions {
  videoType: VideoTypes;
  videoURL?: string;
  iframeURL?: string;
  youtubeVideoId?: string;
  autoPlay: boolean;
  loop: boolean;
}
