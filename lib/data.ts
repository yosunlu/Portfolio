import onlymemesImg from "@/public/onlymemes.png";
import taiwaniaImg from "@/public/taiwania.png";
import osImg from "@/public/os.png";
import dbImg from "@/public/db.png";
import bigDB from "@/public/bigData.png";
import DB764Img from "@/public/764.png";
export const links = [
  {
    name: "ABOUT 關於",
    hash: "#about",
  },
  {
    name: "PROJECTS 專案",
    hash: "#projects",
  },
  {
    name: "GitHub 程式碼",
    hash: "https://github.com/yosunlu",
  },
  {
    name: "RESUME 履歷",
    hash: "/CV.pdf",
  },
  {
    name: "CONTACT 聯絡",
    hash: "#contact",
  },
] as const;


export const projectsData = [
    {
      title: "Taiwania",
      date: "Side-Project | 2024",
      description: `I built this project out of my love for Taiwan. Taiwania is a Taiwanese dictionary for proverbs and everyday-language expressions, enhanced with keyword and tag-based filtering. The data was scraped using Python (BeautifulSoup, Pandas), translated via GPT-4 (LangChain), and stored in PostgreSQL on AWS RDS. The backend (Express) is containerized and deployed with AWS ECS/ECR, while the frontend is smoothly deployed via Vercel.`,
      mandarin:"我因為對台灣的熱愛而打造了這個專案。Taiwania 是一個專為不熟悉中文但想學習台語的使用者設計的台語諺語與日常用語辭典。使用者可透過關鍵字或標籤來搜尋內容，數據來自官方辭典，以 Python 工具 (BeautifulSoup, Pandas) 爬取，並以 GPT-4 模型 (LangChain API) 翻譯成英文與中文。數據儲存於 AWS RDS 的 PostgreSQL 中，後端使用 Express API 並部署於 AWS ECS/ECR，前端則使用 Vercel 提供持續部署。",
      tags: ["React", "express", "postgresql", "CI/CD", "langchain", 'RDS', "ECS"],
      imageUrl: taiwaniaImg,
      URL: "https://taiwania.co",
      githubUrl: "https://github.com/yosunlu/taiwania-backend",
      
    },
    {
      title: "Onlymemes",
      date: "Side-Project | 2024",
      description: `Onlymemes is a meme-sharing platform built out of my enthusiasm for humor and memes. Users can sign in securely via Google, upload their favorite meme videos, and rate each other's submissions with a star-based system. Uploaded videos are stored in Google Cloud Storage and processed asynchronously through a containerized video-processing service on Cloud Run, triggered by Pub/Sub notifications. API services deployed via Firebase manage secure uploads and video metadata stored in Firestore, providing users with a smooth and engaging experience.`,
      mandarin: `我因熱愛迷因和幽默感，打造了 Onlymemes 這個平台。使用者能透過 Google 登入，輕鬆上傳並分享迷因影片，並以星級互相評分，展示幽默實力。影片會儲存於 Google Cloud Storage，並透過 Pub/Sub 通知觸發部署於 Cloud Run 的容器化影片處理服務進行異步處理。API 端點則透過 Firebase 部署，透過 Firestore 管理影片資料，提供使用者流暢且有趣的體驗。`,
      tags: ["TypeScript", "React", "Node", "Firebase", "GCP"],
      imageUrl: onlymemesImg,
      URL: "https://onlememes.web.app",
      githubUrl: "https://github.com/yosunlu/OnlyMemes",
    },

    {
      title: "Operating Systems",
      date: "Course-Project | 2023",
      description: "Projects completed for CS537: Operating Systems. Cover key aspects of OS, including system calls, scheduling algorithms, memory management, parallel processing, and file systems.",
      mandarin: "完成於 CS537 作業系統課程，涵蓋系統呼叫、排程演算法、記憶體管理、平行處理與檔案系統等核心主題。",
      tags: ["C", "CLI", "Pthreads", "Scheduling Algorithms", "File Recovery", "UNIX Shell"],
      imageUrl: osImg,
      githubUrl: "https://github.com/yosunlu/UW-Madison-Operating-Systems",
      URL:""
    },
    {
      title: "DBMS",
      date: "Course-Project | 2023",
      description: "Projects completed for CS564: Database Management Systems. Cover essential topics like SQL, ER modeling, buffer management, heapfile management, and query optimization.",
      mandarin: "完成於 CS564 資料庫管理系統課程，內容包括 SQL、ER 模型、緩衝區管理、堆檔管理及查詢最佳化。",
      tags: ["C++", "Python", "SQL"],
      imageUrl: dbImg,
      githubUrl: "https://github.com/yosunlu/UW-Madison-Database-Management-Systems",
      URL:""
    },
    {
      title: "Big Data Systems",
      date: "Course-Project | 2023",
      description: "Project completed for CS544: Big Data Systems. A Cassandra-based Weather Data Platform that collects weather data from NOAA, stores this data in Cassandra, writes a server for data collection, and analyzes the collected data via Spark.",
      mandarin: "完成於 CS544 大數據系統課程，建置基於 Cassandra 的氣象數據平台，從 NOAA 收集數據並透過 Spark 進行分析。",
      tags: ["Cassandra", "Spark", "gRPC", "Docker", "Python"],
      imageUrl: bigDB,
      githubUrl: "https://github.com/yosunlu/Cassandra-Based-Weather-Data-Platform",
      URL:""
    },
    {
      title: "120GB External Merge sort",
      date: "Course-Project | 2023",
      description: "Project completed for CS764: Advanced DB. Emulates SSD, HDD, CPU, and DRAM and implemented an external merge sort, capable of sorting self-generated 120 GB of data, consists of 120 millions of 1KB entries",
      mandarin: "完成於 CS764 進階資料庫課程，模擬 SSD、HDD、CPU 與 DRAM，並實作外部合併排序演算法，成功排序120GB自產資料。",
      tags: ["C++", "Quicksort", "Tournament trees", " Offset-value coding"],
      imageUrl: DB764Img,
      githubUrl: "https://github.com/yosunlu/External-Merge-Sort",
      URL:""
    },
  ] as const;