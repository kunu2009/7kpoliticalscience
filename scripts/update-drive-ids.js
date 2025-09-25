// Quick bulk update for Google Drive file IDs
// 
// INSTRUCTIONS:
// 1. Go to: https://drive.google.com/drive/folders/1lHRSwUblrj1gF2-FahaxMcC8K8QdCqNs?usp=drive_link
// 2. For each video, right-click → "Get link" 
// 3. Copy the file ID (the part between /d/ and /view)
// 4. Paste the file IDs below in the same order as your videos appear in Google Drive
// 5. Run: node scripts/update-drive-ids.js

const fileIds = [
  // Extracted from your Google Drive links:
  "1Hq-cd3EvUtBYLkMEG65RFPUXVagQDVP3",
  "1Xmbups9SslDPHQUaqQoQXfxlurTFbnXy",
  "1NvSQlEIwMCZZSejRij0yN_fVnayfwyIZ",
  "1UvJy6HZAAdmtGxR-tYWB1hWI8ZuStFrB",
  "1uBvcH-e3rOvjsszodxBpiGIdhOeZntEf",
  "1lWO7ajfwRV_SHgUHXJxKGex_CuQ7yj9s",
  "1nAcohF1Y32dJNS1vZptMNx1yov-1yUbi",
  "1OYWEqac518A5nMUS0FfhZaH_meVou5n2",
  "1BHZkUDrlOeBVZsHh9EhAjCOend9hpcUJ",
  "1_kVKPr4n7i03J-O6Vo0t6LctRpGsCxiP",
  "1dO06IF_l0H2wWLDVrGflUkY0DFstXuET",
  "1yW9N0CDHBUIPu_8sU5d0MvWPAxVPx1wF",
  "1XRsuuRtRfll0C9C91joSv718cXhPnCFJ",
  "13H-AcQ3CNjg00okkqPAs4EH33lpX2WF7",
  "1jcJUV0GdLK3jyIiE0-7rxQz2Ye3aAYnN",
  "10Tppm22zvmX53gsLZAgS73WVfRpzauVw",
  "1xfpQcG5wM8ZW7p7Ll3zACI7ItsYuY1rH",
  "1XMPCui5BQzHeG_uL929zpCBe_Flba3IL",
  "1sb_4rQcY1GUzjXHWsBdr52tRugV1FDsj",
  "1rrBZaZ_PYZ_B7ZQBPUk-jZH19K5tSrwv",
  "1xgUjIeM5TsVi2gKf-_NPvvtp5PG1xxLb",
  "1sLHE8NxwECQBGeLRp-bP1Qy8-SXDwYS8",
  "13xMql948wUJ5Y7z-ZFU8fgOB2KLLesQd",
  "1KkEM7MeSKIV9BjC-8LwiRldg-NPxP_W7"
];

const videoFileNames = [
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 01｜ HSC ARTS STREAM [TFFi8aaIfdA].mkv",
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 02｜ Towards｜ Unipolarity｜ HSC ARTS STREAM [io6JND19kbY].mkv",
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 04｜｜ HSC ARTS STREAM｜ HSC Exam [DyQ6eoHVXow].mkv",
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 05｜｜ HSC ARTS STREAM｜ HSC Exam [1_-yLD7DNoI].mkv",
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ Full Exercise Solution｜PART 06｜HSC ARTS STREAM [y59tcIx_4DA].mkv",
  "12th Pol. Science｜ Chp：-02 'Globalisation｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [qGth0gOgIIY].mkv",
  "12th Pol.Science｜ Chp：-02 'Globalization｜ PART 06｜ HSC ARTS STREAM｜ HSC Exam [iyJ1dbJ9doA].mkv",
  "12th Pol.Science｜ Chp：-03｜ Humanitarian Issues｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [jcgRuy16KqM].mkv",
  "12th Pol.Science｜ Chp：-03 'Humanitarian Issues ｜ PART 02｜ HSC ARTS STREAM ｜ HSC Exam [LaWVaR1PuK0].mkv",
  "12th Pol.Science｜ Chp：-03 ' Humanitarian Issues｜ PART 03｜ HSC ARTS STREAM｜ HSC Exam [69afqeeo7hs].mkv",
  "12th Pol.Science｜ Chp：-03 'Humanitarian Issues｜ PART 04｜ HSC ARTS STREAM｜ HSC Exam [EW_skgOb6d8].mkv",
  "12th Pol.Science｜ Chp：-03 ' Humanitarian Issues｜ PART 05｜ HSC ARTS STREAM｜ HSC Exam [EVSiUlB3oPs].mkv",
  "12th Pol.Science ｜ Chp：-03 ' Humanitarian Issues｜ PART 06｜HSC ARTS STREAM｜ HSC Exam [a0gPdnJ-_ac].mkv",
  "12th Pol.science｜Chp：-04｜ONE SHOT｜ 'Challenges to Peace, stability & Integration｜ HSC ARTS STREAM [Qurg2LQKauc].mkv",
  "12th Pol.Science｜ Chp：-05 'Comtemporary India： Good Governance｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [OzhQQSepk74].mkv",
  "12th Pol.Science｜ Chp：-03 ' Contemporary India： Good Governance｜ PART 02｜ HSC ARTS STREAM｜ HSC Exam [CcUXe0kyKlY].mkv",
  "12th Pol.Science｜ Chp：-05 'Comtemporary India： Good Governance｜ PART 03｜ HSC ARTS STREAM｜ HSC Exam [FjJMbxgqOo0].mkv",
  "12th pol.Science｜ Chp：-05 'Comtemporary India Good Governance｜ PART 04｜ HSC ARTS STREAM｜ HSC Exam [1CxYUjLe_QM].mkv",
  "12th pol.science｜ Chp：-05 'Comtemporary India Good Governance｜ PART 05｜ HSC ARTS STREAM｜ HSC Exam [OQG8MbEiZe0].mkv",
  "12th Pol.Science｜ Chp：-06 ' India & World｜ PART 01｜ HSC ARTS STREAM｜ HSC EXAM [NLKI_fCooFs].mkv",
  "12th Pol.Science｜ Chp：-06 'India and The World｜ PART 02 ｜ HSC ARTS STREAM｜ HSC Exam [XzD4Pzm0QBQ].mkv",
];

