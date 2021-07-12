type VideoTypes = 'youtube' | 'url' | 'iframe';

export interface VideoOptions {
  videoType: VideoTypes;
  videoURL?: string;
  iframeURL?: string;
  videoId?: string;
  geolocate?: boolean;
  autoPlay: boolean;
  loop: boolean;
  customBackground: boolean;
  backgroundColor?: string;
}
