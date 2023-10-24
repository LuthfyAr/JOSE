import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { Configuration, OpenAIApi } from "openai";

const config = new Configuration ({
    apiKey: "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",
})

const openai = new OpenAIApi(config);

// server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// end point chatgpt
app.post('/chat',async (req, res) => {
    // try {
        const { prompt } = req.body;

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "Kamu adalah dokter hewan, saya akan bertanya tentang jenis hewan, gejala hewan, dan deskripsi gejalanya. berikan hasil analisis, jangan bertanya lagi hanya sekali saja dan juga berikan tindakan yang harus dilakukan dan apakah perlu tindak lanjut oleh dokter.",
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
          });

        // const completion = await openai.createCompletion({
        //     model: 'whisper-1',
        //     max_token: 512,
        //     temperature: 0,
        //     prompt: prompt,
        // });

        res.send(response.data.choices[0].message);
    // } catch (error) {
    //     res.send(error.message);
    // }

    

});

const port = 8080;
app.listen(port,() => {
    console.log(`Server listening on port ${port}`)
});