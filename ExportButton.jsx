import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function ExportButton() {
  const handleExport = () => {
    const input = document.getElementById('portfolio-preview');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('portfolio.pdf');
    });
  };

  return (
    <button onClick={handleExport} className="export-button">
      Download as PDF
    </button>
  );
}

export default ExportButton;
