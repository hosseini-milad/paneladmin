import React from 'react'
import { useReactToPrint } from 'react-to-print';
import { useState ,useRef,createRef}from 'react'

function Sample() {
  const contentRef = createRef<HTMLDivElement>(null);
const handlePrint = useReactToPrint({ contentRef });

return (
  <div>
    <button onClick={handlePrint}>Print</button>
    <div ref={contentRef}>Content to print</div>
  </div>
);
}

export default Sample
