/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,
};

// Projects Page
const projectsHeader = {
  projects: [
    {
      id: -3,
      title: "GlobalXCurrency",
      subtitle: "Your Reliable Partner in Investment Management",
      image: "./portfolio/Details/globalx/1.png",
      by: "Pranav Choudhary",
      tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "React", "firebase"],

      category: "Web app",
      filter: "filter-web",
      date: "10 Oct, 2023",
      github_link: null,
      website_link: "https://globalxcurrency.com",
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "GlobaXCurrency offers secure forex investments with expert-managed schemes, KYC verification, profile management, real-time profits, and easy withdrawals.",
      features: [
        "Expert-Managed Schemes: Tailored investment plans crafted by seasoned professionals for optimal returns",
        "Seamless KYC Verification: Effortless document upload for swift and secure user verification",
        "User Profile Management: Customize and update personal information for enhanced security and personalized experience",
        "Effortless Withdrawal Process: Quick and hassle-free fund withdrawals anytime, anywhere",
        "Admin Dashboard: Comprehensive overview of user activities, investment portfolios, and system statistics",
        "User Management: Manage user accounts, permissions, and access levels",
        "KYC Verification Control: Access and manage user KYC verification statuses and documents",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/globalx/1.png",
        "./portfolio/Details/globalx/2.png",
        "./portfolio/Details/globalx/3.png",
        "./portfolio/Details/globalx/4.png",
        "./portfolio/Details/globalx/5.png",
      ],
    },
    {
      id: -2,
      title: "Shunkan",
      subtitle: "Your Instant Social Experience 📸",
      image: "./portfolio/Details/shunkan/0.png",
      by: "Pranav Choudhary",
      tech: ["Swift", "MVVM", "SwiftUI", "IOS", "firebase"],
      category: "IOS app",
      filter: "filter-app",
      date: "23 Sep, 2023",
      github_link: "https://github.com/pranavelric/Shunkan",
      website_link: null,
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "Shunkan is a dynamic and user-centric social media application designed for iOS, crafted to deliver an engaging and seamless experience similar to Instagram. It allows users to share their moments, connect with friends, and explore a vibrant social network.",
      features: [
        "Instant Sharing: Post photos and videos instantly to share your daily highlights with your followers.",
        "Interactive Messaging: Engage in real-time conversations with friends through a robust messaging feature.",
        "Community Engagement: Like, comment, and interact with posts from people you follow or explore new content.",
        "Personalized Feeds: Tailored feed displaying posts from people you follow and posts relevant to your interests.",
        "Profile Customization: Personalize your profile, showcase your personality, and manage your posts effortlessly.",
        "Seamless Navigation: Intuitive UI for easy navigation, ensuring a smooth user experience.",
        "Search Functionality: Discover new content and users by searching for specific profiles, hashtags, or keywords.",
        "Follow and Unfollow: Build your network by following users and stay updated with their latest posts. Unfollow users at your discretion.",
        "Privacy and Security: Maintain control over your data and privacy settings to ensure a safe and secure social experience.",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/shunkan/Shunkan.gif",
        "./portfolio/Details/shunkan/0.png",
        "./portfolio/Details/shunkan/1.png",
        "./portfolio/Details/shunkan/2.png",
        "./portfolio/Details/shunkan/3.png",
        "./portfolio/Details/shunkan/4.png",
        "./portfolio/Details/shunkan/5.png",
        "./portfolio/Details/shunkan/6.png",
      ],
    },
    {
      id: -1,
      title: "Flixify",
      subtitle: "Your Ultimate Movie Companion 🎬",
      image: "./portfolio/Details/flixify/flixify0.png",
      by: "Pranav Choudhary",
      tech: ["Swift", "MVVM", "UIkit", "IOS"],
      category: "IOS app",
      filter: "filter-app",
      date: "19 Aug, 2023",
      github_link: "https://github.com/pranavelric/Flixify",
      website_link: null,
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "Flixify is your gateway to a world of cinematic wonders. Discover trending blockbusters, hidden gems, and personalized movie recommendations all at your fingertips. Bookmark your favorites, explore cast details, and dive into captivating trailers for an immersive movie experience like never before.",
      features: [
        "Search for movies",
        "Watch trailers before you decide about a movie",
        "See full lists of Cast and Crew and movie trailers",
        "Get a list of similar movies",
        "No account creation required",
        "Browse movies by Genres,In Theaters, Trending, Top-rated, Trending and Upcoming.",
      ],
      attribution:
        "This product uses the TMDb API but is not endorsed or certified by TMDb.",
      slides: [
        "./portfolio/Details/flixify/Flixify.gif",
        "./portfolio/Details/flixify/flixify0.png",
        "./portfolio/Details/flixify/flixify1.png",
        "./portfolio/Details/flixify/flixify2.png",
        "./portfolio/Details/flixify/flixify3.png",
        "./portfolio/Details/flixify/flixify4.png",
      ],
    },
    {
      id: 0,
      title: "Moviistic",
      subtitle: "Responsive React movies app using TMDB API.",
      image: "./portfolio/Details/moviistic/3.png",
      by: "Pranav Choudhary",
      tech: ["ReactJs", "HTML", "SSS", "Javascript"],
      category: "Web app",
      filter: "filter-web",
      date: "7 Aug, 2022",
      github_link: "https://github.com/pranavelric/moviistic",
      website_link: "https://pranavelric.dev/moviistic",
      summary:
        "Responsive React Movies App With TMDB API. With Moviistic you can watch trailers. Search details of your favourite movie.",
      features: [
        "Search for movies",
        "Watch trailers before you decide about a movie",
        "See full lists of Cast and Crew and movie trailers",
        "Get a list of similar movies",
        "No account creation required",
        "Browse movies by Genres,In Theaters, Trending, Top-rated, Trending and Upcoming.",
      ],
      attribution:
        "This product uses the TMDb API but is not endorsed or certified by TMDb.",
      slides: [
        "./portfolio/Details/moviistic/1.png",
        "./portfolio/Details/moviistic/2.png",
        "./portfolio/Details/moviistic/3.png",
        "./portfolio/Details/moviistic/4.png",
      ],
      amazon_store: null,
      google_play_link: null,
    },
    {
      id: 1,
      title: "Pokedex",
      subtitle: "A Pokedex created using PokeAPI",
      image: "./portfolio/Details/pokedex/3.png",
      by: "Pranav Choudhary",
      tech: ["ReactJs", "HTML", "SSS", "Javascript"],
      category: "Web app",
      filter: "filter-web",
      date: "16 Jul, 2022",
      github_link: "https://github.com/pranavelric/pokedex",
      website_link: "https://pranavelric.dev/pokedex",
      summary: "A Pokedex created using PokeAPI.",
      features: [
        "Search pokemon from different generations",
        "Get info about particular pokemon",
        "Check evolution chain of every pokemon",
        "Check base status of every pokemon",
      ],
      attribution:
        "This product uses the PokeAPI but is not endorsed or certified by PokeAPI.",
      slides: [
        "./portfolio/Details/pokedex/1.png",
        "./portfolio/Details/pokedex/2.png",
        "./portfolio/Details/pokedex/3.png",
        "./portfolio/Details/pokedex/4.png",
      ],
      amazon_store: null,
      google_play_link: null,
    },
    {
      id: 2,
      title: "Noted",
      subtitle: "App for creating and maintaining notes",
      image: "./portfolio/Details/noted/2.png",
      by: "Pranav Choudhary",
      tech: ["ReactJs", "HTML", "SSS", "Javascript"],
      category: "Web app",
      filter: "filter-web",
      date: "21 Jun, 2022",
      github_link: "https://github.com/pranavelric/Noted",
      website_link: "https://pranavelric.dev/Noted",
      summary:
        "Noted is a clone Application for Google Keep Note. It is used for creating notes and maintaining them using ReactJS.",
      features: [
        "Ability to create a note with title and content",
        "Ability to add background colours to a note",
        "Ability to view all the created notes",
        "Ability to pin a note",
        "Ability to delete and restore note.",
        "Mobile responsiveness.",
        "Ability to archive a note.",
        "Ability to create and delete label",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/noted/1.png",
        "./portfolio/Details/noted/2.png",
        "./portfolio/Details/noted/3.png",
        "./portfolio/Details/noted/5.png",
      ],
      amazon_store: null,
      google_play_link: null,
    },
    {
      id: 3,
      title: "ClassDeck",
      subtitle:
        "ClassDeck makes it easy for learners and instructors to connect.",
      image: "./portfolio/Details/classDeck6.png",
      by: "Pranav Choudhary",
      tech: [
        "kotlin",
        "MVVM",
        "Dagger-hilt",
        "Navigation Components",
        "Retrofit2",
        "Glide",
        "Firebase",
      ],
      category: "Android app",
      filter: "filter-app",
      date: "30 Aug, 2021",
      github_link: "https://github.com/pranavelric/ClassDeck",
      website_link: null,
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary:
        "ClassDeck app was made for Mobile Application Development task submission in Flipr Hackathon X. It saves time and paper and makes it easy to create classes, distribute assignments, communicate and stay organised.",
      features: [
        "Different Login functionality for teacher and student",
        "Teacher can create courses",
        "Each course have announcement, assignment, test, schedule and join class section",
        "Each course have announcement, assignment, test, schedule and join class section",
        "Students can give test only one after giving test students can see their rank.",
        "Dashboard section contains information about all daily schedule, on-going courses, announcements and assignments.",
        "In profile section one can see their own courses and all courses.",
        "Dark Theme available",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/classDeck1.png",
        "./portfolio/Details/classDeck2.png",
        "./portfolio/Details/classDeck3.png",
        "./portfolio/Details/classDeck4.png",
        "./portfolio/Details/classDeck5.png",
        "./portfolio/Details/classDeck6.png",
      ],
    },
    {
      id: 4,
      title: "Vidoza",
      subtitle: "A simple 1 to 1 video calling app made using Jitsi meet Api.",
      image: "./portfolio/Details/vidoza/1vidoza.png",
      by: "Pranav Choudhary",
      tech: [
        "kotlin",
        "MVVM",
        "Dagger-hilt",
        "Navigation Components",
        "Retrofit2",
        "Glide",
      ],
      category: "Android app",
      filter: "filter-app",
      date: "8 Oct, 2021",
      github_link: "https://github.com/pranavelric/Vidoza",
      website_link: null,
      app_link: null,
      amazon_store: null,
      google_play_link: null,
      summary: "A simple 1 to 1 video calling app made using Jitsi meet Api.",
      features: null,
      attribution: null,
      slides: [
        "./portfolio/Details/vidoza/1vidoza.png",
        "./portfolio/Details/vidoza/2vidoza.png",
        "./portfolio/Details/vidoza/3vidoza.png",
      ],
    },
    {
      id: 5,
      title: "Weatherify",
      subtitle: "Android app to provide realtime weather information.",
      image: "./portfolio/Details/7weather.png",
      by: "Pranav Choudhary",
      tech: [
        "kotlin",
        "MVVM",
        "Dagger-hilt",
        "Navigation Components",
        "Retrofit2",
        "Glide",
      ],
      category: "Android app",
      filter: "filter-app",
      date: "18 May, 2021",
      github_link: null,
      website_link: null,
      google_play_link: null,
      amazon_store: null,
      app_link:
        "https://docs.google.com/uc?export=download&id=1-XPagklzPX3pCXbsRk82NP7uy9rH9XmL",
      summary:
        "Weatherify fetches data from the OpenWeatherMap API to provide real time weather information. Weatherfiy is implemented using the MVVM single activity architecture, Retrofit2, Dagger-Hilt, LiveData, Coroutines, Room, Navigation Components, View Binding and some other libraries from the Android Jetpack.",
      features: [
        "Fast setup method.",
        "Easy to use.",
        "Material UI.",
        "Detailed Weather Info By Location.",
        "Detailed weather Forecast.",
        "Dark Theme available.",
        "Search weather By City.",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/1weather.png",
        "./portfolio/Details/2weather.png",
        "./portfolio/Details/3weather.png",
        "./portfolio/Details/4weather.png",
        "./portfolio/Details/5weather.png",
        "./portfolio/Details/6weather.png",
        "./portfolio/Details/7weather.png",
      ],
    },
    {
      id: 6,
      title: "Diktafon",
      subtitle: "Android app for voice recording.",
      image: "./portfolio/Details/diktafon4.png",
      by: "Pranav Choudhary",
      tech: ["kotlin", "MVVM", "Dagger-hilt", "Navigation Components", "Glide"],
      category: "Android app",
      filter: "filter-app",
      date: "29 Apr, 2021",
      github_link: null,
      website_link: null,
      google_play_link: null,
      amazon_store:
        "https://www.amazon.com/Pranav-choudhary-Diktafon/dp/B093QMFNTQ/ref=sr_1_4?dchild=1&qid=1620066205&refinements=p_4%3APranav+choudhary&s=mobile-apps&search-type=ss&sr=1-4",
      app_link:
        "https://docs.google.com/uc?export=download&id=14BBESxMU5tZL3lTbFSsWkZqsgQwqUBcH",
      summary:
        "Diktafon - is a sound recording application. It provides an easy audio recording experience.",
      features: [
        "Fast setup method.",
        "Easy to use.",
        "Material UI.",
        "Recording audio.",
        "Playing back recordings.",
        "List all your recordings.",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/diktafon1.png",
        "./portfolio/Details/diktafon2.png",
        "./portfolio/Details/diktafon3.png",
        "./portfolio/Details/diktafon4.png",
      ],
    },
    {
      id: 7,
      title: "Momentix",
      subtitle:
        "Momentix is an alarm clock application designed to crete alarms in the easiest way.",
      image: "./portfolio/Details/6momentix.png",
      by: "Pranav Choudhary",
      tech: ["kotlin", "MVVM", "Dagger-hilt", "Navigation Components", "Glide"],
      category: "Android app",
      filter: "filter-app",
      date: "21 Apr, 2021",
      github_link: null,
      website_link: null,
      google_play_link: null,
      amazon_store: "https://www.amazon.com/gp/product/B0933K86JF/ref=mas_dl",
      app_link:
        "https://docs.google.com/uc?export=download&id=15rZcoXC2rIBoRUeTclvySIovO9Sr2zw0",
      summary:
        "Momentix is a free alarm clock application designed to create, edit and remove alarms in the easiest way. You can use Momentix to wake up in the morning or set up reminders for your tasks during the day. You can also edit or remove alarms with just one touch, saving a lot of time when you need to set up your alarms.\nIf you use Momentix to wake you up in the morning, you will be able to wake up gently from your dreams, in a peaceful and progressive way, because Momentix increases alarm volume slowly instead of starting at maximum volume. This way, you can avoid being startled by a loud sound while you are in a deep sleep.\n\nMomentix lets you customize the alarm's sound (selecting any ringtone, sound or song in your phone) and many other settings.\n\nIf you want to wake up at the same time every day, on workdays, weekends or just a few days a week, you can easily select which days when creating the alarm, and the alarm clock will go off on that selected days every week.",
      features: [
        "Fast setup method.",
        "Easy to use.",
        "Alarm enabling/disabling with one touch.",
        "Set a message for each alarm.",
        "Repeat alarms every week on certain days.",
        "Select the alarm sound you want from all your phone's ringtones, songs and sounds. Wake up to your favourite music!",
        "1 button alarm Snooze.",
        "Wake up gently while volume and vibration increase slowly.",
        "Night mode",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/1momentix.png",
        "./portfolio/Details/2momentix.png",
        "./portfolio/Details/3momentix.png",
        "./portfolio/Details/4momentix.png",
        "./portfolio/Details/5momentix.png",
        "./portfolio/Details/6momentix.png",
      ],
    },

    {
      id: 8,
      title: "Persocom",
      subtitle: "Persocom is blog site made using Django.",
      image: "./portfolio/persocom/1.png",
      by: "Pranav Choudhary",
      tech: ["Django", "Python", "HTML", "CSS", "Javascript"],
      category: "Website",
      filter: "filter-web",
      date: "21 Mar, 2021",
      github_link: null,
      website_link: "https://persocom.herokuapp.com/",
      google_play_link: null,
      amazon_store: null,
      app_link: null,
      summary: "Persocom is blog site made using Django.",
      features: [
        "User Registration",
        "User Login & Logout",
        "Create, Update, Edit & Delete Posts (Only author)",
        "Create,new categories(Only author)",
        "Add comments",
        "Search feature",
        "Get related post",
        "Get trending posts since last week",
        "Gallery section",
        "Browse post by categories",
      ],
      attribution: null,
      slides: [
        "./portfolio/persocom/1.png",
        "./portfolio/persocom/2.png",
        "./portfolio/persocom/3.png",
        "./portfolio/persocom/4.png",
        "./portfolio/persocom/5.png",
        "./portfolio/persocom/6.png",
        "./portfolio/persocom/7.png",
        "./portfolio/persocom/8.png",
        "./portfolio/persocom/9.png",
        "./portfolio/persocom/10.png",
        "./portfolio/persocom/11.png",
        "./portfolio/persocom/12.png",
        "./portfolio/persocom/13.png",
        "./portfolio/persocom/14.png",
        "./portfolio/persocom/15.png",
      ],
    },

    {
      id: 9,
      title: "Notenest",
      subtitle:
        "Notenest is an easy-to-use, intuitive, fast, elegant app to create notes",
      image: "./portfolio/Details/notenest5.png",
      by: "Pranav Choudhary",
      tech: [
        "kotlin",
        "MVVM",
        "Dagger-hilt",
        "Navigation Components",
        "Glide",
        "Room database",
      ],
      category: "Android app",
      filter: "filter-app",
      date: "5 Feb, 2021",
      github_link: null,
      website_link: null,
      google_play_link:
        "https://play.google.com/store/apps/details?id=com.note.notenest",
      amazon_store:
        "https://www.amazon.com/dp/B08W1VY93C/ref=sr_1_1?dchild=1&keywords=notenest&qid=1612543470&sr=8-1",
      app_link: null,
      summary:
        "Notenest is an easy-to-use, intuitive, fast, elegant app to create notes Notenest has an easy to use simple interface. You can easily record thoughts and share them with friends and relatives.",
      features: [
        "Save, browse, search and share notes",
        "Easy to use.",
        "List/Grid View",
        "Share notes",
        "No ads",
        "Record ideas, tasks.",
        "No account creation required",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/notenest1.png",
        "./portfolio/Details/notenest2.png",
        "./portfolio/Details/notenest3.png",
        "./portfolio/Details/notenest4.png",
        "./portfolio/Details/notenest5.png",
      ],
    },

    {
      id: 10,
      title: "Animefied",
      subtitle: "Android app to get info about your favourite anime.",
      image: "./portfolio/Details/11anime.png",
      by: "Pranav Choudhary",
      tech: [
        "kotlin",
        "MVVM",
        "Dagger-hilt",
        "Navigation Components",
        "Retrofit2",
        "Jikan API",
        "Glide",
        "Room database",
      ],
      category: "Android app",
      filter: "filter-app",
      date: "18 Jan, 2021",
      github_link: null,
      website_link: null,
      google_play_link:
        "https://play.google.com/store/apps/details?id=com.movies.animefied",
      amazon_store: null,
      app_link: null,
      summary:
        "With Animefied you can watch trailers ,track what you want to watch using your Watchlist. Create your own watchlist. Search and store details of your favourite anime. This is an unofficial MyAnimeList client that help you manage your anime",
      features: [
        "Add anime to a favourite list",
        "Create your own watchlist",
        "Search for anime",
        "Watch trailers before you decide about a anime",
        "View information about an anime character.",
        "See full lists of popular characters and anime trailers",
        "Browse anime by Genres",
        "No account creation required",
      ],
      attribution:
        "This product uses the Jikan API but is not endorsed or certified by Jikan.",
      slides: [
        "./portfolio/Details/notenest1.png",
        "./portfolio/Details/notenest2.png",
        "./portfolio/Details/notenest3.png",
        "./portfolio/Details/notenest4.png",
        "./portfolio/Details/notenest5.png",
        "./portfolio/Details/notenest6.png",
      ],
    },

    {
      id: 11,
      title: "Moviomatic",
      subtitle: "Android app to get info about your favourite movie.",
      image: "./portfolio/Details/moviomatic0.png",
      by: "Pranav Choudhary",
      tech: [
        "kotlin",
        "MVVM",
        "Dagger-hilt",
        "Navigation Components",
        "Retrofit2",
        "TMDB API",
        "Glide",
        "Room database",
      ],
      category: "Android app",
      filter: "filter-app",
      date: "20 Dec, 2020",
      github_link: null,
      website_link: null,
      google_play_link:
        "https://play.google.com/store/apps/details?id=com.movies.mymoviesapp",
      amazon_store: "https://www.amazon.com/gp/product/B08RRVY3QC",
      app_link: null,
      summary:
        "With Moviomatic you can watch trailers ,track what you want to watch using your Watchlist. Search and store details of your favourite movie. Get information about your favourite actors.",
      features: [
        "Add movies to a favourite list",
        "Search for movies",
        "View information about a movie or an actor",
        "Watch trailers before you decide about a movie",
        "See full lists of Cast and Crew and movie trailers",
        "Get a list of similar movies",
        "Get movie recommendations",
        "No account creation required",
        "Browse movies by Genres,In Theaters, Trending, Top-rated, Trending and Upcoming.",
      ],
      attribution:
        "This product uses the TMDb API but is not endorsed or certified by TMDb.",
      slides: [
        "./portfolio/Details/moviomatic0.png",
        "./portfolio/Details/moviomatic1.png",
        "./portfolio/Details/moviomatic2.png",
        "./portfolio/Details/moviomatic3.png",
        "./portfolio/Details/moviomatic4.png",
      ],
    },

    {
      id: 12,
      title: "Chandamama",
      subtitle: "Android app to read classic Chandamama magazines.",
      image: "./portfolio/Details/ch4.png",
      by: "Pranav Choudhary",
      tech: [
        "kotlin",
        "MVVM",
        "Dagger-hilt",
        "Navigation Components",
        "Retrofit2",
        "Glide",
        "Room database",
      ],
      category: "Android app",
      filter: "filter-app",
      date: "27 Jan, 2021",
      github_link: null,
      website_link: null,
      google_play_link:
        "https://play.google.com/store/apps/details?id=com.chavi.chandamama&hl=en",
      amazon_store: null,
      app_link: null,
      summary:
        "Chandamama was a classic Indian monthly magazine, famous for its illustrations. It also published long-running mythological/magical stories that ran for years starting 1947. Chandamama Application sort out the collection of magazines from the available archives and takes the readers to cherish their memories.",
      features: [
        "Sort out magzines according to different categories",
        "Magzines available in multiple languages",
        "Filter out magzines accoriding to publishing year",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/ch1.png",
        "./portfolio/Details/ch2.png",
        "./portfolio/Details/ch3.png",
        "./portfolio/Details/ch4.png",
        "./portfolio/Details/ch5.png",
      ],
    },

    {
      id: 13,
      title: "Newzilla",
      subtitle: "Get information about the latest trends all around the globe.",
      image: "./portfolio/Details/1news.png",
      by: "Pranav Choudhary",
      tech: [
        "kotlin",
        "MVVM",
        "Dagger-hilt",
        "Navigation Components",
        "Retrofit2",
        "News api",
        "Glide",
        "Room database",
      ],
      category: "Android app",
      filter: "filter-app",
      date: "1 Dec, 2020",
      github_link: null,
      website_link: null,
      google_play_link:
        "https://play.google.com/store/apps/details?id=com.hilt.newszilla&hl=en",
      amazon_store: "https://www.amazon.com/gp/product/B08QG1N8FD",
      app_link: null,
      summary:
        "Get the latest news from your favourite newspapers. Get information about the latest trends all around the globe. Share and save articles. Search news. Ability to search news by keyword, language, sorted by popularity, date of publication or relevance. Visualize news headlines organized in several categories : Popular, General, Science, Technology, Sports, Entertainment. Multiple languages supported.",
      features: [
        "Search latest news and trends from all over the world.",
        "Search for news by keyword, language, sorted by popularity, date of publication, or relevance",
        "Read news in different languages.",
        "Read latest articles from different newspapers.",
        "Save articles to read them later",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/1news.png",
        "./portfolio/Details/2news.png",
        "./portfolio/Details/3news.png",
        "./portfolio/Details/4news.png",
      ],
    },

    {
      id: 14,
      title: "Statusbee",
      subtitle: "Download and view WhatsApp status.",
      image: "./portfolio/Details/statusbee0.png",
      by: "Pranav Choudhary",
      tech: [
        "kotlin",
        "MVVM",
        "Dagger-hilt",
        "Navigation Components",
        "Glide",
        "Room database",
      ],
      category: "Android app",
      filter: "filter-app",
      date: "18 Dec, 2020",
      github_link: null,
      website_link: null,
      google_play_link:
        "https://play.google.com/store/apps/details?id=com.hilt.newszilla&hl=en",
      amazon_store: null,
      app_link: null,
      summary:
        "The Function of Statusbee is to download status posted by your friends or family Member. Your can see these Image Status or Video status and share them to your friends. By using this Statusbee you can easily see whatsapp images, videos, audio files and documents saved in your local storage. Now you don't need to ask your friends to send their status to you because your can easily save their status with Statusbee.",
      features: [
        "No ads",
        "No account creation",
        "Save, delete & share",
        "Easy to use",
        "Download to the gallery",
        " In-built image viewer and video player",
        "See whatsapp documents",
      ],
      attribution:
        "WhatsApp name is copyright to WhatsApp.Inc. Statusbee is in no way affiliated with, sponsored or endorsed by WhatsApp.Inc.",
      slides: [
        "./portfolio/Details/statusbee0.png",
        "./portfolio/Details/statusbee1.png",
        "./portfolio/Details/statusbee2.png",
        "./portfolio/Details/statusbee3.png",
        "./portfolio/Details/statusbee_bg.png",
      ],
    },

    {
      id: 15,
      title: "Flames",
      subtitle: "FLAMES is a popular game played by teenagers.",
      image: "./portfolio/Details/flame1.png",
      by: "Pranav Choudhary",
      tech: ["kotlin", "MVVM", "Dagger-hilt", "Navigation Components", "Glide"],
      category: "Android app",
      filter: "filter-app",
      date: "20 Nov, 2020",
      github_link: null,
      website_link: null,
      amazon_store: "https://www.amazon.com/gp/product/B08NZXQD1L",
      google_play_link:
        "https://play.google.com/store/apps/details?id=com.flame.flames",
      app_link: null,
      summary:
        "FLAMES is a popular game played by teenagers as a way to deal with the unpredictability of their romantic relationships.",
      features: null,
      attribution: null,
      slides: [
        "./portfolio/Details/flame1.png",
        "./portfolio/Details/flam2.png",
        "./portfolio/Details/flame3.png",
      ],
    },

    {
      id: 16,
      title: "Foodella",
      subtitle: "Basic food ordering app",
      image: "./portfolio/Details/foodella1.png",
      by: "Pranav Choudhary",
      tech: [
        "kotlin",
        "MVVM",
        "Dagger-hilt",
        "Volley",
        "Room Persistence Library",
        "Picasso",
      ],
      category: "Android app",
      filter: "filter-app",
      date: "25 Oct, 2020",
      github_link: "https://github.com/pranavelric/Foodella",
      website_link: null,
      amazon_store:
        "https://www.amazon.com/dp/B08RSBCX93/ref=sr_1_7?dchild=1&qid=1621337375&refinements=p_4%3APranav+choudhary&s=mobile-apps&search-type=ss&sr=1-7",
      google_play_link: null,
      app_link: null,
      summary:
        "A sample food ordering app. This app is built in kotlin and uses volley to send get and post request from the internshala server through rest api calls. The app also uses the room persistence library to save data locally.",
      features: [
        "User registration.",
        "Filtering Restaurants by price or rating.",
        "Login as a member",
        "View food menu",
        "Place food orders",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/foodella1.png",
        "./portfolio/Details/foodella2.png",
        "./portfolio/Details/foodella3.png",
      ],
    },

    {
      id: 17,
      title: "Nutrim",
      subtitle: "Fitness app which provides daily workout routines",
      image: "./portfolio/Details/1n.png",
      by: "Pranav Choudhary",
      tech: ["kotlin", "firebase", "HTML", "CSS", "Javascript", "Glide"],
      category: "Android app",
      filter: "filter-app",
      date: "31 Aug, 2020",
      github_link: "https://github.com/pranavelric/Foodella",
      website_link: null,
      amazon_store: null,
      google_play_link: null,
      app_link:
        "https://drive.google.com/file/d/1OQYPDH3F7cAM1amoD170hWYesYJFGvAB/view?usp=sharing",
      summary:
        "Nutrim is a fitness app which provides daily workout routines for all your main muscle groups.\n\nThis app has workouts for your abs, chest, legs, arms,back.\n\nYou can calculate and evaluate your Body Mass Index (BMI) based on the relevant information on body weight, height, age and sex.\n\nGet a diet plan to gain muscles. Search for particular food and get details of nutrients present in it.",
      features: [
        "Provides daily workout routines",
        "Workout for different muscle groups.",
        "",
        "View food menu",
        "Place food orders",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/1n.png",
        "./portfolio/Details/2n.png",
        "./portfolio/Details/3n.png",
      ],
    },

    {
      id: 18,
      title: "CoronaCount",
      subtitle: "Provides basic information about new coronavirus (2019-nCoV).",
      image: "./portfolio/Details/CoronaCount.png",
      by: "Pranav Choudhary",
      tech: ["kotlin", "firebase", "HTML", "CSS", "Javascript", "Glide"],
      category: "Android app",
      filter: "filter-app",
      date: "13 May, 2020",
      github_link: "https://github.com/pranavelric/CoronaCount",
      website_link: null,
      amazon_store: null,
      google_play_link: null,
      app_link:
        "https://www.getjar.com/categories/news-and-weather-apps/world-news/CoronaCount-977490",
      summary:
        "It provides basic information about new coronavirus (2019-nCoV). It's uses an API for tracking. You can see country wise data with searching feature. You can see all location point and data count on Map, and Rendered information statistics with the help of charts. This app also provides basic tips and advices to protect yourself from COVID-19.There is a section for most frequently asked question where you can get answers to some basic questions related to coronavirus.",
      features: [
        "Country wise data",
        "Search different countries",
        "Check hotspots on map",
        "Tips and advice section",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/CoronaCount.png",
        "./portfolio/Details/2.png",
        "./portfolio/Details/3.png",
        "./portfolio/Details/1.png",
      ],
    },

    {
      id: 19,
      title: "Learningscape",
      subtitle: "Quizz app.",
      image: "./portfolio/Details/1_learn.png",
      by: "Pranav Choudhary",
      tech: ["kotlin", "firebase", "HTML", "CSS", "Javascript", "Glide"],
      category: "Android app",
      filter: "filter-app",
      date: "15 Aug, 2020",
      github_link: null,
      website_link: null,
      amazon_store: null,
      google_play_link:
        "https://play.google.com/store/apps/details?id=com.quiz.learningscape",
      app_link: null,
      summary:
        "Increase your knowledge by playing some fun quizzes. Choose different quizzes from different categories. Read practice questions.Solve quizzed and get a highscore",
      features: null,
      attribution: null,
      slides: [
        "./portfolio/Details/1_learn.png",
        "./portfolio/Details/2_learn.png",
        "./portfolio/Details/3_learn.png",
        "./portfolio/Details/4_learn.png",
      ],
    },

    {
      id: 20,
      title: "HDWallpapers",
      subtitle: "Download full HD wallpapers for both Desktop and mobiles",
      image: "./portfolio/Details/1h.png",
      by: "Pranav Choudhary",
      tech: ["Java", "firebase", "Glide"],
      category: "Android app",
      filter: "filter-app",
      date: "28 Jul, 2020",
      github_link: null,
      website_link: null,
      amazon_store: "https://www.amazon.com/gp/product/B086J8JB3W",
      google_play_link: null,
      app_link: null,
      summary:
        "Download full HD wallpapers for both Desktop and mobiles. you can share wallpapers, set as background, You can select your favourite wallpapers, thousand of wallpapers daily uploaded.Read words of wisdom in your profile section each time you open the app.",
      features: null,
      attribution: null,
      slides: [
        "./portfolio/Details/1h.png",
        "./portfolio/Details/2h.png",
        "./portfolio/Details/3h.png",
      ],
    },

    {
      id: 21,
      title: "PhotoComp",
      subtitle: "Connect with friends and chat with them",
      image: "./portfolio/Details/1p.png",
      by: "Pranav Choudhary",
      tech: ["Java", "firebase", "Glide"],
      category: "Android app",
      filter: "filter-app",
      date: "31 Jul, 2020",
      github_link: null,
      website_link: null,
      amazon_store:
        "https://www.amazon.com/Pranav-choudhary-PhotoComp-blogging-app/dp/B08DQ16CD3/ref=sr_1_8?qid=1661931277&refinements=p_4%3APranav+choudhary&s=mobile-apps&search-type=ss&sr=1-8",
      google_play_link:
        "https://play.google.com/store/apps/details?id=com.blog.photoblog",
      app_link: null,
      summary:
        "Connect with friends and chat with them. Share posts. Compare two images and ask peoples which is better. Find new friends. Send message request to different users and chat with them.Comments on post anonymously.",
      features: [
        "Find new friends",
        "Connect with friends",
        "Chat with friends",
        "Share photos",
        "Post images",
        "Comment on post anonymously",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/1p.png",
        "./portfolio/Details/2p.png",
        "./portfolio/Details/3p.png",
        "./portfolio/Details/4p.png",
      ],
    },

    {
      id: 22,
      title: "Chess 2D",
      subtitle: "Chess game made in unity",
      image: "./portfolio/Details/1c.png",
      by: "Pranav Choudhary",
      tech: ["C#"],
      category: "Android game",
      filter: "filter-game",
      date: "18 Aug, 2020",
      github_link: "https://github.com/pranavelric/Chess",
      website_link: null,
      amazon_store: null,
      google_play_link: null,
      app_link: null,
      summary: "Android chess game made in unity.",
      features: null,
      attribution: null,
      slides: ["./portfolio/Details/1c.png", "./portfolio/Details/2c.png"],
    },

    {
      id: 23,
      title: "A.M.S",
      subtitle: "Attendance Management System by face recognition using OpenCV",
      image: "./portfolio/Details/1a.png",
      by: "Pranav Choudhary",
      tech: ["python", "OpenCV", "Tkinter", "PIL", "Firebase", "Dlib"],
      category: "GUI application",
      filter: "filter-app",
      date: "3 Jul, 2020",
      github_link:
        "https://github.com/pranavelric/Attendance-Management-System",
      website_link: null,
      amazon_store: null,
      google_play_link: null,
      app_link: null,
      summary: "Attendance Management System by face recognition using OpenCV.",
      features: [
        "Automatic class attendance marking",
        "Use class cameras for taking images",
        "Save everyday progress in firebase",
        "Image and video mode available",
        "Fetch attendance detail from anywhere",
        "List course-wise attendence",
        "Capture or upload images and use them to create and train dataset.",
      ],
      attribution: null,
      slides: [
        "./portfolio/Details/1a.png",
        "./portfolio/Details/2a.png",
        "./portfolio/Details/3a.png",
        "./portfolio/Details/4a.png",
      ],
    },

    {
      id: 24,
      title: "C.R.M",
      subtitle: "Customer-Relationship-Management",
      image: "./portfolio/Details/crm/1.png",
      by: "Pranav Choudhary",
      tech: [
        "Spring Core",
        "Spring MV",
        "Hibernate API",
        "JSP pages",
        "JSTL tags",
        "Maven",
        "CSS",
        "Javascript",
        "MySQL",
      ],
      category: "Web application",
      filter: "filter-web",
      date: "30 May, 2021",
      github_link: "https://github.com/pranavelric/CustomerTracker",
      website_link: null,
      amazon_store: null,
      google_play_link: null,
      app_link: null,
      summary:
        "A web application made using Spring, Hibernate and Maven functions. This application is a Customer Relationship Management system that allows to track customers. This Project helps to add a customer, update and delete a customer.",
      features: null,
      attribution: null,
      slides: [
        "./portfolio/Details/crm/1.png",
        "./portfolio/Details/crm/2.png",
        "./portfolio/Details/crm/3.png",
        "./portfolio/Details/crm/4.png",
      ],
    },

    {
      id: 25,
      title: "Todo App",
      subtitle: "A todo application made using react.",
      image: "./portfolio/Details/todo/1.png",
      by: "Pranav Choudhary",
      tech: [
        "React",
        "React Redux",
        "Framer Motion",
        "React Hot toast",
        "html",
        "css",
        "javascript",
      ],
      category: "Web application",
      filter: "filter-web",
      date: "26 May, 2022",
      github_link: "https://github.com/pranavelric/React-TODO-APP",
      website_link: "https://pranavelric.dev/React-TODO-APP/",
      amazon_store: null,
      google_play_link: null,
      app_link: null,
      summary: "A todo application made using react.",
      features: null,
      attribution: null,
      slides: [
        "./portfolio/Details/todo/1.png",
        "./portfolio/Details/todo/2.png",
        "./portfolio/Details/todo/3.png",
      ],
    },

    {
      id: 26,
      title: "Notes App",
      subtitle: "A note taking application made using react.",
      image: "./portfolio/Details/notes_app/1.png",
      by: "Pranav Choudhary",
      tech: ["React", "html", "css", "javascript"],
      category: "Web application",
      filter: "filter-web",
      date: "12 Jun, 2022",
      github_link: "https://github.com/pranavelric/Notes-app",
      website_link: "https://pranavelric.dev/Notes-app",
      amazon_store: null,
      google_play_link: null,
      app_link: null,
      summary: "A note taking application made using react.",
      features: null,
      attribution: null,
      slides: ["./portfolio/Details/notes_app/1.png"],
    },

    {
      id: 27,
      title: "File sharing",
      subtitle: "Django rest framework file sharing project.",
      image: "./portfolio/Details/file_sharing/1.png",
      by: "Pranav Choudhary",
      tech: [
        "Django",
        "Django Rest Framework",
        "HTML",
        "CSS",
        "Javascript",
        "filepond",
      ],
      category: "Web application",
      filter: "filter-web",
      date: "24 Apr, 2022",
      github_link: "https://github.com/pranavelric/FileShare",
      website_link: null,
      amazon_store: null,
      google_play_link: null,
      app_link: null,
      summary: "Django rest framework file sharing project.",
      features: null,
      attribution: null,
      slides: [
        "./portfolio/Details/file_sharing/1.png",
        "./portfolio/Details/file_sharing/2.png",
        "./portfolio/Details/file_sharing/3.png",
      ],
    },
  ],
};
export const achievements = [
  {
    title: "FLIPR HACKATHON X",
    src: "./assets/certificates/fliprx.jpg",
    description: "Ranked 1st in Flipr Hackathon X Mobile App Development.",
  },
  {
    title: "GOLDMAN SACHS ENGINEERING VIRTUAL INTERNSHIP",
    src: "./assets/certificates/golmansachs.webp",
    description:
      "Successfully completed the given task to crack leaked password database",
  },
  {
    title: "FLIPR HACKATHON 8.0",
    src: "./assets/certificates/lop.jpg",
    description: "Ranked 2nd in Flipr Hackathon 8.0 Mobile App Development",
  },
  {
    title: "30 DAYS OF GOOGLE CLOUD PROGRAM",
    src: "./assets/certificates/google_cloud_track_machinelearning.webp",
    description:
      "Successfully completed Qwiklab tasks in Cloud Engineering Track and Data Science & Machine learning Track",
  },
  {
    title: "HACKTOBERFEST 2021",
    src: "./assets/certificates/hacktober2021.png",
    description:
      "Successfully completed the one month long open source program",
  },
  {
    title: "HACKTOBERFEST 2020",
    src: "./assets/certificates/hacktoberfest.webp",
    description:
      "Successfully completed the one month long open source program",
  },
];

