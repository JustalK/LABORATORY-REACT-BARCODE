const Barcode = require('react-barcode');

export function Experience1() {
  return (
    <ul>
      <li>
        <div>A default barcode</div>
        <Barcode value="This is an example" />
      </li>
      <li>
        <div>A barcode with format EAN13</div>
        <Barcode value="123456789012" format="EAN13" />
      </li>
      <li>
        <div>A barcode without value</div>
        <Barcode value="This is a different barcode" displayValue={false} />
      </li>
      <li>
        <div>A barcode with a width</div>
        <Barcode value="This is a different barcode" displayValue={false} width={3} />
      </li>
      <li>
        <div>A barcode with a different height</div>
        <Barcode value="This is a different barcode" displayValue={false} height={20} />
      </li>
      <li>
        <div>A barcode with a different width and height</div>
        <Barcode value="This is a different barcode" displayValue={false} width={0.5} height={10} />
      </li>
      <li>
        <div>A barcode with a text</div>
        <Barcode value="This is a hidden barcode" text="Hidden value" />
      </li>
      <li>
        <div>A barcode with a text position</div>
        <Barcode value="This is a hidden barcode" text="Hidden value" textPosition="top" textAlign="left" />
      </li>
      <li>
        <div>A barcode with a different fontSize</div>
        <Barcode value="This is a hidden barcode" text="Hidden value" fontSize={50} />
      </li>
      <li>
        <div>A barcode with colors</div>
        <Barcode value="This is a barcode" background="#00FFFF" lineColor="#0000FF" />
      </li>
      <li>
        <div>A barcode with colors and margin</div>
        <Barcode value="This is a barcode" background="#00FFFF" lineColor="#0000FF" margin={50}/>
      </li>
      <li>
        <div>A barcode with colors and margins different</div>
        <Barcode value="This is a barcode" background="#00FFFF" lineColor="#0000FF" marginTop={20} marginBottom={50} marginLeft={100} marginRight={40}/>
      </li>
      <li>
        <div>A barcode without flattening</div>
        <Barcode value="29012343" format="EAN8" />
      </li>
      <li>
        <div>A barcode with flattening</div>
        <Barcode value="29012343" format="EAN8" flat={true} />
      </li>
    </ul>
  );
}

export default Experience1;
