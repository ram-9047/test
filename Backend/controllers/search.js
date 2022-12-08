const data = require("../util/data.json");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");

exports.searchRecords = (req, res, next) => {
  const searchParams = req.query.id;
  let result = [];

  data.Students.forEach((x) => {
    if (
      x.Name == searchParams ||
      x.Major == searchParams ||
      x.address.state == searchParams ||
      x.address.city == searchParams ||
      x.address.zip == +searchParams ||
      x.address.address_1 == searchParams ||
      x.address.address_2 == searchParams
    ) {
      result.push(x);
    }
  });
  res.status(200).json({ success: true, result });
};

// exports.createPDF = async (req, res, next) => {
//   let data = req.body;
//   console.log(data);
//   const doc = new PDFDocument();

//   let title = Math.floor(Math.random() * 100);

//   doc.pipe(fs.createWriteStream(`${title}output.pdf`));

//   data.forEach((item) => {
//     doc
//       .fontSize(15)
//       .text(
//         `Name: ${item.Name}, Major: ${item.Major},Address: ${item.address.address_1} ${item.address.address_2}, ${item.address.city}, ${item.address.state}, ${item.address.zip}`
//       );
//   });

//   doc.end();
//   res.status(200).json({ success: true, id: `${title}output.pdf` });
// };

// exports.editPDF = (req, res, next) => {
//   let name = req.query.name;
//   console.log(name);
//   let currentPath = path.join(__dirname, "../", `${name}`);
//   // console.log(currentPath);
//   pdf(fs.readFileSync(currentPath))
//     .then((data) => {
//       console.log(data);
//       let file = data.text;
//       const newFormat = file.replace(/(\r\n\t|\n|\r\t)/gm, "");
//       let result = [];
//       result.push(newFormat);
//       console.log(result);
//     })

//     .catch((err) => {
//       res.status(500).send({
//         success: false,
//         error: err,
//       });
//     });
// };
