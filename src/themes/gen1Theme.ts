import { createTheme } from '@aws-amplify/ui-react';
import { baseTheme } from './baseTheme';

export const gen1Theme = createTheme(
  {
    name: 'gen1-theme',
    tokens: {
      colors: {
        primary: {
          10: { value: '{colors.teal.10}' },
          20: { value: '{colors.teal.20}' },
          40: { value: '{colors.teal.40}' },
          60: { value: '{colors.teal.60}' },
          80: { value: '{colors.teal.80}' },
          90: { value: '{colors.teal.90}' },
          100: { value: '{colors.teal.100}' }
        }
      },
      components: {
        button: {
          primary: {
            color: { value: '{colors.font.primary}' },
            backgroundColor: { value: '{colors.primary.40}' },
            _active: {
              backgroundColor: { value: '{colors.primary.10}' },
              color: { value: '{colors.font.primary}' }
            },
            _focus: {
              backgroundColor: { value: '{colors.primary.20}' },
              color: { value: '{colors.font.primary}' },
              boxShadow: {
                value: '0 0 0 2px var(--amplify-colors-border-focus)'
              }
            },
            _hover: {
              backgroundColor: { value: '{colors.primary.20}' },
              color: { value: '{colors.font.primary}' }
            }
          }
        }
      }
    }
  },
  baseTheme
);
