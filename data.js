// サイトのデータを管理するファイル
// このファイルを編集するだけでサイトの内容を更新できます

const siteData = {
    // 会社情報
    company: {
        name: "株式会社eifuku",
        address: "〒150-0001<br>東京都渋谷区神宮前1-1-1<br>eifukuビル 3F",
        phone: "03-1234-5678",
        email: "info@eifuku-inc.com",
        businessHours: "平日 9:00 - 18:00"
    },

    // ヒーロセクション
    hero: {
        title: "Creative Visual Solutions",
        subtitle: "東京を拠点に、撮影・機材レンタルサービスを通じて<br>クリエイティブな映像制作をサポートします。"
    },

    // 統計データ
    stats: {
        equipment: 150,
        projects: 500,
        years: 8
    },

    // サービス
    services: [
        {
            icon: "📷",
            title: "撮影サービス",
            description: "コマーシャル撮影、企業PV、イベント記録など、プロフェッショナルな映像・写真撮影を提供します。",
            features: [
                "4K/8K撮影対応",
                "ドローン撮影",
                "スタジオ撮影"
            ]
        },
        {
            icon: "🎬",
            title: "映像制作",
            description: "企画から編集まで一貫した映像制作サービス。お客様のブランドに最適な映像コンテンツを制作します。",
            features: [
                "企画・構成",
                "撮影・編集",
                "モーショングラフィックス"
            ]
        },
        {
            icon: "📡",
            title: "ライブ配信",
            description: "オンラインイベント、ウェビナー、ライブコマースなど、高品質なライブ配信をトータルサポートします。",
            features: [
                "マルチカメラ配信",
                "音響・照明設備",
                "配信プラットフォーム対応"
            ]
        }
    ],

    // 実績
    works: [
        {
            title: "ブランドCM制作",
            client: "大手アパレルブランド",
            category: "commercial",
            image: "",
            video: "dQw4w9WgXcQ", // YouTubeのVIDEO_ID
            date: "2024-01"
        },
        {
            title: "企業紹介映像",
            client: "IT企業様",
            category: "corporate",
            image: "",
            date: "2024-02"
        },
        {
            title: "カンファレンス配信",
            client: "オンラインイベント",
            category: "event",
            image: "",
            date: "2024-03"
        },
        {
            title: "プロダクトPV",
            client: "メーカー様",
            category: "commercial",
            image: "",
            date: "2024-04"
        },
        {
            title: "採用動画制作",
            client: "人材サービス業",
            category: "corporate",
            image: "",
            date: "2024-05"
        },
        {
            title: "ライブコマース",
            client: "EC事業者様",
            category: "event",
            image: "",
            date: "2024-06"
        }
    ],

    // 機材レンタル
    equipment: {
        "カメラ・レンズ": [
            {
                name: "Sony FX9",
                price: "¥15,000/日",
                specs: "6K Full-Frame センサー、デュアルベースISO"
            },
            {
                name: "Canon C300 Mark III",
                price: "¥12,000/日",
                specs: "4K DGO センサー、15ストップダイナミックレンジ"
            },
            {
                name: "RED KOMODO 6K",
                price: "¥20,000/日",
                specs: "6K Global Shutter、16.5ストップダイナミックレンジ"
            }
        ],
        "照明機材": [
            {
                name: "ARRI SkyPanel S60-C",
                price: "¥8,000/日",
                specs: "RGB LED、調光・調色可能"
            },
            {
                name: "Aputure 300d Mark II",
                price: "¥5,000/日",
                specs: "COB LED、Bowens マウント"
            },
            {
                name: "Godox VL300",
                price: "¥3,000/日",
                specs: "調光可能LEDライト、静音ファン"
            }
        ],
        "音響機材": [
            {
                name: "Zoom F8n Pro",
                price: "¥4,000/日",
                specs: "8チャンネル対応、32bit フロート録音"
            },
            {
                name: "Shure SM7B",
                price: "¥2,000/日",
                specs: "ダイナミックマイク、放送業界標準"
            },
            {
                name: "Rode Wireless GO II",
                price: "¥3,000/日",
                specs: "デュアルチャンネル、内蔵録音機能"
            }
        ]
    }
};

// DOMが読み込まれたらデータを表示
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
    renderWorks();
    renderEquipment();
    updateStats();
});

// サービスを表示
function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = siteData.services.map(service => `
        <div class="service-card">
            <div class="service-icon">
                <div class="icon-emoji">${service.icon}</div>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// 実績を表示
function renderWorks() {
    const worksGrid = document.getElementById('works-grid');
    if (!worksGrid) return;

    worksGrid.innerHTML = siteData.works.map(work => `
        <div class="work-item" data-category="${work.category}">
            <div class="work-image">
                ${work.video ?
                    `<div class="video-container">
                        <iframe src="https://www.youtube.com/embed/${work.video}"
                                frameborder="0"
                                allowfullscreen>
                        </iframe>
                    </div>` :
                    work.image ?
                        `<img src="${work.image}" alt="${work.title}">` :
                        '<div class="placeholder-image"></div>'
                }
                <div class="work-overlay">
                    <h4>${work.title}</h4>
                    <p>${work.client}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// 機材を表示
function renderEquipment() {
    const equipmentCategories = document.getElementById('equipment-categories');
    if (!equipmentCategories) return;

    equipmentCategories.innerHTML = Object.entries(siteData.equipment).map(([category, items]) => `
        <div class="equipment-category">
            <h3>${category}</h3>
            <div class="equipment-items">
                ${items.map(item => `
                    <div class="equipment-item">
                        <div class="equipment-details">
                            <h4>${item.name}</h4>
                            <p class="equipment-specs">${item.specs}</p>
                        </div>
                        <p class="equipment-price">${item.price}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// 統計データを更新
function updateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const dataCount = stat.getAttribute('data-count');
        if (dataCount) {
            // data.js の値で上書き
            if (dataCount === '150') stat.setAttribute('data-count', siteData.stats.equipment);
            if (dataCount === '500') stat.setAttribute('data-count', siteData.stats.projects);
            if (dataCount === '8') stat.setAttribute('data-count', siteData.stats.years);
        }
    });
}