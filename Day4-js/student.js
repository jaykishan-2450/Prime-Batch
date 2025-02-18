const getData = () => {
    const name = prompt("Enter your name");
    alert(`Hello ${name}`); 
    const numOfSub = parseInt(prompt("Enter number of subjects"));
    return numOfSub;
};

const getSubjects = (num) => {
    let record = {};
    for (let i = 0; i < num; i++) {
        const subName = (prompt(`Enter subject name ${i + 1}`));
        const subMarks = parseInt(prompt(`Enter marks of ${subName}`));
        record[subName] = subMarks;
    }
    console.log(record);
    return record;
};

const getPercentage = (record) => {
    let sum = 0;

    //alternate method
    // cosnt marks=Object.values(record)
    // marks.forEach((ele)=>{
    //    sum+=ele;
    //  });
    for (let i in record) {
        // console.log(i)
        sum += record[i];
    }
    let percentage = sum / Object.keys(record).length;
    console.log(`sum is ${sum} percentage is : ${percentage}`)
    return percentage;
}

const getGrades=(percentage)=>{
    const grades=[
        [60,"B"],
        [70,"B+"],
        [80,"A"],
        [90,"A+"]
    ]
    let grade="F";

    const idx=grades.findIndex((arr)=>{
        if(arr[0]>percentage){
            return true;
        }
        return false;
    });

    if(idx==-1) grade="A+";
    else if(idx==0) grade="F";
    else grade=grades[idx-1][1]

    //ALTERNATE METHOD
    // grades.forEach((arr)=>{
    //     if(arr[0]<=percentage){
    //         grade=arr[1];
    //     }

    // });
    console.log(grade);
    return grade;
}

const getHighestScoringSubject=(obj)=>{
    let maxScore=0;
    let  maxScoresub="";
    for (let i in obj){
        if(obj[i]>maxScore){
            maxScore=obj[i];
            maxScoresub=i;
        }
    }
    console.log(`Maximum score is ${maxScore} in ${maxScoresub}`);

}

// const num = getData();
// const record = getSubjects(num);
const record={
    "Hindi":90,
    "English":93,
    "Math":30
}
const percentage = getPercentage(record);
const grade=getGrades(percentage);
const highestMarksSub=getHighestScoringSubject(record);
// console.log(grades)