const images = [
    { 
        thumbnail: 'https://images.pexels.com/photos/9589211/pexels-photo-9589211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        hd: 'https://images.pexels.com/photos/9589211/pexels-photo-9589211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        caption: 'The Hungarian Parliament Building is situated in Budapest, Hungary—being one of the most characteristic symbols of the country with its glorified history and architectural wonder. Located on the Danube River, this ranks among the largest and most impressive legislative buildings in Europe. Designed in a neo-Gothic style by Imre Steindl, the building was completed in 1902, and it astounds with a strong combination of spires, arches, and intricate detailing. The buildings symmetrical façade, with statues and ornamental motifs, faces the river, while inside, the Parliament is topped by a great central hall, ornate chambers, and a rich array of artwork and historical artifacts. With a towering 96-meter-high dome, the edifice is both a political and popular tourist site, encapsulating the best of Hungarian culture and heritage.' 
    },
    { 
        thumbnail: 'https://images.pexels.com/photos/13798985/pexels-photo-13798985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        hd: 'https://images.pexels.com/photos/13798985/pexels-photo-13798985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        caption: 'Toast with cream cheese and blueberries is a very simple yet quite scrumptious dish, good for breakfast or as a light snack. The bread was toasted to a golden crisp, satisfying the crunch. On top of it was spread, quite generously, a smooth cream cheese that was rich and creamy against the texture of the toast. Top the cream cheese with a layer of fresh, plump blueberries; this will add the sweetness and pop of bright color. The creamy texture, tart flavor, and crunch all come together to make the dish quite tasty and well-balanced, decadent, and refreshing.' 
    },
    { 
        thumbnail: 'https://images.pexels.com/photos/27363148/pexels-photo-27363148/free-photo-of-vase-with-white-roses-on-dresser.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        hd: 'https://images.pexels.com/photos/27363148/pexels-photo-27363148/free-photo-of-vase-with-white-roses-on-dresser.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        caption: 'A vase of white roses is placed on a dresser to add serenity and elegance to the space. The soft, delicate white roses, with their gentle petals, provide a striking contrast against the smooth, polished finish of the dresser. Whatever the material of the vase, be it clear glass or ceramic, it brings out the simple beauty of the roses so that their natural purity can shine through. The soft light of morning or evening sun infuses the blooms with a soft sheen, bringing warmth and tranquility into the room. This setting radiates a lot of peace and sophistication, making it an ideal ornament for almost any space within a house.' 
    },
    { 
        thumbnail: 'https://images.pexels.com/photos/28905446/pexels-photo-28905446/free-photo-of-modern-london-skyline-with-skyscrapers-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        hd: 'https://images.pexels.com/photos/28905446/pexels-photo-28905446/free-photo-of-modern-london-skyline-with-skyscrapers-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        caption: 'The modern London skyline at sunset is just an amazing view, one of skyscrapers and elegant architectural masterpieces that demand the horizon. The whole atmosphere changes into a mixture of deep blues and purples as the last remnants of light start to fade away. Well-lit windows and streetlights wrap the structures in a warm glow, setting a strong contrast against the cooler hues of the evening sky. The silhouettes of iconic structures like The Shard and the London Eye rise with the newer, more contemporary skyscrapers, feeding the dynamic energy of the city. This is an embodiment of vibrancy and sophistication, portraying how London has emerged as a world city where tradition and innovation greet in perfect harmony.' 
    },
    { 
      thumbnail: 'https://images.pexels.com/photos/29298923/pexels-photo-29298923/free-photo-of-scenic-view-of-hallstatt-s-lakeside-village-in-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      hd: 'https://images.pexels.com/photos/29298923/pexels-photo-29298923/free-photo-of-scenic-view-of-hallstatt-s-lakeside-village-in-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      caption: 'A scenic view of Hallstatts lakeside village in fall is a breathtaking sight, where nature and quaint architecture harmoniously come together. The village, nestled on the edge of Hallstätter See in Austria, is framed by towering mountains, their peaks dusted with the first hints of snow. As autumn settles in, the surrounding trees display vibrant shades of orange, red, and gold, reflecting beautifully in the calm waters of the lake. The charming wooden houses with their traditional Alpine design dot the shoreline, adding to the picturesque scene. Soft autumn light filters through the foliage, casting a warm glow over the village, creating a serene and idyllic atmosphere that feels like stepping into a fairytale.' 
    },
    { 
      thumbnail: 'https://images.pexels.com/photos/29173445/pexels-photo-29173445/free-photo-of-warm-coffee-cup-with-heart-latte-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      hd: 'https://images.pexels.com/photos/29173445/pexels-photo-29173445/free-photo-of-warm-coffee-cup-with-heart-latte-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      caption: 'The sight of a steaming coffee cup with heart-shaped latte art is reassuring and welcoming. Expertly poured steamed milk creates a delicate heart-shaped design that adorns the lattes smooth, velvety surface. The heart stands out as a representation of warmth and concern because of the contrast between the creamy white swirls and the rich, deep brown coffee. The cup, which is frequently placed in a comfortable environment, radiates joy and relaxation, making it ideal for taking a break. Every sip provides a calming escape as the steam softly rises from the cup, hinting at the cozy warmth inside.' 
    },
    { 
      thumbnail: 'https://images.pexels.com/photos/7407310/pexels-photo-7407310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      hd: 'https://images.pexels.com/photos/7407310/pexels-photo-7407310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      caption: 'A woman is gently arranging a vase with grass flowers, her hands carefully selecting each delicate stem. The flowers, with their soft, wispy textures and natural simplicity, add a rustic, earthy touch to the vase. The woman, focused and graceful, arranges the stems thoughtfully, creating a balanced and elegant display. The light in the room softly highlights the subtle beauty of the grass flowers, their slender green stalks and soft, feathery blooms adding a sense of tranquility to the space. As she works, the room fills with a sense of calm, bringing nature’s beauty indoors with every thoughtful placement.' 
    },
    { 
      thumbnail: 'https://images.pexels.com/photos/16637520/pexels-photo-16637520/free-photo-of-flowers-blooming-on-bush-near-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      hd: 'https://images.pexels.com/photos/16637520/pexels-photo-16637520/free-photo-of-flowers-blooming-on-bush-near-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      caption: 'Flowers are blooming on a bush near a house, filling the air with vibrant colors and a sweet fragrance. The bush, lush and full, bursts with an array of blossoms in various shades—bright pinks, purples, yellows, and whites—creating a beautiful contrast against the home’s exterior. The petals, soft and delicate, open fully to catch the sunlight, their vivid hues standing out against the greenery. The house, set in the background, adds a cozy, homely touch to the scene, while the blooming flowers bring life and energy to the yard, making it feel welcoming and serene. The whole setting embodies the essence of spring, evoking feelings of warmth and renewal.' 
    },
    { 
      thumbnail: 'https://images.pexels.com/photos/29284429/pexels-photo-29284429/free-photo-of-elegant-summer-layer-cake-with-fresh-fruits.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      hd: 'https://images.pexels.com/photos/29284429/pexels-photo-29284429/free-photo-of-elegant-summer-layer-cake-with-fresh-fruits.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      caption: 'A gorgeous and delectable dessert is a sophisticated summer layer cake with fresh fruit. The cake has several layers of fluffy buttercream or light, airy sponge that are expertly stacked and covered in a smooth, creamy frosting. Fresh, in-season fruits such as raspberries, blueberries, strawberries, and slices of peaches or kiwi are artistically piled on top, bringing a pop of natural sweetness and aesthetic appeal. Each slice has the ideal mix of flavor and texture thanks to the fruits, which shine with a light glaze and offer a refreshing counterpoint to the cakes richness. It is the perfect focal point for any summer event or get-together because of its elegant and welcoming overall appearance.' 
    },
    { 
      thumbnail: 'https://images.pexels.com/photos/28999320/pexels-photo-28999320/free-photo-of-vintage-red-tram-on-streets-of-prague.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      hd: 'https://images.pexels.com/photos/28999320/pexels-photo-28999320/free-photo-of-vintage-red-tram-on-streets-of-prague.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      caption: 'Pragues cobblestone streets are lined with antique red trams, which provide the citys ancient atmosphere a touch of nostalgia. Pragues architectural gems, from the elaborate building facades to the cobblestone pathways dotted with cafés and shops, make a striking contrast to the trams traditional design and striking red hue. The tram passes famous sites including the Old Town Square and the imposing Prague Castle in the distance as it travels across the city. A timeless sense is created by the scenario, which perfectly combines history and modern culture as the trams vintage appeal coexists with the busy, modern city life.' 
    },
    { 
      thumbnail: 'https://images.pexels.com/photos/29242558/pexels-photo-29242558/free-photo-of-winter-evening-scene-in-baku-with-festive-lights.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      hd: 'https://images.pexels.com/photos/29242558/pexels-photo-29242558/free-photo-of-winter-evening-scene-in-baku-with-festive-lights.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      caption: 'Baku comes alive with Christmas lights that glitter against the fresh, cold air on a winter evening, creating an enchanted scene. The citys modern and historic architecture is bathed in a warm glow as the streets are decked up in sparkling holiday decorations. A notable element of the skyline, the Flame Towers, are exquisitely lit, and the festive ambiance is enhanced by their blazing brilliance. While busy crowds promenade along the waterfront or through crowded commercial areas, sipping hot beverages and taking in the holiday happiness, snow may fall lightly, coating the city in a light layer. Bakus lively energy, the holiday lights, and the chill of winter combine to create a magnificent and welcoming atmosphere that is ideal for celebrating the season.' 
    },
    { 
      thumbnail: 'https://images.pexels.com/photos/14930217/pexels-photo-14930217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      hd: 'https://images.pexels.com/photos/14930217/pexels-photo-14930217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      caption: 'A festive evening is put in motion as glasses of sparkling champagne are tastefully arranged amidst New Years decorations. In each glass, bubbles rise gently to the surface as the golden, bubbly champagne catches the light. Festive accents that provide a dash of glitz and excitement, such sparkling streamers, confetti, or delicate fairy lights, surround the glasses. A tiny clock that is getting close to midnight, signifying the start of a new year, and hints of gold and silver that evoke a refined, festive mood are possible decorations. This lovely arrangement promises happiness, success, and celebration in the upcoming year, inviting a toast to fresh starts.' 
    },
    { 
      thumbnail: 'https://images.pexels.com/photos/29298287/pexels-photo-29298287/free-photo-of-elegant-vietnamese-woman-in-traditional-ao-dai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      hd: 'https://images.pexels.com/photos/29298287/pexels-photo-29298287/free-photo-of-elegant-vietnamese-woman-in-traditional-ao-dai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      caption: 'Wearing the traditional Ao Dai with grace, a sophisticated Vietnamese woman embodies her cultural heritage and ageless beauty. The flowing silk tunic, known as the Ao Dai, is expertly made to highlight her slim figure while permitting elegant mobility. Frequently embellished with vivid colors or delicate pastels, the garment exhibits exquisite craftsmanship with its elaborate designs and delicate needlework. The split pants show off her poised and graceful legs as she walks with confidence, and the long, sweeping arms and high neckline lend an air of sophistication.' 
    },
    { 
      thumbnail: 'https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-12.webp', 
      hd: 'https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-12.webp', 
      caption: 'In a busy urban scene, a young, white woman with short, fashionablely cropped white hair stands with assurance, her appearance contrasting with the lively energy of the metropolis. She stands out as a contemporary, edgy presence because to her striking green jacket, which contrasts with the surrounding crowd muted colors. She appears to have a passion for technology or music, as seen by the sleek, futuristic headphones with metallic details that fit perfectly over her ears. She radiates a feeling of originality and forward-thinking flair, while the bustling metropolitan backdrop behind her, complete with neon signs, blurring lights, and pedestrians, embodies the essence of a fast-paced, tech-driven world. Her concentrated, slightly reflective look lends her urban demeanor a hint of intrigue.' 
    },
    { 
      thumbnail: 'https://images.pexels.com/photos/6530618/pexels-photo-6530618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      hd: 'https://images.pexels.com/photos/6530618/pexels-photo-6530618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      caption: 'A man in a gray knit cap and black jacket grips a black camera steadily and intently. He can blend in with his surroundings, whether in an urban or a natural location, thanks to his simple and functional attire. The gray knit cap adds a little of coziness and casual flair, while the black jacket clean lines give it a sleek, minimalist appearance. His intense and focused look, which is focused through the cameras viewfinder, conveys a strong desire to get the ideal photo. His dedication to his craft is evident in the camera matte black design and refined features, which suggest professional quality. The skill and accuracy of a committed photographer caught in the moment are both evident in this understated yet powerful picture.'
    },
    { 
      thumbnail: 'https://images.pexels.com/photos/28346602/pexels-photo-28346602/free-photo-of-old-man-in-his-bookshop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 
      hd: 'https://images.pexels.com/photos/28346602/pexels-photo-28346602/free-photo-of-old-man-in-his-bookshop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loadp', 
      caption: 'Behind tall stacks of books, each representing a lifetime of learning and interest, an elderly man sits calmly. His glasses resting on the bridge of his nose frame his worn face, which exudes serenity and knowledge. The rooms gentle lighting, which illuminates the spines of books ranging from well-worn classics to more recent, glossy covers, provides a warm, personal ambiance. Wearing a basic shirt and cardigan, he appears relaxed, his hands resting softly on an open book as if he had just stopped reading. The setting conveys a sense of ageless wisdom and the subdued delight of living a life enhanced by literature.' 
    },
  ];
  
  // Select gallery and lightbox elements
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('close');
  
  // Function to create gallery items dynamically
  function createGallery() {
    images.forEach((img, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = img.thumbnail;
        imgElement.alt = img.caption;
        imgElement.dataset.index = index; // Store index as data attribute for easy reference
        gallery.appendChild(imgElement);
    });
  }
  
  // Function to open lightbox with HD image
  function openLightbox(index) {
    const imgData = images[index];
    lightboxImg.src = imgData.hd;
    lightboxCaption.textContent = imgData.caption;
    lightbox.style.display = 'flex';
  }
  
  // Function to close the lightbox
  function closeLightbox() {
    lightbox.style.display = 'none';
  }
  
  // Event delegation for gallery click event
  gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const index = event.target.dataset.index;
        openLightbox(index);
    }
  });
  
  // Close lightbox when clicking close button or outside image
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
  });
  
  // Initialize the gallery
  createGallery();
  