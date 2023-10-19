import React, { useEffect, useState } from "react";
import "./Odometer.scss";

const Odometer = ({ num, animationSpeed, animationTimingStyles, classN }) => {
  const [odometerNum, setOdometerNum] = useState([]);
  const [oc, setOc] = useState();

  useEffect(() => {
    if (num) {
      let currNumState = odometerNum;
      do {
        let digitToInsert = [];
        if (num > 0) {
          let StringNum = String(num);

          let iteratorVal = (StringNum.length - 1) * 10 + (num % 10);

          for (let i = 0; i <= iteratorVal; i++) {
            digitToInsert.push(i % 10);
          }
        } else {
          digitToInsert.push(0);
        }
         currNumState = [...currNumState, digitToInsert];
        num = parseInt(num / 10);
      } while (num > 0);

      setOdometerNum(currNumState);
    }
  }, [""]);

  useEffect(() => {
    if (odometerNum.length > 0) {
      const contentToRender = odometerNum.reverse().map((item, index) => {
        const reverseItem = item.reverse()
        return (
          <div className="digitWrapper" key={index}>
            &nbsp;&nbsp;
            <div
              className="digit"
              style={{
                animationDuration: `${animationSpeed}s`,
                animationTimingFunction: `${animationTimingStyles}`,
              }}
            >
              {reverseItem.map((ele, key) => {
                return <span key={key}>{ele}</span>;
              })}
            </div>
          </div>
        );
      });
      setOc(contentToRender);
    }
  }, [odometerNum]);


  window.onload = function () {
    setTimeout(() => {
      const odoMs = Array.from(document.querySelectorAll(".odometer"));
      odoMs.map((ele) => {
        const digitWrapper = ele.querySelector(".digitWrapper");
        if (!digitWrapper) return;
        const hh = digitWrapper.clientHeight;

        const digi = Array.from(ele.querySelectorAll(".digit"));
        digi.map((item) => {
          item.style.marginBottom = `${hh}px`;
        });
      });
    }, 10);
  };

  return (
    <div className={classN ? classN + " odometer" : "odometer"}>{oc && oc}</div>
  );
};

export default Odometer;
