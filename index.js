import { input } from '@inquirer/prompts';
import axios from 'axios';


const answer = await input({ message: 'Enter search keyword' });

console.log(answer,process.env.KEY)

axios
  .get(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${answer}&key=${process.env.KEY}&type=video`
  )
  .then((response) => {
    console.log(response.data.items
    );
  })
  .catch((error) => {
    console.error("Error fetching data", error);
  });
