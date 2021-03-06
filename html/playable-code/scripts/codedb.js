const CODE_DB = [
  {
    name: 'italic',
    description: '斜体字',
    original: '刀枪剑戟 斧钺钩叉',
    answer: '<em>刀枪剑戟 斧钺钩叉</em>'
  },
  {
    name: 'link',
    description: '超链接',
    original: '<p>欲练葵花宝典，需引刀自宫</p>',
    answer: '<p>欲练<a href="https://zh.wikipedia.org/zh-hans/葵花宝典" title="葵花宝典简介" target="_blank">葵花宝典</a>，需引刀自宫</p>'
  },
  {
    name: 'image',
    description: '添加图片',
    original: '<p>相思无用，惟别而已。别期若有定，千般煎熬又何如？莫道黯然销魂，何处柳暗花明？</p>',
    answer:
`<h1>经典回忆</h1>
<p>
  相思无用，惟别而已。别期若有定，千般煎熬又何如？莫道黯然销魂，何处<strong>柳暗花明</strong>？<br>
  ——《<a href="https://zh.wikipedia.org/zh-hans/神鵰俠侶">神雕侠侣</a>》
</p>
<img src="images/sdxl.jfif">`
  },
  {
    name: 'titleAndParagraph',
    description: '标题和段落',
    original: '静夜思 床前明月光 疑是地上霜 举头望明月 低头思故乡',
    answer:
`<h1>静夜思</h1>
<p>床前明月光</p>
<p>疑是地上霜</p>
<p>举头望明月</p>
<p>低头思故乡</p>`
  },
  {
    name: 'unorderedList',
    description: '无序列表',
    original: '豆浆 油条 豆汁 焦圈',
    answer:
`<ul>
<li>豆浆</li>
<li>油条</li>
<li>豆汁</li>
<li>焦圈</li>
</ul>`
  },
  {
    name: 'orderedList',
    description: '有序列表',
    original: 
`沿着条路走到头
右转
直行穿过第一个十字路口
在第三个十字路口处左转
继续走 300 米，学校就在你的右手边`,
    answer:
`<ol>
<li>沿着条路走到头</li>
<li>右转</li>
<li>直行穿过第一个十字路口</li>
<li>在第三个十字路口处左转</li>
<li>继续走 300 米，学校就在你的右手边</li>
</ol>`    
  },
  {
    name: 'nestedList',
    description: '嵌套列表',
    original:
`宫保鸡丁的做法
宫保鸡丁，川菜系中的传统名菜，由鸡丁、干辣椒、花生米等炒制而成。由于其入口鲜辣，鸡肉的鲜嫩配合花生的香脆，广受大众欢迎。
相传宫保鸡丁是清朝光绪年间的署理四川总督丁宝桢所发明，是他招待客人时叫家厨煮的菜肴。由于丁宝桢后来被封为东宫少保（太子少保），所以被称为“丁宫保”，而这道菜亦被称为“宫保鸡丁”

原料
去骨鸡胸肉：一斤八两
干红辣椒：八钱
炸花生米：一两五钱
花椒粒：两大匙
葱：两根（切段）
蛋白：一个
淀粉：三大匙
酱油：两大匙
蒜末：半茶匙
糖：半茶匙
白醋：一茶匙
色拉油：适量
盐：两茶匙

做法
先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。
用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。
鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。
在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。
如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。
如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。

大千鸡
张大千居加拿大期间，曾按自己喜好改变宫保鸡丁的做法，并传授当地厨师，厨师将之命名为“大千鸡”，以兹纪念。大千鸡与宫保鸡丁不同之处，是使用经细工去皮、出骨、剔膜的鸡腿肉，以干辣椒、豆瓣酱为味，而且不用花生。`,
    answer:
`<h1>宫保鸡丁的做法</h1>
<p>宫保鸡丁，川菜系中的传统名菜，由鸡丁、干辣椒、花生米等炒制而成。由于其入口鲜辣，鸡肉的鲜嫩配合花生的香脆，广受大众欢迎。</p>
<p>相传宫保鸡丁是清朝光绪年间的署理四川总督丁宝桢所发明，是他招待客人时叫家厨煮的菜肴。由于丁宝桢后来被封为东宫少保（太子少保），所以被称为“丁宫保”，而这道菜亦被称为“宫保鸡丁”</p>

<h2>原料</h2>
<img src="images/gongbao.png" style="float:right">
<ul>
  <li>去骨鸡胸肉：一斤八两</li>
  <li>干红辣椒：八钱</li>
  <li>炸花生米：一两五钱</li>
  <li>花椒粒：两大匙</li>
  <li>葱：两根（切段）</li>
  <li>蛋白：一个</li>
  <li>淀粉：三大匙</li>
  <li>酱油：两大匙</li>
  <li>蒜末：半茶匙</li>
  <li>糖：半茶匙</li>
  <li>白醋：一茶匙</li>
  <li>色拉油：适量</li>
  <li>盐：两茶匙</li>
</ul>

<h2>做法</h2>
<ol>
  <li>先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。</li>
  <li>用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。</li>
  <li>鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。</li>
  <li>在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。</li>
  <li><ul>
    <li>如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。</li>
    <li>如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。</li>
  </ul></li>
</ol>

<h2>大千鸡</h2>
<p>张大千居加拿大期间，曾按自己喜好改变宫保鸡丁的做法，并传授当地厨师，厨师将之命名为“大千鸡”，以兹纪念。大千鸡与宫保鸡丁不同之处，是使用经细工去皮、出骨、剔膜的鸡腿肉，以干辣椒、豆瓣酱为味，而且不用花生。</p>`
  },
  {
    name: 'emphasisAnsStrong',
    description: '强调和重点',
    original:
`AlphaGo 李世乭五番棋

<p>2016年3月8日到3月15日，韩国职业棋士李世乭（이세돌）九段与由 Google DeepMind 开发的计算机围棋软件 AlphaGo 对弈的五局三胜制围棋比赛在韩国首尔举行。结果为 AlphaGo 以四胜一负的战绩击败李世乭。赛后韩国棋院授予 AlphaGo 荣誉九段的称号。</p>`,
    answer:
`<h1>AlphaGo 李世乭五番棋</h1>

<p><strong>2016年3月8日</strong>到<strong>3月15日</strong>，韩国职业棋士<strong>李世乭（이세돌）<em>九段</em></strong>与由 Google DeepMind 开发的计算机围棋软件 <strong>AlphaGo</strong> 对弈的五局三胜制围棋比赛在韩国<strong>首尔</strong>举行。结果为 AlphaGo 以<strong>四胜一负</strong>的战绩击败李世乭。赛后韩国棋院授予 AlphaGo <strong>荣誉九段</strong>的称号。</p>`
  }
];

function getName(serial) {
  return CODE_DB[serial].name;
}

function getDescription(item) {
  if (typeof item === 'string') {
    return CODE_DB.find(element => {
      return element.name === item;
    }).description;
  }
  if (typeof item === 'number') {
    return CODE_DB[item].description;
  }
}

function getOriginal(item) {
  if (typeof item === 'string') {
    return CODE_DB.find(element => {
      return element.name === item;
    }).original;
  }
  if (typeof item === 'number') {
    return CODE_DB[item].original;
  }
}

function getAnswer(item) {
  if (typeof item === 'string') {
    return CODE_DB.find(element => {
      return element.name === item; 
    }).answer;
  }
  if (typeof item === 'number') {
    return CODE_DB[item].answer;
  }  
}
