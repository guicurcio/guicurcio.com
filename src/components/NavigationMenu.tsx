import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const NavigationMenu = (props: Props) => {
  return (
    <NavigationMenuPrimitive.Root className="relative">
      <NavigationMenuPrimitive.List className="flex flex-row -space-x-2 rounded-lg ">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger
            className={twMerge(
              "rounded-md px-3 py-2 text-sm hover:bg-editor dark:hover:bg-gray-900",
              "text-sm font-medium",
              "text-gray-700 dark:text-gray-100",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <div
              className="relative h-7 w-7 rounded-lg border border-[#302f2f] bg-editor"
              style={{ boxShadow: "0px 6px 20px 0 rgba(0,0,0,0.08)" }}
            >
              <div className="h-7 w-7">
                {/* <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="borderobject-contain absolute h-7  w-7 rounded-t-md  blur-[0.5px] brightness-[80%]"
                  src="https://tailwindcss.com/_next/static/media/column.com.b51c82b855e43d930ae0ef0bd15579df.mp4"
                /> */}
              </div>
            </div>
          </NavigationMenuPrimitive.Trigger>

          <NavigationMenuPrimitive.Content
            className={twMerge(
              "absolute top-0 left-0 w-auto rounded-lg",
              "radix-motion-from-start:animate-enter-from-left",
              "radix-motion-from-end:animate-enter-from-right",
              "radix-motion-to-start:animate-exit-to-left",
              "radix-motion-to-end:animate-exit-to-right"
            )}
          >
            <div className="p-3 lg:w-[800px]">
              <div className="grid grid-cols-6 gap-4"></div>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger
            className={twMerge(
              "rounded-md px-3 py-2 text-sm hover:bg-editor",
              "text-sm font-medium",
              "text-gray-700 dark:text-gray-100",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <div
              className="relative h-7 w-7 rounded-lg border border-[#302f2f] bg-editor"
              style={{ boxShadow: "0px 6px 20px 0 rgba(0,0,0,0.08)" }}
            >
              <div className="absolute w-4 h-4 left-2 top-2">
                <div className="absolute top-0 left-0 w-4 h-4 overflow-hidden">
                  <img
                    src="raise.png.png"
                    className="absolute left-[-1px] top-[-1px] h-4 w-4 object-contain"
                  />
                </div>
              </div>
            </div>
          </NavigationMenuPrimitive.Trigger>

          <NavigationMenuPrimitive.Content
            className={twMerge(
              "absolute top-0 right-0 w-auto rounded-lg",
              "radix-motion-from-start:animate-enter-from-left",
              "radix-motion-from-end:animate-enter-from-right",
              "radix-motion-to-start:animate-exit-to-left",
              "radix-motion-to-end:animate-exit-to-right"
            )}
          >
            <div className="w-[16rem] p-3 lg:w-[18rem]"></div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger
            className={twMerge(
              "rounded-md px-3 py-2 text-sm hover:bg-editor",
              "text-sm font-medium",
              "text-gray-700 dark:text-gray-100",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <div
              className="relative h-7 w-7 rounded-lg border border-[#302f2f] bg-editor"
              style={{ boxShadow: "0px 6px 20px 0 rgba(0,0,0,0.08)" }}
            >
              <div className="absolute w-4 h-4 left-2 top-2">
                <div className="absolute top-0 left-0 w-4 h-4 overflow-hidden">
                  <img
                    src="raise.png.png"
                    className="absolute left-[-1px] top-[-1px] h-4 w-4 object-contain"
                  />
                </div>
              </div>
            </div>
          </NavigationMenuPrimitive.Trigger>

          <NavigationMenuPrimitive.Content
            className={twMerge(
              "absolute top-0 right-0 w-auto rounded-lg",
              "radix-motion-from-start:animate-enter-from-left",
              "radix-motion-from-end:animate-enter-from-right",
              "radix-motion-to-start:animate-exit-to-left",
              "radix-motion-to-end:animate-exit-to-right"
            )}
          >
            <div className="w-[16rem] p-3 lg:w-[18rem]"></div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger
            className={twMerge(
              "rounded-md px-3 py-2 text-sm hover:bg-editor",
              "text-sm font-medium",
              "text-gray-700 dark:text-gray-100",
              "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <div
              className="relative h-7 w-7 rounded-lg border border-[#302f2f] bg-editor"
              style={{ boxShadow: "0px 6px 20px 0 rgba(0,0,0,0.08)" }}
            >
              <div className="absolute w-4 h-4 left-2 top-2">
                <div className="absolute top-0 left-0 w-4 h-4 overflow-hidden">
                  <img
                    src="raise.png.png"
                    className="absolute left-[-1px] top-[-1px] h-4 w-4 object-contain"
                  />
                </div>
              </div>
            </div>
          </NavigationMenuPrimitive.Trigger>

          <NavigationMenuPrimitive.Content
            className={twMerge(
              "absolute top-0 right-0 w-auto rounded-lg",
              "radix-motion-from-start:animate-enter-from-left",
              "radix-motion-from-end:animate-enter-from-right",
              "radix-motion-to-start:animate-exit-to-left",
              "radix-motion-to-end:animate-exit-to-right"
            )}
          >
            <div className="w-[16rem] p-3 lg:w-[18rem]"></div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Indicator
          className={twMerge(
            "z-10",
            "top-[100%] flex h-2 items-end justify-center overflow-hidden",
            "radix-state-visible:animate-fade-in",
            "radix-state-hidden:animate-fade-out",
            "transition-[width_transform] duration-[250ms] ease-[ease]"
          )}
        >
          <div className="relative w-2 h-2 rotate-45 bg-white bg-opacity-50 top-1 dark:bg-editor" />
        </NavigationMenuPrimitive.Indicator>
      </NavigationMenuPrimitive.List>

      <div
        className={twMerge(
          "absolute flex justify-center",
          "left-[-20%] top-[70px] w-[180%]"
        )}
        style={{
          perspective: "2000px",
        }}
      >
        <NavigationMenuPrimitive.Viewport
          className={twMerge(
            "relative mt-2 overflow-hidden rounded-md bg-white shadow-lg dark:bg-editor",
            "w-radix-navigation-menu-viewport",
            "h-radix-navigation-menu-viewport",
            "radix-state-open:animate-scale-in-content",
            "radix-state-closed:animate-scale-out-content",
            "origin-[top_center] transition-[width_height] duration-300 ease-[ease]"
          )}
        />
      </div>
    </NavigationMenuPrimitive.Root>
  );
};

export default NavigationMenu;
