import React, { useEffect, useRef, useState } from "react";
import "./Odometer.scss";

const Odometer = ({ num }) => {
  const ref = useRef(null);
  const [odoNum, setOdoNum] = useState([]);
  const [oc, setOc] = useState();
  let digit = 0;

  useEffect(() => {
    if (num) {
      let val = num;
      let c = odoNum;
      do {
        let a = [];
        if (val > 0) {

          let cVal = String(val)
          
          let iteratorValue = (cVal.length - 1)*10 + val % 10

          for (let i = 0; i <= iteratorValue; i++) {
            a.push(i % 10);
          }
        } else {
          a.push(0);
        }
        let b = [...c, a];
        // setOdoNum(b)
        c = b;
        val = parseInt(val / 10);
      } while (val > 0);

      setOdoNum(c);
    }
  }, [""]);

  useEffect(() => {
    if (odoNum.length > 0) {
      const cont = odoNum.reverse().map((item, index) => {
        console.log(odoNum)
        return (
          <div className="wrapper" key={index}>
            &nbsp;&nbsp;
            <div className="digit">
              {item.map((ele, key) => {
                return <span key={key}>{ele}</span>;
              })}
            </div>
          </div>
        );
      });
      setOc(cont);
    }
  }, [odoNum]);

  return (
    <div className="odometer" ref={ref}>
      {oc}
    </div>
  );
};

export default Odometer;
