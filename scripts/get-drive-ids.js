// Helper script to extract Google Drive file IDs from your shared folder
// 
// TO USE THIS SCRIPT:
// 1. Go to your Google Drive folder: https://drive.google.com/drive/folders/1ubXhEmU84j8N_3tjO4cWfk8tqF5p2bU0?usp=drive_link
// 2. For each video file, right-click and select "Get link"
// 3. The link will look like: https://drive.google.com/file/d/FILE_ID_HERE/view?usp=drive_link
// 4. Copy the FILE_ID_HERE part and paste it below

const videoFileIds = {
  // Chapter 1: World Since 1991
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 01｜ HSC ARTS STREAM [TFFi8aaIfdA].mkv": "",
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 02｜ Towards｜ Unipolarity｜ HSC ARTS STREAM [io6JND19kbY].mkv": "",
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 04｜｜ HSC ARTS STREAM｜ HSC Exam [DyQ6eoHVXow].mkv": "",
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 05｜｜ HSC ARTS STREAM｜ HSC Exam [1_-yLD7DNoI].mkv": "",
  "12th Pol. Science｜ Chp：-01 'World Since 1991｜ Full Exercise Solution｜PART 06｜HSC ARTS STREAM [y59tcIx_4DA].mkv": "",

  // Chapter 2: Globalization
  "12th Pol. Science｜ Chp：-02 'Globalisation｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [qGth0gOgIIY].mkv": "",
  "12th Pol.Science｜ Chp：-02 'Globalization｜ PART 06｜ HSC ARTS STREAM｜ HSC Exam [iyJ1dbJ9doA].mkv": "",

  // Chapter 3: Humanitarian Issues
  "12th Pol.Science｜ Chp：-03｜ Humanitarian Issues｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [jcgRuy16KqM].mkv": "",
  "12th Pol.Science｜ Chp：-03 'Humanitarian Issues ｜ PART 02｜ HSC ARTS STREAM ｜ HSC Exam [LaWVaR1PuK0].mkv": "",
  "12th Pol.Science｜ Chp：-03 ' Humanitarian Issues｜ PART 03｜ HSC ARTS STREAM｜ HSC Exam [69afqeeo7hs].mkv": "",
  "12th Pol.Science｜ Chp：-03 'Humanitarian Issues｜ PART 04｜ HSC ARTS STREAM｜ HSC Exam [EW_skgOb6d8].mkv": "",
  "12th Pol.Science｜ Chp：-03 ' Humanitarian Issues｜ PART 05｜ HSC ARTS STREAM｜ HSC Exam [EVSiUlB3oPs].mkv": "",
  "12th Pol.Science ｜ Chp：-03 ' Humanitarian Issues｜ PART 06｜HSC ARTS STREAM｜ HSC Exam [a0gPdnJ-_ac].mkv": "",

  // Chapter 5: Contemporary India Good Governance
  "12th Pol.Science｜ Chp：-03 ' Contemporary India： Good Governance｜ PART 02｜ HSC ARTS STREAM｜ HSC Exam [CcUXe0kyKlY].mkv": "",
  "12th pol.Science｜ Chp：-05 'Comtemporary India Good Governance｜ PART 04｜ HSC ARTS STREAM｜ HSC Exam [1CxYUjLe_QM].mkv": "",
  "12th pol.science｜ Chp：-05 'Comtemporary India Good Governance｜ PART 05｜ HSC ARTS STREAM｜ HSC Exam [OQG8MbEiZe0].mkv": "",

  // Chapter 6: India and The World
  "12th Pol. Science｜ Chp：-06 'India and The World｜ PART 04｜ HSC ARTS STREAM｜ HSC Exam [MzHXd7nJzLs].mkv": "",
};

// Function to generate the TypeScript object for google-drive-videos.ts
function generateGoogleDriveMapping() {
  let output = "export const googleDriveVideos: Record<string, GoogleDriveVideo> = {\n";
  
  for (const [fileName, fileId] of Object.entries(videoFileIds)) {
    if (fileId) {
      output += `  "${fileName}": {\n`;
      output += `    fileName: "${fileName}",\n`;
      output += `    fileId: "${fileId}",\n`;
      output += `    streamUrl: "",\n`;
      output += `    downloadUrl: "",\n`;
      output += `  },\n`;
    }
  }
  
  output += "};\n";
  return output;
}

// Instructions for user
console.log(`
🔧 GOOGLE DRIVE INTEGRATION SETUP

To connect your Google Drive videos to the app:

1. Open your Google Drive folder:
   https://drive.google.com/drive/folders/1ubXhEmU84j8N_3tjO4cWfk8tqF5p2bU0?usp=drive_link

2. For EACH video file:
   a) Right-click on the video
   b) Select "Get link" or "Share"
   c) Copy the link (it looks like: https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing)
   d) Extract the FILE_ID_HERE part

3. Replace the empty strings in this file with the actual file IDs

4. Run this script to generate the mapping:
   node scripts/get-drive-ids.js

Example file ID from a Google Drive link:
https://drive.google.com/file/d/1BxVs7Qr8p9XsJ2K4Nm6Lw3Yz5Tb8Qp1A/view?usp=sharing
                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                  This is the FILE ID you need

⚠️  IMPORTANT: 
- Make sure your Google Drive folder is set to "Anyone with the link can view"
- The file IDs are case-sensitive
- Each video must have its individual file ID, not the folder ID
`);

// If file IDs are populated, generate the mapping
const hasFileIds = Object.values(videoFileIds).some(id => id !== "");
if (hasFileIds) {
  console.log("\n📋 Generated TypeScript mapping:");
  console.log(generateGoogleDriveMapping());
} else {
  console.log("\n⏳ Add your file IDs above and run this script again to generate the mapping.");
}