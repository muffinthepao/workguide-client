#Workguide
Navigating through work can be tough.
Don't go at it alone. Get a local guide.
___
App URL: https://main--workguide.netlify.app/
___
A site that aims to solve 3 problems
- Fresh Grads / Fresh Hires get their burning questions about work answered through video answers
- There is a shortage of career guides/mentors and those that do get a slot, ask the same questions 80% of the time (Pareto Principle). This app aims to free up the guides/mentors' time by recording their answer once and uploading it onto the site. Now guides/mentors are able to use their valuable time for the 20% type of questions
- Guides/Mentors are great during face-2-face interactions but might be stiff when recording themselves. Hence created a video booth workflow where an answer is broken down into its relevant parts, you record each part - with as many retakes as you want, submit and the app merges the video parts for you
___
##Main Functionality
1) Question Page - view top questions about Work from SGWork Subreddit
![login-page](./README%20Images/QuestionPage.png)

2) Ask Page - Ask your burning questions about work.
![login-page](./README%20Images/AskPage.png)

3) Submit Answer Page - Answer questions in a variety of ways.
![login-page](./README%20Images/SubmitAnswer.png)

4) Guided Video Booth - Not confident in front of the camera? The Guided Video Booth is here to help!

- In this example we will follow the 3S way of formulating an answer

- Video explainer of the first S - . You can type your notes for how to record this video part
![login-page](./README%20Images/VideoBooth1.png)

- Record yourself or go back to explainer. Your notes still persist.
![login-page](./README%20Images/VideoBooth2.png) 
![login-page](./README%20Images/VideoBooth3.png)

- After each take you can choose to Go Back to Explainer, Retake or Proceed to next part.
![login-page](./README%20Images/VideoBooth4.png)

- Having gone through all the video parts, you can choose to start from the beginning or submit!
![login-page](./README%20Images/VideoBooth5.png)
- Upon successful submission, you'll be able to see your answer on the question page
![login-page](./README%20Images/VideoBooth6.png)
___
##Stack
![login-page](./README%20Images/PERN.png)
___
##Dependencies / Libraries
- axios
- bcrypt
- fontawesome
- imagekit
- joi
- jwt / jwt-decode
- multer
- react-dropzone
- react-hook-form
- react-toastify
- react-webcam
- sequelize
- shotstack
- tailwindcss
___
##Routes

| ROUTE  | URL                                                     |
|--------|---------------------------------------------------------|
| GET    | /categories                                             |
| GET    | /questions                                              |
| GET    | /questions/:questionId                                  |
| POST   | /questions                                              |
| PUT    | /questions/:questionId                                  |
| DEL    | /questions/:questionId                                  |
| GET    | /questions/:questionId/answers                          |
| POST   | /questions/:questionId/answers/process-multi            |
| POST   | /questions/shortstack-callback                          |
| DEL    | /questions/:questionId/answers/:answersId/process-multi |
| POST   | /questions/:questionId/answers/url-insertion            |
| PATCH  | /questions/:questionId/answers/:answerId/url-insertion  |
| DELETE | /questions/:questionId/answers/:answerId/url-insertion  |
___
Learning Challenges
- The main concept of the app - video recording and combining the video parts into one video. Tried it on vanillaJS first then on react.
- Depending on which Sequelize method you use, the response can vary
- If you use `.findByPk()` if record is not present, it will return NULL
- If you use `.findAll()` without WHERE parameter, it returns an OBJECT
- If you use `.findAll()` with WHERE parameter, it returns an ARRAY and further wrapped in a "dataValues" OBJECT
- The different functions of Sequelize
- Seeding data using the built in seeding functions
- Using sequelize
- Must be an array in the seed file
- VreatedAt and UpdatedAt cannot be null. You have to see the date to `new Date()`
- Managed to utilize `useContext()` hook
- Multer + MultiForm Upload + wait for callback from Shotstack (video merger)
- Thinking about UX and allowing for users to submit video answers multiple ways - URL, file upload, videoBooth
- Drag and Drop zone for video file upload
- Using React Hook Form on 2 separate forms that are present on the same page
___
## Still to be solved
- How does the app handle duplicate questions?
- Currently retakes are only available at each part. But user should have the flexibility to review their recorded parts at any time and go to the specific part to retake before submitting.
- Maybe a [Blob database](https://azure.microsoft.com/en-gb/products/storage/blobs/?&ef_id=CjwKCAjw8JKbBhBYEiwAs3sxN3dnObSXFjqeAK3FBYWWvLyqsi_TVXSsWmOqP8iDdoRaw-nHZlI5yxoCj_oQAvD_BwE:G:s&OCID=AIDcmm9uk3nhei_SEM_CjwKCAjw8JKbBhBYEiwAs3sxN3dnObSXFjqeAK3FBYWWvLyqsi_TVXSsWmOqP8iDdoRaw-nHZlI5yxoCj_oQAvD_BwE:G:s&gclid=CjwKCAjw8JKbBhBYEiwAs3sxN3dnObSXFjqeAK3FBYWWvLyqsi_TVXSsWmOqP8iDdoRaw-nHZlI5yxoCj_oQAvD_BwE) can be implemented for videobooth drafts. So users can record at their own pace and dont have to sit through all the parts in one go.
- Should users be able to get in touch with answer givers?
- Since the video parts are stored on browser cache, and my demos are all less than 30secs each. We might face an issue when each video part is a max of 1min. Not sure whether chrome will crash
- Give users the opportunity to view a preview of all video parts at the end before submission.
- currently there are many points of failure for the video booth ask I am using 2 video processing apis with ExpressJs as the server between the Client, ImageKit, and Shotstack. I can lose connectivity to each of those at any point. And the video creation will be unsuccessful
- 
___
##Points to improve
- Created wireframes for Project 3 but not for this project. Felt myself wasting time refining the design as I was coding along. Sometimes I got confused on what I wanted or what I was doing.

