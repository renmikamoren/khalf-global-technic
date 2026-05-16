
  const products = [

    // =========================
    // KGT & MAIN PRODUCTS
    // =========================

    {
        id: 1,
        name: "Diamond Insert (Monocrystalline)",
        category: "Cutting Tools",
        brand: "KGT Special Tools",
        images: [
            "https://www.moresuperhard.com/upfile/201911/2019112937052129.jpg"
        ],
        description: "Alat potong presisi tinggi dengan mata intan tunggal untuk finishing material non-ferrous dan komposit.",
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
            "https://www.image2url.com/r2/default/images/1778826023367-abb8fda8-a9b2-49b7-9f7c-089380a3474c.jpg"
        ],
        description: "Cairan pelindung karat berkualitas tinggi untuk perlindungan komponen mesin selama penyimpanan.",
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
            "https://www.image2url.com/r2/default/images/1778825684722-d43f5564-3fa0-42a3-adc7-ac2d9dc8a8fd.jpeg"
        ],
        description: "Rompi keselamatan visibilitas tinggi dengan reflector untuk kebutuhan industri dan lapangan.",
        specs: {
            "Bahan": "Polyester Mesh",
            "Fitur": "Reflective 360°",
            "Ukuran": "All Size"
        }
    },

    {
        id: 4,
        name: "Ironclad KONG Impact Gloves",
        category: "Apparel & Safety",
        brand: "KONG",
        images: [
            "https://www.image2url.com/r2/default/images/1778826390076-4f2912a2-a25e-433b-b8f5-0f960cba2c9e.webp"
        ],
        description: "Sarung tangan safety profesional dengan proteksi benturan tinggi untuk pekerjaan industri berat.",
        specs: {
            "Sertifikasi": "ANSI/ISEA",
            "Proteksi": "Impact Protection",
            "Grip": "High Grip"
        }
    },

    {
        id: 5,
        name: "Mitsubishi Uni Paint Marker PX-30",
        category: "Industrial Tools",
        brand: "Mitsubishi",
        images: [
            "https://www.image2url.com/r2/default/images/1778826149038-964404da-d1aa-4519-bd67-8e89423cb90e.jpg"
        ],
        description: "Spidol cat permanen industri tahan air dan tahan pudar untuk berbagai permukaan.",
        specs: {
            "Tipe Tinta": "Oil-based Paint",
            "Ujung": "Chisel Tip",
            "Aplikasi": "Metal, Plastic, Glass"
        }
    },

    {
        id: 6,
        name: "Industrial Safety Helmet (Vented)",
        category: "Apparel & Safety",
        brand: "KGT Safety",
        images: [
            "https://www.image2url.com/r2/default/images/1778826491717-d8d6330e-ae8a-4431-889b-7ebf0084ce6f.jpg"
        ],
        description: "Helm safety dengan ventilasi udara untuk kenyamanan dan perlindungan maksimal.",
        specs: {
            "Material": "ABS High Impact",
            "Tipe": "Vented Helmet",
            "Standar": "ANSI / EN397"
        }
    },

    // =========================
    // INDUSTRIAL TOOLS
    // =========================

    {
        id: 7,
        name: "TCT Annular Cutter (Universal Shank)",
        category: "Cutting Tools",
        brand: "TCT Premium",
        images: [
            "https://www.image2url.com/r2/default/images/1778826709690-6f11ea14-bd82-4a7c-932b-fa0ee11d1cfe.webp"
        ],
        description: "Annular cutter TCT berkualitas tinggi untuk pengeboran logam dengan hasil presisi.",
        specs: {
            "Material": "Tungsten Carbide",
            "Shank": "Universal Shank",
            "Cutting Depth": "35mm / 50mm"
        }
    },

    {
        id: 8,
        name: "Nakanishi Spindle E3000 Series",
        category: "Machining Tools",
        brand: "Nakanishi (NSK)",
        images: [
            "https://www.image2url.com/r2/default/images/1778826864301-d2639f7d-25d9-4847-ad01-f4a4a5e3c7ef.jpg"
        ],
        description: "Motor spindle elektrik high-speed dengan performa stabil dan presisi tinggi.",
        specs: {
            "Max Speed": "60,000 RPM",
            "Power": "350W",
            "Cooling": "Air Cooled"
        }
    },

    {
        id: 9,
        name: "SHM Flow Meter (DN15-300)",
        category: "Machining Tools",
        brand: "SHM China",
        images: [
            "https://www.image2url.com/r2/default/images/1778826978297-a65083fe-a625-41db-ba3e-6e2b2ca43a1c.jpeg"
        ],
        description: "Flow meter industri untuk pengukuran aliran cairan dengan akurasi tinggi.",
        specs: {
            "Size Range": "DN15 - DN300",
            "Material": "Cast Iron / Stainless Steel",
            "Accuracy": "+/- 2%"
        }
    },

    {
        id: 10,
        name: "Sensorex PH1000 pH Sensor",
        category: "Chemical Industri",
        brand: "Sensorex",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-RNSJ-j0vJ_fF2JHV7sEV9vo53EIiQHhpQ&s"
        ],
        description: "Sensor pH industri untuk pengukuran kualitas air dan proses kimia.",
        specs: {
            "Type": "pH Electrode",
            "Connector": "BNC",
            "Range": "0 - 14 pH"
        }
    },

    {
        id: 11,
        name: "Nitrile Chemical Resistant Gloves",
        category: "Apparel & Safety",
        brand: "Industrial Grade",
        images: [
            "https://5.imimg.com/data5/SELLER/Default/2023/10/356401293/CY/AY/KD/4305873/nitrile-chemical-resistant-gloves.jpg"
        ],
        description: "Sarung tangan nitrile tahan bahan kimia untuk perlindungan tangan di lingkungan industri.",
        specs: {
            "Material": "Nitrile Rubber",
            "Feature": "Chemical Resistant",
            "Length": "12 Inch"
        }
    },

        // =========================
    // ALIEN PRO CCTV SERIES
    // =========================

    {
        id: 12,
        name: "ALIEN PRO AP-KIA-20FHD Indoor CCTV Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778827754091-7a1480c7-3df9-487c-95ac-0fa94c29e8df.png"
        ],
        description: "Indoor CCTV camera Full HD dengan kualitas gambar jernih untuk monitoring area dalam ruangan.",
        specs: {
            "Resolution": "2MP Full HD",
            "Type": "Indoor CCTV",
            "Output": "AHD / TVI / CVI"
        }
    },

    {
        id: 13,
        name: "ALIEN PRO AP-KIA-50SHD Indoor CCTV Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778827754091-7a1480c7-3df9-487c-95ac-0fa94c29e8df.png"
        ],
        description: "Indoor CCTV Super HD dengan kualitas gambar detail dan fitur night vision.",
        specs: {
            "Resolution": "5MP",
            "Type": "Indoor CCTV",
            "Feature": "Night Vision"
        }
    },

    {
        id: 14,
        name: "ALIEN PRO AP-KOA-20ZHD Outdoor CCTV Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778828997647-2640f9ac-f2bc-4225-a40b-5ce0fa9110a5.png"
        ],
        description: "Outdoor CCTV tahan cuaca untuk monitoring area luar ruangan secara stabil.",
        specs: {
            "Resolution": "2MP HD",
            "Type": "Outdoor CCTV",
            "Protection": "Weatherproof"
        }
    },

    {
        id: 15,
        name: "ALIEN PRO AP-KOA-50SHD Outdoor CCTV Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778828997647-2640f9ac-f2bc-4225-a40b-5ce0fa9110a5.png"
        ],
        description: "Outdoor CCTV Super HD dengan infrared untuk pengawasan siang dan malam.",
        specs: {
            "Resolution": "5MP",
            "Type": "Outdoor CCTV",
            "Feature": "Infrared Night Vision"
        }
    },

    {
        id: 16,
        name: "ALIEN PRO AP-KOA-80 Outdoor CCTV Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778828997647-2640f9ac-f2bc-4225-a40b-5ce0fa9110a5.png"
        ],
        description: "Outdoor CCTV Ultra HD dengan kualitas video detail tinggi untuk sistem keamanan modern.",
        specs: {
            "Resolution": "8MP Ultra HD",
            "Type": "Outdoor CCTV",
            "Feature": "Wide Angle Lens"
        }
    },

    {
        id: 17,
        name: "ALIEN PRO AP-KOA40M-20 Outdoor CCTV Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829131993-dc94030a-2a2a-490b-85cb-6c9465ebb916.png"
        ],
        description: "Outdoor CCTV dengan infrared hingga 40 meter untuk monitoring area luas.",
        specs: {
            "Resolution": "2MP",
            "IR Distance": "40 Meter",
            "Type": "Outdoor CCTV"
        }
    },

    {
        id: 18,
        name: "ALIEN PRO AP-KOA40M-50 Outdoor CCTV Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829131993-dc94030a-2a2a-490b-85cb-6c9465ebb916.png"
        ],
        description: "Outdoor CCTV 5MP dengan kualitas gambar tajam dan infrared 40 meter.",
        specs: {
            "Resolution": "5MP",
            "IR Distance": "40 Meter",
            "Type": "Outdoor CCTV"
        }
    },

    {
        id: 19,
        name: "ALIEN PRO AP-KOA40M-80 Outdoor CCTV Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829131993-dc94030a-2a2a-490b-85cb-6c9465ebb916.png"
        ],
        description: "Outdoor CCTV Ultra HD dengan performa stabil untuk keamanan profesional.",
        specs: {
            "Resolution": "8MP Ultra HD",
            "IR Distance": "40 Meter",
            "Type": "Outdoor CCTV"
        }
    },

    {
        id: 20,
        name: "ALIEN PRO AP-KIIP-20S Indoor IP Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778827754091-7a1480c7-3df9-487c-95ac-0fa94c29e8df.png"
        ],
        description: "Indoor IP camera dengan koneksi jaringan dan kualitas video HD.",
        specs: {
            "Resolution": "2MP",
            "Type": "Indoor IP Camera",
            "Connectivity": "Network/IP"
        }
    },

    {
        id: 21,
        name: "ALIEN PRO AP-KIIP-50S Indoor IP Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778827754091-7a1480c7-3df9-487c-95ac-0fa94c29e8df.png"
        ],
        description: "Indoor IP camera 5MP dengan hasil video tajam untuk monitoring profesional.",
        specs: {
            "Resolution": "5MP",
            "Type": "Indoor IP Camera",
            "Connectivity": "Network/IP"
        }
    },

    {
        id: 22,
        name: "ALIEN PRO AP-KIIP-80 Indoor IP Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778827754091-7a1480c7-3df9-487c-95ac-0fa94c29e8df.png"
        ],
        description: "Indoor IP camera Ultra HD untuk kebutuhan keamanan modern dan detail tinggi.",
        specs: {
            "Resolution": "8MP Ultra HD",
            "Type": "Indoor IP Camera",
            "Connectivity": "Network/IP"
        }
    },

        {
        id: 23,
        name: "ALIEN PRO AP-KOIP-20S Outdoor IP Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778828997647-2640f9ac-f2bc-4225-a40b-5ce0fa9110a5.png"
        ],
        description: "Outdoor IP camera tahan cuaca dengan kualitas video HD untuk monitoring area luar ruangan.",
        specs: {
            "Resolution": "2MP",
            "Type": "Outdoor IP Camera",
            "Protection": "Weatherproof"
        }
    },

    {
        id: 24,
        name: "ALIEN PRO AP-KOIP-50S Outdoor IP Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778828997647-2640f9ac-f2bc-4225-a40b-5ce0fa9110a5.png"
        ],
        description: "Outdoor IP camera 5MP dengan fitur infrared dan performa monitoring stabil.",
        specs: {
            "Resolution": "5MP",
            "Type": "Outdoor IP Camera",
            "Feature": "Infrared Night Vision"
        }
    },

    {
        id: 25,
        name: "ALIEN PRO AP-KOIP-80S Outdoor IP Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778828997647-2640f9ac-f2bc-4225-a40b-5ce0fa9110a5.png"
        ],
        description: "Outdoor IP camera Ultra HD dengan kualitas gambar detail tinggi untuk keamanan profesional.",
        specs: {
            "Resolution": "8MP Ultra HD",
            "Type": "Outdoor IP Camera",
            "Protection": "Weatherproof"
        }
    },

    {
        id: 26,
        name: "ALIEN PRO AP-ANPTZ-2MP PTZ Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829549469-3763523a-30cc-4397-8b39-7932d69d58f8.png"
        ],
        description: "PTZ camera analog dengan fitur pan, tilt, dan zoom untuk pengawasan area luas.",
        specs: {
            "Resolution": "2MP",
            "Type": "PTZ Camera",
            "Feature": "Pan Tilt Zoom"
        }
    },

    {
        id: 27,
        name: "ALIEN PRO AP-ANPTZ-5MP-20X PTZ Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829549469-3763523a-30cc-4397-8b39-7932d69d58f8.png"
        ],
        description: "PTZ camera 5MP dengan optical zoom 20X untuk monitoring jarak jauh.",
        specs: {
            "Resolution": "5MP",
            "Zoom": "20X Optical Zoom",
            "Type": "PTZ Camera"
        }
    },

    {
        id: 28,
        name: "ALIEN PRO AP-ANPTZ-5MP-33X PTZ Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829549469-3763523a-30cc-4397-8b39-7932d69d58f8.png"
        ],
        description: "PTZ camera profesional dengan zoom optik 33X dan kualitas video tajam.",
        specs: {
            "Resolution": "5MP",
            "Zoom": "33X Optical Zoom",
            "Type": "PTZ Camera"
        }
    },

    {
        id: 29,
        name: "ALIEN PRO AP-IPPTZ-2MP IP PTZ Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829778378-03603b5e-fbb8-45b9-bb5a-97910e7d053f.png"
        ],
        description: "IP PTZ camera dengan kualitas HD dan kontrol pan, tilt, serta zoom melalui jaringan.",
        specs: {
            "Resolution": "2MP",
            "Type": "IP PTZ Camera",
            "Connectivity": "Network/IP"
        }
    },

    {
        id: 30,
        name: "ALIEN PRO AP-IPPTZ-5MP-20X IP PTZ Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829778378-03603b5e-fbb8-45b9-bb5a-97910e7d053f.png"
        ],
        description: "IP PTZ camera 5MP dengan zoom 20X untuk pengawasan area besar secara detail.",
        specs: {
            "Resolution": "5MP",
            "Zoom": "20X Optical Zoom",
            "Type": "IP PTZ Camera"
        }
    },

    {
        id: 31,
        name: "ALIEN PRO AP-IPPTZ-5MP-36X IP PTZ Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829778378-03603b5e-fbb8-45b9-bb5a-97910e7d053f.png"
        ],
        description: "IP PTZ camera profesional dengan zoom optik 36X dan kualitas video tinggi.",
        specs: {
            "Resolution": "5MP",
            "Zoom": "36X Optical Zoom",
            "Type": "IP PTZ Camera"
        }
    },

    {
        id: 32,
        name: "ALIEN PRO AP-IPPTZ-8MP-20X IP PTZ Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829778378-03603b5e-fbb8-45b9-bb5a-97910e7d053f.png"
        ],
        description: "IP PTZ camera Ultra HD dengan zoom 20X untuk monitoring profesional.",
        specs: {
            "Resolution": "8MP Ultra HD",
            "Zoom": "20X Optical Zoom",
            "Type": "IP PTZ Camera"
        }
    },

    {
        id: 33,
        name: "ALIEN PRO AP-IPPTZ-8MP-36X IP PTZ Camera",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829778378-03603b5e-fbb8-45b9-bb5a-97910e7d053f.png"
        ],
        description: "IP PTZ camera 8MP dengan zoom optik 36X dan kualitas gambar sangat detail.",
        specs: {
            "Resolution": "8MP Ultra HD",
            "Zoom": "36X Optical Zoom",
            "Type": "IP PTZ Camera"
        }
    },

        {
        id: 34,
        name: "ALIEN PRO AP-AN5M-4CH DVR",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829904395-c9fb7d6b-17a1-4f53-93b4-3aaedb8214cd.png"
        ],
        description: "Digital Video Recorder 4 channel untuk sistem CCTV analog dengan kualitas recording stabil.",
        specs: {
            "Channels": "4CH",
            "Resolution Support": "5MP",
            "Type": "DVR"
        }
    },

    {
        id: 35,
        name: "ALIEN PRO AP-AN5M-8CH DVR",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829904395-c9fb7d6b-17a1-4f53-93b4-3aaedb8214cd.png"
        ],
        description: "DVR 8 channel untuk kebutuhan monitoring CCTV analog di area menengah hingga besar.",
        specs: {
            "Channels": "8CH",
            "Resolution Support": "5MP",
            "Type": "DVR"
        }
    },

    {
        id: 36,
        name: "ALIEN PRO AP-AN5M-16CH DVR",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829904395-c9fb7d6b-17a1-4f53-93b4-3aaedb8214cd.png"
        ],
        description: "DVR 16 channel dengan dukungan recording multi-camera untuk sistem keamanan profesional.",
        specs: {
            "Channels": "16CH",
            "Resolution Support": "5MP",
            "Type": "DVR"
        }
    },

    {
        id: 37,
        name: "ALIEN PRO AP-AN4K-4CH DVR",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829904395-c9fb7d6b-17a1-4f53-93b4-3aaedb8214cd.png"
        ],
        description: "DVR 4 channel dengan dukungan resolusi 4K untuk kualitas video lebih detail.",
        specs: {
            "Channels": "4CH",
            "Resolution": "4K",
            "Type": "DVR"
        }
    },

    {
        id: 38,
        name: "ALIEN PRO AP-AN4K-8CH DVR",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829904395-c9fb7d6b-17a1-4f53-93b4-3aaedb8214cd.png"
        ],
        description: "DVR 8 channel 4K untuk sistem pengawasan CCTV modern dengan performa stabil.",
        specs: {
            "Channels": "8CH",
            "Resolution": "4K",
            "Type": "DVR"
        }
    },

    {
        id: 39,
        name: "ALIEN PRO AP-AN4K-16CH DVR",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778829904395-c9fb7d6b-17a1-4f53-93b4-3aaedb8214cd.png"
        ],
        description: "DVR 16 channel 4K dengan kapasitas recording besar untuk keamanan profesional.",
        specs: {
            "Channels": "16CH",
            "Resolution": "4K",
            "Type": "DVR"
        }
    },

    {
        id: 40,
        name: "ALIEN PRO AP-IP4K-10CH NVR",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778830081998-55cea780-21b9-4425-b221-79bedbe4fe31.png"
        ],
        description: "Network Video Recorder 10 channel dengan dukungan IP camera resolusi 4K.",
        specs: {
            "Channels": "10CH",
            "Resolution": "4K",
            "Type": "NVR"
        }
    },

    {
        id: 41,
        name: "ALIEN PRO AP-IP4K-16CH NVR",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778830081998-55cea780-21b9-4425-b221-79bedbe4fe31.png"
        ],
        description: "NVR 16 channel untuk sistem CCTV IP modern dengan kualitas video ultra HD.",
        specs: {
            "Channels": "16CH",
            "Resolution": "4K",
            "Type": "NVR"
        }
    },

    {
        id: 42,
        name: "ALIEN PRO AP-IP4K-32CH NVR",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778830081998-55cea780-21b9-4425-b221-79bedbe4fe31.png"
        ],
        description: "NVR 32 channel untuk monitoring skala besar dengan dukungan IP camera 4K.",
        specs: {
            "Channels": "32CH",
            "Resolution": "4K",
            "Type": "NVR"
        }
    },

    {
        id: 43,
        name: "ALIEN PRO AP-POE4K-4CH POE NVR",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778830459963-b02058ac-2bf6-46cf-aa2c-481efc073df5.png"
        ],
        description: "POE NVR 4 channel dengan instalasi praktis menggunakan kabel jaringan tunggal.",
        specs: {
            "Channels": "4CH",
            "Feature": "Power over Ethernet",
            "Resolution": "4K"
        }
    },

    {
        id: 44,
        name: "ALIEN PRO AP-POE4K-8CH POE NVR",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778830459963-b02058ac-2bf6-46cf-aa2c-481efc073df5.png"
        ],
        description: "POE NVR 8 channel untuk sistem CCTV IP dengan instalasi lebih efisien.",
        specs: {
            "Channels": "8CH",
            "Feature": "Power over Ethernet",
            "Resolution": "4K"
        }
    },

    {
        id: 45,
        name: "ALIEN PRO AP-POE4K-16CH POE NVR",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778830459963-b02058ac-2bf6-46cf-aa2c-481efc073df5.png"
        ],
        description: "POE NVR 16 channel dengan performa stabil untuk kebutuhan keamanan profesional.",
        specs: {
            "Channels": "16CH",
            "Feature": "Power over Ethernet",
            "Resolution": "4K"
        }
    },

        {
        id: 46,
        name: "ALIEN PRO AP-SPOE-6CH Smart POE Switch",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778831748390-ee08cc9c-4427-4310-b4ef-0e9297232cc3.png"
        ],
        description: "Smart POE switch 6 channel untuk distribusi daya dan jaringan pada sistem CCTV IP.",
        specs: {
            "Channels": "6CH",
            "Feature": "Power over Ethernet",
            "Type": "POE Switch"
        }
    },

    {
        id: 47,
        name: "ALIEN PRO AP-SPOE-10CH Smart POE Switch",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778831779477-463f39f1-19ce-4a85-ac56-1d0126e59a65.png"
        ],
        description: "POE switch 10 channel dengan performa stabil untuk jaringan CCTV dan monitoring.",
        specs: {
            "Channels": "10CH",
            "Feature": "Power over Ethernet",
            "Type": "POE Switch"
        }
    },

    {
        id: 48,
        name: "ALIEN PRO AP-SPOE-18CH Smart POE Switch",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
        ],
        description: "POE switch 18 channel untuk kebutuhan jaringan IP camera skala besar.",
        specs: {
            "Channels": "18CH",
            "Feature": "Power over Ethernet",
            "Type": "POE Switch"
        }
    },

    {
        id: 49,
        name: "ALIEN PRO AP-ANJS CCTV Junction Box",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778831948701-7f0eb255-6664-494f-a9f0-e1d76a899e23.png"
        ],
        description: "Junction box CCTV untuk perlindungan kabel dan koneksi kamera keamanan.",
        specs: {
            "Type": "Junction Box",
            "Application": "CCTV Installation",
            "Material": "Metal Housing"
        }
    },

    {
        id: 50,
        name: "ALIEN PRO AP-IPJS IP Camera Junction Box",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778832001209-f77c09d1-6f92-4e17-aa59-02e0c5d6464d.png"
        ],
        description: "Junction box khusus IP camera untuk instalasi yang lebih aman dan rapi.",
        specs: {
            "Type": "IP Camera Junction Box",
            "Application": "IP CCTV Installation",
            "Material": "Metal Housing"
        }
    },

    {
        id: 51,
        name: "ALIEN PRO AP-PWL-4CH Wireless CCTV Kit",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778832034796-65e72d9c-d905-44b2-902b-9d17a7f7fa33.png"
        ],
        description: "Wireless CCTV kit 4 channel untuk sistem keamanan praktis tanpa kabel panjang.",
        specs: {
            "Channels": "4CH",
            "Connectivity": "Wireless",
            "Type": "CCTV Kit"
        }
    },

    {
        id: 52,
        name: "ALIEN PRO AP-PWL-8CH Wireless CCTV Kit",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778832060914-6373f319-60f5-4af9-af93-d58be3804b2a.png"
        ],
        description: "Wireless CCTV kit 8 channel dengan koneksi stabil untuk monitoring area luas.",
        specs: {
            "Channels": "8CH",
            "Connectivity": "Wireless",
            "Type": "CCTV Kit"
        }
    },

    {
        id: 53,
        name: "ALIEN PRO MAP-01 CCTV Power Supply",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778832099325-e93aa74e-3e5a-42de-b813-ea191c32c059.png"
        ],
        description: "Power supply CCTV berkualitas tinggi untuk distribusi daya sistem keamanan.",
        specs: {
            "Model": "MAP-01",
            "Type": "Power Supply",
            "Application": "CCTV System"
        }
    },

    {
        id: 54,
        name: "ALIEN PRO MAP-02 CCTV Power Supply",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778832099325-e93aa74e-3e5a-42de-b813-ea191c32c059.png"
        ],
        description: "Power supply CCTV dengan output stabil untuk kebutuhan monitoring profesional.",
        specs: {
            "Model": "MAP-02",
            "Type": "Power Supply",
            "Application": "CCTV System"
        }
    },

    {
        id: 55,
        name: "ALIEN PRO MAP-03 CCTV Power Supply",
        category: "Machining Tools",
        brand: "ALIEN PRO",
        images: [
            "https://www.image2url.com/r2/default/images/1778832138922-6aff2d3f-7ca2-4b9c-9b8a-0f0151527aef.png"
        ],
        description: "Power supply CCTV heavy duty dengan performa stabil dan efisiensi tinggi.",
        specs: {
            "Model": "MAP-03",
            "Type": "Power Supply",
            "Application": "Industrial CCTV System"
        }
    },

        // =========================
    // AUTOMA SERIES
    // =========================

    {
        id: 56,
        name: "AUTOMA 1-Piece Screwed Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/11/AUTOMA-Automatic-Valve-Screw-1-Pieced-Ball-Valve-Double-Type.jpg"
        ],
        description: "1-piece screwed ball valve untuk kontrol aliran fluida pada sistem perpipaan industri.",
        specs: {
            "Connection": "Screwed",
            "Type": "1-Piece Ball Valve",
            "Application": "Industrial Piping"
        }
    },

    {
        id: 57,
        name: "AUTOMA 3-Piece Screwed Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/12/AUTOMA-Electric-Valve-Screw-3-Piece-Ball-Valve-495x400.jpg"
        ],
        description: "3-piece screwed ball valve dengan desain mudah maintenance dan daya tahan tinggi.",
        specs: {
            "Connection": "Screwed",
            "Type": "3-Piece Ball Valve",
            "Application": "Industrial Fluid Control"
        }
    },

    {
        id: 58,
        name: "AUTOMA Flanged Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/11/AUTOMA-Automatic-Valve-Flange-Ball-Valve-Single-Type.jpg"
        ],
        description: "Flanged ball valve berkualitas tinggi untuk sistem perpipaan tekanan tinggi.",
        specs: {
            "Connection": "Flanged",
            "Type": "Ball Valve",
            "Application": "Industrial Pipeline"
        }
    },

    {
        id: 59,
        name: "AUTOMA 3-Way Screwed Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/11/AUTOMA-Automatic-Valve-3-Way-Screw-Ball-Valve.jpg"
        ],
        description: "3-way screwed ball valve untuk pengaturan arah aliran fluida pada sistem industri.",
        specs: {
            "Connection": "Screwed",
            "Type": "3-Way Ball Valve",
            "Application": "Flow Diversion"
        }
    },

    {
        id: 60,
        name: "AUTOMA 3-Way Flanged Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/11/AUTOMA-Automatic-Valve-3-Way-Screw-Ball-Valve.jpg"
        ],
        description: "3-way flanged ball valve untuk distribusi dan kontrol aliran industri.",
        specs: {
            "Connection": "Flanged",
            "Type": "3-Way Ball Valve",
            "Application": "Industrial Flow Control"
        }
    },

    {
        id: 61,
        name: "AUTOMA Butterfly Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/11/AUTOMA-Automatic-Valve-Butterfly-Valve-Single-Type.jpg"
        ],
        description: "Butterfly valve dengan desain ringkas dan performa stabil untuk kontrol aliran.",
        specs: {
            "Type": "Butterfly Valve",
            "Operation": "Manual / Automatic",
            "Application": "Industrial Piping"
        }
    },

    {
        id: 62,
        name: "AUTOMA High Performance Butterfly Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/11/AUTOMA-Automatic-Valve-High-Performance-Butterfly-Valve.jpg"
        ],
        description: "High performance butterfly valve untuk aplikasi tekanan dan temperatur tinggi.",
        specs: {
            "Type": "High Performance Butterfly Valve",
            "Application": "High Pressure System",
            "Feature": "Heavy Duty"
        }
    },

    {
        id: 63,
        name: "AUTOMA V-Notch Segmental Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWvivcVW4mQWbUSFiU4JFgEGQE3cb2Q-FAQ&s"
        ],
        description: "Segmental ball valve dengan V-notch untuk kontrol aliran presisi tinggi.",
        specs: {
            "Type": "Segmental Ball Valve",
            "Feature": "V-Notch Control",
            "Application": "Precise Flow Control"
        }
    },

    {
        id: 64,
        name: "AUTOMA Plastic Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/11/AUTOMA-Automatic-Valve-Plastic-Flange-Ball-Valve.jpg"
        ],
        description: "Plastic ball valve tahan korosi untuk aplikasi cairan kimia dan air.",
        specs: {
            "Material": "PVC / Plastic",
            "Type": "Ball Valve",
            "Application": "Chemical Industry"
        }
    },

    {
        id: 65,
        name: "AUTOMA Plastic Butterfly Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://cdn.komachine.com/media/product/subsets/w612/47b66bfb-76cc-4fc3-8200-c500114b7521.webp"
        ],
        description: "Butterfly valve berbahan plastik dengan ketahanan tinggi terhadap korosi.",
        specs: {
            "Material": "PVC / Plastic",
            "Type": "Butterfly Valve",
            "Application": "Chemical Pipeline"
        }
    },

        {
        id: 66,
        name: "AUTOMA Sanitary Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://08.tqsh.net/uploads/2408/sanitary-stainless-steel-3-way-ball-valve-!j.webp"
        ],
        description: "Sanitary ball valve stainless steel untuk industri makanan, minuman, dan farmasi.",
        specs: {
            "Material": "Stainless Steel",
            "Type": "Sanitary Ball Valve",
            "Application": "Food & Pharmaceutical Industry"
        }
    },

    {
        id: 67,
        name: "AUTOMA FRP Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/11/AUTOMA-Automatic-Valve-Plastic-Flange-Ball-Valve.jpg"
        ],
        description: "FRP ball valve dengan ketahanan tinggi terhadap bahan kimia dan korosi.",
        specs: {
            "Material": "FRP",
            "Type": "Ball Valve",
            "Application": "Chemical Industry"
        }
    },

    {
        id: 68,
        name: "AUTOMA Diaphragm Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://contromatic.co.id/wp-content/uploads/2023/07/Definisi-Diaphragm-Valve-dan-Jenisnya.webp"
        ],
        description: "Diaphragm valve untuk kontrol fluida dengan sealing rapat dan minim kebocoran.",
        specs: {
            "Type": "Diaphragm Valve",
            "Feature": "Leak Tight Sealing",
            "Application": "Fluid Control"
        }
    },

    {
        id: 69,
        name: "AUTOMA Pneumatic Cylinder On-Off Globe Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/12/AUTOMA-Globe-Valve-On-Off-Globe-Valve.jpg"
        ],
        description: "Globe valve pneumatik dengan aktuator silinder untuk kontrol otomatis.",
        specs: {
            "Operation": "Pneumatic Cylinder",
            "Type": "On-Off Globe Valve",
            "Application": "Industrial Automation"
        }
    },

    {
        id: 70,
        name: "AUTOMA Tank Bottom Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/11/AUTOMA-Automatic-Valve-Tank-Bottom-Flush-Valve.jpg"
        ],
        description: "Tank bottom ball valve khusus untuk pemasangan pada dasar tangki industri.",
        specs: {
            "Type": "Tank Bottom Ball Valve",
            "Application": "Tank System",
            "Feature": "Bottom Drain Control"
        }
    },

    {
        id: 71,
        name: "AUTOMA Tank Bottom Flush Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://www.unitechvalves.com/assets/img/flush-bottom-ball-valve/flush-bottom-ball-valve-01.jpg"
        ],
        description: "Flush valve untuk sistem pembuangan fluida pada dasar tangki industri.",
        specs: {
            "Type": "Tank Bottom Flush Valve",
            "Application": "Tank Drain System",
            "Feature": "Fast Flush Operation"
        }
    },

    {
        id: 72,
        name: "AUTOMA Pneumatic Cylinder Y-Type Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0O-Itpsh_ltM5h_Mb6nkmbywxOt7TvxXyg&s"
        ],
        description: "Y-Type valve pneumatik untuk pengaturan aliran otomatis pada sistem industri.",
        specs: {
            "Operation": "Pneumatic Cylinder",
            "Type": "Y-Type Valve",
            "Application": "Industrial Fluid Control"
        }
    },

    {
        id: 73,
        name: "AUTOMA Knife Gate Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUkHhRkosJrsJe5JPmRsuL0TrBSkRg4MmJg&s"
        ],
        description: "Knife gate valve untuk slurry, cairan kental, dan material industri berat.",
        specs: {
            "Type": "Knife Gate Valve",
            "Application": "Slurry & Waste Handling",
            "Feature": "Heavy Duty Design"
        }
    },

    {
        id: 74,
        name: "AUTOMA 2-Stage Flanged Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://cdn.komachine.com/media/product/8d3e2a3e-a6b8-4408-b998-9eecbe857bf1"
        ],
        description: "2-stage flanged ball valve untuk kontrol aliran bertahap dan presisi.",
        specs: {
            "Connection": "Flanged",
            "Type": "2-Stage Ball Valve",
            "Application": "Industrial Flow Control"
        }
    },

    {
        id: 75,
        name: "AUTOMA Dampers",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXOI-NN4AJm3Bl0I9e5IvgyKl_ThrhtXGbF_Nq2BfdCIZz3jWG"
        ],
        description: "Damper industri untuk pengaturan aliran udara dan gas pada sistem ventilasi.",
        specs: {
            "Type": "Industrial Damper",
            "Application": "Air & Gas Flow Control",
            "Operation": "Manual / Automatic"
        }
    },

        {
        id: 76,
        name: "AUTOMA Solenoid Valve (ESV Series)",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://img.directindustry.com/images_di/photo-mg/160564-16598103.jpg"
        ],
        description: "Solenoid valve seri ESV untuk kontrol aliran udara dan fluida secara otomatis.",
        specs: {
            "Series": "ESV Series",
            "Type": "Solenoid Valve",
            "Application": "Pneumatic System"
        }
    },

    {
        id: 77,
        name: "AUTOMA Solenoid Valve (ANS Series)",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://www.aisenberg.de/uploads/%E6%B0%94%E5%8A%A8%E6%89%A7%E8%A1%8C%E5%99%A8/5448bf986a2461433f816ed2376b0911.jpg"
        ],
        description: "Solenoid valve seri ANS dengan performa stabil untuk kebutuhan industri.",
        specs: {
            "Series": "ANS Series",
            "Type": "Solenoid Valve",
            "Application": "Industrial Automation"
        }
    },

    {
        id: 78,
        name: "AUTOMA Limit Switch Box (ALS Series)",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://cdn.komachine.com/media/product/automa_55577_jroijl.jpg"
        ],
        description: "Limit switch box seri ALS untuk monitoring posisi valve pada aktuator pneumatik.",
        specs: {
            "Series": "ALS Series",
            "Type": "Limit Switch Box",
            "Application": "Valve Monitoring"
        }
    },

    {
        id: 79,
        name: "AUTOMA Air Filter Regulator (AFR Series)",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://cdn.komachine.com/media/product/211c0aa1-3c4c-41e5-8479-36cc3d27fa8c"
        ],
        description: "Air filter regulator untuk menyaring udara dan menjaga tekanan sistem pneumatik.",
        specs: {
            "Series": "AFR Series",
            "Type": "Air Filter Regulator",
            "Application": "Pneumatic System"
        }
    },

    {
        id: 80,
        name: "AUTOMA Speed Controller (FC Series)",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://phasoncontrols.com/wp-content/uploads/2022/12/fc-1vac-1.webp"
        ],
        description: "Speed controller seri FC untuk pengaturan kecepatan aktuator pneumatik.",
        specs: {
            "Series": "FC Series",
            "Type": "Speed Controller",
            "Application": "Flow Control"
        }
    },

    {
        id: 81,
        name: "AUTOMA Electro-Pneumatic Positioner (EP Series)",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://cdn.komachine.com/media/product/korea-koso_129692_sqyfaf.jpg"
        ],
        description: "Positioner pneumatik elektrik untuk kontrol posisi valve secara presisi.",
        specs: {
            "Series": "EP Series",
            "Type": "Valve Positioner",
            "Application": "Industrial Automation"
        }
    },

    {
        id: 82,
        name: "AUTOMA Muffler (AS Series)",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://www.image2url.com/r2/default/images/1778854632941-2d85bab1-a942-47fb-b8a8-4b52da6e4aec.png"
        ],
        description: "Muffler seri AS untuk mengurangi kebisingan udara buang pada sistem pneumatik.",
        specs: {
            "Series": "AS Series",
            "Type": "Pneumatic Muffler",
            "Application": "Noise Reduction"
        }
    },

    {
        id: 83,
        name: "AUTOMA Manual Handle (ADG Series)",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBHi-v9b08F9W7RWARR7fS8zR6YMz2AY27w&s"
        ],
        description: "Manual handle seri ADG untuk pengoperasian valve secara manual.",
        specs: {
            "Series": "ADG Series",
            "Type": "Manual Handle",
            "Application": "Valve Operation"
        }
    },

    {
        id: 84,
        name: "AUTOMA Electric 1-Piece Screwed Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://cdn.komachine.com/media/product/6828894c-3516-4948-baba-3cc3a7cb3581"
        ],
        description: "Electric ball valve one-piece dengan aktuator elektrik untuk kontrol otomatis.",
        specs: {
            "Operation": "Electric Actuator",
            "Connection": "Screwed",
            "Type": "1-Piece Ball Valve"
        }
    },

    {
        id: 85,
        name: "AUTOMA Electric 3-Piece Screwed Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://cdn.komachine.com/media/product/6828894c-3516-4948-baba-3cc3a7cb3581"
        ],
        description: "Electric 3-piece ball valve dengan desain mudah maintenance dan kontrol otomatis.",
        specs: {
            "Operation": "Electric Actuator",
            "Connection": "Screwed",
            "Type": "3-Piece Ball Valve"
        }
    },

        {
        id: 86,
        name: "AUTOMA Electric Flanged Ball Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuO6awYx4G37wr7toJcwR28gvePoyeH1ASQ&s"
        ],
        description: "Electric flanged ball valve dengan aktuator elektrik untuk kontrol aliran otomatis.",
        specs: {
            "Operation": "Electric Actuator",
            "Connection": "Flanged",
            "Type": "Ball Valve"
        }
    },

    {
        id: 87,
        name: "AUTOMA Electric Butterfly Valve",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/11/AUTOMA-Electric-Valve-Butterfly-Valve-495x400.jpg"
        ],
        description: "Butterfly valve elektrik untuk pengaturan aliran cairan dan gas secara efisien.",
        specs: {
            "Operation": "Electric Actuator",
            "Type": "Butterfly Valve",
            "Application": "Industrial Flow Control"
        }
    },

    {
        id: 88,
        name: "AUTOMA Electric Globe Valve (AQL Series)",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://totalitasindonesia.id/wp-content/uploads/2025/12/AUTOMA-Electric-Actuator-Linear-Type-Actuator-AQL-Series-260x185.jpg"
        ],
        description: "Electric globe valve seri AQL dengan kontrol presisi tinggi untuk kebutuhan industri.",
        specs: {
            "Series": "AQL Series",
            "Operation": "Electric Actuator",
            "Type": "Globe Valve"
        }
    },

    {
        id: 89,
        name: "AUTOMA Electric Globe Valve (AGL Series)",
        category: "Machining Tools",
        brand: "AUTOMA",
        images: [
            "https://www.image2url.com/r2/default/images/1778855135149-f83a8c0f-dc44-4799-9d09-24ac426011ae.png"
        ],
        description: "Electric globe valve seri AGL dengan performa stabil dan akurasi tinggi.",
        specs: {
            "Series": "AGL Series",
            "Operation": "Electric Actuator",
            "Type": "Globe Valve"
        }
    },

    // =========================
    // SHM FLOW METER
    // =========================

    {
        id: 90,
        name: "SHM VORTEX-TP Flow Meter DN15-300",
        category: "Machining Tools",
        brand: "SHM Meters",
        images: [
            "https://meterateknikindonesia.com/storage/01J5KDBEV2Q5K8XJY5KJWRVR4S.jpg"
        ],
        description: "Vortex flow meter industri untuk pengukuran cairan, gas, dan uap dengan akurasi tinggi.",
        specs: {
            "Type": "Vortex Flow Meter",
            "Size Range": "DN15 - DN300",
            "Application": "Liquid, Gas & Steam"
        }
    },

    // =========================
    // NITRILE GLOVES SERIES
    // =========================

    {
        id: 91,
        name: "Nitrile Chemical Resistant Gloves NU1113",
        category: "Apparel & Safety",
        brand: "Industrial Grade",
        images: [
            "https://www.technoavia.com/img/product_images/4901.jpg?sc=model_standart"
        ],
        description: "Sarung tangan nitrile tahan bahan kimia untuk kebutuhan industri dan laboratorium.",
        specs: {
            "Model": "NU1113",
            "Material": "Nitrile Rubber",
            "Feature": "Chemical Resistant"
        }
    },

    {
        id: 92,
        name: "Nitrile Chemical Resistant Gloves NNU1513",
        category: "Apparel & Safety",
        brand: "Industrial Grade",
        images: [
            "https://www.technoavia.com/img/product_images/4901.jpg?sc=model_standart"
        ],
        description: "Sarung tangan nitrile industrial dengan perlindungan terhadap bahan kimia.",
        specs: {
            "Model": "NNU1513",
            "Material": "Nitrile Rubber",
            "Feature": "Industrial Protection"
        }
    },

    {
        id: 93,
        name: "Nitrile Chemical Resistant Gloves NU1813",
        category: "Apparel & Safety",
        brand: "Industrial Grade",
        images: [
            "https://www.ultimateindustrial.co.uk/Images/Product/Default/medium/NL15-bf.jpg"
        ],
        description: "Chemical resistant gloves dengan perlindungan optimal untuk lingkungan kerja berat.",
        specs: {
            "Model": "NU1813",
            "Material": "Nitrile Rubber",
            "Feature": "High Chemical Protection"
        }
    },

    {
        id: 94,
        name: "Nitrile Chemical Resistant Gloves NU2215",
        category: "Apparel & Safety",
        brand: "Industrial Grade",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJYnxZjN-oJC5t0z_zB_oTtfmyBog85d_3Q&s"
        ],
        description: "Heavy duty nitrile gloves dengan ketahanan tinggi terhadap bahan kimia.",
        specs: {
            "Model": "NU2215",
            "Material": "Nitrile Rubber",
            "Feature": "Heavy Duty Protection"
        }
    },

    {
        id: 95,
        name: "Nitrile Chemical Resistant Gloves NF1513",
        category: "Apparel & Safety",
        brand: "Industrial Grade",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJYnxZjN-oJC5t0z_zB_oTtfmyBog85d_3Q&s"
        ],
        description: "Sarung tangan nitrile fleksibel dengan grip nyaman untuk pekerjaan industri.",
        specs: {
            "Model": "NF1513",
            "Material": "Nitrile Rubber",
            "Feature": "Flexible Grip"
        }
    },

        {
        id: 96,
        name: "Nitrile Chemical Resistant Gloves NF1813",
        category: "Apparel & Safety",
        brand: "Industrial Grade",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJYnxZjN-oJC5t0z_zB_oTtfmyBog85d_3Q&s"
        ],
        description: "Sarung tangan nitrile tahan bahan kimia dengan kenyamanan tinggi untuk penggunaan industri.",
        specs: {
            "Model": "NF1813",
            "Material": "Nitrile Rubber",
            "Feature": "Chemical Resistant"
        }
    },

    {
        id: 97,
        name: "Nitrile Chemical Resistant Gloves NF1815",
        category: "Apparel & Safety",
        brand: "Industrial Grade",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJYnxZjN-oJC5t0z_zB_oTtfmyBog85d_3Q&s"
        ],
        description: "Heavy duty nitrile gloves dengan perlindungan optimal terhadap bahan kimia dan pelarut.",
        specs: {
            "Model": "NF1815",
            "Material": "Nitrile Rubber",
            "Feature": "Heavy Duty Protection"
        }
    },

    {
        id: 98,
        name: "Nitrile Chemical Resistant Gloves NF2215",
        category: "Apparel & Safety",
        brand: "Industrial Grade",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJYnxZjN-oJC5t0z_zB_oTtfmyBog85d_3Q&s"
        ],
        description: "Sarung tangan nitrile industrial dengan ketahanan tinggi untuk lingkungan kerja berat.",
        specs: {
            "Model": "NF2215",
            "Material": "Nitrile Rubber",
            "Feature": "Industrial Safety"
        }
    },

    {
        d: 99,
        name: "Industrial Wire Brush 10mm, 12mm, 16mm, 20mm, 30mm",
        category: "Industrial Tools",
        brand: "Industrial Grade",
        images: [
            "https://www.image2url.com/r2/default/images/1778931511597-6568a29f-d80a-453d-9f8c-24de0922627d.jpeg"
        ],
        description: "Sikat kawat industri ukuran 12mm dengan shaft 6mm untuk pembersihan karat, polishing, dan finishing permukaan logam.",
        specs: {
            "Brush Diameter": "12mm",
            "Shaft Diameter": "6mm",
            "Brush Length": "30mm"
        }
    }

];


const CONTACT_WA = "6282313801119";
