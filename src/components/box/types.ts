import { BackgroundColor, Shadow } from 'src/tokens/colors';
import { Space, NegativeSpace, BoxWidth } from 'src/tokens/spaces';

import { FlexProps } from 'src/components/flexbox/js/utils/FlexItem';

import { ResponsiveTypeWithNone } from 'src/utils/responsiveStylesUtils';

export type BoxProps = {
  margin?: ResponsiveTypeWithNone<Space>;
  marginVertical?: ResponsiveTypeWithNone<Space>;
  marginHorizontal?: ResponsiveTypeWithNone<Space | NegativeSpace>;
  padding?: ResponsiveTypeWithNone<Space>;
  paddingVertical?: ResponsiveTypeWithNone<Space>;
  paddingHorizontal?: ResponsiveTypeWithNone<Space>;
  backgroundColor?: BackgroundColor;
  borderColor?: BackgroundColor;
  borderRadius?: ResponsiveTypeWithNone<Space>;
  borderWidth?: 1 | 2;
  shadow?: ResponsiveTypeWithNone<Shadow>;
  width?: ResponsiveTypeWithNone<BoxWidth>;
} & Pick<FlexProps, 'flex' | 'flexGrow' | 'flexShrink' | 'order'>;
