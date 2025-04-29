import axios from 'axios';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { searchQuery } = req.body;

    // Make request to eBay Browse API
    const response = await axios.get('https://api.ebay.com/buy/browse/v1/item_summary/search', {
      params: {
        q: searchQuery,
        filter: 'conditions:{NEW|USED}',
        sort: 'price',
        limit: 1
      },
      headers: {
        'Authorization': `Bearer ${process.env.EBAY_ACCESS_TOKEN}`,
        'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US',
        'Content-Type': 'application/json'
      }
    });

    // Get the first item's price
    const item = response.data.itemSummaries[0];
    
    // Return the price data
    return res.status(200).json({
      price: item ? item.price.value : null,
      currency: item ? item.price.currency : 'USD',
      lastUpdated: new Date().toISOString(),
      itemUrl: item ? item.itemWebUrl : null
    });
  } catch (error) {
    console.error('Error:', error);
    
    return res.status(500).json({
      error: 'Failed to fetch shoe price',
      message: error.message
    });
  }
} 