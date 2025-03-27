import {Image} from 'react-native';

interface IconProps {
  name: any;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color,
}: IconProps) => {
  return (
    <Image
      source={name}
      style={{height: size, width: size, tintColor: color}}
    />
  );
};
