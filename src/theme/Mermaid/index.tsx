import type { WrapperProps } from "@docusaurus/types";
import Mermaid from "@theme-original/Mermaid";
import type MermaidType from "@theme/Mermaid";
import type { ReactNode } from "react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

type Props = WrapperProps<typeof MermaidType>;

const CONFIG = {
  scroll_step: 0.5,
} as const;

interface Size {
  width: number;
  height: number;
}

function useSize(ref: React.RefObject<HTMLElement>): Size {
  const [size, setSize] = useState<Size>({ width: 1, height: 1 });
  useLayoutEffect(() => {
    if (!ref.current) {
      return undefined;
    }
    const r = ref.current;
    const observer = new ResizeObserver(() => {
      const rect = r.getBoundingClientRect();
      setSize(rect);
    });
    observer.observe(r);
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return size;
}

export default function MermaidWrapper(props: Props): ReactNode {
  const container = useRef<HTMLDivElement>(null);
  const containerSize = useSize(container);

  const chart = useRef<HTMLDivElement>(null);
  const chartSize = useSize(chart);

  const transformWrapper = useRef<ReactZoomPanPinchContentRef>(null);

  useEffect(() => {
    if (transformWrapper.current !== null && chart.current !== null) {
      transformWrapper.current.zoomToElement(chart.current, undefined, 0);
    }
  }, [containerSize, chartSize]);

  return (
    <>
      <div ref={container}>
        <TransformWrapper
          ref={transformWrapper}
          wheel={{
            step: CONFIG.scroll_step,
            smoothStep: CONFIG.scroll_step / 200,
          }}
        >
          <TransformComponent
            wrapperStyle={{
              width: "100%",
              aspectRatio: chartSize.width / chartSize.height,
              maxHeight: "75vh",
            }}
          >
            <div ref={chart}>
              <Mermaid {...props} />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </>
  );
}
