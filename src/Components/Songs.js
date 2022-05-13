const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Ma Belle",
    artist: "El Profesor",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2FExcuses%20Ap%20Dhillon%20320%20Kbps.mp3?alt=media&token=8690e045-0859-483b-a11c-af7d8c07aab4",
    imgSrc: 
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Images%2FExcuses-Ap-Dhillon-500-500.jpg?alt=media&token=1341c6ae-0720-447f-9463-f15acda23700",
  },
  {
    id: 2,
    favourite: false,
    songName: "Tum Ho",
    artist: "Mohit Chauhan",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2FTum%20Ho%20Rockstar%20320%20Kbps.mp3?alt=media&token=a7751c46-1550-404f-b627-9b971a8c1540",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Images%2Fartworks-000016291241-e858b6-t500x500.jpg?alt=media&token=477a4dcb-3c46-4e97-b7b8-b150c8952a1d",
  },
  {
    id: 3,
    favourite: false,
    songName: "Lehra Do",
    artist: "Arijit Singh",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2Fjeetega-jeetega-83-128-kbps-sound.mp3?alt=media&token=0e82942d-fd1c-46d7-913b-0181565ac59e",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Images%2FLehra-Do-83-500-500.jpg?alt=media&token=8e219627-596c-4a31-aa28-07aeb04b11e7",
  },
  {
    id: 4,
    favourite: false,
    songName: "Rataan Lambiyan",
    artist: "Jubin Nautiyal",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2Fraataan-lambiyan-shershaah-128-kbps-sound.mp3?alt=media&token=0be70a23-42a8-45b7-ac26-5b74d21182c8",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Images%2Fraataan-lambiyan-shershaah-500-500.jpg?alt=media&token=2a17edf9-d7b6-4d5f-80f3-da706b61646f",
  },
  {
    id: 5,
    favourite: false,
    songName: "Ranjha",
    artist: "Jasleen Royal",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2Franjha-shershaah-128-kbps-sound.mp3?alt=media&token=975aaea0-721b-4582-98ef-75485f22e382",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Images%2Fshershaah-2021-500-500.jpg?alt=media&token=c5c30d0e-3f81-4ba3-8048-0c68528b60ec",
  },
  {
    id: 6,
    favourite: false,
    songName: "Tum Ho",
    artist: "Mohit Chauhan",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2FTum%20Ho%20Rockstar%20320%20Kbps.mp3?alt=media&token=a7751c46-1550-404f-b627-9b971a8c1540",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Images%2Fartworks-000016291241-e858b6-t500x500.jpg?alt=media&token=477a4dcb-3c46-4e97-b7b8-b150c8952a1d",
  },
  {
    id: 7,
    favourite: false,
    songName: "Ma Belle",
    artist: "Ap Dhillon",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2Fma-belle-ap-dhillon-128-kbps-sound.mp3?alt=media&token=91cd52d5-01f5-46b7-9a43-4d3048680033",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Images%2FMa-Belle-Ap-Dhillon-500-500.jpg?alt=media&token=e5d1db5d-9a52-411f-9597-ad3bc84a6315",
  },
  {
    id: 8,
    favourite: false,
    songName: "Suit Suit",
    artist: "Guru Randhawa",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2Fsuit-suit-hindi-medium-128-kbps-sound.mp3?alt=media&token=5a5b7ad4-ea9f-4279-ad59-e0052c73b7d5",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Images%2FSuit-Suit-Hindi-Medium-500-500.jpg?alt=media&token=a3aa1dd0-bcb1-4d56-b2e4-d01d570c46b0",
  },
  {
    id: 9,
    favourite: false,
    songName: "Title Track - Bhool Bhulaiya",
    artist: "Neeraj Shridhar",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2Ftitle-track-bhool-bhulaiyaa-2-128-kbps-sound.mp3?alt=media&token=05dede96-392b-4adf-8593-643144b25264",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Images%2Ftitle-track-bhool-bhulaiyaa-2-500-500.jpg?alt=media&token=e99a6417-6513-495a-b069-efda4af7904f",
  },
  {
    id: 10,
    favourite: false,
    songName: "Excuses",
    artist: "AP Dhillon ",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2FExcuses%20Ap%20Dhillon%20320%20Kbps.mp3?alt=media&token=8690e045-0859-483b-a11c-af7d8c07aab4",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2FExcuses-Ap-Dhillon-500-500.jpg?alt=media&token=c9ea9cf2-55a3-4c86-baae-9be545063909",
  },
  {
    id: 11,
    favourite: false,
    songName: "Jeetega Jeetega",
    artist: "Arijit Sngh",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2Fjeetega-jeetega-83-128-kbps-sound.mp3?alt=media&token=0e82942d-fd1c-46d7-913b-0181565ac59e",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Images%2FLehra-Do-83-500-500.jpg?alt=media&token=8e219627-596c-4a31-aa28-07aeb04b11e7",
  },
  {
    id: 12,
    favourite: false,
    songName: "Mann Bharyaa",
    artist: "B Praak",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2Fmann-bharryaa-2.0-shershaah-128-kbps-sound.mp3?alt=media&token=83b73549-044c-4f93-9815-6b12ebe4436d",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Images%2Fshershaah-2021-500-500.jpg?alt=media&token=c5c30d0e-3f81-4ba3-8048-0c68528b60ec",
  },
  {
    id: 13,
    favourite: false,
    songName: "Hey Mama",
    artist: "David Guetta",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=2d8e8632-8051-4105-9760-3c715d797802",
  },
  {
    id: 14,
    favourite: false,
    songName: "Hey Mama",
    artist: "David Guetta",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=2d8e8632-8051-4105-9760-3c715d797802",
  },
  {
    id: 15,
    favourite: false,
    songName: "Hey Mama",
    artist: "David Guetta",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=2d8e8632-8051-4105-9760-3c715d797802",
  },
  {
    id: 16,
    favourite: false,
    songName: "Hey Mama",
    artist: "David Guetta",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=2d8e8632-8051-4105-9760-3c715d797802",
  },
  {
    id: 17,
    favourite: false,
    songName: "Lehra Do",
    artist: "Arijit Singh",
    song: "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Music%2Fjeetega-jeetega-83-128-kbps-sound.mp3?alt=media&token=0e82942d-fd1c-46d7-913b-0181565ac59e",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/listnup-4c8dc.appspot.com/o/Images%2FLehra-Do-83-500-500.jpg?alt=media&token=8e219627-596c-4a31-aa28-07aeb04b11e7",
  },

];

export { Songs };