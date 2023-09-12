
"use client"


import { useState } from 'react';

function ScrapeTest() {
    const [data, setData] = useState(null);
    const [url, setUrl] = useState('');

    const handleScrape = async () => {
      const response = await fetch(`/api/scrape?url=${encodeURIComponent(url)}`);
    
      if (!response.ok) {
        console.error("API call failed:", response.status, response.statusText);
        return;
      }
    
      const fetchedData = await response.json();
      setData(fetchedData);
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h2 className="text-2xl mb-6">Web Scraping Test</h2>
          
          <input 
              type="text" 
              placeholder="Enter URL to scrape" 
              value={url}
              onChange={e => setUrl(e.target.value)}
              className="border p-2 rounded mb-4 text-blue-800"
          />
          
          <button 
              onClick={handleScrape} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
              Scrape
          </button>
  
          {data && (
              <div className="bg-gray-100 p-4 rounded w-1/2 overflow-x-scroll">
                  <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
              </div>
          )}
      </div>
  );
}

export default ScrapeTest;
