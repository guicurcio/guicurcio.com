import { twMerge } from "tailwind-merge";

/**
 * BlogPostPreview Props description
 */
export interface BlogPostPreviewProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * BlogPostPreview Component
 */
export default function BlogPostPreview({ className }: BlogPostPreviewProps) {
  return (
    <div className={twMerge("", className)}>
      <div className="w-[574px] h-[150px] mx-auto bg-[#060606] bg-opacity-[80%] rounded-[5px] shadow-sm border-sharper border-opacity-[55%] p-[20px]">
        <div className="grid grid-flow-row gap-2 items-start justify-start">
          <div className="grid grid-flow-row gap-1">
            <h3 className="font-moderat text-[#868F9766] text-opacity-[40%] text-[10px] uppercase">
              MARCH 21, 2022
            </h3>
            <div className="grid grid-flow-col gap-2 justify-start items-start">
              <img
                src="https://guicurcio.com/avatars/1.jpg"
                className="w-[28px] h-[28px] rounded-[6px] blog-image-shadow"
              ></img>
              <h2 className="font-moderat self-center text-[#C9C9C9E0] text-opacity-[88%] text-[18px] leading-[22px] tracking[-3%] lowercase">
                the epistemic trinity
              </h2>
            </div>
          </div>
          <p className="font-moderat text-[#868F97] text-[12px] leading-[16px] tracking-[-2%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
            ex et eros sagittis tempus. Phasellus iaculis laoreet augue nec
            egestas. Praesent sit amet mattis diam. Donec sit amet nulla quis
            orci rutrum...
          </p>
          <p className="font-moderat text-[#868F97] text-[12px] leading-[16px] tracking-[-2%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
            ex et eros sagittis tempus. Phasellus iaculis laoreet augue nec
            egestas. Praesent sit amet mattis diam. Donec sit amet nulla quis
            orci rutrum...
          </p>
        </div>
      </div>
    </div>
  );
}
