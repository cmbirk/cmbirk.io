import PDFDocument from 'pdfkit';
import blobStream from 'blob-stream';
import axios from 'axios';

export default class ResumeGenerator {
  constructor () {

  }

  loadResumeData (resumeData) {
    this.resumeData = resumeData;
  }

  createPDF () {
    var doc = new PDFDocument;

    var stream = doc.pipe(blobStream('resume.pdf'));

    var xhr = new XMLHttpRequest;

    xhr.onload = function () {
      doc.font(xhr.response);

      doc.fontSize(24)
        .text("Chris Birk's Resume");

      doc.fontSize(12)
        .link('https://cmbirk.io/resume')
        .text("Generated from cmbirk.io/resume", {
          underline: true,
        });

      doc.end();

      stream.on('finish', function () {
        var blob = stream.toBlob('application/pdf');

        this.savePDF(blob);
      }.bind(this));
    }.bind(this);

    xhr.responseType = 'arraybuffer';
    xhr.open('GET', '/fonts/WireOne.ttf', true);
    xhr.send();
  }

  savePDF(blob) {
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style="display:none;";

    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'Chris Birk Resume.pdf';
    a.click();

    window.URL.revokeObjectURL(url);
  }
}
