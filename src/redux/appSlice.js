import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lessons: [
    {
      id: "1",
      title: "ระบบสุริยะ",
      videoLink: "",
      sound: "solar-system.wav",
      sections: [
        {
          text: "ระบบสุริยะ คือ ระบบที่มีดวงอาทิตย์เป็นศูนย์กลาง และมีวัตถุจำนวนหนึ่งถูกดึงดูดให้โคจรรอบดวงอาทิตย์ ระบบสุริยะประกอบด้วย ดวงอาทิตย์ ดาวเคราะห์ บริวารทั้ง 8 ดวง ดาวเคราะห์แคระ และวัตถุอื่นๆ ได้แก่ ดวงจันทร์ ดาวเคราะห์น้อย ดาวหาง และดาวตก หรืออุกกาบาต ซึ่งดาวเหล่านี้โคจรรอบดวงอาทิตย์ในขณะเดียวกันก็หมุนรอบตัวเองด้วย",
          subtitle: "ดูลำดับของการโคจร",
          backgroundImg: "background-solar-system.png",
          backgroundMobileImg: "background-solar-system-mobile.png"
        },
        {
          text: "ระบบสุริยะ คือ ระบบที่มีดวงอาทิตย์เป็นศูนย์กลาง และมีวัตถุจำนวนหนึ่งถูกดึงดูดให้โคจรรอบดวงอาทิตย์ ระบบสุริยะประกอบด้วย ดวงอาทิตย์ ดาวเคราะห์ บริวารทั้ง 8 ดวง ดาวเคราะห์แคระ และวัตถุอื่นๆ ได้แก่ ดวงจันทร์ ดาวเคราะห์น้อย ดาวหาง และดาวตก หรืออุกกาบาต ซึ่งดาวเหล่านี้โคจรรอบดวงอาทิตย์ในขณะเดียวกันก็หมุนรอบตัวเองด้วย",
          subtitle: "ดูวงโคจร",
          backgroundImg: "background-solar-system-2.png",
          backgroundMobileImg: "background-solar-system-2-mobile.png"

        }
      ]
    },
    {
      id: "2",
      title: "ดวงอาทิตย์",
      videoLink: "MiNBz6wyaGU",
      meteorite: true,
      sound: "sun.wav",
      sections: [
        {
          text: "ดวงอาทิตย์เป็นดาวฤกษ์ดวงหนึ่งที่อยู่ใกล้โลกมากที่สุด มีขนาดใหญ่กว่าโลกประมาณ เท่า และอยู่ห่างจากโลกประมาณ ล้านกิโลเมตรเป็นดาวที่ให้พลังงานแก่ดาวเคราะห์ทั้งหลายในระบบสุริยะ พลังงานแสงและพลังงานความร้อนจากดวงอาทิตย์ถูกส่งออกไปรอบๆ เป็นระยะทางไกล",
          subtitle: "bar",
          backgroundImg: "background-sun.png",
          backgroundMobileImg: "background-sun-mobile.png"
        }
      ],
      quiz: {
        question: "ข้อใดเป็นศูนย์กลางของระบบสุริยะ",
        options: [
          "โลก",
          "ดวงจันทร์",
          "ดวงอาทิตย์",
          "ดาวพฤหัสบดี"
        ],
        answer: "ดวงอาทิตย์"
      }
    },
    {
      id: "3",
      title: "ดาวพุธ",
      videoLink: "OkApuDOIrDM",
      meteorite: true,
      sound: "mercury.wav",
      sections: [
        {
          text: "ดาวพุธเป็นดาวเคราะห์ขนาดเล็กพิเศษที่อยู่ใกล้ดวงอาทิตย์มากที่สุด! แค่ลองจินตนาการดูนะคะว่าอยู่เพียง 57 ล้านกิโลเมตร ห่างจากดวงอาทิตย์เท่านั้นเอง! ดาวพุธนี้เป็นเหมือนเตาไฟแช่แข็ง ในช่วงกลางวันอุณหภูมิสูงถึง 427 องศาเซลเซียส แต่กลับเย็นสบายมากๆในช่วงกลางคืน เหมือนถูกปลอบใจด้วยหิมะกว้างๆ",
          subtitle: "bar",
          backgroundImg: "background-mercury.png",
          backgroundMobileImg: "background-mercury-mobile.png"
        }
      ]
    },
    {
      id: "4",
      title: "ดาวศุกร์",
      videoLink: "PgP9BDOoINY",
      meteorite: true,
      sound: "venus.wav",
      sections: [
        {
          text: "ดาวศุกร์ (Venus) เป็นดาวที่อยู่ห่างจากดวงอาทิตย์เป็นลำดับที่สอง โดดเด่นด้วยระยะห่างเฉลี่ยถึง 108 ล้านกิโลเมตร\nจากดวงอาทิตย์! ดาวศุกร์ใช้เวลาโคจรรอบดวงอาทิตย์ 1 รอบในเวลา 24.70 วัน และหมุนรอบตัวเองในเวลา 243.02 วัน\nโดยการหมุนตรงกันข้ามกับดาวเคราะห์อื่น นอกจากนี้ยังไม่มีดาวบริวารเหมือนโลกอีกด้วย!",
          subtitle: "bar",
          backgroundImg: "background-venus.png",
          backgroundMobileImg: "background-venus-mobile.png"
        },
        {
          text: "บรรยากาศดาวศุกร์หนาแน่นถึง 100 เท่าของโลก ประกอบด้วยแก๊สคาร์บอนไดออกไซด์และไอของกรดซัลฟิวริก\nและพื้นผิวของดาวศุกร์เต็มไปด้วยหินลาวาที่แข็งและแหลมคม! ในเวลาพลบค่ำทางทิศตะวันตก เราสามารถเห็นดาวศุกร์\nด้วยตาเปล่าได้เลย ซึ่งเรียกว่า ดาวประจำเมือง และในตอนเช้าตรู่ทางทิศตะวันออก ซึ่งเรียกว่าดาวรุ่ง หรือดาวประกายพรึก!",
          subtitle: "bar",
          backgroundImg: "background-venus.png",
          backgroundMobileImg: "background-venus-mobile.png"
        },
        {
          text: "บรรยากาศดาวศุกร์หนาแน่นถึง 100 เท่าของโลก ประกอบด้วยแก๊สคาร์บอนไดออกไซด์และไอของกรดซัลฟิวริก\nและพื้นผิวของดาวศุกร์เต็มไปด้วยหินลาวาที่แข็งและแหลมคม! ในเวลาพลบค่ำทางทิศตะวันตก เราสามารถเห็นดาวศุกร์\nด้วยตาเปล่าได้เลย ซึ่งเรียกว่า ดาวประจำเมือง และในตอนเช้าตรู่ทางทิศตะวันออก ซึ่งเรียกว่าดาวรุ่ง หรือดาวประกายพรึก!",
          subtitle: "bar",
          backgroundImg: "background-venus.png",
          backgroundMobileImg: "background-venus-mobile.png"
        }
      ]
    },
    {
      id: "5",
      title: "โลก",
      videoLink: "l2iiwJsijkY",
      meteorite: true,
      sound: "earth.wav",
      sections: [
        {
          text: 'ข้อมูลโด่งดังเกี่ยวกับดาวเคราะห์เรา หรือที่เรียกว่า "โลก" ซึ่งเป็นดาวเคราะห์บริวารของดวงอาทิตย์ และเป็นดาวเคราะห์\nสีน้ำเงินที่มีความห่างจากดวงอาทิตย์ประมาณ 149 ล้านกิโลเมตร กว้างใหญ่มหาศาล! โลกมีอายุประมาณ 365 วัน\nต่อรอบโคจรรอบดวงอาทิตย์ และเวลาหมุนรอบตัวเองประมาณ 1 วันต่อรอบ',
          subtitle: "bar",
          backgroundImg: "background-earth.png",
          backgroundMobileImg: "background-earth-mobile.png"
        },
        {
          text: "ยังมีดวงจันทร์เป็นดาวบริวาร 1 ดวงด้วย! โลกยังมีบรรยากาศที่ห่อหุ้ม ประกอบด้วยแก๊สหลายชนิด แต่แก๊สที่สำคัญที่สุด\nคือ ออกซิเจนเป็นประมาณ 20% และไนโตรเจนเป็นประมาณ 78% ทำให้โลกเหมาะสมต่อการดำรงชีวิตของสิ่งมีชีวิตทั้งหลาย!",
          subtitle: "bar",
          backgroundImg: "background-earth.png",
          backgroundMobileImg: "background-earth-mobile.png"
        },
        {
          text: "ยังมีดวงจันทร์เป็นดาวบริวาร 1 ดวงด้วย! โลกยังมีบรรยากาศที่ห่อหุ้ม ประกอบด้วยแก๊สหลายชนิด แต่แก๊สที่สำคัญที่สุด\nคือ ออกซิเจนเป็นประมาณ 20% และไนโตรเจนเป็นประมาณ 78% ทำให้โลกเหมาะสมต่อการดำรงชีวิตของสิ่งมีชีวิตทั้งหลาย!",
          subtitle: "bar",
          backgroundImg: "background-earth.png",
          backgroundMobileImg: "background-earth-mobile.png"
        }
      ]
    },
    {
      id: "6",
      title: "ดาวอังคาร",
      videoLink: "ReeWSgvCZDk",
      meteorite: true,
      sound: "mars.wav",
      sections: [
        {
          text: 'ดาวอังคารคือดาวเคราะห์ลำดับที่ 4 ในระบบสุริยะ มีระยะห่างจากดวงอาทิตย์ถึง 227 ล้านกิโลเมตร และเด่นด้วยความเร็วโคจรรอบดวงอาทิตย์อยู่ที่ 1 รอบเท่ากับ 887 วัน และหมุนรอบตัวเอง 1 รอบเท่ากับ 24.62 ชั่วโมง',
          subtitle: "bar",
          backgroundImg: "background-mars.png",
          backgroundMobileImg: "background-mars-mobile.png"
        },
        {
          text: 'พื้นผิวของดาวอังคารเต็มไปด้วยก้อนหินและฝุ่นจำนวนมาก และมีองค์ประกอบดินเป็นแร่เหล็ก ทำให้ดูเป็นสีสนิมเหล็ก\nที่เป็นเอกลักษณ์ ดาวอังคารยังมีดาวบริวาร 2 ดวง และเป็นดาวเคราะห์ที่ได้รับสมญานามว่า "ดาวเทพแห่งสงคราม"',
          subtitle: "bar",
          backgroundImg: "background-mars.png",
          backgroundMobileImg: "background-mars-mobile.png"
        },
        {
          text: 'พื้นผิวของดาวอังคารเต็มไปด้วยก้อนหินและฝุ่นจำนวนมาก และมีองค์ประกอบดินเป็นแร่เหล็ก ทำให้ดูเป็นสีสนิมเหล็ก\nที่เป็นเอกลักษณ์ ดาวอังคารยังมีดาวบริวาร 2 ดวง และเป็นดาวเคราะห์ที่ได้รับสมญานามว่า "ดาวเทพแห่งสงคราม"',
          subtitle: "bar",
          backgroundImg: "background-mars.png",
          backgroundMobileImg: "background-mars-mobile.png"
        }
      ]
    },
    {
      id: "7",
      title: "ดาวพฤหัสบดี",
      videoLink: "TQqsHS0fpS4",
      meteorite: true,
      sound: "jupiter.wav",
      sections: [
        {
          text: 'ดาวพฤหัสบดีหรืออีกชื่อคือโลกยักษ์เป็นดาวเคราะห์ใหญ่ที่สุดในระบบสุริยะ มันวิ่งรอบดวงอาทิตย์ใช้เวลาประมาณ 11.86 ปี\nนั่นเอง! ส่วนเวลาในการหมุนรอบตัวเอง 1 รอบเท่ากับ 9.92 ชั่วโมง แล้วนอกจากนี้ ดาวนี้ยังมีแถบเข็มขัดและจุดแดงใหญ่\nเป็นเครื่องหมายที่เด่นของมันอีกด้วย',
          subtitle: "bar",
          backgroundImg: "background-jupiter.png",
          backgroundMobileImg: "background-jupiter-mobile.png"
        },
        {
          text: "ดาวพฤหัสบดีมีองค์ประกอบหลักคือไฮโดรเจนและฮีเลียม มีดาวบริวารไม่น้อยกว่า 62 ดวงและ 4 ดาวบริวารที่เป็น\nบริวารด้วยคือ ไอโอ ยุโรปา, แกนีมีด, และแคลลิสโต ดาวพฤหัสบดีเป็นดาวเคราะห์แก๊สที่มีความหนาแน่นน้อยแต่มี\nขนาดใหญ่มาก!!",
          subtitle: "bar",
          backgroundImg: "background-jupiter.png",
          backgroundMobileImg: "background-jupiter-mobile.png"
        },
        {
          text: "ดาวพฤหัสบดีมีองค์ประกอบหลักคือไฮโดรเจนและฮีเลียม มีดาวบริวารไม่น้อยกว่า 62 ดวงและ 4 ดาวบริวารที่เป็น\nบริวารด้วยคือ ไอโอ ยุโรปา, แกนีมีด, และแคลลิสโต ดาวพฤหัสบดีเป็นดาวเคราะห์แก๊สที่มีความหนาแน่นน้อยแต่มี\nขนาดใหญ่มาก!!",
          subtitle: "bar",
          backgroundImg: "background-jupiter.png",
          backgroundMobileImg: "background-jupiter-mobile.png"
        }
      ]
    },
    {
      id: "8",
      title: "ดาวเสาร์",
      videoLink: "X2Fvrgwe1Ak",
      meteorite: true,
      sound: "sattern.wav",
      sections: [
        {
          text: 'ดาวเสาร์เป็นเจ้าหนึ่งในระบบสุริยะที่ห่างจากดวงอาทิตย์ประมาณ 1,427 ล้านกิโลเมตร และอยู่ในอันดับที่ 6 ของดาวเคราะห์ในระบบดังกล่าวนี้ เขามีแหวนสวยงดงามประกอบด้วยเกล็ดน้ำแข็งขนาดต่าง ๆ และบริวารไม่น้อยกว่า\n60 ดวง!',
          subtitle: "bar",
          backgroundImg: "background-saturn.png",
          backgroundMobileImg: "background-saturn-mobile.png"
        },
        {
          text: "บรรยากาศของดาวเสาร์ประกอบด้วยไฮโดรเจน แอมโมเนีย และเทน และมีผิวนอกที่ประกอบด้วยไฮโดรเจนและฮีเลียม ในขณะที่ผิวในเป็นแก๊สอัดแน่นเหมือนโลหะ และมีแกนกลางที่อัดแน่นคล้ายน้ำแข็ง นับเป็นเทพเจ้าแห่งการเกษตร ดาวเสาร์จะทำการโคจรรอบดวงอาทิตย์อยู่เป็นเวลา 1 รอบใน 29.4 ปี และหมุนรอบตัวเองในเวลา 10.66 ชั่วโมง!",
          subtitle: "bar",
          backgroundImg: "background-saturn.png",
          backgroundMobileImg: "background-saturn-mobile.png"
        },
        {
          text: "บรรยากาศของดาวเสาร์ประกอบด้วยไฮโดรเจน แอมโมเนีย และเทน และมีผิวนอกที่ประกอบด้วยไฮโดรเจนและฮีเลียม ในขณะที่ผิวในเป็นแก๊สอัดแน่นเหมือนโลหะ และมีแกนกลางที่อัดแน่นคล้ายน้ำแข็ง นับเป็นเทพเจ้าแห่งการเกษตร ดาวเสาร์จะทำการโคจรรอบดวงอาทิตย์อยู่เป็นเวลา 1 รอบใน 29.4 ปี และหมุนรอบตัวเองในเวลา 10.66 ชั่วโมง!",
          subtitle: "bar",
          backgroundImg: "background-saturn.png",
          backgroundMobileImg: "background-saturn-mobile.png"
        }
      ]
    },
    {
      id: "9",
      title: "ดาวยูเรนัส",
      videoLink: "lGTjy52mA6o",
      meteorite: true,
      sound: "uranus.wav",
      sections: [
        {
          text: 'ดาวยูเรนัส (Uranus) เป็นดาวเคราะห์ในวงที่ 7 ของระบบสุริยะ โดดเด่นด้วยระยะห่างจากดวงอาทิตย์ที่เฉลี่ย 2,870 ล้านกิโลเมตร และมีขนาดใหญ่อยู่ในอันดับที่สามของดาวในระบบ ต่อจากดาวพฤหัสบดีและดาวเสาร์ แม้ว่าด้วยตาเปล่าจะไม่สามารถมองเห็นดาวยูเรนัสได้เนื่องจากอยู่ห่างจากดวงอาทิตย์มาก',
          subtitle: "bar",
          backgroundImg: "background-uranus.png",
          backgroundMobileImg: "background-uranus-mobile.png"
        },
        {
          text: "แต่ดาวนี้มีความเป็นพิเศษในการโคจรรอบดวงอาทิตย์ หนึ่งรอบใช้เวลาประมาณ 80 ปี และหมุนรอบตัวเองใช้เวลา\nประมาณ 17.24 ชั่วโมง นอกจากนี้ยังมีดาวบริวารไม่น้อยกว่า 27 ดวงที่โคจรรอบดาวยูเรนัส และมีวงแหวนที่มีรูปร่าง\nแตกต่างกันซ้อนกันอยู่ล้อมรอบ ดาวยูเรนัสยังมีบรรยากาศประกอบด้วยแก๊สมีเทน ทำให้เป็นดาวที่น่าตื่นเต้น\nและน่าสำรวจอย่างยิ่งในเรื่องของจักรวาล",
          subtitle: "bar",
          backgroundImg: "background-uranus.png",
          backgroundMobileImg: "background-uranus-mobile.png"
        },
        {
          text: "แต่ดาวนี้มีความเป็นพิเศษในการโคจรรอบดวงอาทิตย์ หนึ่งรอบใช้เวลาประมาณ 80 ปี และหมุนรอบตัวเองใช้เวลา\nประมาณ 17.24 ชั่วโมง นอกจากนี้ยังมีดาวบริวารไม่น้อยกว่า 27 ดวงที่โคจรรอบดาวยูเรนัส และมีวงแหวนที่มีรูปร่าง\nแตกต่างกันซ้อนกันอยู่ล้อมรอบ ดาวยูเรนัสยังมีบรรยากาศประกอบด้วยแก๊สมีเทน ทำให้เป็นดาวที่น่าตื่นเต้น\nและน่าสำรวจอย่างยิ่งในเรื่องของจักรวาล",
          subtitle: "bar",
          backgroundImg: "background-uranus.png",
          backgroundMobileImg: "background-uranus-mobile.png"
        }
      ]
    },
    {
      id: "10",
      title: "ดาวเนปจูน",
      videoLink: "zvqtFWCB5LE",
      meteorite: true,
      sound: "neptune.wav",
      sections: [
        {
          text: 'เรามีดาวเคราะห์เรียกว่าเนปจูนหรือ Naptune ที่เป็นดาวเคราะห์ดวงที่ 8 ในระบบสุริยะ มันอยู่ห่างจากดวงอาทิตย์ไปประมาณ 4,498 ล้านกิโลเมตร และใช้เวลาโคจรรอบดวงอาทิตย์ประมาณ 1 รอบในเวลาประมาณ 164.8 ปี และหมุนรอบตัวเองในเวลาประมาณ 16.11 ชั่วโมง',
          subtitle: "bar",
          backgroundImg: "background-neptune.png",
          backgroundMobileImg: "background-neptune-mobile.png"
        },
        {
          text: "แต่ที่น่าสนใจคือ ดาวเนปจูนมีวงแหวนที่มืดมากจนไม่อาจสังเกตได้จากโลก และ มีดาวบริวารอย่างน้อย 13 ดวง\nภายในดาวเนปจูนเป็นแก๊สอัดแน่น ประกอบไปด้วย แก๊สมีเทน ไฮโดรเจน น้ำ และแอมโมเนียเหลว ดังนั้น การศึกษาและสำรวจดาวเนปจูนจะช่วยเพิ่มเติมความรู้ในจักรวาลอันไม่มีที่สิ้นสุดของเราขึ้นอีกเยอะ!",
          subtitle: "bar",
          backgroundImg: "background-neptune.png",
          backgroundMobileImg: "background-neptune-mobile.png"
        },
        {
          text: "แต่ที่น่าสนใจคือ ดาวเนปจูนมีวงแหวนที่มืดมากจนไม่อาจสังเกตได้จากโลก และ มีดาวบริวารอย่างน้อย 13 ดวง\nภายในดาวเนปจูนเป็นแก๊สอัดแน่น ประกอบไปด้วย แก๊สมีเทน ไฮโดรเจน น้ำ และแอมโมเนียเหลว ดังนั้น การศึกษาและสำรวจดาวเนปจูนจะช่วยเพิ่มเติมความรู้ในจักรวาลอันไม่มีที่สิ้นสุดของเราขึ้นอีกเยอะ!",
          subtitle: "bar",
          backgroundImg: "background-neptune.png",
          backgroundMobileImg: "background-neptune-mobile.png"
        }
      ]
    }
  ],
  quizs: [
    {
      id: "1",
      question: "1.ข้อใดเรียงลำดับจากสิ่ง ที่มีขนาดใหญ่ไปเล็กได้ถูกต้อง",
      options: [
        "ระบบสุริยะ กาแล็กซี เอกภพ",
        "กาแล็กซี เอกภพ ระบบสุริยะ",
        "เอกภพ กาแล็กซี ระบบสุริยะ",
        "ระบบสุริยะ เอกภพ กาแล็กซี"
      ],
      answer: "เอกภพ กาแล็กซี ระบบสุริยะ"
    },
    {
      id: "2",
      question: "2.ข้อใดเป็นศูนย์กลางของระบบสุริยะ",
      options: [
        "โลก",
        "ดวงจันทร์",
        "ดวงอาทิตย์",
        "ดาวพฤหัส"
      ],
      answer: "ดวงอาทิตย์"
    },
    {
      id: "3",
      question: "3.ดาว O เป็นดาวที่อยู่ห่างจากดวงอาทิตย์เป็นลำดับที่สองได้ชื่อว่าดาวฝาแฝดกับโลกมองเห็นได้สองช่วงเวลาคือตอนเช้าและตอนพบค่ำดาว O หมายถึงดาวในข้อมด",
      options: [
        "ดาวพุธ",
        "ดาวศุกร์",
        "ดาวอังคาร",
        "ดาวเสาร์"
      ],
      answer: "ดาวศุกร์"
    },
    {
      id: "4",
      question: "4.ดาวเคราะห์ดวงใดในระบบสุริยะได้รับสมญานามว่าเตาไฟแช่แข็ง",
      options: [
        "ดาวพุธ",
        "ดาวศุกร์",
        "ดาวอังคาร",
        "ดาวพฤหัสบดี"
      ],
      answer: "ดาวพุธ"
    },
    {
      id: "5",
      question: "5.ข้อความใดกล่าวถูกต้องเกี่ยวกับดาวศุกร์",
      options: [
        "ดาวบริวารหนึ่งดวง",
        "ได้รับสมญานามว่าโลกยักษ์",
        "อยู่ห่างจากดวงอาทิตย์เป็นลำดับที่ 3",
        "มีทิศทางการหมุนรอบตัวเองที่ตรงกันข้ามกับดาวเคราะห์ดวงอื่น"
      ],
      answer: "อยู่ห่างจากดวงอาทิตย์เป็นลำดับที่ 3"
    },
    {
      id: "6",
      question: "6.วัตถุในข้อใดอยู่ในวงโคจรรูปวงรีระหว่างดาวอังคารกับดาวพฤหัส",
      options: [
        "ดาวหาง",
        "ดาวพลูโต",
        "สะเก็ดดาว 3",
        "ดาวเคราะห์น้อย"
      ],
      answer: "ดาวเคราะห์น้อย"
    },
    {
      id: "7",
      question: "7.ถ้าใช้ระยะห่างระหว่างดาวเคราะห์กับดวงอาทิตย์เป็นเกณฑ์โดยใช้โลกเป็นหลักดาวเคราะห์ดวงใดอยู่ใกล้ดวงอาทิตย์มากกว่าโลก",
      options: [
        "ดาวพุธ ดาวศุกร์",
        "ดาวอังคาร ดาวเสาร์",
        "ดาวพุธ ดาวพฤหัสบดี",
        "ดาวเสาร์ ดาวยูเรนัส"
      ],
      answer: "ดาวพุธ ดาวศุกร์"
    },
    {
      id: "8",
      question: "8.เพราะเหตุใดสหพันธ์ดาราศาสตร์สากลจัดให้ดาวพลูโตเป็นดาวเคราะห์แคระ",
      options: [
        "มีแสงสว่างในตัวเอง",
        "มีขนาดใกล้เคียงกับโลก",
        "มีวงโคจรทับซ้อนกันกับดาวเนปจูน",
        "มีทิศทางการหมุนรอบตัวเองข้ามกับดาวเคราะห์ดวงอื่น"
      ],
      answer: "มีวงโคจรทับซ้อนกันกับดาวเนปจูน"
    },
    {
      id: "9",
      question: "9.ดาวพุธและดาวศุกร์มีลักษณะที่เหมือนกันตามข้อใด",
      options: [
        "ไม่มีดาวบริวาร",
        "ระยะห่างจากดวงอาทิตย์",
        "ความยาวเส้นผ่านศูนย์กลาง",
        "เวลาในการโคจรรอบดวงอาทิตย์"
      ],
      answer: "ไม่มีดาวบริวาร"
    },
    {
      id: "10",
      question: `10.Y สะเก็ดดาวไหม้จนหมดก่อนตกลงบนพื้นโลก
      Z สะเก็ดดาวขนาดใหญ่เผาไหม้ไม่หมดลงบนพื้นโลก
      Y, Z หมายถึงข้อใด`,
      options: [
        "ลูกไฟ ดาวตก",
        "ดาวหาง ลูกไฟ",
        "ดาวตก อุกกาบาต",
        "อุกกาบาต ฝนดาวตก"
      ],
      answer: "ดาวตก อุกกาบาต"
    }
  ],
  width: 1380,
  viewType: "desktop",
  answers: [
  ],
  quizScore: 0,
  soundEnable: true,
  audios: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setWidthSize: (state, action) => {
      state.width = action.payload;
      if (state.width <= 600) {
        state.viewType = "mobile";
      } else if (state.width <= 1040) {
        state.viewType = "ipad";
      } else {
        state.viewType = "desktop";
      }
    },
    increaseQuizScore: (state, action) => {
      state.quizScore = state.quizScore + 1;
    },
    addAnswer: (state, action) => {
      let answer = action.payload;
      state.answers = [...state.answers, answer];
    },
    resetAnswer: (state, action) => {
      state.answers = [];
      state.quizScore = 0;
    },
    disableSound: (state, action) => {
      state.soundEnable = false;
    },
    enableSound: (state, action) => {
      state.soundEnable = true;
    },
    addAudio: (state, action) => {
      let audio = action.payload;
      state.audios = [...state.audios, audio];
    },
    clearAudio: (state, action) => {
      state.audios = [];
    },
    forceStopAllAudion: (state, action) => {
      const audios = state.audios;
      for (let i = 0; i < audios.length; i++) {
        const sound = audios[i];
        sound.pause();
      }
      state.audios = [];
    }
  },
})

export const { setWidthSize, getViewType, addAnswer, increaseQuizScore, resetAnswer, disableSound,
  enableSound, addAudio, clearAudio, forceStopAllAudion
} = appSlice.actions

export default appSlice.reducer