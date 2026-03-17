// ============================================================
// TRIDENT SPORTS CLUB - SHARED CONFIG
// ============================================================
// FIREBASE SETUP:
// 1. Go to https://console.firebase.google.com
// 2. Create a new project called "trident-sports"
// 3. Click "Web" app, register it
// 4. Copy your firebaseConfig values below
// 5. Enable Firestore Database (Build > Firestore > Create)
// ============================================================

var FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// ============ CLUB INFO (edit freely) ============
var CLUB_INFO = {
  name:    "Trident Sports Club",
  tagline: "One Club. Multiple Sports. Endless Champions.",
  address: "Haridham Society-2, Nr. Avadh Honda Showroom, Ranjitsagar Road, Jamnagar",
  phones:  ["84011 13363", "99983 11845", "93777 13565"],
  mapsUrl: "https://maps.google.com/?q=Haridham+Society+2+Ranjitsagar+Road+Jamnagar+Gujarat",
  whatsapp: "918401113363"   // country code + number, no +
};

// ============ ADMIN CREDENTIALS ============
var ADMIN_CREDS = {
  username: "admin",
  password: "trident2025"
};

// ============ SPORTS DATA (edit to add/remove sports) ============
var SPORTS = [
  {
    id:      "skating",
    name:    "Skating",
    icon:    "⛸️",
    color:   "#00d4ff",
    coach:   "Coach Name",
    coachExp:"8+ Years",
    coachBio:"Add coach bio here.",
    desc:    "Learn skating from basics to advanced tricks. Suitable for all ages.",
    gallery: [
      "https://images.unsplash.com/photo-1566241832378-f0ba5d64e8c3?w=600&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
      "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?w=600&q=80"
    ],
    schedule: "Mon, Wed, Fri — 6:00 AM & 5:00 PM",
    fee:      "Contact for pricing"
  },
  {
    id:      "cricket",
    name:    "Cricket",
    icon:    "🏏",
    color:   "#7FFF00",
    coach:   "Coach Name",
    coachExp:"10+ Years",
    coachBio:"Add coach bio here.",
    desc:    "Professional cricket coaching — batting, bowling, fielding & fitness.",
    gallery: [
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
      "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&q=80",
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80"
    ],
    schedule: "Tue, Thu, Sat — 6:00 AM & 4:00 PM",
    fee:      "Contact for pricing"
  },
  {
    id:      "volleyball",
    name:    "Volleyball",
    icon:    "🏐",
    color:   "#ff9500",
    coach:   "Coach Name",
    coachExp:"7+ Years",
    coachBio:"Add coach bio here.",
    desc:    "Indoor & outdoor volleyball coaching for juniors and adults.",
    gallery: [
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80",
      "https://images.unsplash.com/photo-1592656094267-764a45160876?w=600&q=80",
      "https://images.unsplash.com/photo-1562552052-56b9c5b9b4a9?w=600&q=80"
    ],
    schedule: "Mon, Wed, Fri — 7:00 AM & 6:00 PM",
    fee:      "Contact for pricing"
  },
  {
    id:      "football",
    name:    "Football",
    icon:    "⚽",
    color:   "#ff4444",
    coach:   "Coach Name",
    coachExp:"12+ Years",
    coachBio:"Add coach bio here.",
    desc:    "Football training — dribbling, passing, tactics and team play.",
    gallery: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80"
    ],
    schedule: "Tue, Thu, Sat — 6:00 AM & 5:00 PM",
    fee:      "Contact for pricing"
  },
  {
    id:      "nets",
    name:    "Nets Practice",
    icon:    "🏑",
    color:   "#aa44ff",
    coach:   "Coach Name",
    coachExp:"10+ Years",
    coachBio:"Add coach bio here.",
    desc:    "Dedicated nets sessions for batting & bowling practice.",
    gallery: [
      "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&q=80",
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80"
    ],
    schedule: "Daily — 6:00 AM & 4:00 PM",
    fee:      "Contact for pricing"
  }
];

var TIME_SLOTS = [
  "6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM",
  "4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM"
];

// ============ HELPERS ============
function getSport(id) {
  for (var i = 0; i < SPORTS.length; i++) {
    if (SPORTS[i].id === id) return SPORTS[i];
  }
  return null;
}

// Save to localStorage as fallback
function saveRegistrationLocal(reg) {
  try {
    var existing = JSON.parse(localStorage.getItem('trident_registrations') || '[]');
    existing.push(reg);
    localStorage.setItem('trident_registrations', JSON.stringify(existing));
  } catch(e) {}
}

function getRegistrationsLocal() {
  try { return JSON.parse(localStorage.getItem('trident_registrations') || '[]'); }
  catch(e) { return []; }
}
