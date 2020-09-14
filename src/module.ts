import { PanelPlugin } from '@grafana/data';
import { VideoOptions } from './types';
import { VideoPanel } from './VideoPanel';

export const plugin = new PanelPlugin<VideoOptions>(VideoPanel).setPanelOptions(builder => {
  return builder
    .addRadio({
      path: 'videoType',
      name: 'Source',
      defaultValue: 'url',
      settings: {
        options: [
          {
            value: 'url',
            label: 'URL',
          },
          {
            value: 'youtube',
            label: 'Youtube',
          },
          {
            value: 'iframe',
            label: 'Iframe',
          },
        ],
      },
    })
    .addTextInput({
      path: 'videoId',
      name: 'Video ID',
      showIf: config => config.videoType === 'youtube',
    })
    .addTextInput({
      path: 'videoURL',
      name: 'URL',
      showIf: config => config.videoType === 'url',
    })
    .addTextInput({
      path: 'iframeURL',
      name: 'URL',
      showIf: config => config.videoType === 'iframe',
    })
    .addBooleanSwitch({
      path: 'autoPlay',
      name: 'Autoplay',
      defaultValue: false,
      showIf: config => config.videoType !== 'iframe',
    })
    .addBooleanSwitch({
      path: 'loop',
      name: 'Loop',
      defaultValue: false,
      showIf: config => config.videoType !== 'iframe',
    });
});
