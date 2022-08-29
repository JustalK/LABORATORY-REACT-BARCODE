import { useState } from 'react';
const Barcode = require('react-barcode');

export function Experience1() {
  const [val, setVal] = useState<string>('12345678901231');
  return (
    <>
      <ul>
        <li>
          <div>FIRST is a valid barcode</div>
          <Barcode
            value="12345678901231"
            format="ITF14"
            valid={(isValid: boolean) => {
              console.log('FIRST', isValid);
            }}
          />
        </li>
        <li>
          <div>SECOND is a invalid barcode</div>
          <Barcode
            value="1234567890123456"
            format="ITF14"
            valid={(isValid: boolean) => {
              console.log('SECOND', isValid);
            }}
          />
        </li>
        <li>
          <input value={val} onChange={(e) => setVal(e.target.value)} />
          <div>
            The barcode will only be reprinted if the value is valid: 14 digits
          </div>
          <div>THIRD is a changing barcode</div>
          <Barcode
            value={val}
            format="ITF14"
            valid={(isValid: boolean) => {
              console.log('THIRD', isValid);
            }}
          />
        </li>
      </ul>
    </>
  );
}

export default Experience1;
