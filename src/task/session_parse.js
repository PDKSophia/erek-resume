// 读取数据
const SessionAuth = {
    
    initGetter () {
        var user = JSON.parse(sessionStorage.getItem('SessionUser'))
        var a = {
            School : '',
            Academy : '',
            Major : '',
            Job : '',
            Avatar : '',
            UserName : '',
            Area : '',
            Email : '',
            Phone : '',
            EnrolmentTime : '',
            GraduationTime : '',
            JobAddress : '',
            Certificate : '',
            Github : '',
            Blog : '',
            Hobby : '',
            Skill : '',
            Experience :[],
            Evaluation : ''
        }

        a.School = user.School
        a.Academy = user.Academy
        a.Major = user.Major
        a.Job = user.Job
        a.Avatar = user.Avatar
        a.UserName = user.UserName
        a.Area = user.Area
        a.Email = user.Email
        a.Phone = user.Phone
        a.EnrolmentTime = user.EnrolmentTime
        a.GraduationTime = user.GraduationTime
        a.JobAddress = user.JobAddress
        a.Certificate = user.Certificate
        a.Github = user.Github
        a.Blog = user.Blog
        a.Hobby = user.Hobby
        a.Skill = user.Skill
        a.Experience = user.Experience
        a.Evaluation = user.Evaluation

        return a;
    }
}

export default SessionAuth;