export const certificates = [
  {
    title: "FLIPR HACKATHON X",
    src: "./assets/certificates/fliprx.jpg",
    description: "Ranked 1st in Flipr Hackathon X Mobile App Development.",
    college: null,
    provider: "Flipr Innovation Labs",
  },
  {
    title: "GOLDMAN SACHS ENGINEERING VIRTUAL INTERNSHIP",
    src: "./assets/certificates/golmansachs.webp",
    description:
      "Successfully completed the given task to crack leaked password database",
    college: null,
    provider: "Goldman Sachs",
  },
  {
    title: "FLIPR HACKATHON 8.0",
    src: "./assets/certificates/lop.jpg",
    description: "Ranked 2nd in Flipr Hackathon 8.0 Mobile App Development",
    college: null,
    provider: "Flipr Innovation Labs",
  },
  {
    title: "30 DAYS OF GOOGLE CLOUD PROGRAM",
    src: "./assets/certificates/google_cloud_track_machinelearning.webp",
    description:
      "Successfully completed Qwiklab tasks in Cloud Engineering Track and Data Science & Machine learning Track",
    college: null,
    provider: "Google Cloud",
  },
  {
    title: "HACKTOBERFEST 2021",
    src: "./assets/certificates/hacktober2021.png",
    description:
      "Successfully completed the one month long open source program",
    college: null,
    provider: "Digital Ocean",
  },
  {
    title: "HACKTOBERFEST 2020",
    src: "./assets/certificates/hacktoberfest.webp",
    description:
      "Successfully completed the one month long open source program",
    college: null,
    provider: "Digital Ocean",
  },
  {
    title: "Algorithmic Toolbox",
    src: "./assets/certificates/algorithmic_toolbox.webp",
    description: null,
    college: "UC SanDiego Higher School of Economics",
    provider: "Coursera",
  },
  {
    title: "Preparing for the Google Cloud Associate Cloud Engineer Exam",
    src: "./assets/certificates/preparing_for_GCACE.webp",
    description: null,
    college: "Google",
    provider: "Coursera",
  },
  {
    title: "Android App Development",
    src: "./assets/certificates/android_app_dev_internshala.webp",
    description: null,
    college: null,
    provider: "Internshala",
  },
  {
    title: "Build Your First Android App",
    src: "./assets/certificates/build_your_first_app_courseera.webp",
    description: null,
    college: "Centrale Supelec",
    provider: "Coursera",
  },
  {
    title: "Competitive Programmer's Core Skills",
    src: "./assets/certificates/competetive_prog_coreskills.webp",
    description: null,
    college: "Saint Petersburg State University",
    provider: "Coursera",
  },
  {
    title: "AI for India",
    src: "./assets/certificates/guvi.png",
    description: null,
    college: null,
    provider: "Guvi",
  },
  {
    title: "Html, CSS, and Javascript for Web Developers",
    src: "./assets/certificates/html_css_javascript_courseera.webp",
    description: null,
    college: "Johns Hopkins University",
    provider: "Coursera",
  },

  {
    title: "Web Development",
    src: "./assets/certificates/internshal_web.webp",
    description: null,
    college: null,
    provider: "Internshala",
  },

  {
    title:
      "Programming Mobile Applications for Android Handheld Systems: Part 1",
    src: "./assets/certificates/programming_movile_app_courseera.webp",
    description: null,
    college: "University of Maryland",
    provider: "Coursera",
  },
  {
    title: "Python for Everybody",
    src: "./assets/certificates/python_for_every_courseera.webp",
    description: null,
    college: "University of Michigan",
    provider: "Coursera",
  },
  {
    title: "Python Project: pillow, tesseract, and opencv",
    src: "./assets/certificates/python_pillow_tesseract_open_cv.webp",
    description: null,
    college: "University of Michigan",
    provider: "Coursera",
  },
  {
    title: "What is Data Science?",
    src: "./assets/certificates/what_is_datascience.webp",
    description: null,
    college: "IBM",
    provider: "Coursera",
  },
  {
    title: "The Python Week",
    src: "./assets/certificates/Python_weekly.webp",
    description: null,
    college: null,
    provider: "Mehsana Developers Club",
  },

  {
    title: "Android Dev Internship",
    src: "./assets/certificates/pro_cipger.webp",
    description: null,
    college: null,
    provider: "Professional Cipher",
  },

  {
    title: "DIGITAL SKILLS: MOBILE",
    src: "./assets/certificates/digital_skills_mobile.png",
    description: null,
    college: null,
    provider: "ACCENTURE",
  },

  {
    title: "Cloud Computing",
    src: "./assets/certificates/nptel.webp",
    description: null,
    college: null,
    provider: "NPTEL",
  },

  {
    title: "App Development For beginners",
    src: "./assets/certificates/App.webp",
    description: null,
    college: null,
    provider: "JIGSAWMINDZ",
  },

  {
    title: "Google Cloud Platform Fundamentals:Core Infrastructure",
    src: "./assets/certificates/Google_cloud_fundamentals.webp",
    description: null,
    college: "Google Cloud",
    provider: "Coursera",
  },

  {
    title: "Competitive Programming(Hands on Session)",
    src: "./assets/certificates/iiit_cop.webp",
    description: null,
    college: "Coding Ninjas",
    provider: "PDPM IIITDM Jabalpur",
  },
  {
    title:
      "Build A Data Platform For Millions:Inside India's Largest Streaming Service",
    src: "./assets/certificates/scalar_participation.webp",
    description: null,
    college: null,
    provider: "Scalar",
  },
  {
    title: "(Certificate of Participation) SnackDown",
    src: "./assets/certificates/snackdown.webp",
    description: null,
    college: null,
    provider: "Codechef",
  },
  {
    title: "SelectorsHub Certification Program",
    src: "./assets/certificates/sh.png",
    description: null,
    college: null,
    provider: "SelectorsHub",
  },
  {
    title: "Docker Best Practices",
    src: "./assets/certificates/Pranav_Choudhary20211205-11090-3g1xzo.jpg",
    description: null,
    college: null,
    provider: "GreatLearning",
  },

  {
    title: "Docker For Intermediate Level",
    src: "./assets/certificates/Pranav_Choudharydocker_intermediate.jpg",
    description: null,
    college: null,
    provider: "GreatLearning",
  },

  {
    title: "The Fundamentals of digital marketing",
    src: "./assets/certificates/fundamentals_of_digital_marketing.png",
    description: null,
    college: null,
    provider: "Google Digital Garage",
  },
  {
    title: "WinterFest 2022",
    src: "./assets/certificates/codein_certificate.png",
    description: null,
    college: null,
    provider: "CodeIn Community",
  },
  {
    title: "Unconscious Bias",
    src: "./assets/certificates/unconscious_bias.png",
    description: null,
    college: null,
    provider: "Linkedin Learning",
  },
  {
    title: "React.js Essential Training",
    src: "./assets/certificates/react_linkedin.png",
    description: null,
    college: null,
    provider: "Linkedin Learning",
  },
];

