import { Widget } from './skl-ds-widget';

export default {
  title: 'skl-ds-card/Molecules/skl-ds-widget',
  component: Widget,
};


export const Horizontal = {
  args: {
    icon: 'alarm',
    iconSize: 'small',
    orientation: 'horizontal',
    text: '00',
    colorText: 'black'
  }
}

export const Vertical = {
  args: {
    icon: 'alarm',
    iconSize: 'small',
    orientation: 'vertical',
    text: '00',
    colorText: 'black'
  }
}

export const WidgetButton = {
  args: {
    icon: 'alarm',
    iconSize: 'small',
    orientation: 'vertical',
    text: '00',
    colorText: 'black',
    isButton:'true',
    onClick: () => alert('Button clicked!')
  }
}
