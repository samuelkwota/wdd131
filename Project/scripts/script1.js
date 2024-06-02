const products = [
    {
      id: "fc-1888",
      name: "1 DAY RAFT TRIP: $30",
      avg_rating: 4.5
    },
    {
      id: "fc-2050",
      name: "2 DAYS RAFT TRIP: $45",
      avg_rating: 4.7
    },
    {
      id: "fs-1987",
      name: "3 DAYS RAFT TRIP: $75",
      avg_rating: 3.5
    },
    {
      id: "ac-2000",
      name: "4 DAYS RAFT TRIP: $100",
      avg_rating: 3.9
    },
    {
      id: "jj-1969",
      name: "5 DAYS RAFT TRIP: $120",
      avg_rating: 5.0
    }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product');
    
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.name;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
    
  });