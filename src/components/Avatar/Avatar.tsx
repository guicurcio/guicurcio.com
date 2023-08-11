import mergeClasses from "utils/mergeClasses";

/**
 * Props for the Avatar component.
 */
export interface AvatarProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
  picture?: string;
}

/**
 * Avatar Component
 */
export default function Avatar({
  className,
  picture,
  ...props
}: AvatarProps): JSX.Element {
  return (
    <div className="pl-0.5">
      <img
        className="inline-block border border-gray-500 rounded-md shadow-md w-7 h-7"
        src={picture}
        alt=""
      ></img>
    </div>
  );
}

Avatar.displayName = "Avatar";
