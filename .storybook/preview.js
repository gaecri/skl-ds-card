/** @type { import('@storybook/react').Preview } */
import './../src/styles/global.scss'
import './../src/styles/variables.css'
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
document.head.appendChild(link);
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs']
};


export default preview;
