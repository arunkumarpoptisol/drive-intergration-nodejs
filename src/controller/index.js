const { OAuth2Client } = require("google-auth-library");
const express = require("express");
const app = express();
const OAuth2Client = new OAuth2Client(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  REDIRECT_URL
);

async function GetRefreshToken(token) {
  let refreshToken = await oAuth2Client.getToken(token);
  return refreshToken;
}

async function ListAll(data, refresh_token) {
  let result = {};
  result.classroooms = await classroom.courses.list({
    auth: oAuth2Client,
  });
  result.course = await classroom.courses.get({
    auth: oAuth2Client,
    id: data.id,
  });
  result.teacher = await classroom.courses.teachers.list({
    auth: oAuth2Client,
    courseId: data.id,
  });
  result.student = await classroom.courses.students.list({
    auth: oAuth2Client,
    courseId: data.id,
  });
  result.coursework = await classroom.courses.courseWork.list({
    auth: oAuth2Client,
    courseId: data.id,
  });
  res.send(result);
}

async function DeleteEvent(data, refresh_token) {
  return await calendar.events.delete({
    auth: OAuth2Client,
    calendarId: "primary",
    // Event identifier.
    eventId: data.id,
  });
}
module.exports = {
  GetRefreshToken,
  ListAll
};
