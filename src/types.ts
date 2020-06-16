type VideoTypes = 'youtube' | 'url';

export interface SimpleOptions {
  videoType: VideoTypes;
  videoURL: string;
  youtubeVideoId: string;
  autoPlay: boolean;
  loop: boolean;
}
