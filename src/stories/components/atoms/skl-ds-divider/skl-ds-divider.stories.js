import { Divider } from './skl-ds-divider';


export default {
  title: 'Example/Atoms/skl-ds-divider',
  component: Divider,
  argTypes: {
    opacity: {
      control: {
        type: 'range', 
        min: 0,
        max: 1,
        step: 0.2,
      },
      description: 'Opacità del divider',
    }
  },
};


export const Horizontal = {
  args: {
    color: 'var(--T-surface-0-on-color)',
    opacity: 0.2,
    thickness: '1px'
  }
}
