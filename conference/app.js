var http = require('http');
var querystring = require('querystring');
var fs = require('fs');

//全局设置
const PORT = 3001; //服务器监听端口
const AUTOBACKUP = true; //自动备份前一天的文件
const SEND = true; //是否发送邮件
const EMAIL = "summer.tiger@viewfin.com"; //接收邮箱
//数据库
var sponsorFile = "./db/sponsor.json";
var speechFile = "./db/speech.json";
//请求模块 
var libUrl = require('url'); //URL解析模块 
var libPath = require("path"); //路径解析模块 
//邮件
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

//日志
var log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' }, //控制台输出
        {
            type: 'file', //文件输出
            filename: 'logs/access.log',
            maxLogSize: 1024 * 1024,
            backups: 30,
            category: 'normal'
        }
    ]
});
var logger = log4js.getLogger('normal');
logger.setLevel('TRACE');

http.createServer(function(req, res) {
    //暂存请求体信息
    var body = "";

    //请求链接
    if ((req.url === '/speech' || req.url === '/sponsor') && (req.method.toUpperCase() === 'POST')) {
        //每当接收到请求体数据，累加到post中
        req.on('data', function(chunk) {
            body += chunk;
        });

        //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        req.on('end', function() {
            // 解析参数,将一个字符串反序列化为一个对象
            var bodystr = body;
            logger.trace(body); //进行日志备份
            body = querystring.parse(body); //将一个字符串反序列化为一个对象

            // 设置响应头部信息及编码{form表单形式的最佳返回}
            var lastName = ''; //姓
            var firstName = ''; //名
            var company = '';
            var position = ''; //职位
            var email = '';
            var telphone = "";
            var personalProfile = ''; //个人描述
            var topic = "";
            var bestPersonReason = "";
            var videoUrl = "";
            var resume = ""; //简历

            var supportReason = "" //赞助原因

            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8', 'Access-Control-Allow-Origin': '*' });

            if (AUTOBACKUP) {
                simpleAutoBackUp();
            }
            if (req.url === '/speech') {
                //logger.info('新的演讲嘉宾:' + bodystr);
                fs.readFile(speechFile, function(err, data) {
                    if (err) {
                        sendMail(`有了新的演讲嘉宾报名表`, `${body.lastName}-${body.email}-${body.telphone}`);
                        logger.error(speechFile, error);
                        res.write(createPostHtml("提交失败，请重试！", "/appc-join.html"));
                        res.end();
                    } else {
                        var speechTable = [];
                        try {
                            speechTable = JSON.parse(data);
                        } catch (err) {

                        }

                        //添加新的数据
                        var speechObj = {};
                        speechObj.lastName = body.lastName || '';
                        speechObj.firstName = body.firstName || ''
                        speechObj.company = body.company || ''
                        speechObj.position = body.position || ''
                        speechObj.email = body.email || ''
                        speechObj.telphone = body.telphone || ''
                        speechObj.personalProfile = body.personalProfile || ''
                        speechObj.topic = body.topic || ''
                        speechObj.bestPersonReason = body.bestPersonReason || ''
                        speechObj.videoUrl = body.videoUrl || ''
                        speechObj.resume = body.resume || ''
                        speechTable.push(speechObj);

                        var speechEmailContent = '';
                        var speechMore = ''
                        for (var n = speechTable.length - 1; n >= 0; n--) {
                            var obj = speechTable[n];
                            speechMore = speechMore + `<tr><td>${obj.lastName}</td><td>${obj.company} </td>
                            <td> ${obj.position}</td><td> ${obj.email}</td><td>${obj.telphone}</td><td>${obj.personalProfile}</td>
                            <td>${obj.topic} </td><td>${obj.bestPersonReason} </td><td>
                            ${obj.resume}</td><td> ${obj.videoUrl}</td></tr>`
                        }
                        var speechHtml = `<html><head><meta charset="UTF-8"></head><p>总人数：${speechTable.length}</p><table style="width:100%;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000"><tbody><tr><th>姓名</th><th>公司</th><th>职位</th><th>电邮</th><th>电话</th><th>对个人的最佳描述</th><th>对哪些话题发表演讲</th><th>最佳人选的原因</th><th>个人简历</th><th>视频链接</th></tr>${speechMore}</tbody><html>`;
                        //保存html
                        fs.writeFile('./speech.html', speechHtml, function(err) {

                        });

                        res.write(createPostHtml("提交成功！", "/appc-index.html"));

                        res.end();

                        //保存数据信息
                        fs.writeFile(speechFile, JSON.stringify(speechTable), function(err) {

                        });
                        //发送邮件
                        var speechUrl = 'http://www.finwisesummit.com' + '/speech.html';
                        if (SEND) {
                            sendMail(`有了新的演讲嘉宾报名表`, `<p>更新的表格请查看最新的链接：<a href="${speechUrl}"> ${speechUrl}</a></p>`);
                        }
                    }
                });

            } else {
                //logger.info('新的赞助商：' + bodystr);
                fs.readFile(sponsorFile, function(err, data) {
                    if (err) {
                        sendMail(`有了新的演讲嘉宾报名表`, `${body.lastName}-${body.email}-${body.telphone}`);
                        logger.error(sponsorFile, error);
                        res.write(createPostHtml("提交失败，请重试！", "/appc.html"));
                        res.end();
                    } else {
                        var sponsorTable = [];
                        try {
                            sponsorTable = JSON.parse(data);
                        } catch (err) {

                        }
                        //添加新的数据
                        var sponsorObj = {};
                        sponsorObj.lastName = body.lastName || '';
                        sponsorObj.firstName = body.firstName || ''
                        sponsorObj.company = body.company || ''
                        sponsorObj.position = body.position || ''
                        sponsorObj.email = body.email || ''
                        sponsorObj.telphone = body.telphone || ''

                        sponsorObj.supportReason = body.supportReason || ''
                        sponsorTable.push(sponsorObj);

                        var sponsorEmailContent = '';
                        var sponsorMore = ''
                        for (var n = sponsorTable.length - 1; n >= 0; n--) {
                            var obj = sponsorTable[n];
                            sponsorMore = sponsorMore + `<tr><td>${obj.lastName}</td><td>${obj.company} </td>
                            <td> ${obj.position}</td><td> ${obj.email}</td><td>${obj.telphone}</td><td>${obj.supportReason}</td></tr>`
                        }
                        var sponsorHtml = `<html><head><meta charset="UTF-8"></head><p>总人数：${sponsorTable.length}</p><table style="width:100%;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000"><tbody><tr><th>姓名</th><th>公司</th><th>职位</th><th>电邮</th><th>电话</th><th>赞助原因</th></tr>${sponsorMore}</tbody><html>`;
                        res.write(createPostHtml("提交成功！", "/appc-index.html"));
                        res.end();
                        //保存html
                        fs.writeFile('./sponsor.html', sponsorHtml, function(err) {

                        });
                        //保存数据信息
                        fs.writeFile(sponsorFile, JSON.stringify(sponsorTable), function(err) {

                        });
                        //发送邮件
                        var sponsorUrl = 'http://www.finwisesummit.com' + '/sponsor.html';
                        if (SEND) {
                            sendMail(`有了新的赞助商报名表`, `<p>更新的表格请查看最新的链接：<a href="${sponsorUrl}"> ${sponsorUrl}</a></p>`);
                        }
                    }
                });
            }

        });
    } else {
        var pathName = libUrl.parse(req.url).pathname;
        if (libPath.extname(pathName) == "") {
            //如果路径没有扩展名 
            pathName += "/"; //指定访问目录 
        }
        if (pathName.charAt(pathName.length - 1) == "/") {
            //如果访问目录 
            pathName += "appc-index.html"; //指定为默认网页 
        }

        //使用路径解析模块,组装实际文件路径 
        var filePath = libPath.join("./", pathName);

        //判断文件是否存在 
        fs.exists(filePath, function(exists) {
            //文件存在
            if (exists) {
                //在响应头中写入内容类型 
                res.writeHead(200, { "Content-Type": funGetContentType(filePath) });

                //创建只读流用于返回 
                var stream = fs.createReadStream(filePath, { flags: "r", encoding: null });

                //指定如果流读取错误,返回404错误 
                stream.on("error", function() {
                    res.writeHead(404);
                    res.end("<h1>404 Read Error</h1>");
                });

                //连接文件流和http返回流的管道,用于返回实际Web内容 
                stream.pipe(res);
            } else {
                //文件不存在，返回404错误 
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>404 Not Found</h1>");
            }
        });
    }
}).listen(PORT);

