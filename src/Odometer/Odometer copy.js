import React, {useEffect, useRef, useState} from "react";
import './Odometer.scss'

const Odometer = ({ num }) => {

  const ref = useRef(null)
  const [odoNum, setOdoNum] = useState([])
  const [oc, setOc] = useState()
  let digit = 0;

  useEffect(()=>{
    if(num) {
      let val = num;
      let c = odoNum
      do {
        digit = val % 10
        let a =[]
        if(digit > 0) {
          for (let i = 0; i <= digit; i++) {
            a.push(i)
          }
        
        }
        else {
          a.push(0)
        }
        let b = [...c, a]
        // setOdoNum(b)
        c=b
        val = parseInt(val / 10);
      } while (val > 0);

      setOdoNum(c)
    }
  },[''])

  useEffect(()=>{
    if(odoNum.length > 0) {
      console.log(odoNum)
      const cont = (odoNum.reverse()).map((item, index) => {
        console.log(index+1)

        return (
          <div className="wrapper" key={index}>
            &nbsp;&nbsp;
            <div className="digit">
              
            {
             item.map((ele, key) => {
              if(index ===1) {
                console.log(item)
              }
              return (
                <span key={key}>{ele}</span>
              )
             })
            }
            </div>
          </div>
        )
      })
      setOc(cont)
    }
  }, [odoNum])

  return <div className="odometer" ref={ref}>{oc}</div>;
  
};

export default Odometer;
