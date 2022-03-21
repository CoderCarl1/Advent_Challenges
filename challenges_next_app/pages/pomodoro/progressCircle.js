import { useEffect, useRef, useState } from "react";

export default function ProgressCircle(props) {
  const { progress, barColor, ...restProps } = props;
  // Show the minutes in the middle
  // The progress is the total minutes / 100 * min remaining
  const numberRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [rotation, setRotation] = useState({ left: 0, right: 0 });

  useEffect(() => {
    let currentValues = {
      left: progress < 50 ? progress * 3.6 : 180,
      right: progress >= 50 ? (progress - 50) * 3.6 : 0,
    };

    if (leftRef.current !== null && rightRef.current !== null) {
      setRotation(currentValues);

      rightRef.current.style.setProperty(
        "transform",
        `rotate(${currentValues.right}deg)`
      );
      leftRef.current.style.setProperty(
        "transform",
        `rotate(${currentValues.left}deg)`
      );
    }
  }, [progress]);

  /**
   *
   *  get min
   * 100 / min = total
   * i.e. 40min = 100/ 40  EQUALS    1min = 2.5%
   *
   * animation checks
   * ROTATE LEFT
   * 50% / 180deg EQUALS   3.6deg per 1%
   * once it is almost done...
   * ROTATE RIGHT
   * 50% / 180deg EQUALS   3.6deg per 1%
   *
   *
   */

  return (
    <div className="circular" {...restProps}>
      <div className="inner"></div>
      <div ref={numberRef} className="number uppercase">
        {progress}%
      </div>
      <div className="circle">
        <div className="bar left">
          <div className="progress" ref={leftRef}></div>
        </div>
        <div className="bar right">
          <div className="progress" ref={rightRef}></div>
        </div>
      </div>
    </div>
  );
}
