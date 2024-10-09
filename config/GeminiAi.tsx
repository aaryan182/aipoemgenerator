/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

   export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Create verse on description for 5-40 year olds, educational , rhyming , meaningful and all images in paper cut style: verse on a boy working hard to achieve his dreams and fullfiling his parents dreams, with detailed image text prompt for each verse and image prompt for verse cover with verse name , all in json format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"cover\": {\n    \"verse_name\": \"The Dream Weaver\",\n    \"image_prompt\": \"A paper cut image of a boy with determined eyes, standing tall and proud. He is holding a paintbrush in one hand and a glowing orb in the other. The orb emits light that forms a colorful dream scene with images of a doctor, a scientist, an astronaut, a musician, and an artist. The background is a swirling vortex of vibrant colors.\"\n  },\n  \"verses\": [\n    {\n      \"verse\": \"Little hands, so small and bright,\\nHe paints his dreams with all his might.\\nA world of color, bold and free,\\nHis heart beats with a symphony.\",\n      \"image_prompt\": \"A boy with paper cut features, sitting at a table with a paintbrush in his hand. He is surrounded by vibrant colored paints, and a paper cut canvas with a swirling galaxy on it. The colors are bright and vivid, reflecting his imagination.\"\n    },\n    {\n      \"verse\": \"From stars that shimmer in the night,\\nTo planets dancing in the light,\\nHe weaves a tapestry of dreams,\\nWhere every hope and wish it seems,\\nCan take its flight and soar so high,\\nUnder a paper-cut sky.\",\n      \"image_prompt\": \"A boy with paper cut features, standing on a paper cut moon. He is looking up at a starry sky with a paper cut telescope in his hand. Stars are twinkling, and planets are orbiting a paper cut sun, creating a magical scene.\"\n    },\n    {\n      \"verse\": \"His parents watch with eyes so kind,\\nHis spirit strong, his heart entwined,\\nWith dreams they held within their youth,\\nNow blossoming in wondrous truth.\\nHe climbs the ladder, rung by rung,\\nHis heart with hope and joy is sung.\",\n      \"image_prompt\": \"A boy with paper cut features, standing on a paper cut ladder, reaching for a paper cut star. He is looking up at a paper cut sun, with a paper cut smile. His parents stand below, looking up at him with pride and love. Their eyes are filled with hope and joy, reflecting their dreams coming true.\"\n    },\n    {\n      \"verse\": \"The boy who dreams, the boy who strives,\\nWith every challenge, he survives.\\nHe knows the path may twist and turn,\\nBut his spirit, it will never burn.\\nFor in his heart, a fire resides,\\nThat lights the way, where hope presides.\",\n      \"image_prompt\": \"A boy with paper cut features, standing on a mountain top, with a paper cut sun behind him. The mountain is rocky, but he is climbing towards the peak with determination. The background features paper cut clouds and a paper cut sunset, symbolizing the journey ahead.\"\n    },\n    {\n      \"verse\": \"He reaches for the stars above,\\nAnd finds his dreams, his heart full of love.\\nHis parents smile, their hearts so full,\\nAs he fulfills their dreams, so cool.\\nThe boy who worked, who dared to dream,\\nNow shines a light, a vibrant beam.\",\n      \"image_prompt\": \"A boy with paper cut features, standing tall and proud, holding a paper cut trophy above his head. He is surrounded by confetti and fireworks, celebrating his success. His parents stand beside him, with beaming smiles and tears of joy. Their hearts are filled with pride and love, as their dreams come true.\"\n    }\n  ]\n}\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "Create a rhyming verse intended for 5-40-year-olds, focusing on education, meaningful storytelling, and in a paper-cut style. The verse should tell the story of a boy working hard to achieve his dreams and fulfill his parents' dreams. Each verse should be accompanied by a detailed image description in the paper-cut style, showing how the boy's emotions evolve over time. The images should be uplifting, colorful, and age-appropriate for both children and adults. The language should be simple enough for younger children but deep enough for adults to resonate with. Structure the output in JSON format with separate fields for verse text, detailed image prompt, and a cover image prompt for the verse."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"cover\": {\n    \"verse_name\": \"The Boy Who Reached for the Stars\",\n    \"image_prompt\": \"A paper cut image of a young boy standing on a mountain peak, holding a glowing star in his hand. The mountain is made of layered paper, with vibrant colors representing different stages of his journey. The background is a starry night sky, with a paper cut moon and a glowing sun rising behind the boy, symbolizing the beginning of a new chapter. The boy's eyes are filled with determination and hope, his smile reflects his joy and accomplishment.\"\n  },\n  \"verses\": [\n    {\n      \"verse\": \"A curious boy, with eyes so bright,\\nHe dreamt of stars, day and night.\\nHe'd gaze up high, with wonder in his heart,\\nAnd whisper wishes, hoping to play his part.\",\n      \"image_prompt\": \"A young boy with paper cut features, lying on a grassy field, looking up at a paper cut night sky. The sky is filled with twinkling stars, and a crescent moon hangs in the air. The boy has a paper cut telescope in his hand, pointing at the stars. His eyes are wide with wonder and curiosity, and his smile expresses his excitement and anticipation for the unknown.\" \n    },\n    {\n      \"verse\": \"His parents watched, with love so deep,\\nTheir dreams reflected in his sleep.\\nThey saw a future, bright and grand,\\nA path he'd follow, hand in hand.\",\n      \"image_prompt\": \"A paper cut family scene with the boy sitting at a table with his parents. They are looking at a paper cut book together, with illustrations of different careers. The boy's eyes are wide with interest, and he is pointing at a paper cut image of a scientist. His parents have warm smiles, their eyes filled with love and hope for their son's future.\" \n    },\n    {\n      \"verse\": \"He learned and grew, with every day,\\nBuilding knowledge, come what may.\\nBooks his companions, words his guide,\\nHe climbed the ladder, step by side.\",\n      \"image_prompt\": \"A paper cut image of the boy climbing a paper cut ladder made of books. The boy is holding a book in his hand, and he is looking up with determination. Each step of the ladder represents a new level of knowledge he has gained. The background is a library filled with colorful paper cut bookshelves, with a bright paper cut sun shining through a window.\"\n    },\n    {\n      \"verse\": \"The path was long, with twists and turns,\\nBut his spirit burned, like a fire that burns.\\nHe faced his fears, with courage strong,\\nKnowing his dreams would last long.\",\n      \"image_prompt\": \"A paper cut image of the boy walking through a paper cut forest. The trees are tall and imposing, and the path is winding and uncertain. The boy is holding a paper cut lantern, its light illuminating his way. He looks determined and focused, his eyes reflecting his resolve and resilience in the face of challenges.\"\n    },\n    {\n      \"verse\": \"And finally, he reached his goal,\\nHis heart filled with joy, a story to be told.\\nHe achieved his dreams, with pride so bright,\\nHis parents' smiles, a shining light.\",\n      \"image_prompt\": \"A paper cut image of the boy standing on a mountain peak, holding a paper cut trophy above his head. The mountain is behind him, showcasing the journey he has overcome. The sun is shining brightly above, illuminating the boy's face with happiness. His parents are standing below, looking up at him with pride and love. Their eyes are filled with tears of joy, reflecting their satisfaction and happiness in seeing their son succeed.\"\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  