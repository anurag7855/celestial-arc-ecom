const productData = {
  suits: [
    { 
      id: "1", 
      name: "Don's Silk-Blend Suit", 
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", 
      price: "$1,299.99", 
      description: "Bespoke Italian silk-wool blend with reinforced shoulders and custom lining.",
      rating: 5.0
    },
    { 
      id: "2", 
      name: "Capo Three-Piece", 
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80", 
      price: "$1,499.99", 
      description: "Peak lapel tuxedo with satin trim and hidden compartments.",
      rating: 4.9
    },
    { 
      id: "3", 
      name: "Consigliere Double-Breasted", 
      image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      price: "$1,599.99", 
      description: "English wool with hand-stitched details and bullet-resistant lining (optional).",
      rating: 5.0
    }
  ],
  shirts: [
    { 
      id: "4", 
      name: "Made Silk Shirt", 
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80", 
      price: "$349.99", 
      description: "Handcrafted silk with mother-of-pearl buttons and hidden pocket.",
      rating: 4.8
    },
    { 
      id: "5", 
      name: "Omertà White Dress Shirt", 
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80", 
      price: "$299.99", 
      description: "200-thread count Egyptian cotton with French cuffs.",
      rating: 4.7
    }
  ],
  outerwear: [
    { 
      id: "6", 
      name: "Family Overcoat", 
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      price: "$899.99", 
      description: "Cashmere-blend with reinforced stitching and custom lining.",
      rating: 4.9
    },
    { 
      id: "7", 
      name: "Black Hand Leather Jacket", 
      image: "https://images.unsplash.com/photo-1556909114-44e1d3a9b588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", 
      price: "$1,199.99", 
      description: "Full-grain Italian leather with hand-tooled details.",
      rating: 5.0
    }
  ],
  accessories: [
    { 
      id: "8", 
      name: "Signet Ring", 
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80", 
      price: "$2,499.99", 
      description: "24k gold with custom family crest engraving.",
      rating: 4.9
    },
    { 
      id: "9", 
      name: "Silk Pocket Square Set", 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", 
      price: "$249.99", 
      description: "Hand-rolled Italian silk in seven classic patterns.",
      rating: 4.6
    },
    { 
      id: "10", 
      name: "Venetian Loafers", 
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80", 
      price: "$599.99", 
      description: "Hand-stitched with non-slip soles and hidden compartment.",
      rating: 4.8
    }
  ],
  leatherGoods: [
    { 
      id: "11", 
      name: "Briefcase", 
      image: "https://images.unsplash.com/photo-1556909114-44e1d3a9b588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", 
      price: "$899.99", 
      description: "Full-grain leather with titanium locking mechanism.",
      rating: 4.7
    },
    { 
      id: "12", 
      name: "Gloves", 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", 
      price: "$349.99", 
      description: "Butter-soft Italian leather with reinforced knuckles.",
      rating: 4.5
    }
  ]
};

export default productData;