import React, { useState, useEffect } from 'react';
import '../styles/ShoeCollection.css';
import shoeData from '../data/shoes.json';

const ShoeCollection = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShoePrices = async () => {
      try {
        // First, set the initial shoe data
        setShoes(shoeData.shoes);
        setLoading(false);

        // Then, fetch prices for each shoe
        const updatedShoes = await Promise.all(
          shoeData.shoes.map(async (shoe) => {
            try {
              const searchQuery = shoe.searchQuery
                .replace('{condition}', shoe.condition)
                .replace('{name}', shoe.name)
                .replace('{color}', shoe.color)
                .replace('{size}', shoe.size);

              const response = await fetch('/api/get-shoe-price', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ searchQuery }),
              });

              const data = await response.json();
              return {
                ...shoe,
                currentPrice: data.price,
                currency: data.currency,
                lastUpdated: data.lastUpdated,
                itemUrl: data.itemUrl
              };
            } catch (err) {
              console.error(`Failed to fetch price for ${shoe.name}:`, err);
              return shoe;
            }
          })
        );

        setShoes(updatedShoes);
      } catch (err) {
        setError('Failed to fetch shoe data');
        setLoading(false);
      }
    };

    fetchShoePrices();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <section className="shoe-collection-section">
        <div className="shoe-collection-content">
          <h1 className="shoe-collection-title">Shoe Collection</h1>
          
          <div className="shoe-grid">
            {shoes.map((shoe) => (
              <div key={shoe.id} className="shoe-card">
                <img src={shoe.image} alt={shoe.name} className="shoe-image" />
                <div className="shoe-details">
                  <h3 className="shoe-name">{shoe.name}</h3>
                  <div className="shoe-info">
                    <p><strong>Size:</strong> {shoe.size}</p>
                    <p><strong>Color:</strong> {shoe.color}</p>
                    <p><strong>Condition:</strong> {shoe.condition}</p>
                    <p><strong>Current Market Price:</strong> {shoe.currentMarketPrice ? `${shoe.currency} ${shoe.currentMarketPrice}` : 'N/A'}</p>
                    <p><strong>Quantity:</strong> {shoe.quantity}</p>
                    {shoe.lastUpdated && (
                      <p><strong>Last Updated:</strong> {new Date(shoe.lastUpdated).toLocaleString()}</p>
                    )}
                    {shoe.itemUrl && (
                      <p>
                        <a href={shoe.itemUrl} target="_blank" rel="noopener noreferrer" className="ebay-link">
                          View on eBay
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoeCollection; 