import { Icon as SemanticIcon } from 'semantic-ui-react';
import ComponentWrapper from 'utils/helper';

export const Icon = ComponentWrapper(SemanticIcon);

export { Box } from './box';
export { ButtonBlock as Button, ButtonGroup, ButtonOr } from './button';
export { CenterContainer } from './centercontainer';
export { FormBlock as Form, FormGroup } from './form';
export { FormFieldWrapper as FormField, FormInput } from './formField';
export { Header } from './header';
export { InputBlock as Input } from './input';
export { Paper } from './paper';
export { View } from './view';
export { default as AppBody } from './appbody';
export { 
    SidebarBlock, SidebarPushable, SidebarPusher 
} from './sidebar/sidebar';
export { default as Sidebar } from './sidebar';
export { default as Table } from './table';