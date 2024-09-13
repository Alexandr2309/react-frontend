import { AppTypography } from '@frontend/shared/const';
import { ButtonProps, ButtonSize } from '../../model/types/buttonTypes';

export const getButtonFont = ({ size, textWeight }: Pick<Required<ButtonProps>, 'textWeight' | 'size'>) => {
    switch (size) {
        case ButtonSize.L:
            return textWeight === 'default' ? AppTypography.BTN_LABEL : AppTypography.TEXT;
        case ButtonSize.S:
            return textWeight === 'default' ? AppTypography.BTN_LABEL_MINI : AppTypography.CAPTION;
    }
};
