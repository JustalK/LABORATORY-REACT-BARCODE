const Barcode = require('react-barcode');

export function Experience1() {
  return (
    <ul>
      <li>
        <div>A barcode with format EAN13 with normalized font</div>
        <Barcode value="123456789012" format="EAN13" font="OCRB" />
      </li>
      <li>
        <div>A barcode with format EAN13</div>
        <Barcode value="123456789012" format="EAN13" />
      </li>
      <li>
        <div>A barcode with format UPC</div>
        <Barcode value="123456789012" format="UPC" />
      </li>
      <li>
        <div>A barcode with format EAN13</div>
        <Barcode value="123456789012" format="EAN13" lastChar=">" />
      </li>
      <li>
        <div>A barcode with format EAN8</div>
        <Barcode value="29012343" format="EAN8" />
      </li>
      <li>
        <div>A barcode with format EAN5</div>
        <Barcode value="54495" format="EAN5" />
      </li>
      <li>
        <div>A barcode with format EAN2</div>
        <Barcode value="53" format="EAN2" />
      </li>
      <li>
        <div>A barcode with format CODE39 (deprecated old bar code)</div>
        <Barcode value="123456789012" format="CODE39" />
      </li>
      <li>
        <div>A barcode with format CODE128</div>
        <Barcode value="LETTER123456789012" format="CODE128" />
      </li>
      <li>
        <div>A barcode with format CODE128</div>
        <Barcode value="12" format="CODE128" width={4} />
      </li>
      <li>
        <div>A barcode with format CODE128</div>
        <Barcode value="11" format="CODE128" width={4} />
      </li>
      <li>
        <div>A barcode with format CODE128</div>
        <Barcode value="10" format="CODE128" width={16} />
      </li>
      <li>
        <div>A barcode with format ITF14</div>
        <Barcode value="12345678901231" format="ITF14" />
      </li>
      <li>
        <div>A barcode 1234 with format MSI</div>
        <Barcode value="1234" format="MSI" />
      </li>
      <li>
        <div>A barcode 1234 with format MSI</div>
        <Barcode value="1234" format="MSI10" />
      </li>
      <li>
        <div>A barcode 1234 with format MSI</div>
        <Barcode value="1234" format="MSI11" />
      </li>
      <li>
        <div>A barcode 1234 with format MSI</div>
        <Barcode value="1234" format="MSI1010" />
      </li>
      <li>
        <div>A barcode 1234 with format MSI</div>
        <Barcode value="1234" format="MSI1110" />
      </li>
      <li>
        <div>A barcode with format pharmacode</div>
        <Barcode value="1234" format="pharmacode" />
      </li>
    </ul>
  );
}

export default Experience1;
