import 'styled-components';
import { ColorsTypes, FontSizeTypes, bgColorTypes, buttonsTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
    bgColor: bgColorTypes;
    buttons: buttonsTypes;
  }
}
