import type { WrapperProps } from "@docusaurus/types";
import Mermaid from "@theme-original/Mermaid";
import type MermaidType from "@theme/Mermaid";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  ReactZoomPanPinchContentRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

type Props = WrapperProps<typeof MermaidType>;

type Size = {
  width: number;
  height: number;
};

function useSize(ref: React.RefObject<HTMLElement>): Size {
  const [size, setSize] = useState<Size>({ width: 1, height: 1 });
  useLayoutEffect(() => {
    if (!ref.current) return;
    let r = ref.current!;
    let observer = new ResizeObserver(() => {
      let rect = r.getBoundingClientRect();
      setSize(rect);
    });
    observer.observe(r);
    return () => observer.disconnect();
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
    transformWrapper.current!.zoomToElement(chart.current!, undefined, 0);
  }, [containerSize, chartSize]);

  return (
    <>
      <div ref={container}>
        <TransformWrapper ref={transformWrapper}>
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