//依据路径获取返回内容类型字符串,用于http响应头 
var funGetContentType = function(filePath) {
    var contentType = "";

    //使用路径解析模块获取文件扩展名 
    var ext = libPath.extname(filePath);

    switch (ext) {
        case ".html":
            contentType = "text/html";
            break;
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".gif":
            contentType = "image/gif";
            break;
        case ".jpg":
            contentType = "image/jpeg";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".ico":
            contentType = "image/icon";
            break;
        default:
            contentType = "application/octet-stream";
    }

    //返回内容类型字符串 
    return contentType;
}

smtpTransport = nodemailer.createTransport(smtpTransport({
    service: 'QQ',
    auth: {
        user: '3404993843@qq.com',
        pass: 'hzgfjeirrzwucihi'
    }
}));

/**
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function(subject, html) {

    smtpTransport.sendMail({
        from: '3404993843@qq.com',
        // to: '3404993843@qq.com',
        to: EMAIL, //接收者邮箱        
        subject: subject,
        html: html

    }, function(error, response) {
        if (error) {
            logger.error('邮件发送失败，主题：' + subject, error);
        } else {
            logger.info('邮件发送成功，主题：' + subject);
        }
    });
}

function createPostHtml(hint, url) {

    var postHtml = `<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>跳转</title>
</head>
<body>
    <h3>${hint}   </h3><span id="totalSecond">3</span> <span>秒后，自动跳转</span>
    <script language="javascript" type="text/javascript">
        var second = document.getElementById('totalSecond').textContent;
        if (navigator.appName.indexOf("Explorer") > -1) {
            second = document.getElementById('totalSecond').innerText;
        } else {
            second = document.getElementById('totalSecond').textContent;
        }
        setInterval("redirect()", 800);
        function redirect() {
            if (second <= 0) {
                location.href = '${url}';
            } else {
                if (navigator.appName.indexOf("Explorer") > -1) {
                    document.getElementById('totalSecond').innerText = second--;
                } else {
                    document.getElementById('totalSecond').textContent = second--;
                }
            }
        }
    </script>
</body>
</html>`;
    return postHtml;
}

function simpleAutoBackUp() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var dateTitle = month + strDate;

    var speechBackUpFiles = './db/speech' + dateTitle + '.json';
    var sponsorBackUpFiles = './db/sponsor' + dateTitle + '.json';

    fs.exists(speechBackUpFiles, function(exists) {
        if (!exists) {
            logger.info('执行speech备份：', dateTitle);
            fs.createReadStream(speechFile).pipe(fs.createWriteStream(speechBackUpFiles));
        }
    });

    fs.exists(sponsorBackUpFiles, function(exists) {
        if (!exists) {
            logger.info('执行sponsor备份：', dateTitle);
            fs.createReadStream(sponsorFile).pipe(fs.createWriteStream(sponsorBackUpFiles));
        }
    });
}