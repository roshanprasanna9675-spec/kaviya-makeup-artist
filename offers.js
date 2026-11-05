/*
  EASY OFFER UPDATES
  ------------------
  Change the package details below whenever you want.
  price: use digits only, without ₹ or commas.
  oldPrice: optional previous price.
  expiresAt: set the offer deadline in ISO format: YYYY-MM-DDTHH:MM:SS+05:30
  Set expiresAt to null if you do not want a countdown.
  Keep the WhatsApp number in script.js unchanged unless the business number changes.
*/
const SITE_CONFIG = {
  businessName: "Kavya Suresh Make-up Artistry",
  whatsappNumber: "919551780086",
  instagramUrl: "https://www.instagram.com/itskaviyasuresh?cplk=MXRmMjB2eDlmeGV5Mg==",
  currency: "₹",
  // Example deadline only. Replace this with the real offer expiry before launch.
  expiresAt: "2026-12-31T23:59:59+05:30",
  services: [
    { name: "Bridal Makeup", note: "Your once-in-a-lifetime look, thoughtfully created.", number: "01" },
    { name: "Reception Makeup", note: "A polished, camera-ready celebration look.", number: "02" },
    { name: "Engagement Makeup", note: "Soft romance with a signature finish.", number: "03" },
    { name: "Party Makeup", note: "Feel confident, radiant and celebration-ready.", number: "04" },
    { name: "HD Makeup", note: "A refined finish for high-definition moments.", number: "05" },
    { name: "Airbrush Makeup", note: "A lightweight, even-looking makeup finish.", number: "06" },
    { name: "Saree Draping", note: "Beautifully styled, neatly finished draping.", number: "07" },
    { name: "Hairstyling", note: "The finishing touch to complete your look.", number: "08" },
    { name: "Mehendi Makeup", note: "Fresh, joyful styling for your celebration.", number: "09" },
    { name: "Pre-wedding Makeup", note: "Camera-ready artistry for your pre-wedding story.", number: "10" }
  ],
  // Replace these sample packages with Kavya's actual prices and inclusions.
  offers: [
    { name: "The Bridal Edit", tag: "SIGNATURE", description: "A considered bridal experience for your big day.", price: null, oldPrice: null, includes: ["Bridal makeup consultation", "Personalised look planning", "Makeup on event day"], featured: true },
    { name: "The Celebration Look", tag: "OCCASION", description: "A beautiful finish for your special celebration.", price: null, oldPrice: null, includes: ["Makeup for one occasion", "Look customisation", "Finishing touches"], featured: false },
    { name: "The Pre-wedding Glow", tag: "PHOTOSHOOT", description: "Feel camera-ready for every frame.", price: null, oldPrice: null, includes: ["Makeup for one look", "Skin-prep routine", "Photoshoot-ready finish"], featured: false }
  ],
  gallery: [
    { title: "The Bridal Muse", category: "bridal", image: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&w=900&q=85" },
    { title: "Soft Glam Story", category: "glam", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85" },
    { title: "Beauty in Detail", category: "details", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85" },
    { title: "The Celebration", category: "bridal", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85" },
    { title: "A Touch of Glam", category: "glam", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85" },
    { title: "The Finishing Touch", category: "details", image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=85" }
  ]
};
