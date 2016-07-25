import PDFDocument from 'pdfkit';
import blobStream from 'blob-stream';
import axios from 'axios';

const BLUE = '#041128';

/**
* ResumeGenerator Class
*/
export default class ResumeGenerator {
  constructor () {

  }

  //Load in resume data
  loadResumeData (resumeData) {
    this.resumeData = resumeData;
  }

  /**
  * CreatePDF()
  *
  * Meant for use in-browser.  Creates resume from the data loaded in
  *   loadResumeData() and forces a browser download of the resulting PDF.
  */
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

  /**
  * addDocContent(doc)
  *
  * Loads the PDFDocument object with the resume content and styles it
  *
  * @param (PDFDocument) doc
  */
  addDocContent(doc) {
    doc.fontSize(24)
      .text("Chris Birk's Resume");

    doc.fill('steelblue');

    doc.fontSize(12)
      .text("Built from https://cmbirk.io/resume", {
        underline: true,
        link: 'https://cmbirk.io/resume'
      });

    doc.text("Generator code on Github", {
      underline: true,
      link: 'https://github.com/cmbirk/cmbirk.io/blob/master/resources/assets/js/services/ResumeGenerator.js'
    })
    .fill('black');

    doc.moveDown();

    doc.text(this.resumeData.introduction);

    doc.moveDown()
      .fill('firebrick');

    doc.fontSize(18)
      .text("Experience:", {
        underline: true
      });

    doc.moveDown();

    this.resumeData.experience.reverse().forEach(function (item) {
      doc.fontSize(14)
        .text(item.title, {
          underline: true
        });

      doc.fontSize(12)
        .fill('black')
        .text(item.description)
        .fill('firebrick');

      doc.moveDown();
    });

    doc.moveDown();

    doc.fontSize(18)
      .text("Education:", {
        underline: true
      });

    this.resumeData.education.reverse().forEach(function (item) {
      doc.fontSize(12)
        .fill('black')
        .text(new Date(item.date).getFullYear() + ' - ' + item.title);

      doc.text(item.description, {
          indent: 4
        });

      doc.moveDown();
    });
  }

  /**
  * savePDF(blob)
  *
  * Appends a element to the document and simulates a click event to download
  *   the generated PDF
  *
  * @param (Blob) blob
  */
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
