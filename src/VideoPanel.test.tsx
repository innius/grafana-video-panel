import { VideoPanel } from 'VideoPanel';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

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

  it('renders a video field when the selected type is video', () => {
    const component = mockComponent({
      videoType: 'url',
      autoPlay: false,
      loop: false
    })
    expect(component.find('video')).toHaveLength(1);
  });


  it('renders an iframe field when the selected type is youtube', () => {
    const component = mockComponent({
      videoType: 'youtube',
      autoPlay: false,
      loop: false,
    })

    expect(component.find('iframe')).toHaveLength(1);
  });


  it('renders an iframe field when the selected type is ifrane', () => {
    const component = mockComponent({
      videoType: 'iframe',
      autoPlay: true,
      loop: false,
    })

    expect(component.find('iframe')).toHaveLength(1);
  });

  it('renders an youtube with autoplay and loop setup true', () => {
    const component = mockComponent({
      videoType: 'youtube',
      videoId: '123',
      autoPlay: true,
      loop: true,
    })

    const iframeSrc = component.find('iframe').props().src
    expect(iframeSrc).toContain('autoplay=1&loop=1')
    expect(iframeSrc).toContain('embed/123')
  });

  it('renders an video with autoplay and loop setup true', () => {
    const component = mockComponent({
      videoType: 'url',
      autoPlay: true,
      loop: true,
    })
    const videoControls = component.find('video').props()
    expect(videoControls.loop).toBeTruthy()
    expect(videoControls.autoPlay).toBeTruthy()
  });

  function mockComponent(optionsa: any) {
    const defaultProps: any = {
      options: optionsa
    }
    return shallow(<VideoPanel {...defaultProps} />)
  }
});