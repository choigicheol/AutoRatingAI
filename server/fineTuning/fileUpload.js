import axios from "axios";
import fs from "fs";
import { openai } from "./api.js";

async function upload() {
  try {
    const response = await openai.createFile(
      fs.createReadStream("./example3.jsonl"),
      "fine-tune"
    );
    console.log("File ID: ", response.data.id);
  } catch (err) {
    console.log("err: ", err);
  }
}

upload();

// async function uploadFile() {
//   const response = await axios.post(
//     "https://api.openai.com/v1/files",
//     {
//       purpose: "fine-tune",
//       file: "./example.jsonl",
//     },
//     {
//       headers: {
//         Authorization: `Bearer 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`,
//       },
//     }
//   );
//   console.log(response);
// }
// uploadFile();
