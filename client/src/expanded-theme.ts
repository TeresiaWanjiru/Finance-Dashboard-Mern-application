//in this file we are extending the alreading existing themes that MUI has provided typescript
// eslint-disable-next-line
import { Palette,PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string;
    }
    interface Palette {
    tertiary: PaletteColor;
    }
}

