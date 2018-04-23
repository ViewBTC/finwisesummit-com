项目初始化，需要手工操作:
1、db/speech.json 内容初始化为[]
2、db/sponsor.json 内容初始化为[]



项目运行：
1、安装nodejs 6.0及以上版本
2、然后 npm install pm2 -g
3、进入service文件夹，打开命令行工具，执行npm install
4、运行命令 pm2 start app.js 

app.js中的全局设置
const PORT = 80; //服务器监听端口  正式服务器，建议改为80端口
const AUTOBACKUP = true; //自动备份前一天的文件
const SEND = true; //是否发送邮件
const EMAIL = "summer.tiger@viewfin.com"; //接收邮箱


注：生成的文件speech.html 和 sponsor.html为已经报名参加的人员信息汇总，可以复制拷贝到excel中进行更丰富的操作
