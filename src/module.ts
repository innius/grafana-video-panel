/* istanbul ignore file */

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
            label: 'File',
          },
          {
            value: 'youtube',
            label: 'YouTube',
          },
          {
            value: 'iframe',
            label: 'iframe',
          },
        ],
      },
    })
    .addTextInput({
      path: 'videoId',
      name: 'Video ID',
      description: 'The value after watch?v= in the URL.',
      settings: {
        placeholder: '6OCA_yOn9hE',
      },
      showIf: config => config.videoType === 'youtube',
    })
    .addTextInput({
      path: 'videoURL',
      name: 'URL',
      description: 'A URL to a valid video file.',
      settings: {
        placeholder: 'https://example.com/video.mp4',
      },
      showIf: config => config.videoType === 'url',
    })
    .addTextInput({
      path: 'iframeURL',
      name: 'URL',
      description: 'A valid URL.',
      settings: {
        placeholder: 'https://example.com/video',
      },
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
