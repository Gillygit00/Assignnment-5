//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
// TO DO - Write higher order functions / There are many solutions

//Declare cLastNameResults.  Use functions and map a new array of objects



cLastNameResults = studentList.filter((studentLi) => studentLi.lastName.startsWith("C")).map(studentLi=> ({ ...studentLi, minScore: studentLi.scores.reduce(function (p, v) {

    return ( p < v ? p : v );
    
    }),
    
    maxScore:studentLi.scores.reduce(function (p, v) {
    
    return ( p > v ? p : v );
    
    }),
    
    avgScore:studentLi.scores.reduce((a, b) => (a + b))/studentLi.scores.length }));
    
    console.log(cLastNameResults);
