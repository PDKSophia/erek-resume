// 读取数据
const SessionAuth = {
    initGetter () {
        var user = JSON.parse(sessionStorage.getItem('SessionUser'))
        var Y_Auth = {
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
            Certificate : [],
            Github : '',
            Blog : '',
            Hobby : '',
            Skill : [],
            Experience :[],
            WorkExper : [],
            // ExperienceSolve : [],   // 项目经验的问题解决
            Evaluation : []         // 自我评价
        }
        Y_Auth.School = user.School
        Y_Auth.Academy = user.Academy
        Y_Auth.Major = user.Major
        Y_Auth.Job = user.Job
        Y_Auth.Avatar = user.Avatar
        Y_Auth.UserName = user.UserName
        Y_Auth.Area = user.Area
        Y_Auth.Email = user.Email
        Y_Auth.Phone = user.Phone
        // 时间处理
        Y_Auth.EnrolmentTime = (user.EnrolmentTime).substring(0, 7)
        Y_Auth.GraduationTime = (user.GraduationTime).substring(0, 7)


        Y_Auth.JobAddress = user.JobAddress
        Y_Auth.Github = user.Github
        Y_Auth.Blog = user.Blog
        Y_Auth.Hobby = user.Hobby
        Y_Auth.Experience = user.Experience
        Y_Auth.WorkExper = user.WorkExper

        // 对证书处理
        let positionsCer = this.SearchSubstr(user.Certificate, '|')
        positionsCer.unshift(0)
        
        for(let i = 0; i < positionsCer.length; i++){
            Y_Auth.Certificate.push({
                'cer' : (user.Certificate).substr(positionsCer[i], positionsCer[i+1] - positionsCer[i])
            })
        }
        for(let j = 0; j < Y_Auth.Certificate.length; j++){
            let str = Y_Auth.Certificate[j].cer
            Y_Auth.Certificate[j].cer = str.replace("|"," ")
        }

        // 对项目经验处理
        for(let p = 0; p < user.Experience.length; p++)
        {
            // 时间处理
            Y_Auth.Experience[p].StartTime = (user.Experience[p].StartTime).substring(0, 7)
            Y_Auth.Experience[p].EndTime = (user.Experience[p].EndTime).substring(0, 7)
            let positionsArray = this.SearchSubstr(user.Experience[p].projectSolve, '}')
            positionsArray.unshift(0)
            Y_Auth.Experience[p]['solveAnswer'] = new Array()
            for(let i = 0; i < positionsArray.length-1; i++)
            {
                Y_Auth.Experience[p].solveAnswer.push({
                    'solve' : (user.Experience[p].projectSolve).substr(positionsArray[i], positionsArray[i+1] - positionsArray[i])
                })
            }
            for(let j = 0; j < Y_Auth.Experience[p].solveAnswer.length; j++)
            {
                let str = Y_Auth.Experience[p].solveAnswer[j].solve
                let regx_str1 = str.replace("{"," ")
                Y_Auth.Experience[p].solveAnswer[j].solve = regx_str1.replace("}"," ")
            }
        }

        // 对工作经验处理
        for(let p = 0; p < user.WorkExper.length; p++)
        {
            // 时间处理
            Y_Auth.WorkExper[p].StartTime = (user.WorkExper[p].StartTime).substring(0, 7)
            Y_Auth.WorkExper[p].EndTime = (user.WorkExper[p].EndTime).substring(0, 7)
            let positionsArray = this.SearchSubstr(user.WorkExper[p].workContent, '}')
            positionsArray.unshift(0)
            Y_Auth.WorkExper[p]['contentItem'] = new Array()
            for(let i = 0; i < positionsArray.length-1; i++)
            {
                Y_Auth.WorkExper[p].contentItem.push({
                    'content' : (user.WorkExper[p].workContent).substr(positionsArray[i], positionsArray[i+1] - positionsArray[i])
                })
            }
            for(let j = 0; j < Y_Auth.WorkExper[p].contentItem.length; j++)
            {
                let str = Y_Auth.WorkExper[p].contentItem[j].content
                let regx_str1 = str.replace("{"," ")
                Y_Auth.WorkExper[p].contentItem[j].content = regx_str1.replace("}"," ")
            }
        }
        // 对自我评价处理
        let positions = this.SearchSubstr(user.Evaluation, '|')
        positions.unshift(0)
        for(let i = 0; i < positions.length; i++){
            Y_Auth.Evaluation.push({
                'remark' : (user.Evaluation).substr(positions[i], positions[i+1] - positions[i])
            })
        }
        for(let j = 0; j < Y_Auth.Evaluation.length; j++){
            let str = Y_Auth.Evaluation[j].remark
            Y_Auth.Evaluation[j].remark = str.replace("|"," ")
        }

        //技能数组
        // HTML CSS 语句
        let htmlCss = [
            "熟悉 DIV+CSS 布局的 HTML 代码编写，能够根据交互原型和 UI 设计图手写符合W3C 标准代码",
            "熟悉HTML/CSS/JavaScript等前端技术，习惯于手写符合W3C标准、兼容多种浏览器的代码",
            "HTML/CSS基础扎实，熟悉HTML5、CSS3、JavaScript规范和相关技术",
            "熟悉Web标准，掌握HTML、CSS、javas等技术",
            "熟悉HTML5+CSS3+JavaScript编程，熟悉各种前端调试工具",
            "熟练掌握Web前端基础（HTML/CSS/JavaScript)、了解浏览器兼容性及相关调试方法",
            "熟悉前端相关技术(html/css/JS)，了解http协议以及相关开发调试工具",
            "前端基础知识扎实，掌握原生 JS、CSS、HTML",
            "熟悉HTML5、CSS3、JavaScript等Web开发技术，有浏览器兼容性等方面的实践经验",
            "精通HTML/XHTML、CSS、JavaScript等网页制作技术，熟悉页面架构和布局",
        ]
        // 对技能的处理
        let skills = this.SearchSubstr(user.Skill, '、')
        skills.unshift(0)
        for(let i = 0; i < skills.length; i++){
            Y_Auth.Skill.push({
                'ability' : (user.Skill).substr(skills[i], skills[i+1] - skills[i])
            })
        }
        for(let j = 0; j < Y_Auth.Skill.length; j++){
            let str = Y_Auth.Skill[j].ability
            Y_Auth.Skill[j].ability = str.replace("、"," ")
            console.log(Y_Auth.Skill[j].ability)
        }
        let htmlFlag = 0
        for(let k = 0; k < Y_Auth.Skill.length; k++){
            let str = Y_Auth.Skill[k].ability
            console.log(str)
            if((str.indexOf("HTML") || str.indexOf("CSS") || str.indexOf("JavaScript") || str.indexOf("JS")) && htmlFlag == 0){
                htmlFlag = 1
                Y_Auth.Skill[k].ability = htmlCss[Math.floor(Math.random() * 10 + 1)]
            }else if((str.indexOf("HTML") || str.indexOf("CSS") || str.indexOf("JavaScript") || str.indexOf("JS")) && htmlFlag == 1){
                Y_Auth.Skill[k].ability = ""
            }
            
        }

        return Y_Auth;
    },
    // 对 |  {} 的处理
    SearchSubstr (str, substr) {
        let positions = new Array()
        let pos = str.indexOf(substr)
        while(pos > -1){
            positions.push(pos)
            pos = str.indexOf(substr, pos+1)
        }
        return positions;
    },
    
}

export default SessionAuth;