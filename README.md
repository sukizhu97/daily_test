# 后台管理案例

案例效果：

![image-20220222190744274](ReadMe.assets/image-20220222190744274.png)

![image-20220222190755700](ReadMe.assets/image-20220222190755700.png)

步骤：

1. 安装router并且新建router文件夹及index.js文件
2. 在index.js进行初始化
3. 在main.js引入router<img src="ReadMe.assets/image-20220222193036547.png" alt="image-20220222193036547" style="zoom: 33%;" />
4. 现存Login使其与路由建立关系：<img src="ReadMe.assets/image-20220222193409028.png" alt="image-20220222193409028" style="zoom: 33%;" />
5. 在根组件放占位符使其显示<img src="ReadMe.assets/image-20220222193840300.png" alt="image-20220222193840300" style="zoom: 33%;" />
6. 如何一登录便展示该页面：重定向<img src="ReadMe.assets/image-20220222194027397.png" alt="image-20220222194027397" style="zoom:33%;" />
7. 登录页绑定用户名和密码、重置按钮、登录点击函数等等<img src="ReadMe.assets/image-20220222200427137.png" alt="image-20220222200427137" style="zoom:33%;" />
8. token存储<img src="ReadMe.assets/image-20220222202110471.png" alt="image-20220222202110471" style="zoom:33%;" />
9. 展示Myhome<img src="ReadMe.assets/image-20220222202430005.png" alt="image-20220222202430005" style="zoom:33%;" />
10. 渲染home页面<img src="ReadMe.assets/image-20220222203105733.png" alt="image-20220222203105733" style="zoom:33%;" />
11. 退出登录操作<img src="ReadMe.assets/image-20220222203358125.png" alt="image-20220222203358125" style="zoom:33%;" />
12. 进入home必须先登陆：<img src="ReadMe.assets/image-20220222203713607.png" alt="image-20220222203713607" style="zoom:33%;" />
13. 点击左侧栏目右侧出现不同的模块（在APP根目录模块下展示小组件，是嵌套组件）
13. 改造路由链接<img src="ReadMe.assets/image-20220223222039016.png" alt="image-20220223222039016" style="zoom:33%;" />
13. 在home组件中嵌套组件<img src="ReadMe.assets/image-20220223222222417.png" alt="image-20220223222222417" style="zoom:33%;" /><img src="ReadMe.assets/image-20220223224521106.png" alt="image-20220223224521106" style="zoom:33%;" />
13. 用户管理部分的信息渲染<img src="ReadMe.assets/image-20220223224925466.png" alt="image-20220223224925466" style="zoom:33%;" />
13. 用户详情页的渲染，详情页的等级应该与侧边栏同级，所以规则要写在一起<img src="ReadMe.assets/image-20220223225702257.png" alt="image-20220223225702257" style="zoom:33%;" /><img src="ReadMe.assets/image-20220223225644693.png" alt="image-20220223225644693" style="zoom:33%;" />
13. 用户详情页的后退选项<img src="ReadMe.assets/image-20220223225922839.png" alt="image-20220223225922839" style="zoom:33%;" />
13. 用户详情页跳转的优化，知道id才能显示对应的详情<img src="ReadMe.assets/image-20220223230614414.png" alt="image-20220223230614414" style="zoom:33%;" /><img src="ReadMe.assets/image-20220223230855589.png" alt="image-20220223230855589" style="zoom:33%;" /><img src="ReadMe.assets/image-20220223230925774.png" alt="image-20220223230925774" style="zoom:33%;" />
13. 刚进入时候的路由重定向，就是进入home页面就先显示用户管理，把”/home"重定向到"/home/user"<img src="ReadMe.assets/image-20220223231316958.png" alt="image-20220223231316958" style="zoom:33%;" />
13. 注意：URL里面最好不要出现大写字母

