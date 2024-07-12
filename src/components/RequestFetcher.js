import { useEffect } from "react";

function RequestFetcher(news, articles, setArticles){
  useEffect(()=>{
    const fetchImages = async () => {
      
      let url = `https://newsapi.org/v2/everything?q=${news}&sortBy=publishedAt&apiKey=${process.env.NEWS_API}`;
      await fetch(url).then(response => response.json()).then(data=>setArticles(data.articles)).catch((err)=>{
        console.log(err);
    })
    }
    fetchImages()

  }, []);
}

export default RequestFetcher