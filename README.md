# Examate

Examate is a webapp designed to help students learn and master various subjects through various different study modes.

## Key Features

### Study Modes

Examate features the following two study modes:
- Flashcard Mode
- Exam Mode

These two modes offer the most variety in terms of studying methods. A lot of students already use flashcards to learn vocabulary and definition and the exam mode simulates how the real deal will be. For these reasons, Examate wanted emphasise these modes.

In a future update, Examate will introduce two new modes:
- Plenary Mode
- Racing Mode

These two modes will help students learn the material in a fun and more relaxed way. By also introducing these two modes, teachers can implement small sessions to help students to become proficient in the topic of their choice.

### Platforms

Examate is currently functional on Mac and Windows PCs. In a future update, Examate will publish an iOS and Android app with React Native to make Examate accessible on the go.

### Subjects

Currently, Examate features only one subject, that subject being math. Statistics have shown that a majority of students struggle with math. This is why Examate emphasises math. In a future update, Examate will introduce the following new subjects:
- Chemistry
- Physics
- Music
- Computer Science

### Explanations

Examate offers a step-by-step guide in its exam mode for every exercise to help students, who do not quite understand how Examate got its answer.

### Price

Examate currently offers all of the mentioned features free of charge, while it's in its alpha phase. 

## How to make your own learn sets

**Prerequisites**: To make your own sets, one must have Node.js, NPM, and Visual Studio Code installed.
1.	Download the source code. This is done via the green "Code" button and then the "Download ZIP" option.
2.	Once the ZIP file has been downloaded, extract the ZIP file.
3.	Open Visual Studio Code. As soon as VS code has opened, select the "File" option in the upper left-hand corner and then the "Open Folder" option.
4.	Navigate through the downloaded folder (examate-master) to the second examate-master folder and open it.
5.	Navigate to the package-lock.json file and delete it as soon as the folder has opened.
6.	After deleting the package-lock.json file, select the "Terminal" option and then choose "New Terminal."
7.	In this new terminal, run the command npm install. This installs the necessary de-pendencies for Examate to work.
8.	Examate provides four templates, Template1, Template2, Template3, and Templa-te4. To add your desired equations, one must navigate to the "equations" folder. In this folder, it has three different types of JSON files. One is called "previewtempla-teX.json", one "templateX.json", and one "templateXexam.json". The "previewtemp-lateX.json" file is used for the preview flashcard on the mode selection page, the "templateX.json" file is used for the flashcard mode and on the mode selection page, and the "templateXexam.json" file is used for the exam mode. These files must be formatted the same way as the other JSON files of the other sets. For a reference on how they must be formatted, use the other sets' JSON files or the inclosed example. For a guide on how to format ASCIIMath, please visit: http://asciimath.org/
9.	Save the JSON files.
10.	To start Examate run the command npm start. The sets are accessible under the following URLs:
    - localhost:3000/math/template1
    - localhost:3000/math/template2
    - localhost:3000/math/template3
    - localhost:3000/math/template4
11.	Now Examate is useable with your own sets.

## Patch Notes

- v. 0.6.1 Fixed render issue.
- v. 0.6.0 Final equations and release.
- v. 0.5.2 Final bugfixes fixed.
- v. 0.5.1 Implemented the exam mode.
- v. 0.5.0 Implemented the framework of the exam mode.
- v. 0.4.1 Flashcard mode is finished. 
- v. 0.4.0 Implemented the framework of the flashcard mode and pages for the individual topics.
- v. 0.3.1 Final touch ups to the home page and the math topic selection page.
- v. 0.3.0 Implemented the home page and the math topic selection page.
- v. 0.2.1 Added CSS to the framework
- v. 0.2.0 The framework of the app is up and running (Header, Body, Footer).
- v. 0.1.0 Project Examate has been created.

## Resources

Examate uses the following resources:
- react
- react-router-dom
- antd
- better-react-mathjax
