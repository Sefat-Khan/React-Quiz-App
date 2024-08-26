import { db } from "../Firebase";
import { collection, setDoc, doc } from "firebase/firestore";


const VideosData = {
    "videos": {
        "1": {
            "youtubeID": "S7gmR82d92g",
            "title": "20K PC Build & RX 580 Gaming Upgrade",
            "noq": 2
        },
        "2": {
            "youtubeID": "S02IxJDDG24",
            "title": "150K PC Build Guide 2024 | Ft. RTX 4070",
            "noq": 2
        },
        "3": {
            "youtubeID": "fuJs8MO0Bao",
            "title": "45K Best Gaming PC Build & Giveaway",
            "noq": 2
        },
        "4": {
            "youtubeID": "vVlaCR_aVrQ",
            "title": "৬৩ হাজারে সেরা গ্রাফিক্স ডিজাইন পিসি বিল্ড",
            "noq": 2
        },
        "5": {
            "youtubeID": "O0ymNdmBHLc",
            "title": "60K PC Build Guide 2024 | Ft. Ryzen 5 7600",
            "noq": 2
        },
        "6": {
            "youtubeID": "A5kX5IFpJ1M",
            "title": "58K PC Build Guide 2024 | Ft Ryzen 5 8600G",
            "noq": 2
        },
        "7": {
            "youtubeID": "JzvRzfO79rc",
            "title": "BDT 76K PC Build Guide 2024 | Ft. Ryzen 7 8700G, MSI Pro B650M-B",
            "noq": 2
        },
        "8": {
            "youtubeID": "6qpsW1pZ8fw",
            "title": "62K PC Build Guide 2024 | Ft. Ryzen 7 7700, MSI Pro B650M-P",
            "noq": 2
        },
        "9": {
            "youtubeID": "y4vI70Z1pKs",
            "title": "2K গেমিং পিসি!!| 85K PC build Guide 2024 7500F, MSI Pro A620M-E, RTX 3060 12GB Ventus 2X",
            "noq": 2
        },
        "10": {
            "youtubeID": "2PCB5C6yBuk",
            "title": "৪০ হাজারে Intel না AMD? Budget PC Build",
            "noq": 2
        },
        "11": {
            "youtubeID": "6R-frbwPxdY",
            "title": "আর নয় Ryzen! ফাইনালি লাখ টাকার ইন্টেল বিল্ড।",
            "noq": 2
        },
        "12": {
            "youtubeID": "IvEYA0AbSXM",
            "title": "BDT 42K PC Build 2024",
            "noq": 2
        },
        "13": {
            "youtubeID": "hDrylFUPLAc",
            "title": "ব্রান্ড পিসির ময়নাতদন্ত!! | MSI DP 180 Bangla Review",
            "noq": 2
        },
        "14": {
            "youtubeID": "s6LOpvFMJjw",
            "title": "300K Open PC Build | Studio PC Upgrade 2024 7800X3D, MSI B650 Tomahwk Wifi, AB50GL, 7900 XTX",
            "noq": 2
        },
        "15": {
            "youtubeID": "Oazlbk2CcOw",
            "title": "BDT 223K PC BUILD GUIDE 2024 | Ft. Ryzen 9 & RTX 4070 Super",
            "noq": 2
        },
        "16": {
            "youtubeID": "J-0qYwEn4_w",
            "title": "37K PC Build Guide 2024 | Ft. Core i5-12400 MSI Pro H610M-E, M100A, A500DN",
            "noq": 2
        },
        "17": {
            "youtubeID": "Aw9vG-fNZ04",
            "title": "52K PC Build Guide 2024 | 4K Video Editing PC!!",
            "noq": 2
        },
        "18": {
            "youtubeID": "s6C_7GpzteM",
            "title": "Project Red July | 160K PC Build Guide 2024",
            "noq": 2
        },
        "19": {
            "youtubeID": "BMNNaocvSos",
            "title": "Biggest Unboxing of the Year Samsung S95C QD OLED TV",
            "noq": 2
        },
        "20": {
            "youtubeID": "TtZfXu0X-lQ",
            "title": "আমজনতার 4k টিভি Mango Google TV MG55FG1 Review Bangla",
            "noq": 2
        }
      }
};

const importDataToFirestore = async () => {
    const VideosCollection = collection(db, "videos");

    for (const [id, videoData] of Object.entries(VideosData.videos)) {
        await setDoc(doc(VideosCollection, id), videoData);
    }

    console.log('Data successfully imported to Firestore');
}

importDataToFirestore().catch(console.error);