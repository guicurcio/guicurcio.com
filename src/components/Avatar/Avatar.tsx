import mergeClasses from "utils/mergeClasses"


/**
 * Props for the Avatar component.
 */
export interface AvatarProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * Avatar Component
 */
export default function Avatar({
  className,
  ...props
}: AvatarProps): JSX.Element {
  return (
    <div className={mergeClasses('', className)}
      {...props}
      
      >
     
    </div>
  );
}

Avatar.displayName =
 'Avatar';
