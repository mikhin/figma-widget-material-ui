const { widget } = figma;
const { AutoLayout, Text } = widget;

export const Alert = ({
  description,
  title,
}: {
  description: string;
  title: string;
}): FigmaDeclarativeNode => {
  return (
    <AutoLayout
      cornerRadius={4}
      direction="horizontal"
      fill="#D32F2F"
      padding={16}
    >
      <AutoLayout direction="vertical" padding={8} spacing={4}>
        <Text
          fill="#FFFFFF"
          fontFamily="Roboto"
          fontSize={16}
          fontWeight={700}
          lineHeight="24px"
        >
          {title}
        </Text>
        <Text
          fill="#FFFFFF"
          fontFamily="Roboto"
          fontSize={14}
          fontWeight={400}
          lineHeight="20px"
        >
          {description}
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
};
