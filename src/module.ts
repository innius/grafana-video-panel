import { PanelPlugin } from '@grafana/data';
import { VideoOptions } from './types';
import { VideoPanel } from './VideoPanel';

export const plugin = new PanelPlugin<VideoOptions>(VideoPanel).setPanelOptions(builder => {
  return builder
    .addRadio({
      path: 'videoType',
      name: 'Type of video',
      defaultValue: 'url',
      settings: {
        options: [
          {
            value: 'url',
            label: 'Video url',
          },
          {
            value: 'youtube',
            label: 'Youtube',
          },
        ],
      },
    })
    .addTextInput({
      path: 'youtubeVideoId',
      name: 'Youtube Video ID',
      showIf: config => config.videoType === 'youtube',
    })
    .addTextInput({
      path: 'videoURL',
      name: 'URL',
      showIf: config => config.videoType === 'url',
    })
    .addBooleanSwitch({
      path: 'autoPlay',
      name: 'Auto play video',
      defaultValue: false,
    })
    .addBooleanSwitch({
      path: 'loop',
      name: 'Loop video',
      defaultValue: false,
    });
});
