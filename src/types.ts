type VideoTypes = 'youtube' | 'url';

export interface VideoOptions {
  videoType: VideoTypes;
  videoURL?: string;
  youtubeVideoId?: string;
  autoPlay: boolean;
  loop: boolean;
}
