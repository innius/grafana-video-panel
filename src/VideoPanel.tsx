import React from 'react';
import { PanelProps } from '@grafana/data';
import { VideoOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import qs from 'query-string';

interface Props extends PanelProps<VideoOptions> {}

export const VideoPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles();
  let videoURL: any = '';

  if (options.videoType === 'youtube') {
    const youtubeParams = {
      loop: 0,
      autoplay: 0,
      playlist: options.videoId,
    };

    if (options.autoPlay) {
      youtubeParams.autoplay = 1;
    }

    if (options.loop) {
      youtubeParams.loop = 1;
    }

    videoURL = 'https://www.youtube.com/embed/' + options.videoId + '?' + qs.stringify(youtubeParams);
  } else if (options.videoType === 'iframe') {
    videoURL = options.iframeURL;
  }

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      {options.videoType === 'url' ? (
        <video
          className={cx(
            styles.video,
            css`
              width: ${width}px;
              height: ${height}px;
            `
          )}
          controls
          autoPlay={options.autoPlay}
          loop={options.loop}
          muted
        >
          <source src={options.videoURL}></source>
        </video>
      ) : (
        <iframe
          frameBorder="0"
          allowFullScreen
          className={cx(
            styles.video,
            css`
              width: ${width}px;
              height: ${height}px;
            `
          )}
          src={videoURL}
        ></iframe>
      )}
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: absolute;
    `,
    video: css`
      top: 0;
      left: 0;
    `,
  };
});
