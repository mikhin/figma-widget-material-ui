const { widget } = figma;
const { AutoLayout, Text } = widget;

export const Button = ({ label }: { label: string }): FigmaDeclarativeNode => {
  return (
    <AutoLayout
      cornerRadius={4}
      fill="#2196F3"
      height={42}
      horizontalAlignItems="center"
      hoverStyle={{
        fill: {
          color: { a: 1, b: 1, g: 1, r: 1 },
          type: 'solid',
        },
        opacity: 0.8,
      }}
      padding={8}
      width={90}
    >
      <Text
        fill="#FFFFFF"
        fontFamily="Roboto"
        fontSize={15}
        fontWeight={500}
        height={26}
        horizontalAlignText="center"
        lineHeight="26px"
        textCase="upper"
      >
        {label}
      </Text>
    </AutoLayout>
  );
};
