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

    var fontPromise = axios.get('/fonts/WireOne.ttf', {
      responseType: 'arraybuffer'
    }).then(function (res) {
      doc.font(res.data);

      this.addDocContent(doc);

      doc.end();

      stream.on('finish', function () {
        var blob = stream.toBlob('application/pdf');

        this.savePDF(blob);
      }.bind(this));
    }.bind(this));
  }

  addDocContent(doc) {
    doc.fontSize(24)
      .text("Chris Birk's Resume");

    doc.fontSize(12)
      .link('https://cmbirk.io/resume')
      .text("Generated from cmbirk.io/resume", {
        underline: true,
      });
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
