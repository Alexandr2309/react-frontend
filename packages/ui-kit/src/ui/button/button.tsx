import { forwardRef } from 'react';
import { ButtonProps, ButtonSize, ButtonVariant } from './model/types/buttonTypes';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        className, variant = ButtonVariant.PRIMARY, size = ButtonSize.L, theme, iconAligment = 'left', type = 'button',
        icon: Icon = null, secondaryIcon: SecondaryIcon, textWeight = 'default', style,
        fillContainer, onClick, showLoader, text, justifyCenter = !SecondaryIcon, ...rest
    } = props;

    const disableIndicator = showLoader;

});
