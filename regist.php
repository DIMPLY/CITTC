
<?php include 'header.php'?>



<link href="h-pages/regist.css" rel="stylesheet">
<script src="h-jquery/regist.js" type="text/javascript"></script>

<div id="whiteblock">
	<div id="step1">
    	<img src="h-pages/step1.png">
        <div>
        	<span>选择身份：</span>
            <a href="###" class="selected">个体</a><a href="###">团体</a>
        </div>
        <label class="group"><input type="radio" name="capacity" disabled>企业</label>
        <label class="group"><input type="radio" name="capacity" disabled>院校</label>
        <label class="group"><input type="radio" name="capacity" disabled>研究机构</label>
        <label class="group"><input type="radio" name="capacity" disabled>服务机构</label>
        <label class="group"><input type="radio" name="capacity" disabled>政府部门或组织</label>
        <label class="individual"><input type="radio" name="capacity">发明人或专家</label>
        <label class="individual"><input type="radio" name="capacity">创业者或个体工商业者</label>
        <div><span>用户名称：</span><input type="text"></div>
        <div><span>电子邮箱：</span><input type="text"></div>
        <div><span>登录密码：</span><input type="password"></div>
        <div><span>手机号码：</span><input type="text"></div>
        <div><span>所在地区：</span>
            <select>
                <option value="" selected>请选择</option>
                <option value="">中国</option>
                <option value="">中国</option>
                <option value="">中国</option>
            </select>
            <select>
                <option value="" selected>请选择</option>
                <option value="">北京</option>
                <option value="">上海</option>
                <option value="">深圳</option>
            </select>
            <select>
                <option value="" selected>请选择</option>
                <option value="">海淀</option>
                <option value="">昌平</option>
                <option value="">东城</option>
            </select>
        </div>
        <div><span>验&nbsp;证&nbsp;码：</span><img src="h-pages/verification.png">=<input type="text" class="verification"><a href="#">换一个问题</a></div>
        <label><input type="checkbox"><a href="#">同意中国国际技术转移中心会员注册服务条款</a></label>
        <img src="h-pages/regist.png" id="button-regist">
        <div id="right-detail">
        	<img src="h-pages/v-line.png">
            <div class="info">选择相符的身份类型将有利于为您提供贴身的服务方案</div>
            <div class="info">提供真实的个人、团体名称有助于真实可靠的交易服务</div>
            <div class="info">提供正确手机号码及电子邮箱，将有助于：</div>
            <ul>
            	<li><span>找回密码</span></li>
            	<li><span>及时接收系统重要通知</span></li>
            	<li><span>参与对接活动</span></li>
            	<li><span>获得与更多商友对接交易的机会</span></li>
            </ul>
        </div>
    </div>
	<div id="step2">
    	<img src="h-pages/step2.png">
        <h2><img src="h-pages/success.png">
        还差一步即可完成注册</h2>
        <p>我们已经向您的邮箱<output>zggjjszyzx@gmail.com</output>发送了一封激活邮件，请点击邮件中的链接完成注册！</p>
        <a href="#"><img src="h-pages/into-mailbox.png"></a>
    </div>
	<div id="step3">
    	<img src="h-pages/step3.png">
        <h2><img src="h-pages/success.png">
        还差一步即可完成注册</h2>
        <a href="index.php"><img src="h-pages/into-homepage.png"></a>
    </div>
</div>

<?php include 'footer.php'?>