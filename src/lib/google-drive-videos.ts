// Google Drive video configuration for 7K Political Science
// Shared folder: https://drive.google.com/drive/folders/1lHRSwUblrj1gF2-FahaxMcC8K8QdCqNs?usp=drive_link

export interface GoogleDriveVideo {
  fileName: string;
  fileId: string;
  streamUrl: string;
  downloadUrl: string;
}

// Helper function to convert Google Drive file ID to streaming URL
export function getGoogleDriveStreamUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

// Helper function to convert Google Drive file ID to download URL
export function getGoogleDriveDownloadUrl(fileId: string): string {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

// Helper function to get direct video streaming URL (for video element)
export function getGoogleDriveDirectUrl(fileId: string): string {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

// Google Drive video mapping - AUTO-GENERATED WITH REAL FILE IDS
export const googleDriveVideos: Record<string, GoogleDriveVideo> = {
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 01｜ HSC ARTS STREAM [TFFi8aaIfdA].mkv": {
    fileName: "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 01｜ HSC ARTS STREAM [TFFi8aaIfdA].mkv",
    fileId: "1Hq-cd3EvUtBYLkMEG65RFPUXVagQDVP3",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 02｜ Towards｜ Unipolarity｜ HSC ARTS STREAM [io6JND19kbY].mkv": {
    fileName: "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 02｜ Towards｜ Unipolarity｜ HSC ARTS STREAM [io6JND19kbY].mkv",
    fileId: "1Xmbups9SslDPHQUaqQoQXfxlurTFbnXy",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 04｜｜ HSC ARTS STREAM｜ HSC Exam [DyQ6eoHVXow].mkv": {
    fileName: "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 04｜｜ HSC ARTS STREAM｜ HSC Exam [DyQ6eoHVXow].mkv",
    fileId: "1NvSQlEIwMCZZSejRij0yN_fVnayfwyIZ",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 05｜｜ HSC ARTS STREAM｜ HSC Exam [1_-yLD7DNoI].mkv": {
    fileName: "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 05｜｜ HSC ARTS STREAM｜ HSC Exam [1_-yLD7DNoI].mkv",
    fileId: "1UvJy6HZAAdmtGxR-tYWB1hWI8ZuStFrB",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ Full Exercise Solution｜PART 06｜HSC ARTS STREAM [y59tcIx_4DA].mkv": {
    fileName: "12th Pol. Science｜ Chp：-01 'World Since 1991｜ Full Exercise Solution｜PART 06｜HSC ARTS STREAM [y59tcIx_4DA].mkv",
    fileId: "1uBvcH-e3rOvjsszodxBpiGIdhOeZntEf",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol. Science｜ Chp：-02 'Globalisation｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [qGth0gOgIIY].mkv": {
    fileName: "12th Pol. Science｜ Chp：-02 'Globalisation｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [qGth0gOgIIY].mkv",
    fileId: "1lWO7ajfwRV_SHgUHXJxKGex_CuQ7yj9s",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.Science｜ Chp：-02 'Globalization｜ PART 06｜ HSC ARTS STREAM｜ HSC Exam [iyJ1dbJ9doA].mkv": {
    fileName: "12th Pol.Science｜ Chp：-02 'Globalization｜ PART 06｜ HSC ARTS STREAM｜ HSC Exam [iyJ1dbJ9doA].mkv",
    fileId: "1nAcohF1Y32dJNS1vZptMNx1yov-1yUbi",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.Science｜ Chp：-03｜ Humanitarian Issues｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [jcgRuy16KqM].mkv": {
    fileName: "12th Pol.Science｜ Chp：-03｜ Humanitarian Issues｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [jcgRuy16KqM].mkv",
    fileId: "1OYWEqac518A5nMUS0FfhZaH_meVou5n2",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.Science｜ Chp：-03 'Humanitarian Issues ｜ PART 02｜ HSC ARTS STREAM ｜ HSC Exam [LaWVaR1PuK0].mkv": {
    fileName: "12th Pol.Science｜ Chp：-03 'Humanitarian Issues ｜ PART 02｜ HSC ARTS STREAM ｜ HSC Exam [LaWVaR1PuK0].mkv",
    fileId: "1BHZkUDrlOeBVZsHh9EhAjCOend9hpcUJ",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.Science｜ Chp：-03 ' Humanitarian Issues｜ PART 03｜ HSC ARTS STREAM｜ HSC Exam [69afqeeo7hs].mkv": {
    fileName: "12th Pol.Science｜ Chp：-03 ' Humanitarian Issues｜ PART 03｜ HSC ARTS STREAM｜ HSC Exam [69afqeeo7hs].mkv",
    fileId: "1_kVKPr4n7i03J-O6Vo0t6LctRpGsCxiP",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.Science｜ Chp：-03 'Humanitarian Issues｜ PART 04｜ HSC ARTS STREAM｜ HSC Exam [EW_skgOb6d8].mkv": {
    fileName: "12th Pol.Science｜ Chp：-03 'Humanitarian Issues｜ PART 04｜ HSC ARTS STREAM｜ HSC Exam [EW_skgOb6d8].mkv",
    fileId: "1dO06IF_l0H2wWLDVrGflUkY0DFstXuET",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.Science｜ Chp：-03 ' Humanitarian Issues｜ PART 05｜ HSC ARTS STREAM｜ HSC Exam [EVSiUlB3oPs].mkv": {
    fileName: "12th Pol.Science｜ Chp：-03 ' Humanitarian Issues｜ PART 05｜ HSC ARTS STREAM｜ HSC Exam [EVSiUlB3oPs].mkv",
    fileId: "1yW9N0CDHBUIPu_8sU5d0MvWPAxVPx1wF",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.Science ｜ Chp：-03 ' Humanitarian Issues｜ PART 06｜HSC ARTS STREAM｜ HSC Exam [a0gPdnJ-_ac].mkv": {
    fileName: "12th Pol.Science ｜ Chp：-03 ' Humanitarian Issues｜ PART 06｜HSC ARTS STREAM｜ HSC Exam [a0gPdnJ-_ac].mkv",
    fileId: "1XRsuuRtRfll0C9C91joSv718cXhPnCFJ",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.science｜Chp：-04｜ONE SHOT｜ 'Challenges to Peace, stability & Integration｜ HSC ARTS STREAM [Qurg2LQKauc].mkv": {
    fileName: "12th Pol.science｜Chp：-04｜ONE SHOT｜ 'Challenges to Peace, stability & Integration｜ HSC ARTS STREAM [Qurg2LQKauc].mkv",
    fileId: "13H-AcQ3CNjg00okkqPAs4EH33lpX2WF7",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.Science｜ Chp：-05 'Comtemporary India： Good Governance｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [OzhQQSepk74].mkv": {
    fileName: "12th Pol.Science｜ Chp：-05 'Comtemporary India： Good Governance｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [OzhQQSepk74].mkv",
    fileId: "1jcJUV0GdLK3jyIiE0-7rxQz2Ye3aAYnN",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.Science｜ Chp：-03 ' Contemporary India： Good Governance｜ PART 02｜ HSC ARTS STREAM｜ HSC Exam [CcUXe0kyKlY].mkv": {
    fileName: "12th Pol.Science｜ Chp：-03 ' Contemporary India： Good Governance｜ PART 02｜ HSC ARTS STREAM｜ HSC Exam [CcUXe0kyKlY].mkv",
    fileId: "10Tppm22zvmX53gsLZAgS73WVfRpzauVw",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.Science｜ Chp：-05 'Comtemporary India： Good Governance｜ PART 03｜ HSC ARTS STREAM｜ HSC Exam [FjJMbxgqOo0].mkv": {
    fileName: "12th Pol.Science｜ Chp：-05 'Comtemporary India： Good Governance｜ PART 03｜ HSC ARTS STREAM｜ HSC Exam [FjJMbxgqOo0].mkv",
    fileId: "1xfpQcG5wM8ZW7p7Ll3zACI7ItsYuY1rH",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th pol.Science｜ Chp：-05 'Comtemporary India Good Governance｜ PART 04｜ HSC ARTS STREAM｜ HSC Exam [1CxYUjLe_QM].mkv": {
    fileName: "12th pol.Science｜ Chp：-05 'Comtemporary India Good Governance｜ PART 04｜ HSC ARTS STREAM｜ HSC Exam [1CxYUjLe_QM].mkv",
    fileId: "1XMPCui5BQzHeG_uL929zpCBe_Flba3IL",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th pol.science｜ Chp：-05 'Comtemporary India Good Governance｜ PART 05｜ HSC ARTS STREAM｜ HSC Exam [OQG8MbEiZe0].mkv": {
    fileName: "12th pol.science｜ Chp：-05 'Comtemporary India Good Governance｜ PART 05｜ HSC ARTS STREAM｜ HSC Exam [OQG8MbEiZe0].mkv",
    fileId: "1sb_4rQcY1GUzjXHWsBdr52tRugV1FDsj",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.Science｜ Chp：-06 ' India & World｜ PART 01｜ HSC ARTS STREAM｜ HSC EXAM [NLKI_fCooFs].mkv": {
    fileName: "12th Pol.Science｜ Chp：-06 ' India & World｜ PART 01｜ HSC ARTS STREAM｜ HSC EXAM [NLKI_fCooFs].mkv",
    fileId: "1rrBZaZ_PYZ_B7ZQBPUk-jZH19K5tSrwv",
    streamUrl: "",
    downloadUrl: "",
  },
  "12th Pol.Science｜ Chp：-06 'India and The World｜ PART 02 ｜ HSC ARTS STREAM｜ HSC Exam [XzD4Pzm0QBQ].mkv": {
    fileName: "12th Pol.Science｜ Chp：-06 'India and The World｜ PART 02 ｜ HSC ARTS STREAM｜ HSC Exam [XzD4Pzm0QBQ].mkv",
    fileId: "1xgUjIeM5TsVi2gKf-_NPvvtp5PG1xxLb",
    streamUrl: "",
    downloadUrl: "",
  },
};

// Helper function to get video data from Google Drive
export function getGoogleDriveVideo(fileName: string): GoogleDriveVideo | null {
  const video = googleDriveVideos[fileName];
  if (!video || video.fileId === "YOUR_FILE_ID_HERE" || video.fileId.startsWith("YOUR_FILE_ID_HERE")) {
    return null;
  }

  return {
    ...video,
    streamUrl: getGoogleDriveDirectUrl(video.fileId),
    downloadUrl: getGoogleDriveDownloadUrl(video.fileId),
  };
}

// Function to check if Google Drive integration is enabled
export function isGoogleDriveEnabled(): boolean {
  // Check if at least one video has a real file ID
  return Object.values(googleDriveVideos).some(
    video => video.fileId && !video.fileId.startsWith("YOUR_FILE_ID_HERE")
  );
}