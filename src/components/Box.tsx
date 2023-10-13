import { FC, ReactNode } from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const Box: FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`${className} h-20 flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default Box;
