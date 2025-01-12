import { Text } from './skl-ds-text';

export default {
  title: 'skl-ds-card/Atoms/skl-ds-text',
  component: Text,
};


export const TextSmall = {
  args: {
    tag: 'p',
    color: "var(--T-surface-0-on-color)", 
    fontSize: 'small',
    bold: true,
    children: 'Questo è un paragrafo', 
  }
}

export const TextMedium = {
  args: {
    tag: 'p',
    color: "white", 
    fontSize: 'medium',
    bold: false,
    children: 'Questo è un paragrafo', 
  }
}

