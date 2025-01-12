import { Card } from './skl-ds-card';

export default {
  title: 'Example/Template/skl-ds-card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};


export const Normal = {
  args: {
    state: "normal",
    textHeader: "Emanuele",
    cardTitle: 'This is a card title and can be at his maximum lenght about three lines. If the content exceed you need to cut it.',
    footerText: "Lego"
  }
}

export const Important = {
  args: {
    state: 'important',
    textHeader: 'Emanuele',
    cardTitle: 'This is a card title and can be at his maximum lenght about three lines. If the content exceed you need to cut it.',
    footerText: 'Lego'
  }
}


export const Expired = {
  args: {
    state: 'expired',
    textHeader: 'Emanuele',
    cardTitle: 'This is a card title and can be at his maximum lenght about three lines. If the content exceed you need to cut it.',
    footerText: 'Lego'
  }
}

export const Done = {
  args: {
    state: 'done',
    textHeader: 'Emanuele',
    cardTitle: 'This is a card title and can be at his maximum lenght about three lines. If the content exceed you need to cut it.',
    footerText: 'Lego'
  }
}