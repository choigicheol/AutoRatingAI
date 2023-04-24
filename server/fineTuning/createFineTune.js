import { openai } from "./api.js";

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: "file-Tj1J6mDnHmP70SvgSpKAHgm5",
      model: "davinci",
    });
    console.log("response: ", response);
  } catch (err) {
    console.log("error: ", err.response.data.error);
  }
}

createFineTune();
