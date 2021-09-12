import { IconDefinition } from '@ant-design/icons-angular';
// Reference: https://ng.ant.design/components/icon/en

/**
 * Import All icons but Don't use this way because production bundle size is bigger.
 */
// import * as AllIcons from '@ant-design/icons-angular/icons';
// const antDesignIcons = AllIcons as {
//     [key: string]: IconDefinition;
// };
// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

/**
 * Import icons
 */
import { CloseOutline, ClockCircleOutline, ExportOutline, SearchOutline, UserOutline } from '@ant-design/icons-angular/icons';

export const icons: IconDefinition[] = [CloseOutline, ClockCircleOutline, ExportOutline, SearchOutline, UserOutline];
