import React from 'react';
import { PanelProps } from '@grafana/data';
import { VideoOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import qs from 'query-string';

interface Props extends PanelProps<VideoOptions> {}

export const VideoPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles();

  const youtubeParams = {
    loop: 0,
    autoplay: 0,
    playlist: options.youtubeVideoId,
  };

  if (options.autoPlay) {
    youtubeParams.autoplay = 1;
  }

  if (options.loop) {
    youtubeParams.loop = 1;
  }

  const youtubeVideoURL = 'https://www.youtube.com/embed/' + options.youtubeVideoId + '?' + qs.stringify(youtubeParams);

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
          autoPlay
          loop
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
          src={youtubeVideoURL}
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
