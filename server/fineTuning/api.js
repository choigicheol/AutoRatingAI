import { Configuration, OpenAIApi } from "openai";
const openaiApiKey = "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";
const configuration = new Configuration({
  apiKey: openaiApiKey,
});

export const openai = new OpenAIApi(configuration);
