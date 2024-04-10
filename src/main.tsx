import { Alert } from './alert.tsx';
import { Button } from './button.tsx';

const { widget } = figma;
const { AutoLayout } = widget;

// eslint-disable-next-line react-refresh/only-export-components,@typescript-eslint/explicit-function-return-type
export const Widget = () => {
  return (
    <AutoLayout
      direction="vertical"
      fill={{
        color: { a: 1, b: 1, g: 1, r: 1 },
        type: 'solid',
      }}
      padding={10}
      spacing={12}
    >
      <Button label="Button 1" />
      <Button label="Button 2" />
      <Button label="Button 3" />
      <Alert description="This is an alert description" title="Alert" />
      <Alert description="This is an alert description" title="Alert" />
      <Alert description="This is an alert description" title="Alert" />
    </AutoLayout>
  );
};

widget.register(Widget);
