const submission = [
  { name: "Jane", score: 95, passed: true },
  { name: "joe", score: 77, passed: true },
  { name: "jack", score: 59, passed: false },
  { name: "jill", score: 88, passed: true },
];

function addSubmission(array, newName, newScore) {
  const newSub = { name: newName, score: newScore };
  let passed;
  if (newScore > 60) passed = true;
  else passed = false;
  // console.log(newSub);
  newSub.passed = passed;
  // console.log(newSub);
  array.push(newSub);
}

addSubmission(submission, "alex", 75);
console.log(submission);

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

deleteSubmissionByIndex(submission, 3);
// console.log(submission);

function deleteSubmissionByName(array, name) {
  const deleteIndex = array.findIndex((elem) => elem.name === name);
  array.splice(deleteIndex, 1);
}

deleteSubmissionByName(submission, "joe");
// console.log(submission);

function editSubmission(array, index, score) {
  array[index].score = score;
  // let passed;
  // if (newScore > 60) passed = true;
  // else passed = false;
  const passingScore = score > 60 ? true : false;
  array[index].passed = passingScore;
}

editSubmission(submission, 0, 59);
// console.log(submission);

function findSubmissionByName(array, name) {
  const foundName = array.find((elem) => elem.name === name);
  return foundName;
}
// console.log(findSubmissionByName(submission, "jack"));

function findLowestScore(array) {
  array.sort(function (a, b) {
    return a.score - b.score;
  });

  return array[0].score;
}

const lowestScore = findLowestScore(submission);
// console.log(lowestScore);

function findAverageScore(array) {
  let totalScore = 0;
  for (const item of array) {
    totalScore += item.score;
  }

  return totalScore / array.length;
}

const averageScore = findAverageScore(submission);
// console.log(averageScore);

function filterPassing(array) {
  return array.filter((item) => item.passed === true);
}

const passingScores = filterPassing(submission);
// console.log(passingScores);
// not working

function filterAbove90AndAbove(array) {
  return array.filter((item) => item.score > 90);
}

const above90Scores = filterAbove90AndAbove(submission);
//console.log(above90Scores);
//not working