// Function to generate the updated google-drive-videos.ts content
function generateUpdatedFile() {
  console.log(`📊 You provided ${fileIds.length} file IDs`);
  console.log(`📊 App expects ${videoFileNames.length} videos`);
  
  if (fileIds.length === 0) {
    console.log("❌ No file IDs provided! Please add your file IDs to the fileIds array above.");
    return;
  }

  // Use the minimum of the two arrays to avoid errors
  const videosToProcess = Math.min(fileIds.length, videoFileNames.length);
  console.log(`✅ Processing first ${videosToProcess} videos...\n`);

  let output = `// Google Drive video configuration for 7K Political Science
// Shared folder: https://drive.google.com/drive/folders/1lHRSwUblrj1gF2-FahaxMcC8K8QdCqNs?usp=drive_link

export interface GoogleDriveVideo {
  fileName: string;
  fileId: string;
  streamUrl: string;
  downloadUrl: string;
}

// Helper function to convert Google Drive file ID to streaming URL
export function getGoogleDriveStreamUrl(fileId: string): string {
  return \`https://drive.google.com/file/d/\${fileId}/preview\`;
}

// Helper function to convert Google Drive file ID to download URL
export function getGoogleDriveDownloadUrl(fileId: string): string {
  return \`https://drive.google.com/uc?export=download&id=\${fileId}\`;
}

// Helper function to get direct video streaming URL (for video element)
export function getGoogleDriveDirectUrl(fileId: string): string {
  return \`https://drive.google.com/uc?export=view&id=\${fileId}\`;
}

// Google Drive video mapping - AUTO-GENERATED
export const googleDriveVideos: Record<string, GoogleDriveVideo> = {
`;

  for (let i = 0; i < videosToProcess; i++) {
    output += `  "${videoFileNames[i]}": {
    fileName: "${videoFileNames[i]}",
    fileId: "${fileIds[i]}",
    streamUrl: "",
    downloadUrl: "",
  },
`;
  }

  // Add any remaining videos with placeholder IDs
  for (let i = videosToProcess; i < videoFileNames.length; i++) {
    output += `  "${videoFileNames[i]}": {
    fileName: "${videoFileNames[i]}",
    fileId: "YOUR_FILE_ID_HERE_${i + 1}",
    streamUrl: "",
    downloadUrl: "",
  },
`;
  }

  output += `};

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
}`;

  console.log("📝 Copy this content and replace your src/lib/google-drive-videos.ts file:");
  console.log("=" + "=".repeat(80));
  console.log(output);
  console.log("=" + "=".repeat(80));
  console.log(`\n✅ Successfully mapped ${videosToProcess} videos!`);
  
  if (fileIds.length > videoFileNames.length) {
    console.log(`\n⚠️  You have ${fileIds.length - videoFileNames.length} extra file IDs. These might be additional videos not in the app yet.`);
    console.log("Extra file IDs:");
    for (let i = videoFileNames.length; i < fileIds.length; i++) {
      console.log(`  ${i + 1}. ${fileIds[i]}`);
    }
  }
}

// Run the generator
generateUpdatedFile();