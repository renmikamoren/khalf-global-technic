// Konfigurasi Pusat

const products = [
    { 
        id: 1,
        name: "Diamond Insert (Monocrystalline)", 
        category: "Cutting Tools", 
        brand: "KGT Special Tools", 
        images: [
            "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=800",
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
        ],
        description: "Alat potong presisi tinggi dengan mata intan tunggal. Dirancang khusus untuk pengerjaan finishing pada material non-ferrous dan komposit dengan hasil permukaan super halus.",
        specs: {
            "Material": "Monocrystalline Diamond",
            "Aplikasi": "Finishing Logam",
            "Ketahanan": "Tinggi"
        }
    },
    { 
        id: 2,
        name: "Slushing Oil (Rust Preventive)", 
        category: "Chemical Industri", 
        brand: "VLOT Chemicalien", 
        images: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
            "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800"
        ],
        description: "Cairan pelindung karat berkualitas tinggi yang membentuk lapisan film tipis untuk melindungi komponen mesin selama penyimpanan atau pengiriman jarak jauh.",
        specs: {
            "Tipe": "Oil-based",
            "Proteksi": "Hingga 12 Bulan",
            "Warna": "Transparan"
        }
    },
    { 
        id: 3,
        name: "Safety Vest Hi-Vis Reflective", 
        category: "Apparel & Safety", 
        brand: "KGT Production", 
        images: [
            "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?w=800",
            "https://images.unsplash.com/photo-1623192036496-51f67fec401a?w=800"
        ],
        description: "Rompi keselamatan dengan visibilitas tinggi yang dilengkapi dengan pita reflektor 3M. Cocok untuk pekerja konstruksi, teknisi, dan petugas lapangan.",
        specs: {
            "Bahan": "Polyester Mesh",
            "Fitur": "Pita Reflektor 360°",
            "Ukuran": "All Size"
        }
    },
    { 
        id: 4,
        name: "Ironclad KONG Impact Gloves", 
        category: "Apparel & Safety", 
        brand: "KONG", 
        images: [
            "https://images.unsplash.com/photo-1590101415243-1bc8f6da8677?w=800"
        ],
        description: "Sarung tangan safety profesional dengan proteksi benturan tinggi pada bagian buku jari dan telapak tangan. Sangat tangguh untuk industri berat.",
        specs: {
            "Sertifikasi": "ANSI/ISEA Impact Level 1",
            "Proteksi": "Metacarpal 80% Absorption",
            "Grip": "Tinggi"
        }
    },
    { 
        id: 5,
        name: "Mitsubishi Uni Paint Marker PX-30", 
        category: "Industrial Tools", 
        brand: "Mitsubishi", 
        images: [
            "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800"
        ],
        description: "Spidol cat permanen industri dengan ujung lebar (broad tip). Tahan air, tahan pudar, dan bisa digunakan di permukaan logam, plastik, maupun kaca.",
        specs: {
            "Warna": "Berbagai Macam",
            "Tipe Tinta": "Oil-based Paint",
            "Ujung": "Chisel Tip 4mm - 8.5mm"
        }
    },
    { 
        id: 6,
        name: "Industrial Safety Helmet (Vented)", 
        category: "Apparel & Safety", 
        brand: "KGT Safety", 
        images: [
            "https://images.unsplash.com/photo-1590101415243-1bc8f6da8677?w=800"
        ],
        description: "Helm pelindung kepala dengan ventilasi udara untuk kenyamanan maksimal saat bekerja di area panas atau ketinggian.",
        specs: {
            "Material": "ABS High Impact",
            "Tipe": "Vented (Berventilasi)",
            "Standar": "EN 397 / ANSI Z89.1"
        }
    }
];

const CONTACT_WA = "6285191614070";