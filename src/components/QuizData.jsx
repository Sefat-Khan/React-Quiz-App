import { db } from "../Firebase";
import { collection, setDoc, doc } from "firebase/firestore";


const QuizData = {
    "quiz": {
    "S7gmR82d92g": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 3000G"
                    },
                    {
                        "title": "Ryzen 3600G"
                    },
                    {
                        "title": "Ryzen 3400G"
                    },
                    {
                        "title": "Ryzen 3500G"
                    }
                ]
            },
            {
                "title": "What is the price of RX 580?",
                "options": [
                    {
                        "title": "120$"
                    },
                    {
                        "title": "130$"
                    },
                    {
                        "title": "118$"
                    },
                    {
                        "title": "100$"
                    }
                ]
            }
        ]
    },
    "S02IxJDDG24": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 7600"
                    },
                    {
                        "title": "Ryzen 7500F"
                    },
                    {
                        "title": "Ryzen 7600X"
                    },
                    {
                        "title": "Ryzen 7700"
                    }
                ]
            },
            {
                "title": "What is the price of RTX 4070?",
                "options": [
                    {
                        "title": "720$"
                    },
                    {
                        "title": "740$"
                    },
                    {
                        "title": "718$"
                    },
                    {
                        "title": "719$"
                    }
                ]
            }
        ]
    },
    "fuJs8MO0Bao": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 5600"
                    },
                    {
                        "title": "Ryzen 5500"
                    },
                    {
                        "title": "Ryzen 5600X"
                    },
                    {
                        "title": "Ryzen 5700"
                    }
                ]
            },
            {
                "title": "What is the price of RX 580?",
                "options": [
                    {
                        "title": "120$"
                    },
                    {
                        "title": "140$"
                    },
                    {
                        "title": "119$"
                    },
                    {
                        "title": "114$"
                    }
                ]
            }
        ]
    },
    "vVlaCR_aVrQ": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 7600"
                    },
                    {
                        "title": "Ryzen 7500F"
                    },
                    {
                        "title": "Ryzen 7600X"
                    },
                    {
                        "title": "Ryzen 7700"
                    }
                ]
            },
            {
                "title": "What is the price of RTX 3060?",
                "options": [
                    {
                        "title": "320$"
                    },
                    {
                        "title": "380$"
                    },
                    {
                        "title": "418$"
                    },
                    {
                        "title": "319$"
                    }
                ]
            }
        ]
    },
    "O0ymNdmBHLc": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 7600"
                    },
                    {
                        "title": "Ryzen 7500F"
                    },
                    {
                        "title": "Ryzen 7600X"
                    },
                    {
                        "title": "Ryzen 7700"
                    }
                ]
            },
            {
                "title": "What is the price of RTX 4070?",
                "options": [
                    {
                        "title": "879$"
                    },
                    {
                        "title": "740$"
                    },
                    {
                        "title": "718$"
                    },
                    {
                        "title": "719$"
                    }
                ]
            }
        ]
    },
    "A5kX5IFpJ1M": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 7600"
                    },
                    {
                        "title": "Ryzen 7500F"
                    },
                    {
                        "title": "Ryzen 8600g"
                    },
                    {
                        "title": "Ryzen 8700G"
                    }
                ]
            },
            {
                "title": "What is the price of RTX 4080?",
                "options": [
                    {
                        "title": "1520$"
                    },
                    {
                        "title": "1569$"
                    },
                    {
                        "title": "1499$"
                    },
                    {
                        "title": "1419$"
                    }
                ]
            }
        ]
    },
    "JzvRzfO79rc": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 7600"
                    },
                    {
                        "title": "Ryzen 7500F"
                    },
                    {
                        "title": "Ryzen 7600X"
                    },
                    {
                        "title": "Ryzen 8700G"
                    }
                ]
            },
            {
                "title": "What is the price of RTX 4080?",
                "options": [
                    {
                        "title": "1520$"
                    },
                    {
                        "title": "1569$"
                    },
                    {
                        "title": "1499$"
                    },
                    {
                        "title": "1419$"
                    }
                ]
            }
        ]
    },
    "6qpsW1pZ8fw": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 7600"
                    },
                    {
                        "title": "Ryzen 7500F"
                    },
                    {
                        "title": "Ryzen 7600X"
                    },
                    {
                        "title": "Ryzen 7700"
                    }
                ]
            },
            {
                "title": "What is the price of RTX 4070?",
                "options": [
                    {
                        "title": "879$"
                    },
                    {
                        "title": "740$"
                    },
                    {
                        "title": "718$"
                    },
                    {
                        "title": "719$"
                    }
                ]
            }
        ]
    },
    "y4vI70Z1pKs": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 7600"
                    },
                    {
                        "title": "Ryzen 7500F"
                    },
                    {
                        "title": "Ryzen 7600X"
                    },
                    {
                        "title": "Ryzen 7700"
                    }
                ]
            },
            {
                "title": "What is the price of RTX 3060?",
                "options": [
                    {
                        "title": "320$"
                    },
                    {
                        "title": "340$"
                    },
                    {
                        "title": "318$"
                    },
                    {
                        "title": "380$"
                    }
                ]
            }
        ]
    },
    "2PCB5C6yBuk": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 5700G and i5-12400"
                    },
                    {
                        "title": "Ryzen 5500 and i5 12400K"
                    },
                    {
                        "title": "Ryzen 5600X and i3-12300"
                    },
                    {
                        "title": "Ryzen 5700X and i7-12700"
                    }
                ]
            },
            {
                "title": "What is the price of RTX 3060?",
                "options": [
                    {
                        "title": "320$"
                    },
                    {
                        "title": "380$"
                    },
                    {
                        "title": "318$"
                    },
                    {
                        "title": "319$"
                    }
                ]
            }
        ]
    },
    "6R-frbwPxdY": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "i5-14400F"
                    },
                    {
                        "title": "i5-13400"
                    },
                    {
                        "title": "i5-12400"
                    },
                    {
                        "title": "i7-14700"
                    }
                ]
            },
            {
                "title": "What is the price of RX 6600XT?",
                "options": [
                    {
                        "title": "220$"
                    },
                    {
                        "title": "240$"
                    },
                    {
                        "title": "280$"
                    },
                    {
                        "title": "219$"
                    }
                ]
            }
        ]
    },
    "IvEYA0AbSXM": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 5600G"
                    },
                    {
                        "title": "Ryzen 5500"
                    },
                    {
                        "title": "Ryzen 5600X"
                    },
                    {
                        "title": "Ryzen 5700G"
                    }
                ]
            },
            {
                "title": "What is the price of RTX 3060?",
                "options": [
                    {
                        "title": "320$"
                    },
                    {
                        "title": "340$"
                    },
                    {
                        "title": "318$"
                    },
                    {
                        "title": "390$"
                    }
                ]
            }
        ]
    },
    "hDrylFUPLAc": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "i5-13400"
                    },
                    {
                        "title": "i5-14400"
                    },
                    {
                        "title": "i5-12400"
                    },
                    {
                        "title": "i5-11400"
                    }
                ]
            },
            {
                "title": "What is the frequency of the ram?",
                "options": [
                    {
                        "title": "6000hz"
                    },
                    {
                        "title": "3200hz"
                    },
                    {
                        "title": "4800hz"
                    },
                    {
                        "title": "7200hz"
                    }
                ]
            }
        ]
    },
    "s6LOpvFMJjw": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 7600"
                    },
                    {
                        "title": "Ryzen 7500F"
                    },
                    {
                        "title": "Ryzen 7800X3D"
                    },
                    {
                        "title": "Ryzen 7700"
                    }
                ]
            },
            {
                "title": "What is the price of RX 7900 XTX?",
                "options": [
                    {
                        "title": "1720$"
                    },
                    {
                        "title": "1390$"
                    },
                    {
                        "title": "1618$"
                    },
                    {
                        "title": "1519$"
                    }
                ]
            }
        ]
    },
    "Oazlbk2CcOw": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 7900"
                    },
                    {
                        "title": "Ryzen 7500F"
                    },
                    {
                        "title": "Ryzen 7600X"
                    },
                    {
                        "title": "Ryzen 7700"
                    }
                ]
            },
            {
                "title": "What is the price of RTX 4070 super?",
                "options": [
                    {
                        "title": "820$"
                    },
                    {
                        "title": "840$"
                    },
                    {
                        "title": "900$"
                    },
                    {
                        "title": "819$"
                    }
                ]
            }
        ]
    },
    "J-0qYwEn4_w": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "i5-13400"
                    },
                    {
                        "title": "i5-13400K"
                    },
                    {
                        "title": "i5-12400"
                    },
                    {
                        "title": "i5-12400F"
                    }
                ]
            },
            {
                "title": "What is the price of RTX 4060 Ti?",
                "options": [
                    {
                        "title": "520$"
                    },
                    {
                        "title": "540$"
                    },
                    {
                        "title": "518$"
                    },
                    {
                        "title": "595$"
                    }
                ]
            }
        ]
    },
    "Aw9vG-fNZ04": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 5600"
                    },
                    {
                        "title": "Ryzen 5500"
                    },
                    {
                        "title": "Ryzen 5600X"
                    },
                    {
                        "title": "Ryzen 5700G"
                    }
                ]
            },
            {
                "title": "What is the price of GTX 1650?",
                "options": [
                    {
                        "title": "120$"
                    },
                    {
                        "title": "140$"
                    },
                    {
                        "title": "118$"
                    },
                    {
                        "title": "192$"
                    }
                ]
            }
        ]
    },
    "s6C_7GpzteM": {
        "questions": [
            {
                "title": "What processor used in this build?",
                "options": [
                    {
                        "title": "Ryzen 7600"
                    },
                    {
                        "title": "Ryzen 7500F"
                    },
                    {
                        "title": "Ryzen 7800X3D"
                    },
                    {
                        "title": "Ryzen 7700"
                    }
                ]
            },
            {
                "title": "What is the price of RX 7700 XT?",
                "options": [
                    {
                        "title": "665$"
                    },
                    {
                        "title": "640$"
                    },
                    {
                        "title": "618$"
                    },
                    {
                        "title": "619$"
                    }
                ]
            }
        ]
    },
    "BMNNaocvSos": {
        "questions": [
            {
                "title": "What is the name of the TV?",
                "options": [
                    {
                        "title": "Haier H32K800X"
                    },
                    {
                        "title": "Samsung S95C"
                    },
                    {
                        "title": "LG 32LK510B "
                    },
                    {
                        "title": "Smart SEL-32S22KS"
                    }
                ]
            },
            {
                "title": "What is the price of the TV?",
                "options": [
                    {
                        "title": "1240$"
                    },
                    {
                        "title": "1740$"
                    },
                    {
                        "title": "1180$"
                    },
                    {
                        "title": "1799$"
                    }
                ]
            }
        ]
    },
    "TtZfXu0X-lQ": {
        "questions": [
            {
                "title": "What is the name of the TV?",
                "options": [
                    {
                        "title": "Mango Google TV MG55FG1"
                    },
                    {
                        "title": "Haier H55P7UX"
                    },
                    {
                        "title": "Sony Bravia KD-55X75K"
                    },
                    {
                        "title": "Samsung 55AU9000"
                    }
                ]
            },
            {
                "title": "What is the price of the TV?",
                "options": [
                    {
                        "title": "549$"
                    },
                    {
                        "title": "640$"
                    },
                    {
                        "title": "820$"
                    },
                    {
                        "title": "930$"
                    }
                ]
            }
        ]
    }
  }
};

const importDataToFirestore = async () => {
    const QuizCollection = collection(db, "Quiz");

    for (const [id, quizData] of Object.entries(QuizData.quiz)) {
        await setDoc(doc(QuizCollection, id), quizData);
    }

    console.log('Data successfully imported to Firestore');
}

importDataToFirestore().catch(console.error);