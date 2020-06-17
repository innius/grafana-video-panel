import { VideoPanel } from 'VideoPanel';

describe('VideoPanel', () => {
  it('should have created the VideoPanel plugin', () => {
    const params: any = {
      options: {
        videoType: 'url',
        autoPlay: false,
        loop: false,
      },
    };
    const videoComponent = VideoPanel(params);
    expect(videoComponent).toBeTruthy();
  });
});