// drawings
export const drawings = [
  {
    title: "Chillout on your birthday",
    src: "./drawing/0.jpg",
    description: "A birthday card coverpage.",
  },
  {
    title: "Anime Boy",
    src: "./drawing/1.jpg",
    description: "",
  },
  {
    title: "Goku",
    src: "./drawing/2.jpg",
    description:
      "Son Goku, is a male Saiyan and the main protagonist of the Dragon Ball series created by Akira Toriyama.",
  },
  {
    title: "Mahatma Gandhi",
    src: "./drawing/3.jpg",
    description: "",
  },
  {
    title: "A Dog",
    src: "./drawing/4.jpg",
    description: "",
  },
  {
    title: "Captain Jack Sparrow",
    src: "./drawing/5.jpg",
    description:
      "Jack Sparrow was a legendary pirate of the Seven Seas, and the irreverent trickster of the Caribbean.",
  },
  {
    title: "Lionel messi",
    src: "./drawing/6.jpg",
    description: "",
  },
  {
    title: "Steve Jobs",
    src: "./drawing/7.jpg",
    description: "",
  },
  {
    title: "Trunks dbz",
    src: "./drawing/8.jpg",
    description: "",
  },
  {
    title: "Frieza",
    src: "./drawing/9.jpg",
    description: "",
  },

  {
    title: "Cell dbz",
    src: "./drawing/10.jpg",
    description: "",
  },

  {
    title: "Pikachu",
    src: "./drawing/11.jpg",
    description: "",
  },

  {
    title: "Ash and Pikachu",
    src: "./drawing/12.jpg",
    description: "",
  },

  {
    title: "Pikachu",
    src: "./drawing/13.jpg",
    description: "",
  },

  {
    title: "Panda",
    src: "./drawing/14.jpg",
    description: "",
  },

  {
    title: "A Cat",
    src: "./drawing/15.jpg",
    description: "",
  },

  {
    title: "Gozeta",
    src: "./drawing/16.jpg",
    description: "",
  },
  {
    title: "KochiKame: Tokyo Beat Cops",
    src: "./drawing/17.jpg",
    description:
      "KochiKame: Tokyo Beat Cops, is a Japanese comedy manga series written and illustrated by Osamu Akimoto",
  },
  {
    title: "Naruto Uzumaki",
    src: "./drawing/18.jpg",
    description:
      "Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage.",
  },

  {
    title: "Light Yagami",
    src: "./drawing/19.jpg",
    description: "",
  },

  {
    title: "Shenron",
    src: "./drawing/20.jpg",
    description: "",
  },

  {
    title: "Jackie Chan",
    src: "./drawing/21.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/22.jpg",
    description: "",
  },

  {
    title: "Albert Einstein",
    src: "./drawing/23.jpg",
    description: "",
  },

  {
    title: "Baby Shenron",
    src: "./drawing/24.jpg",
    description: "",
  },
  {
    title: "Naruto Uzumaki",
    src: "./drawing/25.jpg",
    description:
      "Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage.",
  },

  {
    title: "Anime",
    src: "./drawing/26.jpg",
    description: "",
  },

  {
    title: "RDJ",
    src: "./drawing/27.jpg",
    description: "",
  },

  {
    title: "Paul Walker",
    src: "./drawing/28.jpg",
    description: "",
  },
  {
    title: "Anime",
    src: "./drawing/29.jpg",
    description: "",
  },

  {
    title: "Anime",
    src: "./drawing/30.jpg",
    description: "",
  },
  {
    title: "Cell",
    src: "./drawing/31.jpg",
    description: "",
  },
  {
    title: "Pikachu",
    src: "./drawing/32.jpg",
    description: "",
  },
  {
    title: "A cat",
    src: "./drawing/33.jpg",
    description: "",
  },
  {
    title: "Mr Bean",
    src: "./drawing/34.jpg",
    description: "",
  },
  {
    title: "Edward Elric",
    src: "./drawing/35.jpg",
    description: "",
  },
  {
    title: "Rockstar dog",
    src: "./drawing/36.jpg",
    description: "",
  },

  {
    title: "Giraffe",
    src: "./drawing/37.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/38.jpg",
    description: "",
  },

  {
    title: "Santa",
    src: "./drawing/39.jpg",
    description: "",
  },

  {
    title: "Scenery",
    src: "./drawing/40.jpg",
    description: "",
  },

  {
    title: "Parrot",
    src: "./drawing/43.jpg",
    description: "",
  },

  {
    title: "Elephant",
    src: "./drawing/44.jpg",
    description: "",
  },

  {
    title: "Eagle",
    src: "./drawing/45.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/46.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/47.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/48.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/49.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/50.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/51.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/52.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/53.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/54.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/55.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/57.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/59.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/60.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/63.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/64.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/65.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/67.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/68.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/69.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/70.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/71.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/72.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/73.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/75.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/76.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/77.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/78.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/79.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/80.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/81.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/82.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/83.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/84.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/85.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/86.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/87.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/88.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/89.jpg",
    description: "",
  },
  {
    title: "",
    src: "./drawing/90.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/91.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/92.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/93.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/94.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/95.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/96.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/97.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/98.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/99.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/100.jpg",
    description: "",
  },

  {
    title: "",
    src: "./drawing/101.jpg",
    description: "",
  },
];

export { settings, projectsHeader };
