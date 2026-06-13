// 语文课程数据 — 12天系统复习（五大板块并进）
var CHINESE_DATA = {
  "name": "语文",
  "icon": "📖",
  "color": "var(--chinese)",
  "days": [
    {
      "day": 1,
      "title": "基础入门",
      "topics": "字音·《观沧海》·《论语》·概括",
      "sections": [
        {
          "type": "基础运用",
          "topic": "字音",
          "tagColor": "#f59e0b",
          "content": "<p><b>一、多音字辨析 — 据义定音（25个常考多音字）</b></p><table class=\"grammar-table\"><tr><th>字</th><th>读音</th><th>例词</th><th>记忆技巧</th></tr><tr><td>差</td><td>chā / chà / chāi / cī</td><td>差别 / 差不多 / 出差 / 参差</td><td>chā差异，chà差劲，chāi派遣，cī参差</td></tr><tr><td>和</td><td>hé / hè / huó / huò</td><td>和平 / 附和 / 和面 / 和稀泥</td><td>hé和睦，hè应和，huó揉合，huò搀和</td></tr><tr><td>强</td><td>qiáng / qiǎng / jiàng</td><td>强大 / 勉强 / 倔强</td><td>qiáng强壮，qiǎng强迫，jiàng固执</td></tr><tr><td>载</td><td>zǎi / zài</td><td>记载·三年五载 / 装载·载歌载舞</td><td>zǎi记录/年，zài装运/充满</td></tr><tr><td>着</td><td>zháo / zhuó / zhe</td><td>着急 / 穿着·着陆 / 看着</td><td>zháo感受，zhuó穿戴，zhe持续</td></tr><tr><td>处</td><td>chǔ / chù</td><td>处理·处分 / 处所·到处</td><td>chǔ动词（处置），chù名词（地方）</td></tr><tr><td>累</td><td>lèi / lěi / léi</td><td>劳累 / 积累·连累 / 累赘</td><td>lèi疲劳，lěi堆积，léi多余</td></tr><tr><td>降</td><td>jiàng / xiáng</td><td>降落 / 投降</td><td>jiàng下落，xiáng屈服</td></tr><tr><td>模</td><td>mó / mú</td><td>模仿 / 模样·模具</td><td>mó抽象（模范），mú具体（模子）</td></tr><tr><td>禁</td><td>jīn / jìn</td><td>不禁·禁受 / 禁止·禁区</td><td>jīn承受/忍住，jìn不准</td></tr><tr><td>咽</td><td>yān / yàn / yè</td><td>咽喉 / 狼吞虎咽 / 哽咽</td><td>yān喉咙，yàn吞咽，yè呜咽</td></tr><tr><td>薄</td><td>bó / báo / bò</td><td>薄弱·单薄 / 薄饼·薄片 / 薄荷</td><td>bó书面，báo口语，bò植物名</td></tr><tr><td>数</td><td>shǔ / shù / shuò</td><td>数落·数一数 / 数学·数字 / 数见不鲜</td><td>shǔ动词（计数），shù名词（数目），shuò屡次</td></tr><tr><td>都</td><td>dōu / dū</td><td>都是·全都 / 首都·都市</td><td>dōu副词（全），dū名词（大城市）</td></tr><tr><td>长</td><td>cháng / zhǎng</td><td>长度·长江 / 长大·班长</td><td>cháng形容词（长短），zhǎng动词（生长）</td></tr><tr><td>朝</td><td>zhāo / cháo</td><td>朝阳·朝夕 / 朝代·朝向</td><td>zhāo早晨，cháo面向/朝廷</td></tr><tr><td>重</td><td>zhòng / chóng</td><td>重要·重量 / 重复·重新</td><td>zhòng分量大，chóng再次</td></tr><tr><td>传</td><td>chuán / zhuàn</td><td>传说·传统 / 传记·自传</td><td>chuán动词（传递），zhuàn名词（记录生平）</td></tr><tr><td>觉</td><td>jué / jiào</td><td>感觉·觉悟 / 睡觉·午觉</td><td>jué感受/醒悟，jiào睡眠</td></tr><tr><td>难</td><td>nán / nàn</td><td>困难·难过 / 灾难·难民</td><td>nán形容词（不易），nàn名词（灾祸）</td></tr><tr><td>假</td><td>jiǎ / jià</td><td>假如·假装 / 放假·假期</td><td>jiǎ不真实，jià休息日</td></tr><tr><td>间</td><td>jiān / jiàn</td><td>时间·中间 / 间隔·间接</td><td>jiān名词（当中），jiàn动词（隔开）</td></tr><tr><td>空</td><td>kōng / kòng</td><td>天空·空气 / 空闲·空白</td><td>kōng虚无，kòng腾出来</td></tr><tr><td>尽</td><td>jǐn / jìn</td><td>尽管·尽量 / 尽力·尽头</td><td>jǐn副词（力求），jìn完/全部</td></tr><tr><td>转</td><td>zhuǎn / zhuàn</td><td>转身·转弯 / 转动·旋转</td><td>zhuǎn改变方向，zhuàn围绕中心动</td></tr></table><p><b>二、易读错字（30个高频易错字）</b></p><table class=\"grammar-table\"><tr><th>字</th><th>正确读音</th><th>常见误读</th><th>例词</th><th>记忆口诀</th></tr><tr><td>氛</td><td>fēn</td><td>fèn</td><td>氛围·气氛</td><td>\"气氛\"读fēn不读fèn</td></tr><tr><td>档</td><td>dàng</td><td>dǎng</td><td>档案·档次</td><td>\"档案\"是dàng，不是dǎng</td></tr><tr><td>潜</td><td>qián</td><td>qiǎn</td><td>潜力·潜水</td><td>\"潜力\"二声不是三声</td></tr><tr><td>惩</td><td>chéng</td><td>chěng</td><td>惩罚·惩处</td><td>\"惩罚\"二声chéng</td></tr><tr><td>较</td><td>jiào</td><td>jiǎo</td><td>比较·较量</td><td>\"比较\"四声jiào</td></tr><tr><td>复</td><td>fù</td><td>fǔ</td><td>复杂·复习</td><td>\"复杂\"四声fù</td></tr><tr><td>室</td><td>shì</td><td>shǐ</td><td>教室·卧室</td><td>\"教室\"四声shì</td></tr><tr><td>即</td><td>jí</td><td>jì</td><td>立即·即将</td><td>\"立即\"二声jí（非jì）</td></tr><tr><td>为</td><td>wèi</td><td>wéi</td><td>因为·为何</td><td>\"因为\"四声wèi</td></tr><tr><td>符</td><td>fú</td><td>fǔ</td><td>符合·符号</td><td>\"符合\"二声fú</td></tr><tr><td>纤</td><td>xiān</td><td>qiān</td><td>纤维·纤细</td><td>\"纤维\"xiān不是qiān</td></tr><tr><td>菌</td><td>jūn</td><td>jǔn</td><td>细菌·真菌</td><td>\"细菌\"一声jūn</td></tr><tr><td>质</td><td>zhì</td><td>zhǐ</td><td>质量·本质</td><td>\"质量\"四声zhì</td></tr><tr><td>塑</td><td>sù</td><td>suò</td><td>塑料·塑造</td><td>\"塑料\"sù不是suò</td></tr><tr><td>挫</td><td>cuò</td><td>cuō</td><td>挫折·挫败</td><td>\"挫折\"四声cuò</td></tr><tr><td>档</td><td>dàng</td><td>dǎng</td><td>档案·归档</td><td>\"档案\"是dàng，不是dǎng</td></tr><tr><td>逮</td><td>dài</td><td>dǎi</td><td>逮捕·力有未逮</td><td>\"逮捕\"读dài，非dǎi</td></tr><tr><td>校</td><td>jiào</td><td>xiào</td><td>校对·校勘</td><td>\"校对\"是jiào，不是xiào</td></tr><tr><td>犷</td><td>guǎng</td><td>kuàng</td><td>粗犷·犷悍</td><td>\"粗犷\"读guǎng，不读kuàng</td></tr><tr><td>创</td><td>chuāng</td><td>chuàng</td><td>创伤·创口</td><td>\"创伤\"一声chuāng，非四声</td></tr><tr><td>酵</td><td>jiào</td><td>xiào</td><td>发酵·酵母</td><td>\"发酵\"是jiào，不是xiào</td></tr><tr><td>角</td><td>jué</td><td>jiǎo</td><td>角色·角逐</td><td>\"角色\"读jué，非jiǎo</td></tr><tr><td>模</td><td>mú</td><td>mó</td><td>模样·一模一样</td><td>\"模样\"读mú，不读mó</td></tr><tr><td>宁</td><td>nìng</td><td>níng</td><td>宁可·宁死不屈</td><td>\"宁可\"四声nìng</td></tr><tr><td>湃</td><td>pài</td><td>bài</td><td>澎湃·汹涌澎湃</td><td>\"澎湃\"读pài，不是bài</td></tr><tr><td>强</td><td>qiǎng</td><td>qiáng</td><td>强迫·勉强</td><td>\"强迫\"三声qiǎng</td></tr><tr><td>膝</td><td>xī</td><td>qī</td><td>膝盖·屈膝</td><td>\"膝盖\"读xī，不是qī</td></tr><tr><td>纤</td><td>xiān</td><td>qiān</td><td>纤维·纤尘不染</td><td>\"纤维\"xiān不是qiān</td></tr><tr><td>肖</td><td>xiào</td><td>xiāo</td><td>肖像·惟妙惟肖</td><td>\"肖像\"四声xiào</td></tr><tr><td>灸</td><td>jiǔ</td><td>jiū</td><td>针灸·艾灸</td><td>\"针灸\"三声jiǔ，非一声</td></tr></table><p><b>三、易错成语（15个高频易错成语）</b></p><table class=\"grammar-table\"><tr><th>成语</th><th>正确意思</th><th>常见误用</th><th>例句</th></tr><tr><td>首当其冲</td><td>最先受到攻击或遭遇灾难</td><td>误作\"一马当先/冲在前面\"</td><td>战争爆发后，边境城市首当其冲。</td></tr><tr><td>差强人意</td><td>大体上还能使人满意</td><td>误作\"让人不满意\"</td><td>这次考试成绩差强人意，还有进步空间。</td></tr><tr><td>炙手可热</td><td>权势大，气焰盛（贬义）</td><td>误作\"受欢迎/热门\"</td><td>他当上局长后炙手可热，无人敢惹。</td></tr><tr><td>不以为然</td><td>不认为是对的（不同意）</td><td>误作\"不在意/不放在心上\"</td><td>他对此提议不以为然，当场提出反对。</td></tr><tr><td>不刊之论</td><td>不可更改的言论（褒义）</td><td>误作\"不能刊登的言论\"</td><td>孔子的教诲乃不刊之论，流传千年。</td></tr><tr><td>万人空巷</td><td>形容盛大集会或热闹场面</td><td>误作\"巷子里没人/冷清\"</td><td>元宵灯会万人空巷，全城出动赏灯。</td></tr><tr><td>七月流火</td><td>天气逐渐转凉</td><td>误作\"天气炎热如火\"</td><td>七月流火，暑气渐消，秋意初显。</td></tr><tr><td>文不加点</td><td>文章一气呵成，无须修改</td><td>误作\"文章不加标点\"</td><td>他才思敏捷，写文章文不加点。</td></tr><tr><td>目无全牛</td><td>技艺极其精湛，达到纯熟境界</td><td>误作\"看不到整体/目光短浅\"</td><td>庖丁解牛目无全牛，刀法出神入化。</td></tr><tr><td>美轮美奂</td><td>形容房屋高大华美（仅建筑）</td><td>误作\"一切美好事物\"</td><td>这座宫殿美轮美奂，令人叹为观止。</td></tr><tr><td>汗牛充栋</td><td>藏书极多（仅形容书籍）</td><td>误作\"东西很多\"</td><td>他家藏书汗牛充栋，堪称小型图书馆。</td></tr><tr><td>弹冠相庆</td><td>坏人得势互相庆贺（贬义）</td><td>误作\"好事互相庆祝\"</td><td>贪官被提拔，同伙弹冠相庆。</td></tr><tr><td>望其项背</td><td>能赶得上（多用于否定）</td><td>误作\"望尘莫及/差得远\"</td><td>他的学问深不可测，无人能望其项背。</td></tr><tr><td>曾几何时</td><td>时间过去没多久</td><td>误作\"曾经/很久以前\"</td><td>曾几何时，这里还是一片荒地，如今高楼林立。</td></tr><tr><td>侧目而视</td><td>又怕又恨地看（畏惧/愤恨）</td><td>误作\"刮目相看/另眼看待\"</td><td>他仗势欺人，同事们都对他侧目而视。</td></tr></table><p><b>四、记忆方法总结</b></p><p>据词性（处chǔ动/chù名）、据意义（载zǎi刊登/zài装运）、据语体（薄bó书面/báo口语）、据搭配（强qiáng大/qiǎng勉强/jiàng倔强）、记特例（参差cī、薄荷bò）</p><p><b>五、分班考常考题型</b></p><p><b>【真题1】</b>下列词语中加点字读音完全正确的一项是（ ）<br>A. 氛（fèn）围 &nbsp; 档（dàng）案 &nbsp; 潜（qián）力<br>B. 惩（chéng）罚 &nbsp; 较（jiào）量 &nbsp; 符（fú）合<br>C. 纤（qiān）维 &nbsp; 细菌（jǔn） &nbsp; 塑（suò）料<br>D. 挫（cuō）折 &nbsp; 质量（zhǐ） &nbsp; 教室（shǐ）<br><br><b>答案：B</b>（A氛fēn；C纤xiān·菌jūn·塑sù；D挫cuò·质zhì·室shì）</p><p><b>【真题2】</b>下列多音字读音全部相同的一组是（ ）<br>A. 载重&nbsp;记载&nbsp;装载<br>B. 强迫&nbsp;勉强&nbsp;倔强<br>C. 附和&nbsp;和诗&nbsp;应和<br>D. 处理&nbsp;处所&nbsp;到处<br><br><b>答案：C</b>（C均读hè；A载zài/zǎi/zài；B强qiǎng/qiǎng/jiàng；D处chǔ/chù/chù）</p><p><b>【真题3】</b>给下列加点字注音：<br>① 他<b>累</b>计三次迟到 <b>（lěi）</b><br>② 妈妈劳<b>累</b>的身影让他<b>哽</b><b>咽</b> <b>（lèi）（yè）</b><br>③ <b>模</b>样精致的<b>模</b>具 <b>（mú）（mú）</b><br>④ <b>禁</b>不住诱惑被<b>禁</b>止入内 <b>（jīn）（jìn）</b></p>",
          "problems": [
            {
              "diff": "basic",
              "q": "下列读音完全正确的是：",
              "opts": [
                "A. 氛(fèn)围",
                "B. 载(zǎi)重",
                "C. 勉强(qiǎng)",
                "D. 差(chā)不多"
              ],
              "ans": 2,
              "exp": "A读fēn，B读zài，D读chà。"
            },
            {
              "diff": "basic",
              "q": "\"处理\"中\"处\"的读音：",
              "opts": [
                "A. chù",
                "B. chǔ",
                "C. chū",
                "D. chú"
              ],
              "ans": 1,
              "exp": "动词chǔ，名词chù。"
            },
            {
              "diff": "medium",
              "q": "读音完全相同的一组：",
              "opts": [
                "A. 和面 和平",
                "B. 装载 记载",
                "C. 强迫 勉强",
                "D. 穿着 着急"
              ],
              "ans": 2,
              "exp": "A hé/huó B zài/zǎi C 均qiǎng D zhuó/zháo。"
            },
            {
              "diff": "medium",
              "q": "注音全对的一组：",
              "opts": [
                "A. 档(dǎng)案 潜(qián)力",
                "B. 档(dàng)案 潜(qián)力",
                "C. 档(dǎng)案 潜(qiǎn)力",
                "D. 档(dàng)案 潜(qiǎn)力"
              ],
              "ans": 1,
              "exp": "档dàng潜qián。"
            },
            {
              "diff": "hard",
              "q": "\"和诗\"的\"和\"与哪项相同？",
              "opts": [
                "A. 和平",
                "B. 附和",
                "C. 和面",
                "D. 暖和"
              ],
              "ans": 1,
              "exp": "均读hè。"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "多音字辨析",
              "u": "https://search.bilibili.com/all?keyword=小升初+多音字"
            }
          ]
        },
        {
          "type": "诗词鉴赏",
          "topic": "《观沧海》",
          "tagColor": "#a78bfa",
          "content": "<div class=\"poem-card\"><div class=\"poem-title\">观沧海</div><div class=\"poem-author\">【东汉】曹操</div><div class=\"poem-text\">东临碣石，以观沧海。<br>水何澹澹，山岛竦峙。<br>树木丛生，百草丰茂。<br>秋风萧瑟，洪波涌起。<br>日月之行，若出其中；<br>星汉灿烂，若出其里。<br>幸甚至哉，歌以咏志。</div><div class=\"poem-notes\"><b>【注解】</b>临=登上<br>碣(jié)石=山名<br>澹澹(dàn)=水波摇动<br>竦峙=耸立<br>星汉=银河<br><br><b>【背景】</b>公元207年曹操北征乌桓胜利后登碣石山所作，借大海壮阔抒发统一天下的雄心。<br><br><b>【手法】</b>借景抒情+虚实结合(前六句实后四句虚)+动静相生+以\"观\"统领全篇<br><br><b>【名句】</b>\"日月之行若出其中星汉灿烂若出其里\"——夸张想象展现大海包容宇宙的壮阔表达诗人博大胸怀。</div></div>",
          "problems": [
            {
              "diff": "basic",
              "q": "作者是：",
              "opts": [
                "A. 李白",
                "B. 杜甫",
                "C. 曹操",
                "D. 王湾"
              ],
              "ans": 2,
              "exp": "曹操，东汉政治家军事家诗人。"
            },
            {
              "diff": "basic",
              "q": "\"澹澹\"的意思：",
              "opts": [
                "A. 清澈",
                "B. 水波摇动",
                "C. 平静",
                "D. 流动"
              ],
              "ans": 1,
              "exp": "水波摇动读dàn dàn。"
            },
            {
              "diff": "medium",
              "q": "属于虚写的是：",
              "opts": [
                "A. 东临碣石",
                "B. 树木丛生",
                "C. 日月之行若出其中",
                "D. 秋风萧瑟"
              ],
              "ans": 2,
              "exp": "ABD实写，C想象。"
            },
            {
              "diff": "medium",
              "q": "理解错误的是：",
              "opts": [
                "A. 以观统领",
                "B. 动静结合",
                "C. 表达归隐愿望",
                "D. 展现博大胸怀"
              ],
              "ans": 2,
              "exp": "表达统一天下雄心。"
            },
            {
              "diff": "hard",
              "q": "\"日月之行若出其中\"修辞及效果：",
              "opts": [
                "A. 比喻",
                "B. 拟人",
                "C. 夸张想象展现壮阔",
                "D. 对比"
              ],
              "ans": 2,
              "exp": "夸张+想象展现壮阔和博大胸襟。"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "观沧海赏析",
              "u": "https://search.bilibili.com/all?keyword=观沧海+曹操+赏析"
            }
          ]
        },
        {
          "type": "文言文",
          "topic": "《论语》十二章（一）",
          "tagColor": "#fb923c",
          "content": "<p><b>论语十二章（一）—— 第1-6章</b></p>\n\n<p><b>① 学而时习之</b><br>子曰：\"学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？\"<br><span style=\"font-size:14px;color:var(--text2)\">【说=悦yuè，通假字 | 愠yùn=恼怒 | 时=按时 | 习=温习】</span></p>\n\n<p><b>② 三省吾身</b><br>曾子曰：\"吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？\"<br><span style=\"font-size:14px;color:var(--text2)\">【省xǐng=反省 | 三=多次（虚数）| 忠=尽心竭力 | 信=诚信 | 传=老师传授的知识】</span></p>\n\n<p><b>③ 温故知新</b><br>子曰：\"温故而知新，可以为师矣。\"<br><span style=\"font-size:14px;color:var(--text2)\">【故=旧的知识 | 新=新的体会 | 可以=可以凭借（古义）】</span></p>\n\n<p><b>④ 学思结合</b><br>子曰：\"学而不思则罔，思而不学则殆。\"<br><span style=\"font-size:14px;color:var(--text2)\">【罔wǎng=迷惑而无所得 | 殆dài=疑惑而无主见 | 而=却，表转折】</span></p>\n\n<p><b>⑤ 安贫乐道</b><br>子曰：\"贤哉，回也！一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐。贤哉，回也！\"<br><span style=\"font-size:14px;color:var(--text2)\">【箪dān=盛饭的竹器 | 堪=忍受 | 回=颜回，孔子最得意的弟子】</span></p>\n\n<p><b>⑥ 知之好之乐之</b><br>子曰：\"知之者不如好之者，好之者不如乐之者。\"<br><span style=\"font-size:14px;color:var(--text2)\">三层境界：知道(最低) → 喜好(中等) → 以之为乐(最高)</span></p>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"不亦说乎\"中\"说\"：",
              "opts": [
                "A. 说话",
                "B. 通悦愉快",
                "C. 解释",
                "D. 据说"
              ],
              "ans": 1,
              "exp": "通假字说=悦。"
            },
            {
              "diff": "basic",
              "q": "\"三省\"中\"三\"指：",
              "opts": [
                "A. 三次",
                "B. 多次",
                "C. 三件事",
                "D. 三天"
              ],
              "ans": 1,
              "exp": "虚数表多次。"
            },
            {
              "diff": "medium",
              "q": "\"学而不思则罔\"告诉我们要：",
              "opts": [
                "A. 只学",
                "B. 学思结合",
                "C. 只思",
                "D. 学比思重要"
              ],
              "ans": 1,
              "exp": "学思结合缺一不可。"
            },
            {
              "diff": "medium",
              "q": "\"贤哉回也\"是什么句式：",
              "opts": [
                "A. 疑问句",
                "B. 倒装句谓语前置",
                "C. 陈述句",
                "D. 被动句"
              ],
              "ans": 1,
              "exp": "谓语贤前置强调贤德。"
            },
            {
              "diff": "hard",
              "q": "\"知之不如好之好之不如乐之\"三层：",
              "opts": [
                "A. 爱好→快乐→知道",
                "B. 知道→喜好→以为乐",
                "C. 快乐→知道→爱好",
                "D. 知道→快乐→爱好"
              ],
              "ans": 1,
              "exp": "知道最低喜好中等以为乐最高。"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "论语十二章",
              "u": "https://search.bilibili.com/all?keyword=论语十二章+初中"
            }
          ]
        },
        {
          "type": "阅读理解",
          "topic": "概括文章主要内容",
          "tagColor": "#34d399",
          "content": "<p><b>四种方法学概括</b></p><div class=\"reading-passage\"><b>📖 《外婆的桂花糕》</b><br><br>每到秋天外婆总会做桂花糕。她清晨去摇桂花金黄色的花瓣纷纷落下像一场金色的雨。外婆把桂花洗净晾干和糯米粉白糖一层层铺进蒸笼。满屋飘香时我总忍不住一趟趟跑进厨房问好了没有。外婆笑说小馋猫好东西要慢慢等。<br><br>去年秋天外婆走了。妈妈试着做桂花糕味道很像可总觉得少了点什么——大概是少了外婆那声小馋猫吧。</div><p>① <b>要素归纳法</b>——谁+做了什么+结果/情感→外婆为我做桂花糕表达对外婆的思念</p><p>② <b>段意合并法</b>——第1段做桂花糕+第2段思念</p><p>③ <b>找中心句</b>——结尾每次闻到桂花香就想起外婆</p><p>④ <b>题目扩展法</b>——围绕桂花糕展开谁做的为什么难忘</p><p><b>口诀：</b>谁+做什么+为什么/结果控制30-50字</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "要素法概括本文：",
              "opts": [
                "A. 桂花糕好吃",
                "B. 外婆做桂花糕表达思念",
                "C. 秋天到了",
                "D. 妈妈做桂花糕"
              ],
              "ans": 1,
              "exp": "谁+做什么+情感。"
            },
            {
              "diff": "basic",
              "q": "最常用的概括法：",
              "opts": [
                "A. 抄原文",
                "B. 要素归纳法",
                "C. 只看标题",
                "D. 读最后一段"
              ],
              "ans": 1,
              "exp": "要素法最通用有效。"
            },
            {
              "diff": "medium",
              "q": "\"一趟趟跑进厨房\"概括时：",
              "opts": [
                "A. 详细写",
                "B. 概括为急切等待",
                "C. 忽略",
                "D. 单独成段"
              ],
              "ans": 1,
              "exp": "细节需提炼。"
            },
            {
              "diff": "medium",
              "q": "概括为\"做桂花糕过程\"的不足：",
              "opts": [
                "A. 没不足",
                "B. 缺少情感主旨",
                "C. 字数多",
                "D. 没提桂花"
              ],
              "ans": 1,
              "exp": "需点明情感主旨。"
            },
            {
              "diff": "hard",
              "q": "25字内最佳概括：",
              "opts": [
                "A. 外婆做桂花糕",
                "B. 借桂花糕往事表达对外婆的思念",
                "C. 秋天故事",
                "D. 学做桂花糕"
              ],
              "ans": 1,
              "exp": "事件+情感15字。"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "概括文章方法",
              "u": "https://search.bilibili.com/all?keyword=概括文章主要内容+方法"
            }
          ]
        }
      ],
      "quiz": [
        {
          "topic": "字音",
          "q": "\"载歌载舞\"中\"载\"的读音：",
          "opts": [
            "A. zǎi",
            "B. zài",
            "C. cái",
            "D. zhài"
          ],
          "ans": 1,
          "exp": "载歌载舞读zài，记载读zǎi。"
        },
        {
          "topic": "字音",
          "q": "注音全对：",
          "opts": [
            "A. 勉强qiáng 处分chù",
            "B. 气氛fēn 处分chǔ",
            "C. 潜力qián 档案dàng",
            "D. 附和hé"
          ],
          "ans": 2,
          "exp": "A强qiǎngD和hè。C全对。"
        },
        {
          "topic": "诗词",
          "q": "表现博大胸怀：",
          "opts": [
            "A. 东临碣石",
            "B. 树木丛生",
            "C. 日月之行若出其中",
            "D. 幸甚至哉"
          ],
          "ans": 2,
          "exp": "想象展现博大胸怀。"
        },
        {
          "topic": "诗词",
          "q": "描写季节：",
          "opts": [
            "A. 春",
            "B. 夏",
            "C. 秋",
            "D. 冬"
          ],
          "ans": 2,
          "exp": "秋风萧瑟点明秋季。"
        },
        {
          "topic": "论语",
          "q": "\"温故知新\"含义：",
          "opts": [
            "A. 新旧都学",
            "B. 复习旧知得新理解",
            "C. 扔掉旧的",
            "D. 只学新的"
          ],
          "ans": 1,
          "exp": "从旧知获新体会。"
        },
        {
          "topic": "论语",
          "q": "非论语成语：",
          "opts": [
            "A. 不亦乐乎",
            "B. 温故知新",
            "C. 三人行",
            "D. 指鹿为马"
          ],
          "ans": 3,
          "exp": "指鹿为马出自史记。"
        },
        {
          "topic": "阅读",
          "q": "概括字数一般：",
          "opts": [
            "A. 10字",
            "B. 30-50字",
            "C. 100字",
            "D. 越多越好"
          ],
          "ans": 1,
          "exp": "简洁完整30-50字。"
        },
        {
          "topic": "综合",
          "q": "关于观沧海说法错：",
          "opts": [
            "A. 曹操作",
            "B. 四言古诗",
            "C. 澹澹读dàn",
            "D. 表达归隐"
          ],
          "ans": 3,
          "exp": "表达统一天下雄心。"
        }
      ]
    },
    {
      "day": 2,
      "title": "字形与鉴赏",
      "topics": "字形·闻王昌龄·论语(二)·标题含义",
      "sections": [
        {
          "type": "基础运用",
          "topic": "字形",
          "tagColor": "#f59e0b",
          "content": "<p><b>常考易错字（据义辨形）</b></p><table class=\"grammar-table\"><tr><th>正确</th><th>错误</th><th>记忆</th></tr><tr><td>川流不息</td><td>穿流不息</td><td>川=河流</td></tr><tr><td>谈笑风生</td><td>谈笑风声</td><td>风生=风趣产生</td></tr><tr><td>再接再厉</td><td>再接再励</td><td>厉=磨砺</td></tr><tr><td>迫不及待</td><td>迫不急待</td><td>及=达到</td></tr><tr><td>一诺千金</td><td>一诺千斤</td><td>千金非斤两</td></tr><tr><td>出其不意</td><td>出奇不意</td><td>其=对方</td></tr><tr><td>一筹莫展</td><td>一愁莫展</td><td>筹=计策</td></tr><tr><td>班门弄斧</td><td>搬门弄斧</td><td>班=鲁班</td></tr></table><p><b>方法：据义辨形</b>——理解成语意思推断正确用字。</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "书写正确的是：",
              "opts": [
                "A. 穿流不息",
                "B. 谈笑风声",
                "C. 再接再厉",
                "D. 迫不急待"
              ],
              "ans": 2,
              "exp": "A川B风生D不及。"
            },
            {
              "diff": "basic",
              "q": "\"一诺千金\"易误写为：",
              "opts": [
                "A. 一诺千斤",
                "B. 一诺千巾",
                "C. 一诺千经",
                "D. 一诺千京"
              ],
              "ans": 0,
              "exp": "千金非斤两。"
            },
            {
              "diff": "medium",
              "q": "全对的一组：",
              "opts": [
                "A. 走头无路汗流夹背",
                "B. 再接再厉川流不息",
                "C. 搬门弄斧完壁归赵",
                "D. 张冠李带按步就班"
              ],
              "ans": 1,
              "exp": "A投/浃C班/璧D戴/部。"
            },
            {
              "diff": "medium",
              "q": "\"谈笑风生\"易错原因：",
              "opts": [
                "A. 不知意思",
                "B. 误以为有风声",
                "C. 字难写",
                "D. 两种均可"
              ],
              "ans": 1,
              "exp": "风生=风趣产生非风声。"
            },
            {
              "diff": "hard",
              "q": "全是错别字的是：",
              "opts": [
                "A. 川流不息",
                "B. 出奇不意一愁莫展",
                "C. 再接再厉",
                "D. 一诺千金"
              ],
              "ans": 1,
              "exp": "应为出其不意一筹莫展。"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "错别字辨析",
              "u": "https://search.bilibili.com/all?keyword=常见错别字+辨析"
            }
          ]
        },
        {
          "type": "诗词鉴赏",
          "topic": "《闻王昌龄左迁龙标遥有此寄》",
          "tagColor": "#a78bfa",
          "content": "<div class=\"poem-card\"><div class=\"poem-title\">闻王昌龄左迁龙标遥有此寄</div><div class=\"poem-author\">【唐】李白</div><div class=\"poem-text\">杨花落尽子规啼，<br>闻道龙标过五溪。<br>我寄愁心与明月，<br>随君直到夜郎西。</div><div class=\"poem-notes\"><b>【注解】</b>左迁=贬官<br>子规=杜鹃<br>龙标=被贬地<br>夜郎=古国名<br><br><b>【背景】</b>王昌龄被贬李白写诗寄友表达同情牵挂。<br><br><b>【手法】</b>借景抒情(杨花子规)+拟人(托明月寄愁心)<br><br><b>【名句】</b>\"我寄愁心与明月随君直到夜郎西\"——将无形愁心托明月化抽象为具体蕴含深沉友情。</div></div>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"左迁\"意思是：",
              "opts": [
                "A. 升官",
                "B. 贬官",
                "C. 调任",
                "D. 退休"
              ],
              "ans": 1,
              "exp": "古以右为尊左迁即贬。"
            },
            {
              "diff": "basic",
              "q": "作者：",
              "opts": [
                "A. 杜甫",
                "B. 李白",
                "C. 王维",
                "D. 王昌龄"
              ],
              "ans": 1,
              "exp": "李白寄被贬好友。"
            },
            {
              "diff": "medium",
              "q": "\"杨花落尽子规啼\"作用：",
              "opts": [
                "A. 写春景",
                "B. 渲染离别哀愁",
                "C. 说明时间",
                "D. 表达喜悦"
              ],
              "ans": 1,
              "exp": "杨花飘零+子规哀啼。"
            },
            {
              "diff": "medium",
              "q": "\"我寄愁心与明月\"修辞：",
              "opts": [
                "A. 比喻",
                "B. 拟人",
                "C. 夸张",
                "D. 对比"
              ],
              "ans": 1,
              "exp": "托明月如托人。"
            },
            {
              "diff": "hard",
              "q": "\"随君直到夜郎西\"表达：",
              "opts": [
                "A. 想去夜郎",
                "B. 想象明月陪伴友人远行",
                "C. 批评王昌龄",
                "D. 写风景"
              ],
              "ans": 1,
              "exp": "想象表达深沉友情。"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "闻王昌龄左迁龙标",
              "u": "https://search.bilibili.com/all?keyword=闻王昌龄左迁龙标"
            }
          ]
        },
        {
          "type": "文言文",
          "topic": "《论语》十二章（二）",
          "tagColor": "#fb923c",
          "content": "<p><b>论语十二章（二）—— 第7-12章</b></p>\n\n<p><b>⑦ 三人行必有我师</b><br>子曰：\"三人行，必有我师焉。择其善者而从之，其不善者而改之。\"<br><span style=\"font-size:14px;color:var(--text2)\">【焉=于之，在其中（兼词）| 善者=好的方面 | 从=跟从学习】</span></p>\n\n<p><b>⑧ 逝者如斯</b><br>子在川上曰：\"逝者如斯夫，不舍昼夜。\"<br><span style=\"font-size:14px;color:var(--text2)\">【逝=往、流逝 | 斯=这，指河水 | 舍=停止 | 夫fú=语气词】</span></p>\n\n<p><b>⑨ 匹夫不可夺志</b><br>子曰：\"三军可夺帅也，匹夫不可夺志也。\"<br><span style=\"font-size:14px;color:var(--text2)\">【三军=军队的统称 | 夺=改变 | 匹夫=普通人，男子汉】</span></p>\n\n<p><b>⑩ 博学笃志，切问近思</b><br>子夏曰：\"博学而笃志，切问而近思，仁在其中矣。\"<br><span style=\"font-size:14px;color:var(--text2)\">【笃dǔ=坚定 | 切=恳切 | 近思=思考当前的问题】</span></p>\n\n<p><b>⑪ 不义而富且贵</b><br>子曰：\"饭疏食饮水，曲肱而枕之，乐亦在其中矣。不义而富且贵，于我如浮云。\"<br><span style=\"font-size:14px;color:var(--text2)\">【饭=吃（动词）| 疏食=粗粮 | 肱gōng=胳膊 | 义=正当手段】</span></p>\n\n<p><b>⑫ 岁寒知松柏</b><br>子曰：\"岁寒，然后知松柏之后凋也。\"<br><span style=\"font-size:14px;color:var(--text2)\">【岁寒=天冷的时候 | 凋diāo=凋谢、凋零 | 比喻：在艰难环境中才能看出人的坚贞品格】</span></p>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"三人行必有我师焉\"中\"焉\"：",
              "opts": [
                "A. 哪里",
                "B. 于之在其中",
                "C. 语气词",
                "D. 他们"
              ],
              "ans": 1,
              "exp": "兼词=于之。"
            },
            {
              "diff": "basic",
              "q": "\"逝者如斯\"中\"逝者\"指：",
              "opts": [
                "A. 死人",
                "B. 流逝的时光",
                "C. 朋友",
                "D. 错误"
              ],
              "ans": 1,
              "exp": "时光如流水逝去。"
            },
            {
              "diff": "medium",
              "q": "告诉我们要虚心学习的是：",
              "opts": [
                "A. 温故知新",
                "B. 三人行必有我师",
                "C. 逝者如斯",
                "D. 匹夫不可夺志"
              ],
              "ans": 1,
              "exp": "几人中必有可学之人。"
            },
            {
              "diff": "medium",
              "q": "\"匹夫不可夺志\"说明：",
              "opts": [
                "A. 军队不重要",
                "B. 志向比统帅还重要",
                "C. 可夺统帅",
                "D. 统帅可换"
              ],
              "ans": 1,
              "exp": "普通人志向也不能夺。"
            },
            {
              "diff": "hard",
              "q": "\"岁寒知松柏\"寓意：",
              "opts": [
                "A. 松柏耐寒",
                "B. 困境考验人的品格",
                "C. 松柏慢",
                "D. 冬宜种松柏"
              ],
              "ans": 1,
              "exp": "比喻困境考验坚贞品格。"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "论语后六章",
              "u": "https://search.bilibili.com/all?keyword=论语十二章+后六章"
            }
          ]
        },
        {
          "type": "阅读理解",
          "topic": "标题的含义和作用",
          "tagColor": "#34d399",
          "content": "<p><b>标题三层分析：表层+深层+作用</b></p><div class=\"reading-passage\"><b>📖 《走一步再走一步》节选</b><br><br>父亲找到困在悬崖上的我平静地说不要想下面有多远只想着先走一小步。我小心翼翼伸出左脚踩住下面岩石成功了！很好父亲说现在移动右脚再走一步。就这样我一步步爬下了悬崖。<br><br>此后每当遇到困难我都会想起那个傍晚——不要想结果有多远只专注于眼前能走的一小步。走一步再走一步终会到达。</div><p><b>表层：</b>爬悬崖一步步走下的动作</p><p><b>深层：</b>将大困难分解为小步骤一步步克服的人生哲理</p><p><b>作用：</b>①全文线索<br>②暗示主旨<br>③设置悬念</p><p><b>答题模板：</b>表层指…深层指…作用是…</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "表层含义：",
              "opts": [
                "A. 人生哲理",
                "B. 一步步走下的动作",
                "C. 走路方法",
                "D. 爬山技巧"
              ],
              "ans": 1,
              "exp": "表层指动作深层才是哲理。"
            },
            {
              "diff": "basic",
              "q": "分析标题从哪两层：",
              "opts": [
                "A. 开头结尾",
                "B. 表层和深层",
                "C. 正面反面",
                "D. 过去现在"
              ],
              "ans": 1,
              "exp": "标准方法。"
            },
            {
              "diff": "medium",
              "q": "标题作用：",
              "opts": [
                "A. 概括内容",
                "B. 线索+点明主旨",
                "C. 没有作用",
                "D. 仅吸引读者"
              ],
              "ans": 1,
              "exp": "贯穿全文+揭示道理。"
            },
            {
              "diff": "medium",
              "q": "只写一步步走下的不足：",
              "opts": [
                "A. 没问题",
                "B. 缺深层含义和作用",
                "C. 字数少",
                "D. 语法错"
              ],
              "ans": 1,
              "exp": "须覆盖三层。"
            },
            {
              "diff": "hard",
              "q": "最佳标题赏析：",
              "opts": [
                "A. 形象写走路",
                "B. 表层爬崖动作深层分解困难哲理作为全文线索贯穿始终",
                "C. 标题有趣",
                "D. 写父亲教育"
              ],
              "ans": 1,
              "exp": "B完整覆盖三层。"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "标题含义和作用",
              "u": "https://search.bilibili.com/all?keyword=标题含义和作用+阅读理解"
            }
          ]
        }
      ],
      "quiz": [
        {
          "topic": "字形",
          "q": "书写正确的是：",
          "opts": [
            "A. 一愁莫展",
            "B. 出奇不意",
            "C. 再接再厉",
            "D. 迫不急待"
          ],
          "ans": 2,
          "exp": "A一筹B出其D不及。"
        },
        {
          "topic": "字形",
          "q": "\"川流不息\"川指：",
          "opts": [
            "A. 穿过",
            "B. 河流",
            "C. 高山",
            "D. 平原"
          ],
          "ans": 1,
          "exp": "川=河流。"
        },
        {
          "topic": "诗词",
          "q": "\"我寄愁心与明月\"修辞：",
          "opts": [
            "A. 比喻",
            "B. 拟人",
            "C. 夸张",
            "D. 对比"
          ],
          "ans": 1,
          "exp": "托明月如托人。"
        },
        {
          "topic": "诗词",
          "q": "王昌龄被贬到：",
          "opts": [
            "A. 夜郎",
            "B. 龙标",
            "C. 五溪",
            "D. 碣石"
          ],
          "ans": 1,
          "exp": "左迁龙标。"
        },
        {
          "topic": "论语",
          "q": "说明志向重要：",
          "opts": [
            "A. 军可夺帅",
            "B. 匹夫不可夺志",
            "C. 逝者如斯",
            "D. 温故知新"
          ],
          "ans": 1,
          "exp": "匹夫志不可夺。"
        },
        {
          "topic": "论语",
          "q": "\"逝者如斯\"斯指：",
          "opts": [
            "A. 这个人",
            "B. 这河水",
            "C. 死",
            "D. 时间"
          ],
          "ans": 1,
          "exp": "斯=代词指河水。"
        },
        {
          "topic": "阅读",
          "q": "标题答题模板：",
          "opts": [
            "A. 只写表层",
            "B. 表层+深层+作用",
            "C. 只写作用",
            "D. 写感受"
          ],
          "ans": 1,
          "exp": "三层标准模板。"
        },
        {
          "topic": "阅读",
          "q": "标题作用不包括：",
          "opts": [
            "A. 线索",
            "B. 点明主旨",
            "C. 增加字数",
            "D. 吸引读者"
          ],
          "ans": 2,
          "exp": "增加字数不是作用。"
        }
      ]
    },
    {
      "day": 3,
      "title": "词语与赏析",
      "topics": "词语运用·天净沙秋思·咏雪·句子赏析",
      "sections": [
        {
          "type": "基础运用",
          "topic": "词语运用（1）",
          "tagColor": "#f59e0b",
          "content": "<p><b>一、近义词辨析三维度</b></p><p><b>①语义轻重：</b>损坏(轻)→破坏(重)<br>批评→批判<br>失望→绝望</p><p><b>②搭配对象：</b>改善+抽象(生活/环境)改正+具体(缺点/错误)<br>发挥+能力发扬+传统</p><p><b>③感情色彩：</b>夸奖(褒)→夸耀(贬)<br>团结(褒)→勾结(贬)<br>成果(褒)→后果(贬)→结果(中)</p><p><b>二、常考易误用成语</b></p><table class=\"grammar-table\"><tr><th>成语</th><th>正确意思</th><th>常见误用</th></tr><tr><td>首当其冲</td><td>最先受到攻击/灾难</td><td>误作一马当先</td></tr><tr><td>差强人意</td><td>大体上还能使人满意</td><td>误作不满意</td></tr><tr><td>炙手可热</td><td>权势大气焰盛(贬)</td><td>误作受欢迎</td></tr><tr><td>不以为然</td><td>不认为是对的</td><td>误作不在意</td></tr><tr><td>不刊之论</td><td>不可更改的言论(褒)</td><td>误作不能刊登</td></tr></table>",
          "problems": [
            {
              "diff": "basic",
              "q": "使用正确的是：",
              "opts": [
                "A. 他首当其冲",
                "B. 差强人意大体满意",
                "C. 明星炙手可热",
                "D. 不刊之论不能刊登"
              ],
              "ans": 1,
              "exp": "A一马当先C权势贬D不可改。"
            },
            {
              "diff": "basic",
              "q": "改善vs改正区别：",
              "opts": [
                "A. 无区别",
                "B. 改善+抽象改正+具体",
                "C. 改善更重",
                "D. 改善贬义"
              ],
              "ans": 1,
              "exp": "搭配对象不同。"
            },
            {
              "diff": "medium",
              "q": "感情色彩相同：",
              "opts": [
                "A. 夸奖夸耀",
                "B. 团结勾结",
                "C. 赞美表扬",
                "D. 成果后果"
              ],
              "ans": 2,
              "exp": "C均褒义。A褒/贬B褒/贬D褒/贬。"
            },
            {
              "diff": "medium",
              "q": "使用不当：",
              "opts": [
                "A. 差强人意",
                "B. 首当其冲救人",
                "C. 炙手可热",
                "D. 不以为然"
              ],
              "ans": 2,
              "exp": "炙手可热权势大贬。"
            },
            {
              "diff": "medium",
              "q": "损坏vs破坏：",
              "opts": [
                "A. 相同",
                "B. 损坏轻破坏重",
                "C. 破坏轻",
                "D. 损坏褒"
              ],
              "ans": 1,
              "exp": "语义轻重不同。"
            },
            {
              "diff": "hard",
              "q": "\"差强人意\"差的意思：",
              "opts": [
                "A. 差别",
                "B. 稍微大体上",
                "C. 很差",
                "D. 出差"
              ],
              "ans": 1,
              "exp": "差=稍微。"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "成语误用",
              "u": "https://search.bilibili.com/all?keyword=近义词辨析+成语误用"
            }
          ]
        },
        {
          "type": "诗词鉴赏",
          "topic": "《天净沙·秋思》",
          "tagColor": "#a78bfa",
          "content": "<div class=\"poem-card\"><div class=\"poem-title\">天净沙·秋思</div><div class=\"poem-author\">【元】马致远</div><div class=\"poem-text\">枯藤老树昏鸦，小桥流水人家，古道西风瘦马。<br>夕阳西下，断肠人在天涯。</div><div class=\"poem-notes\"><b>【特色】</b>①<b>列锦手法</b>：前三句18字9个名词意象无一动词画面极强<br>②<b>以乐景写哀情</b>：小桥流水人家温馨反衬游子孤寂<br>③<b>卒章显志</b>：末句点明悲苦<br>④意象全用衰败之景：枯、老、昏、古、西、瘦</div></div>",
          "problems": [
            {
              "diff": "basic",
              "q": "作者：",
              "opts": [
                "A. 李白",
                "B. 马致远",
                "C. 杜甫",
                "D. 王湾"
              ],
              "ans": 1,
              "exp": "元曲家秋思之祖。"
            },
            {
              "diff": "basic",
              "q": "直接表情一句：",
              "opts": [
                "A. 枯藤老树",
                "B. 小桥流水",
                "C. 夕阳西下",
                "D. 断肠人在天涯"
              ],
              "ans": 3,
              "exp": "末句直抒胸臆。"
            },
            {
              "diff": "medium",
              "q": "前三句特点：",
              "opts": [
                "A. 全动词",
                "B. 列锦手法九意象无动词",
                "C. 全拟人",
                "D. 全夸张"
              ],
              "ans": 1,
              "exp": "18字9名词无动词。"
            },
            {
              "diff": "medium",
              "q": "\"小桥流水人家\"作用：",
              "opts": [
                "A. 写风景",
                "B. 以温馨反衬游子孤寂",
                "C. 写家乡",
                "D. 无特别"
              ],
              "ans": 1,
              "exp": "以乐景写哀情。"
            },
            {
              "diff": "hard",
              "q": "\"枯老昏\"三字作用：",
              "opts": [
                "A. 名词",
                "B. 渲染衰败凄凉气氛",
                "C. 写树鸦",
                "D. 无作用"
              ],
              "ans": 1,
              "exp": "三形容词渲染凄凉。"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "天净沙秋思",
              "u": "https://search.bilibili.com/all?keyword=天净沙秋思+赏析"
            }
          ]
        },
        {
          "type": "文言文",
          "topic": "《咏雪》",
          "tagColor": "#fb923c",
          "content": "<p>谢太傅寒雪日内集与儿女讲论文义。<br>俄而雪骤公欣然曰白雪纷纷何所似？<br>兄子胡儿曰撒盐空中差可拟。<br>兄女曰未若柳絮因风起。<br>公大笑乐。<br>即公大兄无奕女左将军王凝之妻也。</p><p  style=\"font-size:14px;color:var(--text2)\">【翻译】谢安在雪天与子侄辈谈论诗文。<br>雪大了他问白雪纷纷像什么？<br>侄子谢朗说空中撒盐大体可以比拟。<br>侄女谢道韫说不如此作风吹柳絮满天飞。<br>谢安大笑。</p><p><b>谢道韫比喻更好的原因：</b>①柳絮轻盈飘舞更像雪花<br>②柳絮带来春日意境富有诗意<br>③盐虽色似但下沉感强缺乏美感</p><p style=\"font-size:14px;color:var(--text2)\">出处：世说新语<br>差可拟=大体可以比拟</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "出自：",
              "opts": [
                "A. 论语",
                "B. 世说新语",
                "C. 史记",
                "D. 吕氏春秋"
              ],
              "ans": 1,
              "exp": "刘义庆编。"
            },
            {
              "diff": "basic",
              "q": "谢道韫比作：",
              "opts": [
                "A. 盐",
                "B. 柳絮",
                "C. 花瓣",
                "D. 羽毛"
              ],
              "ans": 1,
              "exp": "未若柳絮因风起。"
            },
            {
              "diff": "medium",
              "q": "更好的原因：",
              "opts": [
                "A. 柳絮更白",
                "B. 轻盈飘舞+诗意",
                "C. 盐太重",
                "D. 因是女孩"
              ],
              "ans": 1,
              "exp": "姿态+意境。"
            },
            {
              "diff": "medium",
              "q": "\"差可拟\"差的意思：",
              "opts": [
                "A. 差别",
                "B. 大体差不多",
                "C. 很差",
                "D. 出差"
              ],
              "ans": 1,
              "exp": "差可拟=大体可比拟。"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "咏雪世说新语",
              "u": "https://search.bilibili.com/all?keyword=咏雪+世说新语"
            }
          ]
        },
        {
          "type": "阅读理解",
          "topic": "句子赏析",
          "tagColor": "#34d399",
          "content": "<p><b>句子赏析四步：找修辞→析用词→明描写→说效果</b></p><div class=\"reading-passage\"><b>📖 赏析素材</b><br>①春天像刚落地的娃娃从头到脚都是新的。<br>②他哆嗦得像风雨中的树叶。<br>③母亲立刻坐下去立刻弯曲了背立刻将头俯在缝纫机板上。<br>④月亮悄悄爬上了树梢。</div><p>①<b>比喻</b>——春天比作娃娃突出新生</p><p>②<b>比喻+神态</b>——风雨中树叶写脆弱颤抖</p><p>③<b>排比+反复</b>——三个立刻突出连续紧张</p><p>④<b>拟人</b>——悄悄爬赋予月亮生命营造宁静意境</p><p><b>答题模板：</b>运用了…修辞生动形象地写出了…表达了…</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "①修辞：",
              "opts": [
                "A. 拟人",
                "B. 比喻",
                "C. 夸张",
                "D. 排比"
              ],
              "ans": 1,
              "exp": "春天比作娃娃。"
            },
            {
              "diff": "basic",
              "q": "赏析角度不包括：",
              "opts": [
                "A. 修辞",
                "B. 用词",
                "C. 描写",
                "D. 字数"
              ],
              "ans": 3,
              "exp": "字数非赏析角度。"
            },
            {
              "diff": "medium",
              "q": "②好在哪里：",
              "opts": [
                "A. 字少",
                "B. 比喻生动写脆弱",
                "C. 无特别",
                "D. 写天气"
              ],
              "ans": 1,
              "exp": "风雨树叶生动形象。"
            },
            {
              "diff": "medium",
              "q": "三个立刻修辞：",
              "opts": [
                "A. 比喻",
                "B. 排比+反复突出紧张",
                "C. 无修辞",
                "D. 拟人"
              ],
              "ans": 1,
              "exp": "排比反复突出连续紧张。"
            },
            {
              "diff": "hard",
              "q": "④最佳赏析：",
              "opts": [
                "A. 写景",
                "B. 悄悄爬拟人化赋予生命营造宁静",
                "C. 月亮在动",
                "D. 不生动"
              ],
              "ans": 1,
              "exp": "修辞+效果完整赏析。"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "句子赏析",
              "u": "https://search.bilibili.com/all?keyword=句子赏析+阅读理解"
            }
          ]
        }
      ],
      "quiz": [
        {
          "topic": "词语",
          "q": "\"差强人意\"：",
          "opts": [
            "A. 不满意",
            "B. 大体满意",
            "C. 非常满意",
            "D. 完全不满意"
          ],
          "ans": 1,
          "exp": "差=稍微。"
        },
        {
          "topic": "词语",
          "q": "\"炙手可热\"正确用法：",
          "opts": [
            "A. 明星炙手可热",
            "B. 炙手可热的权贵",
            "C. 炙手可热的商品",
            "D. 炙手可热的美食"
          ],
          "ans": 1,
          "exp": "权势大贬用于权贵。"
        },
        {
          "topic": "诗词",
          "q": "直接写游子悲苦：",
          "opts": [
            "A. 枯藤老树",
            "B. 小桥流水",
            "C. 夕阳西下",
            "D. 断肠人在天涯"
          ],
          "ans": 3,
          "exp": "末句点明断肠。"
        },
        {
          "topic": "诗词",
          "q": "全曲曲眼：",
          "opts": [
            "A. 枯",
            "B. 瘦",
            "C. 断肠",
            "D. 天涯"
          ],
          "ans": 2,
          "exp": "断肠是情感核心。"
        },
        {
          "topic": "文言",
          "q": "咏雪出自：",
          "opts": [
            "A. 论语",
            "B. 世说新语",
            "C. 史记",
            "D. 左传"
          ],
          "ans": 1,
          "exp": "世说新语。"
        },
        {
          "topic": "文言",
          "q": "柳絮优于盐的原因：",
          "opts": [
            "A. 更白",
            "B. 轻盈飘舞+春意境",
            "C. 盐太咸",
            "D. 柳絮更重"
          ],
          "ans": 1,
          "exp": "姿态+诗意。"
        },
        {
          "topic": "阅读",
          "q": "赏析步骤不含：",
          "opts": [
            "A. 找修辞",
            "B. 析用词",
            "C. 数字数",
            "D. 说效果"
          ],
          "ans": 2,
          "exp": "字数非赏析步骤。"
        },
        {
          "topic": "阅读",
          "q": "\"月亮悄悄爬上树梢\"修辞：",
          "opts": [
            "A. 比喻",
            "B. 拟人",
            "C. 夸张",
            "D. 排比"
          ],
          "ans": 1,
          "exp": "悄悄爬赋予人的动作。"
        }
      ]
    },
    {
      "day": 4,
      "title": "词语与人物",
      "topics": "关联词·次北固山下·陈太丘·人物分析",
      "sections": [
        {
          "type": "基础运用",
          "topic": "关联词",
          "tagColor": "#f59e0b",
          "content": "<p><b>常见关联词类型</b></p><table class=\"grammar-table\"><tr><th>关系</th><th>关联词</th><th>例句</th></tr><tr><td>并列</td><td>既……又……</td><td>既聪明又勤奋</td></tr><tr><td>递进</td><td>不但……而且……</td><td>不但成绩好而且品德好</td></tr><tr><td>选择</td><td>不是……就是……</td><td>不是你去就是我去</td></tr><tr><td>转折</td><td>虽然……但是……</td><td>虽然下雨但是要去</td></tr><tr><td>因果</td><td>因为……所以……</td><td>因为努力所以成功</td></tr><tr><td>条件</td><td>只有……才……<br>只要……就……</td><td>只有努力才能成功</td></tr><tr><td>假设</td><td>如果……就……<br>即使……也……</td><td>如果下雨就不去了</td></tr></table><p><b>易混：</b>只有……才(必要条件) vs 只要……就(充分条件) <br>即使……也(假设让步) vs 虽然……但是(事实转折)</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"___努力___能成功\"：",
              "opts": [
                "A. 虽然…但是…",
                "B. 只有…才…",
                "C. 因为…所以…",
                "D. 不是…就是…"
              ],
              "ans": 1,
              "exp": "必要条件"
            },
            {
              "diff": "basic",
              "q": "\"___下雨___不去\"：",
              "opts": [
                "A. 虽然…但是…",
                "B. 只要…就…",
                "C. 如果…就…",
                "D. 即使…也…"
              ],
              "ans": 2,
              "exp": "假设"
            },
            {
              "diff": "medium",
              "q": "即使vs虽然的区别：",
              "opts": [
                "A. 无区别",
                "B. 前者假设让步后者事实转折",
                "C. 前者事实后者假设",
                "D. 都表转折"
              ],
              "ans": 1,
              "exp": "即使=未发生，虽然=已发生"
            },
            {
              "diff": "medium",
              "q": "使用不当：",
              "opts": [
                "A. 既然来了就好好学",
                "B. 只有努力才能成功",
                "C. 因为下雨但是没去",
                "D. 不但聪明而且勤奋"
              ],
              "ans": 2,
              "exp": "因为和但是不搭配"
            },
            {
              "diff": "hard",
              "q": "\"___困难___不放弃\"：",
              "opts": [
                "A. 如果…就…",
                "B. 即使…也…",
                "C. 只要…就…",
                "D. 虽然…但是…"
              ],
              "ans": 1,
              "exp": "假设让步最合语境"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "关联词",
              "u": "https://search.bilibili.com/all?keyword=关联词+用法"
            }
          ]
        },
        {
          "type": "诗词鉴赏",
          "topic": "《次北固山下》",
          "tagColor": "#a78bfa",
          "content": "<div class=\"poem-card\"><div class=\"poem-title\">次北固山下</div><div class=\"poem-author\">【唐】王湾</div><div class=\"poem-text\">客路青山外，行舟绿水前。<br>潮平两岸阔，风正一帆悬。<br>海日生残夜，江春入旧年。<br>乡书何处达？归雁洛阳边。</div><div class=\"poem-notes\"><b>【注解】</b>次=停泊<br>残夜=夜将尽时<br><br><b>【背景】</b>诗人旅途中停泊北固山下面对早春触发思乡。<br><br><b>【名句】</b>\"海日生残夜江春入旧年\"——残夜未尽日已出，旧年未过春已来，新旧交替的哲理。\"生\"\"入\"赋予景物动态美。</div></div>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"次\"的意思：",
              "opts": [
                "A. 第二次",
                "B. 停泊",
                "C. 次序",
                "D. 次要"
              ],
              "ans": 1,
              "exp": "次=停泊"
            },
            {
              "diff": "basic",
              "q": "思乡句子：",
              "opts": [
                "A. 潮平两岸阔",
                "B. 风正一帆悬",
                "C. 乡书何处达",
                "D. 海日生残夜"
              ],
              "ans": 2,
              "exp": "问家书寄处"
            },
            {
              "diff": "medium",
              "q": "\"海日生残夜\"哲理：",
              "opts": [
                "A. 时间慢",
                "B. 新事物取代旧事物",
                "C. 海边美",
                "D. 新年到"
              ],
              "ans": 1,
              "exp": "新旧交替"
            },
            {
              "diff": "medium",
              "q": "颔联描绘的画面：",
              "opts": [
                "A. 壮阔江景",
                "B. 凄凉",
                "C. 暴风雨",
                "D. 山景"
              ],
              "ans": 0,
              "exp": "潮平江阔一帆高悬"
            },
            {
              "diff": "hard",
              "q": "\"生\"\"入\"好在哪：",
              "opts": [
                "A. 普通",
                "B. 赋予动态和生命力",
                "C. 习惯",
                "D. 无特别"
              ],
              "ans": 1,
              "exp": "动态美和生命力"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "次北固山下",
              "u": "https://search.bilibili.com/all?keyword=次北固山下+赏析"
            }
          ]
        },
        {
          "type": "文言文",
          "topic": "《陈太丘与友期》",
          "tagColor": "#fb923c",
          "content": "<p>陈太丘与友期行期日中。<br>过中不至太丘舍去。<br>去后乃至。<br>元方时年七岁门外戏。<br>客问元方尊君在不？<br>答曰待君久不至已去。<br>友人便怒曰非人哉与人期行相委而去。<br>元方曰君与家君期日中。<br>日中不至则是无信；对子骂父则是无礼。<br>友人惭下车引之。<br>元方入门不顾。</p><p  style=\"font-size:14px;color:var(--text2)\">【翻译】陈太丘与友约中午同行。<br>友过中午没到太丘便走了。<br>友到后问元方父在否元方答等久没来已走。<br>友怒骂约好却丢下我。<br>元方说约中午不到=无信对子骂父=无礼。<br>友惭下车想拉元方头也不回进门。</p><p><b>人物：</b>元方七岁机智不卑不亢 <br>友人无信无礼但知错能改</p><p style=\"font-size:14px;color:var(--text2)\">字词：期=约定<br>去=离开<br>委=丢下<br>引=拉<br>顾=回头看</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"期\"的意思：",
              "opts": [
                "A. 日期",
                "B. 约定",
                "C. 期望",
                "D. 期限"
              ],
              "ans": 1,
              "exp": "期=约定"
            },
            {
              "diff": "basic",
              "q": "元方几岁：",
              "opts": [
                "A. 五岁",
                "B. 七岁",
                "C. 十岁",
                "D. 十二岁"
              ],
              "ans": 1,
              "exp": "时年七岁"
            },
            {
              "diff": "medium",
              "q": "友人两个错误：",
              "opts": [
                "A. 迟到和骂人",
                "B. 无信和无礼",
                "C. 太慢太凶",
                "D. 不守时不讲理"
              ],
              "ans": 1,
              "exp": "日中不至=无信对子骂父=无礼"
            },
            {
              "diff": "medium",
              "q": "\"入门不顾\"说明：",
              "opts": [
                "A. 不懂礼貌",
                "B. 对无信无礼者的决绝",
                "C. 害怕",
                "D. 想回家"
              ],
              "ans": 1,
              "exp": "有原则"
            },
            {
              "diff": "hard",
              "q": "\"下车引之\"表现：",
              "opts": [
                "A. 还想骂人",
                "B. 知错想道歉",
                "C. 想带走元方",
                "D. 想拉上车"
              ],
              "ans": 1,
              "exp": "惭后想挽回"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "陈太丘与友期",
              "u": "https://search.bilibili.com/all?keyword=陈太丘与友期"
            }
          ]
        },
        {
          "type": "阅读理解",
          "topic": "人物形象分析",
          "tagColor": "#34d399",
          "content": "<p><b>人物分析四步：找描写→析方法→品细节→说特点</b></p><div class=\"reading-passage\"><b>📖 《修车的老张》</b><br><br>老张的修车铺在小巷尽头只有三平米。每天清晨六点准时拉起卷帘门。不管多破的车他都先说别急让我看看。有一次中学生推爆胎的车来修只掏出五块钱。老张摆摆手算了学生不容易。他蹲下用那把二十年的扳手娴熟拆下内胎打气找孔补胎一气呵成。补完还帮调刹车说刹车灵了才安全。街坊都说老张二十年没涨过价。有人劝他去大街上开店他笑笑在这挺好街坊们方便。</div><p>①<b>动作描写</b>：娴熟拆胎→技术熟练</p><p>②<b>语言描写</b>：别急→耐心；刹车灵了才安全→关心</p><p>③<b>侧面描写</b>：街坊都说→借他人之口</p><p><b>模板：</b>运用了…描写写出了人物…的特点</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "老张最突出的品质：",
              "opts": [
                "A. 懒惰",
                "B. 善良耐心乐于助人",
                "C. 小气",
                "D. 傲慢"
              ],
              "ans": 1,
              "exp": "从没涨价帮学生"
            },
            {
              "diff": "basic",
              "q": "\"娴熟拆胎\"是什么描写：",
              "opts": [
                "A. 外貌",
                "B. 动作",
                "C. 心理",
                "D. 语言"
              ],
              "ans": 1,
              "exp": "动作描写"
            },
            {
              "diff": "medium",
              "q": "\"街坊都说\"是什么描写：",
              "opts": [
                "A. 正面",
                "B. 侧面",
                "C. 外貌",
                "D. 心理"
              ],
              "ans": 1,
              "exp": "借他人之口侧面表现"
            },
            {
              "diff": "medium",
              "q": "\"别急\"体现什么：",
              "opts": [
                "A. 技术好",
                "B. 耐心镇定",
                "C. 修车快",
                "D. 不想修"
              ],
              "ans": 1,
              "exp": "语言体现耐心"
            },
            {
              "diff": "hard",
              "q": "最佳分析角度：",
              "opts": [
                "A. 只看动作",
                "B. 正侧面结合(动作+语言+评价)",
                "C. 只看语言",
                "D. 只看侧面"
              ],
              "ans": 1,
              "exp": "全面分析需正侧面结合"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "人物形象分析",
              "u": "https://search.bilibili.com/all?keyword=人物形象分析+阅读理解"
            }
          ]
        }
      ],
      "quiz": [
        {
          "topic": "关联词",
          "q": "\"只有…才\"表什么：",
          "opts": [
            "A. 并列",
            "B. 条件(必要条件)",
            "C. 转折",
            "D. 因果"
          ],
          "ans": 1,
          "exp": "必要条件"
        },
        {
          "topic": "关联词",
          "q": "\"___困难___不放弃\"：",
          "opts": [
            "A. 如果…就…",
            "B. 即使…也…",
            "C. 因为…所以…",
            "D. 只要…就…"
          ],
          "ans": 1,
          "exp": "假设让步"
        },
        {
          "topic": "诗词",
          "q": "思乡句：",
          "opts": [
            "A. 潮平两岸阔",
            "B. 海日生残夜",
            "C. 乡书何处达",
            "D. 客路青山外"
          ],
          "ans": 2,
          "exp": "问家书寄处"
        },
        {
          "topic": "诗词",
          "q": "\"海日生残夜\"哲理：",
          "opts": [
            "A. 时间慢",
            "B. 新事物取代旧事物",
            "C. 海边美",
            "D. 早上冷"
          ],
          "ans": 1,
          "exp": "新旧交替"
        },
        {
          "topic": "文言",
          "q": "友人错在哪：",
          "opts": [
            "A. 无信+无礼",
            "B. 迟到",
            "C. 骂人",
            "D. 太凶"
          ],
          "ans": 0,
          "exp": "两个错误"
        },
        {
          "topic": "文言",
          "q": "\"入门不顾\"顾的意思：",
          "opts": [
            "A. 照顾",
            "B. 回头看",
            "C. 顾客",
            "D. 顾虑"
          ],
          "ans": 1,
          "exp": "顾=回头看"
        },
        {
          "topic": "阅读",
          "q": "分析人物从哪些描写入手：",
          "opts": [
            "A. 只看动作",
            "B. 外貌/语言/动作/心理/神态",
            "C. 只看对话",
            "D. 只看结果"
          ],
          "ans": 1,
          "exp": "五大描写"
        },
        {
          "topic": "阅读",
          "q": "侧面描写作用：",
          "opts": [
            "A. 不重要",
            "B. 通过他人反应烘托",
            "C. 直接写外貌",
            "D. 写动作"
          ],
          "ans": 1,
          "exp": "借他人之口表现"
        }
      ]
    },
    {
      "day": 5,
      "title": "病句与心理",
      "topics": "病句·江南逢李龟年·穿井得一人·心理描写",
      "sections": [
        {
          "type": "基础运用",
          "topic": "病句辨析",
          "tagColor": "#f59e0b",
          "content": "<p><b>六种常见病句</b></p><p>①<b>缺主语</b>：通过…使…→删通过或使</p><p>②<b>搭配不当</b>：养成…方法→养成习惯</p><p>③<b>语序不当</b>：讨论并听取→先听取再讨论</p><p>④<b>重复啰嗦</b>：大约…左右→删大约或左右</p><p>⑤<b>前后矛盾</b>：断定大概→删大概</p><p>⑥<b>两面对一面</b>：能否…是关键→删能否</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"通过努力使成绩提高\"语病：",
              "opts": [
                "A. 搭配不当",
                "B. 缺主语",
                "C. 语序不当",
                "D. 重复"
              ],
              "ans": 1,
              "exp": "通过和使同时用缺主语"
            },
            {
              "diff": "basic",
              "q": "\"大约30岁左右\"语病：",
              "opts": [
                "A. 缺主语",
                "B. 重复啰嗦",
                "C. 搭配不当",
                "D. 矛盾"
              ],
              "ans": 1,
              "exp": "大约和左右重复"
            },
            {
              "diff": "medium",
              "q": "无语病的是：",
              "opts": [
                "A. 通过努力使成绩提高",
                "B. 春天的公园盛开着花",
                "C. 大约30岁左右",
                "D. 春天的公园盛开着各种花"
              ],
              "ans": 3,
              "exp": "A缺B不搭C重复"
            },
            {
              "diff": "medium",
              "q": "\"讨论并听取报告\"语病：",
              "opts": [
                "A. 语序不当",
                "B. 缺主语",
                "C. 重复",
                "D. 搭配不当"
              ],
              "ans": 0,
              "exp": "应先听取再讨论"
            },
            {
              "diff": "hard",
              "q": "修改正确：",
              "opts": [
                "A. 保留通过使",
                "B. \"能否努力是成功关键\"→删能否",
                "C. 保留大约左右",
                "D. 保留讨论并听取"
              ],
              "ans": 1,
              "exp": "两面对一面删能否"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "病句辨析",
              "u": "https://search.bilibili.com/all?keyword=病句辨析+修改"
            }
          ]
        },
        {
          "type": "诗词鉴赏",
          "topic": "《江南逢李龟年》",
          "tagColor": "#a78bfa",
          "content": "<div class=\"poem-card\"><div class=\"poem-title\">江南逢李龟年</div><div class=\"poem-author\">【唐】杜甫</div><div class=\"poem-text\">岐王宅里寻常见，崔九堂前几度闻。<br>正是江南好风景，落花时节又逢君。</div><div class=\"poem-notes\"><b>【注解】</b>李龟年=玄宗时著名歌手<br>落花时节=暮春<br><br><b>【背景】</b>安史之乱后杜甫流落江南偶遇同样流落的宫廷歌手。昔日长安繁华不再感慨万千。<br><br><b>【手法】</b>今昔对比——昔日在长安达官府中常见，今日在江南落花中重逢。\"落花时节\"既写暮春又暗喻国运衰落。</div></div>",
          "problems": [
            {
              "diff": "basic",
              "q": "李龟年是：",
              "opts": [
                "A. 诗人",
                "B. 歌手",
                "C. 画家",
                "D. 将军"
              ],
              "ans": 1,
              "exp": "玄宗时著名歌手"
            },
            {
              "diff": "basic",
              "q": "\"落花时节\"暗指：",
              "opts": [
                "A. 春天",
                "B. 暮春+国运衰落",
                "C. 夏天",
                "D. 秋天"
              ],
              "ans": 1,
              "exp": "双关写景+暗喻"
            },
            {
              "diff": "medium",
              "q": "最主要手法：",
              "opts": [
                "A. 比喻",
                "B. 今昔对比",
                "C. 夸张",
                "D. 拟人"
              ],
              "ans": 1,
              "exp": "昔日繁华vs今日落魄"
            },
            {
              "diff": "medium",
              "q": "\"又逢君\"中\"又\"：",
              "opts": [
                "A. 高兴",
                "B. 感慨命运无常",
                "C. 偶然",
                "D. 常见"
              ],
              "ans": 1,
              "exp": "历经沧桑的重逢"
            },
            {
              "diff": "hard",
              "q": "整体情感：",
              "opts": [
                "A. 欢快",
                "B. 感慨世事变迁物是人非",
                "C. 愤怒",
                "D. 平淡"
              ],
              "ans": 1,
              "exp": "盛世不再的沧桑感"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "江南逢李龟年",
              "u": "https://search.bilibili.com/all?keyword=江南逢李龟年+杜甫"
            }
          ]
        },
        {
          "type": "文言文",
          "topic": "《穿井得一人》",
          "tagColor": "#fb923c",
          "content": "<p>宋之丁氏家无井而出溉汲常一人居外。<br>及其家穿井告人曰吾穿井得一人。<br>有闻而传之者曰丁氏穿井得一人。<br>国人道之闻之于宋君。<br>宋君令人问之于丁氏。<br>丁氏对曰得一人之使非得一人于井中也。</p><p  style=\"font-size:14px;color:var(--text2)\">【翻译】宋国丁家没井常派一人外出打水。<br>后打了井告人说我家打井等于多得一个劳动力。<br>有人传丁家打井挖出一个人。<br>全国传开传到国君耳中。<br>国君派人去问丁氏回答省了一个人的劳力不是从井里挖出一个人。</p><p><b>寓意：</b>道听途说以讹传讹。不要轻信传言要调查研究。</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"穿井\"意思：",
              "opts": [
                "A. 穿过井",
                "B. 挖井打井",
                "C. 穿衣服",
                "D. 穿过水井"
              ],
              "ans": 1,
              "exp": "穿=挖掘"
            },
            {
              "diff": "basic",
              "q": "\"得一人\"实际：",
              "opts": [
                "A. 挖到人",
                "B. 省了劳动力",
                "C. 得朋友",
                "D. 捡到人"
              ],
              "ans": 1,
              "exp": "省了一个打水的劳力"
            },
            {
              "diff": "medium",
              "q": "寓意：",
              "opts": [
                "A. 多打井",
                "B. 不要轻信传言",
                "C. 多传播",
                "D. 打井危险"
              ],
              "ans": 1,
              "exp": "道听途说不可信"
            },
            {
              "diff": "medium",
              "q": "谣言怎么产生的：",
              "opts": [
                "A. 丁氏骗人",
                "B. 传话者断章取义",
                "C. 国君听错",
                "D. 井里有人"
              ],
              "ans": 1,
              "exp": "得一人被误解"
            },
            {
              "diff": "hard",
              "q": "\"闻之于宋君\"闻的用法：",
              "opts": [
                "A. 听说",
                "B. 使…听说使动",
                "C. 嗅觉",
                "D. 名气"
              ],
              "ans": 1,
              "exp": "使宋君听到使动用法"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "穿井得一人",
              "u": "https://search.bilibili.com/all?keyword=穿井得一人"
            }
          ]
        },
        {
          "type": "阅读理解",
          "topic": "心理描写",
          "tagColor": "#34d399",
          "content": "<p><b>心理描写五种方式</b></p><div class=\"reading-passage\"><b>📖 《第一次演讲》</b><br><br>听到老师报出我的名字心猛地一沉。走上讲台腿像灌了铅。台下几十双眼睛齐刷刷看过来脑子里一片空白。准备好的词全忘了。大…大家好…我听见自己的声音在发抖手心全是汗。这时瞥见同桌朝我竖了个大拇指深吸一口气奇迹般地那些熟悉的句子又回到了脑海。演讲结束掌声响起。心跳还是快得像打鼓但嘴角忍不住上扬——原来跨出第一步并没有想象中那么可怕。</div><p>①<b>内心独白</b>：脑子里一片空白</p><p>②<b>动作暗示</b>：腿像灌铅手心全是汗</p><p>③<b>神态透露</b>：声音发抖嘴角上扬</p><p>④<b>环境烘托</b>：几十双眼睛</p><p>⑤<b>幻觉</b>：脑子里一片空白</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"脑子里一片空白\"属于：",
              "opts": [
                "A. 动作",
                "B. 内心独白",
                "C. 外貌",
                "D. 环境"
              ],
              "ans": 1,
              "exp": "直接写内心"
            },
            {
              "diff": "basic",
              "q": "\"手心全是汗\"通过什么：",
              "opts": [
                "A. 直接说",
                "B. 生理反应暗示",
                "C. 环境",
                "D. 语言"
              ],
              "ans": 1,
              "exp": "间接表现"
            },
            {
              "diff": "medium",
              "q": "\"心跳像打鼓\"修辞和效果：",
              "opts": [
                "A. 比喻写心跳",
                "B. 比喻生动写出激动紧张",
                "C. 没修辞",
                "D. 写鼓"
              ],
              "ans": 1,
              "exp": "比喻通过心跳写心理"
            },
            {
              "diff": "medium",
              "q": "心理描写不包括：",
              "opts": [
                "A. 内心独白",
                "B. 动作暗示",
                "C. 环境烘托",
                "D. 直接说出他人想法"
              ],
              "ans": 3,
              "exp": "不能直写他人心理"
            },
            {
              "diff": "hard",
              "q": "心理变化线索：",
              "opts": [
                "A. 紧张→放松",
                "B. 紧张→鼓励→自信→喜悦",
                "C. 一直紧张",
                "D. 一直自信"
              ],
              "ans": 1,
              "exp": "上台紧张→鼓励→自信→喜悦"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "心理描写",
              "u": "https://search.bilibili.com/all?keyword=心理描写+方法"
            }
          ]
        }
      ],
      "quiz": [
        {
          "topic": "病句",
          "q": "\"通过努力使成绩提高\"修改：",
          "opts": [
            "A. 保留",
            "B. 删通过或使",
            "C. 加字",
            "D. 不改"
          ],
          "ans": 1,
          "exp": "删通过或使保主语"
        },
        {
          "topic": "病句",
          "q": "无语病的是：",
          "opts": [
            "A. 我断定他大概会来",
            "B. 能否努力是成功关键",
            "C. 他养成认真学习的好习惯",
            "D. 通过这次学习使我明白"
          ],
          "ans": 2,
          "exp": "A矛盾B两面D缺主语"
        },
        {
          "topic": "诗词",
          "q": "\"落花时节\"含义：",
          "opts": [
            "A. 春天",
            "B. 暮春+国运衰落隐喻",
            "C. 夏天",
            "D. 无含义"
          ],
          "ans": 1,
          "exp": "双关"
        },
        {
          "topic": "诗词",
          "q": "最突出手法：",
          "opts": [
            "A. 比喻",
            "B. 今昔对比",
            "C. 夸张",
            "D. 拟人"
          ],
          "ans": 1,
          "exp": "今昔对比"
        },
        {
          "topic": "文言",
          "q": "寓意：",
          "opts": [
            "A. 多打井",
            "B. 不要轻信传言",
            "C. 传播消息",
            "D. 打井危险"
          ],
          "ans": 1,
          "exp": "道听途说不可信"
        },
        {
          "topic": "文言",
          "q": "\"得一人之使\"意思：",
          "opts": [
            "A. 挖到人",
            "B. 省了劳动力",
            "C. 得朋友",
            "D. 捡到人"
          ],
          "ans": 1,
          "exp": "省了劳力"
        },
        {
          "topic": "阅读",
          "q": "心理描写不包括：",
          "opts": [
            "A. 内心独白",
            "B. 动作暗示",
            "C. 直接写他人心理",
            "D. 神态透露"
          ],
          "ans": 2,
          "exp": "不能直写他人心理"
        },
        {
          "topic": "阅读",
          "q": "\"腿像灌铅\"表现：",
          "opts": [
            "A. 腿伤",
            "B. 通过沉重感暗示紧张",
            "C. 真重",
            "D. 写走路"
          ],
          "ans": 1,
          "exp": "身体感受暗示心理"
        }
      ]
    },
    {
      "day": 6,
      "title": "标点与手法",
      "topics": "标点·《望岳》·杞人忧天·写作手法",
      "sections": [
        {
          "type": "基础运用",
          "topic": "标点符号",
          "tagColor": "#f59e0b",
          "content": "<p><b>常用标点</b></p><table class=\"grammar-table\"><tr><th>标点</th><th>用法</th><th>示例</th></tr><tr><td>顿号、</td><td>并列词语间</td><td>苹果、香蕉</td></tr><tr><td>逗号，</td><td>句子内停顿</td><td>春天来了花开了</td></tr><tr><td>分号；</td><td>并列分句间</td><td>学习好；品德好</td></tr><tr><td>引号\"\"</td><td>引用/特殊含义</td><td>他说你好</td></tr><tr><td>书名号《》</td><td>书名篇名</td><td>《红楼梦》</td></tr><tr><td>破折号——</td><td>解释说明</td><td>北京——首都</td></tr></table><p><b>易混：</b>顿号vs逗号(词语vs分句)；引号嵌套外双内单；书名号不用于课程名</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "并列词语间用：",
              "opts": [
                "A. 逗号",
                "B. 顿号",
                "C. 分号",
                "D. 句号"
              ],
              "ans": 1,
              "exp": "词语间顿号"
            },
            {
              "diff": "basic",
              "q": "书名号用于：",
              "opts": [
                "A. 人名",
                "B. 书名篇名",
                "C. 地名",
                "D. 课程名"
              ],
              "ans": 1,
              "exp": "书名篇名课程不用"
            },
            {
              "diff": "medium",
              "q": "标点正确：",
              "opts": [
                "A. 苹果、香蕉、和橘子",
                "B. 《数学课》",
                "C. 他说你好",
                "D. 春天来了、花开了"
              ],
              "ans": 2,
              "exp": "A和不加顿号B课程不用C正确D逗号"
            },
            {
              "diff": "medium",
              "q": "引号嵌套：",
              "opts": [
                "A. 仍双引号",
                "B. 外双内单",
                "C. 不用",
                "D. 全单"
              ],
              "ans": 1,
              "exp": "外双内单"
            },
            {
              "diff": "hard",
              "q": "完全正确：",
              "opts": [
                "A. 笔、本、和书",
                "B. 他问：你读过《红楼梦》吗",
                "C. 《语文课》",
                "D. 春、夏、秋"
              ],
              "ans": 1,
              "exp": "A和不加B正确C课程不用D逗号"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "标点符号",
              "u": "https://search.bilibili.com/all?keyword=标点符号+用法"
            }
          ]
        },
        {
          "type": "诗词鉴赏",
          "topic": "《望岳》",
          "tagColor": "#a78bfa",
          "content": "<div class=\"poem-card\"><div class=\"poem-title\">望岳</div><div class=\"poem-author\">【唐】杜甫</div><div class=\"poem-text\">岱宗夫如何？齐鲁青未了。<br>造化钟神秀，阴阳割昏晓。<br>荡胸生曾云，决眦入归鸟。<br>会当凌绝顶，一览众山小。</div><div class=\"poem-notes\"><b>【注解】</b>岱宗=泰山<br>钟=聚集<br>割=划分<br>曾=层<br>眦=眼眶<br>会当=定要<br><br><b>【名句】</b>\"会当凌绝顶一览众山小\"——定要登上泰山顶峰俯瞰群山都显得渺小。化用孔子\"登泰山而小天下\"展现不怕困难勇攀高峰的雄心。</div></div>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"岱宗\"指：",
              "opts": [
                "A. 华山",
                "B. 泰山",
                "C. 衡山",
                "D. 嵩山"
              ],
              "ans": 1,
              "exp": "泰山"
            },
            {
              "diff": "basic",
              "q": "\"会当\"意思：",
              "opts": [
                "A. 开会",
                "B. 定要",
                "C. 可能",
                "D. 应该"
              ],
              "ans": 1,
              "exp": "坚定决心"
            },
            {
              "diff": "medium",
              "q": "\"一览众山小\"化用谁：",
              "opts": [
                "A. 庄子",
                "B. 孔子",
                "C. 老子",
                "D. 孟子"
              ],
              "ans": 1,
              "exp": "孔子登泰山小天下"
            },
            {
              "diff": "medium",
              "q": "\"割\"字妙处：",
              "opts": [
                "A. 写出山南山北明暗如切割",
                "B. 普通",
                "C. 山被割",
                "D. 无特别"
              ],
              "ans": 0,
              "exp": "写出泰山高大"
            },
            {
              "diff": "hard",
              "q": "表达情怀：",
              "opts": [
                "A. 消极避世",
                "B. 不怕困难勇攀高峰",
                "C. 思乡",
                "D. 悲秋"
              ],
              "ans": 1,
              "exp": "青年进取精神"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "望岳赏析",
              "u": "https://search.bilibili.com/all?keyword=望岳+杜甫"
            }
          ]
        },
        {
          "type": "文言文",
          "topic": "《杞人忧天》",
          "tagColor": "#fb923c",
          "content": "<p>杞国有人忧天地崩坠身亡所寄废寝食者。<br>又有忧彼之所忧者因往晓之曰天积气耳亡处亡气。<br>若屈伸呼吸终日在天中行止奈何忧崩坠乎？<br>晓之者曰日月星宿亦积气中之有光耀者只使坠亦不能有所中伤。<br>其人舍然大喜。</p><p  style=\"font-size:14px;color:var(--text2)\">【翻译】杞国有人担心天塌地陷无处安身愁得吃不下。<br>有人去开导说天是聚集的气体到处都有气，你呼吸活动都在天中为什么担心它塌呢？<br>日月星辰也是气中发光的东西即使掉下来也不会伤人。<br>那人听了豁然开朗。</p><p><b>寓意：</b>不必为不切实际的事忧虑。成语\"杞人忧天\"由此而来。</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"杞人忧天\"形容：",
              "opts": [
                "A. 关心天气",
                "B. 不必要忧虑",
                "C. 喜欢天文",
                "D. 担心地震"
              ],
              "ans": 1,
              "exp": "不必要过度担心"
            },
            {
              "diff": "basic",
              "q": "\"亡处亡气\"亡读：",
              "opts": [
                "A. wáng",
                "B. wú通无",
                "C. máng",
                "D. wàng"
              ],
              "ans": 1,
              "exp": "亡=无"
            },
            {
              "diff": "medium",
              "q": "\"晓之者\"晓：",
              "opts": [
                "A. 早上",
                "B. 开导",
                "C. 知道",
                "D. 天亮"
              ],
              "ans": 1,
              "exp": "开导"
            },
            {
              "diff": "medium",
              "q": "杞人忧虑：",
              "opts": [
                "A. 有道理",
                "B. 不切实际",
                "C. 应该担心",
                "D. 科学"
              ],
              "ans": 1,
              "exp": "天不会塌"
            },
            {
              "diff": "hard",
              "q": "\"舍然大喜\"舍：",
              "opts": [
                "A. 宿舍",
                "B. 通释放下",
                "C. 舍弃",
                "D. 房屋"
              ],
              "ans": 1,
              "exp": "舍然=释然"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "杞人忧天",
              "u": "https://search.bilibili.com/all?keyword=杞人忧天+列子"
            }
          ]
        },
        {
          "type": "阅读理解",
          "topic": "写作手法",
          "tagColor": "#34d399",
          "content": "<p><b>常见写作手法</b></p><div class=\"reading-passage\"><b>📖 《校园里的银杏》</b><br><br>春天银杏抽出嫩绿的芽像刚睡醒的孩子。夏天它撑开一把巨大的绿伞我们在树下读书嬉戏。秋天满树金黄风一吹像千万只蝴蝶翩翩起舞。冬天光秃秃的枝干指向天空像一个沉默的守望者。六年了这棵银杏见证了我们从一年级的小豆丁长成即将毕业的少年。树下埋着心愿瓶树皮上刻着毕业留念。</div><p>①<b>借物抒情</b>：通过银杏表达对校园时光的眷恋</p><p>②<b>比喻</b>：像孩子像巨伞像蝴蝶</p><p>③<b>象征</b>：银杏=小学时光见证者</p><p>④<b>时间顺序</b>：春夏秋冬</p><p>⑤<b>首尾呼应</b>：六年了↔整个小学时光</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "最重要手法：",
              "opts": [
                "A. 说明",
                "B. 借物抒情",
                "C. 议论",
                "D. 对比"
              ],
              "ans": 1,
              "exp": "通过银杏抒情"
            },
            {
              "diff": "basic",
              "q": "\"像千万只蝴蝶\"修辞：",
              "opts": [
                "A. 拟人",
                "B. 比喻",
                "C. 夸张",
                "D. 排比"
              ],
              "ans": 1,
              "exp": "比喻"
            },
            {
              "diff": "medium",
              "q": "组织顺序：",
              "opts": [
                "A. 空间",
                "B. 四季时间",
                "C. 逻辑",
                "D. 倒叙"
              ],
              "ans": 1,
              "exp": "春夏秋冬"
            },
            {
              "diff": "medium",
              "q": "银杏作用：",
              "opts": [
                "A. 只是树",
                "B. 象征时光见证者",
                "C. 无意义",
                "D. 景物"
              ],
              "ans": 1,
              "exp": "借物抒情"
            },
            {
              "diff": "hard",
              "q": "综合手法：",
              "opts": [
                "A. 只有比喻",
                "B. 借物抒情+比喻+象征+时间",
                "C. 只有时间",
                "D. 只有象征"
              ],
              "ans": 1,
              "exp": "多种综合"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "写作手法",
              "u": "https://search.bilibili.com/all?keyword=写作手法+分析"
            }
          ]
        }
      ],
      "quiz": [
        {
          "topic": "标点",
          "q": "并列词语间用什么：",
          "opts": [
            "A. 逗号",
            "B. 顿号",
            "C. 分号",
            "D. 句号"
          ],
          "ans": 1,
          "exp": "顿号"
        },
        {
          "topic": "标点",
          "q": "标点正确：",
          "opts": [
            "A. 笔、本、和书",
            "B. 他问你读过《红楼梦》吗",
            "C. 《体育课》",
            "D. 春、夏、秋"
          ],
          "ans": 1,
          "exp": "A和不加B正确C课程不用D逗号"
        },
        {
          "topic": "诗词",
          "q": "\"会当凌绝顶\"表达：",
          "opts": [
            "A. 想去山顶",
            "B. 积极进取决心",
            "C. 描述",
            "D. 想回家"
          ],
          "ans": 1,
          "exp": "进取精神"
        },
        {
          "topic": "诗词",
          "q": "\"一览众山小\"化用谁：",
          "opts": [
            "A. 庄子",
            "B. 孔子",
            "C. 老子",
            "D. 孟子"
          ],
          "ans": 1,
          "exp": "孔子"
        },
        {
          "topic": "文言",
          "q": "\"杞人忧天\"比喻：",
          "opts": [
            "A. 关心天气",
            "B. 不必要忧虑",
            "C. 喜欢天文",
            "D. 担心地震"
          ],
          "ans": 1,
          "exp": "不必要担心"
        },
        {
          "topic": "文言",
          "q": "\"亡处亡气\"亡的意思：",
          "opts": [
            "A. 死亡",
            "B. 通无没有",
            "C. 逃跑",
            "D. 灭亡"
          ],
          "ans": 1,
          "exp": "亡=无"
        },
        {
          "topic": "阅读",
          "q": "借物抒情核心：",
          "opts": [
            "A. 只写物",
            "B. 通过物表达情感",
            "C. 只抒情",
            "D. 写说明书"
          ],
          "ans": 1,
          "exp": "物是情感载体"
        },
        {
          "topic": "阅读",
          "q": "写作手法不包括：",
          "opts": [
            "A. 比喻",
            "B. 借物抒情",
            "C. 打印字体",
            "D. 象征"
          ],
          "ans": 2,
          "exp": "打印字体是格式"
        }
      ]
    },
    {
      "day": 7,
      "title": "对联与写作入门",
      "topics": "对联·己亥杂诗·断句·情感主旨·小作文",
      "sections": [
        {
          "type": "基础运用",
          "topic": "对联",
          "tagColor": "#f59e0b",
          "content": "<p><b>对联规则</b></p><p>①<b>字数相等</b>：上下联字数相同</p><p>②<b>词性相对</b>：名词对名词<br>动词对动词<br>例：两个黄鹂鸣翠柳 → 一行白鹭上青天</p><p>③<b>平仄相谐</b>：上联末字用仄声（三四声），下联末字用平声（一二声）<br>例：春回大地（地=仄） / 福满人间（间=平）</p><p>④<b>内容相关</b>：上下联语意关联</p><p>⑤<b>张贴</b>：上联贴右(面门右手)<br>下联贴左</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "对联上下联字数：",
              "opts": [
                "A. 可不同",
                "B. 必须相等",
                "C. 内容无关",
                "D. 词性不同"
              ],
              "ans": 1,
              "exp": "字数相等是基本要求"
            },
            {
              "diff": "basic",
              "q": "上联末字用：",
              "opts": [
                "A. 平声",
                "B. 仄声",
                "C. 轻声",
                "D. 任意"
              ],
              "ans": 1,
              "exp": "上仄下平"
            },
            {
              "diff": "medium",
              "q": "\"春风送暖\"最佳下联：",
              "opts": [
                "A. 夏日炎炎",
                "B. 瑞雪兆丰",
                "C. 秋高气爽",
                "D. 冬去春来"
              ],
              "ans": 1,
              "exp": "词性意象对应暖仄丰平"
            },
            {
              "diff": "medium",
              "q": "贴对联时面门：",
              "opts": [
                "A. 上左下右",
                "B. 上右下左",
                "C. 任意",
                "D. 中间"
              ],
              "ans": 1,
              "exp": "右手上联左手下联"
            },
            {
              "diff": "hard",
              "q": "\"两个黄鹂鸣翠柳\"最佳下联：",
              "opts": [
                "A. 一枝红杏",
                "B. 一行白鹭上青天",
                "C. 几只燕子",
                "D. 千树万树"
              ],
              "ans": 1,
              "exp": "词性结构意境完美对应"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "对联规则",
              "u": "https://search.bilibili.com/all?keyword=对联+规则"
            }
          ]
        },
        {
          "type": "诗词鉴赏",
          "topic": "《己亥杂诗》其五",
          "tagColor": "#a78bfa",
          "content": "<div class=\"poem-card\"><div class=\"poem-title\">己亥杂诗（其五）</div><div class=\"poem-author\">【清】龚自珍</div><div class=\"poem-text\">浩荡离愁白日斜，吟鞭东指即天涯。<br>落红不是无情物，化作春泥更护花。</div><div class=\"poem-notes\"><b>【注解】</b>浩荡=广大<br>吟鞭=马鞭<br>即=就是<br>落红=落花<br><br><b>【背景】</b>1839年己亥年龚自珍辞官南归，往返途中写成315首绝句。此诗表达离开京城的不舍和为国效力的决心。<br><br><b>【名句】</b>\"落红不是无情物化作春泥更护花\"——落花并非无情化作春泥还要滋养新花。诗人以落花自喻：虽辞官离开仍要为国家培育人才。托物言志。</div></div>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"落红\"指：",
              "opts": [
                "A. 红纸",
                "B. 落花",
                "C. 红叶",
                "D. 红布"
              ],
              "ans": 1,
              "exp": "落红=落花"
            },
            {
              "diff": "basic",
              "q": "表达什么：",
              "opts": [
                "A. 归隐",
                "B. 离别愁绪+报国之志",
                "C. 思乡",
                "D. 悲秋"
              ],
              "ans": 1,
              "exp": "离愁+化春泥=报国"
            },
            {
              "diff": "medium",
              "q": "\"化作春泥更护花\"修辞：",
              "opts": [
                "A. 比喻自比落花",
                "B. 写景",
                "C. 夸张",
                "D. 无修辞"
              ],
              "ans": 0,
              "exp": "托物言志以落花自喻"
            },
            {
              "diff": "medium",
              "q": "\"白日斜\"作用：",
              "opts": [
                "A. 写时间",
                "B. 日暮烘托离愁",
                "C. 天气",
                "D. 只写景"
              ],
              "ans": 1,
              "exp": "日暮烘托离愁"
            },
            {
              "diff": "hard",
              "q": "反驳什么传统观念：",
              "opts": [
                "A. 花美",
                "B. 落花无情",
                "C. 春泥不护花",
                "D. 春短"
              ],
              "ans": 1,
              "exp": "反其意落花有情"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "己亥杂诗",
              "u": "https://search.bilibili.com/all?keyword=己亥杂诗+龚自珍"
            }
          ]
        },
        {
          "type": "文言文",
          "topic": "断句练习",
          "tagColor": "#fb923c",
          "content": "<p><b>文言文断句四大方法</b></p>\n\n<p><b>方法一：找虚词</b><br>句首发语词（夫、盖、若夫、且夫）→ 前面断开<br>句末语气词（也、矣、乎、哉、焉、耳、耶）→ 后面断开<br><span style=\"font-size:14px;color:var(--text2)\">例：夫/战，勇气也。→ \"夫\"是发语词，前断开；\"也\"是句末语气词，后断开。</span></p>\n\n<p><b>方法二：找对话标志</b><br>\"曰\"、\"云\"、\"言\"等表示\"说\"的字 → 后面是引语，前后断开<br><span style=\"font-size:14px;color:var(--text2)\">例：子曰/学而时习之。→ \"曰\"后停顿。</span></p>\n\n<p><b>方法三：找对偶排比</b><br>文言文中常用对偶句、排比句 → 根据句式对称来断句<br><span style=\"font-size:14px;color:var(--text2)\">例：学而不思则罔/思而不学则殆 → 对称结构，中间断开。</span></p>\n\n<p><b>方法四：看语法结构</b><br>找主语、谓语、宾语的位置 → 主谓之间、动宾之间通常不断开<br><span style=\"font-size:14px;color:var(--text2)\">例：宋人或得玉/献诸子罕/子罕弗受 → 三个主谓结构，各为一个分句。</span></p>\n\n<p><b>断句口诀：</b>先通读，明大意；找虚词，看对话；辨句式，定句读。</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"曰\"常出现在：",
              "opts": [
                "A. 句首",
                "B. 对话前",
                "C. 句末",
                "D. 不用管"
              ],
              "ans": 1,
              "exp": "曰=说后面是引语"
            },
            {
              "diff": "basic",
              "q": "断句时不看什么：",
              "opts": [
                "A. 虚词",
                "B. 对话标记",
                "C. 现代标点",
                "D. 对偶"
              ],
              "ans": 2,
              "exp": "古文原本无标点"
            },
            {
              "diff": "medium",
              "q": "\"宋人或得玉献诸子罕子罕弗受\"断句：",
              "opts": [
                "A. 宋人/或得/玉献/诸子/罕子/罕弗受",
                "B. 宋人或得玉/献诸子罕/子罕弗受",
                "C. 宋人或/得玉献/诸子罕",
                "D. 宋人或得/玉献诸/子罕子"
              ],
              "ans": 1,
              "exp": "得玉→献给→不接受"
            },
            {
              "diff": "medium",
              "q": "\"也\"在断句中的作用：",
              "opts": [
                "A. 无作用",
                "B. 常在句末提示停顿",
                "C. 句首",
                "D. 句中"
              ],
              "ans": 1,
              "exp": "句末语气词"
            },
            {
              "diff": "hard",
              "q": "\"夫战勇气也\"断句：",
              "opts": [
                "A. 夫战/勇气也",
                "B. 夫/战勇气也",
                "C. 夫战勇/气也",
                "D. 夫战勇气/也"
              ],
              "ans": 0,
              "exp": "夫=发语词句首停也=句末"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "文言文断句",
              "u": "https://search.bilibili.com/all?keyword=文言文+断句"
            }
          ]
        },
        {
          "type": "阅读理解",
          "topic": "情感主旨",
          "tagColor": "#34d399",
          "content": "<p><b>把握情感主旨三步：找情感词→看人物变化→提炼主旨</b></p><div class=\"reading-passage\"><b>📖 《妈妈的旧相册》</b><br><br>周末整理书房翻出一本泛黄的相册。第一页妈妈抱着刚出生的我笑得眼角的皱纹像两朵小花。往后翻百日照学步照第一天上学照……每一张旁都有妈妈娟秀的笔迹。翻到最后是去年合影——我已经比妈妈高了。她靠在我肩上笑容依旧只是头发白了许多。我忽然鼻子一酸原来妈妈的青春都藏在这本相册里藏在我成长的每一个脚印里。</div><p>①<b>找情感词</b>：鼻子一酸→感动和愧疚</p><p>②<b>看变化</b>：妈妈从年轻→头发白了我从小→比妈妈高了</p><p>③<b>提炼主旨</b>：通过旧相册展现母爱无私和时光流逝表达感恩珍惜</p><p><b>模板：</b>本文通过…表达了…</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "核心情感：",
              "opts": [
                "A. 喜欢旧物",
                "B. 对母爱的感恩和时光感触",
                "C. 喜欢拍照",
                "D. 不喜欢整理"
              ],
              "ans": 1,
              "exp": "通过相册感恩"
            },
            {
              "diff": "basic",
              "q": "找主旨先看：",
              "opts": [
                "A. 字数",
                "B. 情感词和人物变化",
                "C. 标题颜色",
                "D. 段落数"
              ],
              "ans": 1,
              "exp": "情感词+变化"
            },
            {
              "diff": "medium",
              "q": "\"鼻子一酸\"作用：",
              "opts": [
                "A. 写生理",
                "B. 点明情感转折",
                "C. 没作用",
                "D. 感冒"
              ],
              "ans": 1,
              "exp": "情感词标志触动"
            },
            {
              "diff": "medium",
              "q": "\"头发白了许多\"作用：",
              "opts": [
                "A. 写外貌",
                "B. 通过变化暗示时光",
                "C. 说老了",
                "D. 事实"
              ],
              "ans": 1,
              "exp": "为情感铺垫"
            },
            {
              "diff": "hard",
              "q": "最佳主旨概括：",
              "opts": [
                "A. 相册很旧",
                "B. 通过旧相册展现母爱无私和时光不可逆转表达感恩珍惜",
                "C. 妈爱拍照",
                "D. 我长高"
              ],
              "ans": 1,
              "exp": "事件+情感+主题完整"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "情感主旨",
              "u": "https://search.bilibili.com/all?keyword=阅读理解+情感主旨"
            }
          ]
        },
        {
          "type": "作文",
          "topic": "小作文（片段描写）",
          "tagColor": "#8b5cf6",
          "content": "<p><b>写一个\"紧张的瞬间\"</b></p><p><b>要点：</b>①选小场景如上台发言/等成绩<br>②运用动作心理神态多种描写<br>③100-150字</p><p><b>范文：</b>\"老师开始念分数了。<br>张三98李四95……我的手心开始冒汗把桌角都浸湿了。<br>心跳声大得仿佛整个教室都能听见。<br>终于——王五92。<br>我松了一口气才发现后背的衣服已经湿透了。<br>短短两分钟像过了一个世纪。<br>\"</p><p><b>点评：</b>运用动作(冒汗)心理(心跳)神态(松口气)多种描写。</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "片段描写多少字：",
              "opts": [
                "A. 500",
                "B. 100-150",
                "C. 10",
                "D. 1000"
              ],
              "ans": 1,
              "exp": "精简聚焦"
            },
            {
              "diff": "basic",
              "q": "不直说紧张而：",
              "opts": [
                "A. 不写",
                "B. 通过动作心理暗示",
                "C. 只说很紧张",
                "D. 不描述"
              ],
              "ans": 1,
              "exp": "通过冒汗心跳暗示更生动"
            },
            {
              "diff": "medium",
              "q": "范文用了哪些描写：",
              "opts": [
                "A. 只有动作",
                "B. 动作+心理",
                "C. 只有心理",
                "D. 只有语言"
              ],
              "ans": 1,
              "exp": "冒汗动作+心跳心理"
            },
            {
              "diff": "medium",
              "q": "\"两分钟像一世纪\"修辞：",
              "opts": [
                "A. 比喻",
                "B. 夸张",
                "C. 拟人",
                "D. 排比"
              ],
              "ans": 1,
              "exp": "夸张突出漫长"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "片段描写",
              "u": "https://search.bilibili.com/all?keyword=片段描写+写作"
            }
          ]
        }
      ],
      "quiz": [
        {
          "topic": "对联",
          "q": "对联要求：",
          "opts": [
            "A. 字数可不同",
            "B. 字数相等+词性相对",
            "C. 内容无关",
            "D. 只要好听"
          ],
          "ans": 1,
          "exp": "字数相等词性相对平仄相谐"
        },
        {
          "topic": "对联",
          "q": "\"春风送暖\"最佳下联：",
          "opts": [
            "A. 夏日炎炎",
            "B. 瑞雪兆丰",
            "C. 秋高气爽",
            "D. 冬去春来"
          ],
          "ans": 1,
          "exp": "春风→瑞雪送暖→兆丰"
        },
        {
          "topic": "诗词",
          "q": "\"落红不是无情物\"表达：",
          "opts": [
            "A. 花无情",
            "B. 辞官后仍想报国",
            "C. 喜欢花",
            "D. 春泥不好"
          ],
          "ans": 1,
          "exp": "托物言志"
        },
        {
          "topic": "诗词",
          "q": "\"化作春泥更护花\"花指：",
          "opts": [
            "A. 普通花",
            "B. 新的人才/国家未来",
            "C. 诗人",
            "D. 春天"
          ],
          "ans": 1,
          "exp": "愿滋养新人才"
        },
        {
          "topic": "文言",
          "q": "断句时\"夫\"作用：",
          "opts": [
            "A. 句末",
            "B. 发语词句首停顿",
            "C. 句中",
            "D. 无关"
          ],
          "ans": 1,
          "exp": "夫=发语词"
        },
        {
          "topic": "文言",
          "q": "\"也\"提示：",
          "opts": [
            "A. 句首",
            "B. 句末停顿",
            "C. 句中",
            "D. 无提示"
          ],
          "ans": 1,
          "exp": "句末语气词"
        },
        {
          "topic": "阅读",
          "q": "把握主旨关键：",
          "opts": [
            "A. 数词",
            "B. 找情感词+分析人物变化",
            "C. 看标题",
            "D. 数段落"
          ],
          "ans": 1,
          "exp": "情感词和人物变化"
        },
        {
          "topic": "阅读",
          "q": "主旨模板：",
          "opts": [
            "A. 只写事件",
            "B. 本文通过…表达了…",
            "C. 只写情感",
            "D. 写读后感"
          ],
          "ans": 1,
          "exp": "事件→情感/主题"
        }
      ]
    },
    {
      "day": 8,
      "title": "得体与续写",
      "topics": "语言得体·泊秦淮·卖油翁·议论文·续写",
      "sections": [
        {
          "type": "基础运用",
          "topic": "语言得体",
          "tagColor": "#f59e0b",
          "content": "<p><b>得体三要素：场合+对象+敬谦</b></p><p><b>①看场合</b>正式场合书面语日常用语</p><p><b>②看对象</b>对长辈用敬语对同龄可随意</p><p><b>③敬谦辞</b></p><table class=\"grammar-table\"><tr><th>敬辞</th><th>含义</th><th>谦辞</th><th>含义</th></tr><tr><td>令尊</td><td>对方父亲</td><td>家父</td><td>自己父亲</td></tr><tr><td>贵姓</td><td>对方姓</td><td>敝姓</td><td>自己姓</td></tr><tr><td>惠顾</td><td>对方光临</td><td>拜访</td><td>去见别人</td></tr></table>",
          "problems": [
            {
              "diff": "basic",
              "q": "对老师\"你听懂了吗\"不得体应改为：",
              "opts": [
                "A. 你懂了吗",
                "B. 我讲清楚了吗",
                "C. 听到没",
                "D. 不说了"
              ],
              "ans": 1,
              "exp": "体现尊重"
            },
            {
              "diff": "basic",
              "q": "\"令尊\"指：",
              "opts": [
                "A. 自己父亲",
                "B. 对方父亲",
                "C. 命令",
                "D. 尊敬"
              ],
              "ans": 1,
              "exp": "令=敬辞令尊=您父亲"
            },
            {
              "diff": "medium",
              "q": "对同学说话的方式：",
              "opts": [
                "A. 大量敬辞",
                "B. 友好亲切但礼貌",
                "C. 随便骂",
                "D. 像对领导"
              ],
              "ans": 1,
              "exp": "同龄人友好即可"
            },
            {
              "diff": "medium",
              "q": "\"家父\"和\"令尊\"正确使用：",
              "opts": [
                "A. 都称自己父",
                "B. 家父=己父令尊=对方父",
                "C. 都对",
                "D. 都不对"
              ],
              "ans": 1,
              "exp": "家父谦辞令尊敬辞"
            },
            {
              "diff": "hard",
              "q": "写信给老师开头应：",
              "opts": [
                "A. 嘿老师",
                "B. 尊敬的老师",
                "C. 你好",
                "D. 喂"
              ],
              "ans": 1,
              "exp": "正式书信用尊敬的"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "语言得体",
              "u": "https://search.bilibili.com/all?keyword=敬辞+谦辞+语言得体"
            }
          ]
        },
        {
          "type": "诗词鉴赏",
          "topic": "《泊秦淮》",
          "tagColor": "#a78bfa",
          "content": "<div class=\"poem-card\"><div class=\"poem-title\">泊秦淮</div><div class=\"poem-author\">【唐】杜牧</div><div class=\"poem-text\">烟笼寒水月笼沙，夜泊秦淮近酒家。<br>商女不知亡国恨，隔江犹唱后庭花。</div><div class=\"poem-notes\"><b>【注解】</b>秦淮=南京秦淮河<br>商女=歌女<br>后庭花=南朝陈后主所作《玉树后庭花》被视为亡国之音<br><br><b>【背景】</b>晚唐杜牧夜泊秦淮听到对岸歌女还在唱亡国之音感慨国事日衰而世人犹醉生梦死。<br><br><b>【手法】</b>借古讽今——借南朝陈后主因荒淫亡国的典故讽刺晚唐统治者的醉生梦死。表面批评商女实指那些沉迷享乐的达官贵人。</div></div>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"商女\"指：",
              "opts": [
                "A. 商人女儿",
                "B. 卖唱歌女",
                "C. 女商人",
                "D. 姓商女孩"
              ],
              "ans": 1,
              "exp": "歌女"
            },
            {
              "diff": "basic",
              "q": "\"后庭花\"是：",
              "opts": [
                "A. 一种花",
                "B. 亡国之音代称",
                "C. 后院花",
                "D. 普通歌曲"
              ],
              "ans": 1,
              "exp": "《玉树后庭花》=亡国之音"
            },
            {
              "diff": "medium",
              "q": "主要手法：",
              "opts": [
                "A. 比喻",
                "B. 借古讽今",
                "C. 拟人",
                "D. 夸张"
              ],
              "ans": 1,
              "exp": "借南朝典故讽刺晚唐"
            },
            {
              "diff": "medium",
              "q": "两个\"笼\"字作用：",
              "opts": [
                "A. 重复",
                "B. 写出烟雾月光笼罩的迷蒙",
                "C. 笼子",
                "D. 无特别"
              ],
              "ans": 1,
              "exp": "写出秦淮夜色朦胧"
            },
            {
              "diff": "hard",
              "q": "诗人真正批评的是：",
              "opts": [
                "A. 歌女",
                "B. 醉生梦死的达官贵人",
                "C. 陈后主",
                "D. 听众"
              ],
              "ans": 1,
              "exp": "借古讽今实则讽刺权贵"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "泊秦淮",
              "u": "https://search.bilibili.com/all?keyword=泊秦淮+杜牧"
            }
          ]
        },
        {
          "type": "文言文",
          "topic": "《卖油翁》",
          "tagColor": "#fb923c",
          "content": "<p>陈康肃公尧咨善射当世无双公亦以此自矜。<br>尝射于家圃有卖油翁释担而立睨之久而不去。<br>见其发矢十中八九但微颔之。<br>康肃问曰汝亦知射乎吾射不亦精乎？<br>翁曰无他但手熟尔。<br>康肃忿然曰尔安敢轻吾射！<br>翁曰以我酌油知之。<br>乃取一葫芦置于地以钱覆其口徐以杓酌油沥之自钱孔入而钱不湿。<br>因曰我亦无他惟手熟尔。<br>康肃笑而遣之。</p><p  style=\"font-size:14px;color:var(--text2)\">【翻译】陈尧咨善射以此自傲。<br>有卖油翁放下担子斜眼看他十箭中八九只是微微点头。<br>陈问你懂射箭吗我射得不精吗？<br>翁说没什么只是手熟。<br>陈怒你怎么敢轻视我！<br>翁说凭我倒油知道。<br>于是取葫芦放地用铜钱盖口慢慢倒油穿过钱孔而钱不湿。<br>说我也没别的只是手熟。<br>陈笑着让他走了。</p><p><b>寓意：</b>熟能生巧。任何技艺都是反复练习的结果不可骄傲自满。</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "核心观点：",
              "opts": [
                "A. 射箭不如倒油",
                "B. 熟能生巧",
                "C. 陈不行",
                "D. 卖油厉害"
              ],
              "ans": 1,
              "exp": "无他但手熟尔"
            },
            {
              "diff": "basic",
              "q": "\"自矜\"意思：",
              "opts": [
                "A. 自我批评",
                "B. 自夸自傲",
                "C. 自觉",
                "D. 自卑"
              ],
              "ans": 1,
              "exp": "矜=骄傲"
            },
            {
              "diff": "medium",
              "q": "\"睨之\"表现什么：",
              "opts": [
                "A. 崇拜",
                "B. 不以为然",
                "C. 害怕",
                "D. 愤怒"
              ],
              "ans": 1,
              "exp": "斜眼看不在意"
            },
            {
              "diff": "medium",
              "q": "\"徐\"的意思：",
              "opts": [
                "A. 快速",
                "B. 慢慢地",
                "C. 姓徐",
                "D. 停顿"
              ],
              "ans": 1,
              "exp": "从容不迫"
            },
            {
              "diff": "hard",
              "q": "卖油翁用什么证明手熟：",
              "opts": [
                "A. 说话",
                "B. 倒油穿钱孔钱不湿",
                "C. 射箭",
                "D. 写字"
              ],
              "ans": 1,
              "exp": "用更难的演示证明"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "卖油翁",
              "u": "https://search.bilibili.com/all?keyword=卖油翁+欧阳修"
            }
          ]
        },
        {
          "type": "阅读理解",
          "topic": "议论文阅读",
          "tagColor": "#34d399",
          "content": "<p><b>议论文三要素：论点+论据+论证</b></p><div class=\"reading-passage\"><b>📖 《读书的意义》</b><br><br>读书有什么用？有人说是为考高分有人说是为找工作。但我想说读书最大的意义在于让我们成为一个有\"根\"的人。读历史我们知道从哪里来——屈原的路漫漫其修远兮让我们明白什么是气节。读文学我们懂得什么是美——朱自清的背影让无数人落泪于父爱的深沉。读科学我们学会理性思考——哥白尼用日心说挑战千年谬误靠的就是求真精神。所以读书不只是为了考试更是为了塑造一个有底蕴有思想有温度的灵魂。</div><p><b>论点：</b>读书的意义在于塑造有底蕴的灵魂</p><p><b>论据：</b>①屈原→气节<br>②背影→父爱<br>③哥白尼→求真</p><p><b>论证：</b>举例论证+道理论证</p><p><b>结构：</b>设问→三个例子→总结</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "中心论点：",
              "opts": [
                "A. 考高分",
                "B. 读书塑造有底蕴的灵魂",
                "C. 找工作",
                "D. 读书没用"
              ],
              "ans": 1,
              "exp": "末段核心观点"
            },
            {
              "diff": "basic",
              "q": "议论文三要素：",
              "opts": [
                "A. 开头中间结尾",
                "B. 论点论据论证",
                "C. 比喻拟人夸张",
                "D. 时间地点人物"
              ],
              "ans": 1,
              "exp": "论点论据论证"
            },
            {
              "diff": "medium",
              "q": "论证方法：",
              "opts": [
                "A. 只有比喻",
                "B. 举例论证+道理论证",
                "C. 只有对比",
                "D. 没论证"
              ],
              "ans": 1,
              "exp": "三例子+总结"
            },
            {
              "diff": "medium",
              "q": "屈原论据证明：",
              "opts": [
                "A. 读书没用",
                "B. 读书让人明白气节",
                "C. 屈原是诗人",
                "D. 历史不重要"
              ],
              "ans": 1,
              "exp": "论据服务论点"
            },
            {
              "diff": "hard",
              "q": "文章结构：",
              "opts": [
                "A. 时间顺序",
                "B. 设问→分析→结论",
                "C. 空间",
                "D. 倒叙"
              ],
              "ans": 1,
              "exp": "典型议论文结构"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "议论文阅读",
              "u": "https://search.bilibili.com/all?keyword=议论文阅读+方法"
            }
          ]
        },
        {
          "type": "作文",
          "topic": "续写",
          "tagColor": "#8b5cf6",
          "content": "<p><b>续写——根据开头续写故事</b></p><p><b>开头：</b>\"那天放学后教室里只剩我一个人。窗外突然传来奇怪的声音……\"</p><p><b>要点：</b>衔接自然承接原文；保持人称风格一致；合理想象不出格；100-150字</p><p><b>范文：</b>我壮着胆子走到窗边——是一只受伤的小鸟翅膀上缠着塑料绳。<br>它扑腾了几下又落回窗台黑豆般的眼睛里满是惊恐。<br>我小心翼翼解开绳子小鸟愣了片刻振翅飞向了暮色中的梧桐树。<br>看着它远去的身影我忽然觉得这个傍晚格外温柔。</p><p><b>点评：</b>从奇怪声音引出受伤小鸟以救助为事件结尾以景衬情呼应温暖主题。</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "续写首要要求：",
              "opts": [
                "A. 越长越好",
                "B. 与原文衔接自然",
                "C. 随意发挥",
                "D. 改变人物"
              ],
              "ans": 1,
              "exp": "承接原文"
            },
            {
              "diff": "basic",
              "q": "范文结尾\"格外温柔\"作用：",
              "opts": [
                "A. 写天气",
                "B. 以景衬情点明温暖主题",
                "C. 凑字数",
                "D. 没作用"
              ],
              "ans": 1,
              "exp": "呼应主题首尾圆合"
            },
            {
              "diff": "medium",
              "q": "续写不应该：",
              "opts": [
                "A. 合理想象",
                "B. 完全脱离原文",
                "C. 保持人称一致",
                "D. 注意衔接"
              ],
              "ans": 1,
              "exp": "续写需承接原文"
            },
            {
              "diff": "medium",
              "q": "选小鸟而非怪物因为：",
              "opts": [
                "A. 可爱",
                "B. 合理想象不过度夸张",
                "C. 作者喜欢鸟",
                "D. 随便选的"
              ],
              "ans": 1,
              "exp": "校园题材合理想象"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "续写作文",
              "u": "https://search.bilibili.com/all?keyword=续写+作文+技巧"
            }
          ]
        }
      ],
      "quiz": [
        {
          "topic": "得体",
          "q": "\"令尊\"指：",
          "opts": [
            "A. 自己父亲",
            "B. 对方父亲",
            "C. 命令",
            "D. 尊敬"
          ],
          "ans": 1,
          "exp": "令=敬辞令尊=您父亲"
        },
        {
          "topic": "得体",
          "q": "给老师写信开头：",
          "opts": [
            "A. 嘿",
            "B. 尊敬的老师",
            "C. 你好",
            "D. 喂"
          ],
          "ans": 1,
          "exp": "正式书信用尊敬的"
        },
        {
          "topic": "诗词",
          "q": "\"后庭花\"象征：",
          "opts": [
            "A. 美丽花",
            "B. 亡国之音",
            "C. 春天",
            "D. 音乐"
          ],
          "ans": 1,
          "exp": "《玉树后庭花》=亡国之音"
        },
        {
          "topic": "诗词",
          "q": "实际批评的是：",
          "opts": [
            "A. 歌女",
            "B. 醉生梦死的权贵",
            "C. 陈后主",
            "D. 听众"
          ],
          "ans": 1,
          "exp": "借古讽今实质讽权贵"
        },
        {
          "topic": "文言",
          "q": "卖油翁说明什么：",
          "opts": [
            "A. 射箭不如倒油",
            "B. 熟能生巧",
            "C. 不用练习",
            "D. 倒油很难"
          ],
          "ans": 1,
          "exp": "无他但手熟尔"
        },
        {
          "topic": "文言",
          "q": "\"睨之\"什么意思：",
          "opts": [
            "A. 崇拜看",
            "B. 斜眼看不以为然",
            "C. 直视",
            "D. 闭眼"
          ],
          "ans": 1,
          "exp": "睨=斜眼看轻视"
        },
        {
          "topic": "阅读",
          "q": "议论文论据是：",
          "opts": [
            "A. 观点",
            "B. 证明观点的事实/道理",
            "C. 标题",
            "D. 开头"
          ],
          "ans": 1,
          "exp": "论据=证明论点的事实道理等"
        },
        {
          "topic": "阅读",
          "q": "举例论证作用：",
          "opts": [
            "A. 凑字数",
            "B. 用具体事例支撑观点",
            "C. 增加文采",
            "D. 没作用"
          ],
          "ans": 1,
          "exp": "让论点更有说服力"
        }
      ]
    },
    {
      "day": 9,
      "title": "句式与名著",
      "topics": "句式变换·朝花夕拾·钟毓钟会·说明文",
      "sections": [
        {
          "type": "基础运用",
          "topic": "句式变换",
          "tagColor": "#f59e0b",
          "content": "<p><b>五种句式变换</b></p><p>①<b>陈述↔反问</b>：他是好学生→他难道不是好学生吗？</p><p>②<b>把字↔被字</b>：我把作业写完→作业被我写完</p><p>③<b>肯定↔双重否定</b>：他必须去→他不得不去/他非去不可</p><p>④<b>长句↔短句</b>：戴着红帽子的高个子男孩是我同桌→那男孩戴红帽子个子高是我同桌</p><p>⑤<b>引述↔转述</b>：他说\"我明天来\"→他说他明天来</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"他难道不是好人吗\"改为陈述：",
              "opts": [
                "A. 他是好人",
                "B. 他不是好人",
                "C. 他是坏人",
                "D. 他不是坏人"
              ],
              "ans": 0,
              "exp": "反问变陈述去掉难道不…吗"
            },
            {
              "diff": "basic",
              "q": "\"我把书看完\"改被字：",
              "opts": [
                "A. 书被我看完",
                "B. 我被书看完",
                "C. 书把我看了",
                "D. 我书看完"
              ],
              "ans": 0,
              "exp": "宾语提前加被"
            },
            {
              "diff": "medium",
              "q": "\"他非去不可\"改肯定：",
              "opts": [
                "A. 他不去",
                "B. 他必须去",
                "C. 可以不去",
                "D. 不得不去"
              ],
              "ans": 1,
              "exp": "非…不可=必须"
            },
            {
              "diff": "medium",
              "q": "引述改转述正确：",
              "opts": [
                "A. 他说我明天来→他说他明天来",
                "B. 他说\"我明天来\"→他说我明天来",
                "C. 保留引号",
                "D. 不变"
              ],
              "ans": 0,
              "exp": "去引号改一三称"
            },
            {
              "diff": "hard",
              "q": "\"我们不得不承认\"改肯定：",
              "opts": [
                "A. 我们承认",
                "B. 我们否认",
                "C. 不承认",
                "D. 不得不做"
              ],
              "ans": 0,
              "exp": "不得不承认=承认"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "句式变换",
              "u": "https://search.bilibili.com/all?keyword=句式变换+方法"
            }
          ]
        },
        {
          "type": "名著导读",
          "topic": "《朝花夕拾》",
          "tagColor": "#e879f9",
          "content": "<p><b>《朝花夕拾》——鲁迅回忆散文集</b></p><p><b>基本信息：</b>鲁迅著，共10篇回忆散文，1926年写成。<br>朝花 = 早晨的花（童年），夕拾 = 傍晚拾起（中年回忆）。</p><p><b>重要篇目：</b><br>《从百草园到三味书屋》（童年乐园 → 私塾）<br>《阿长与山海经》（长妈妈买书）<br>《藤野先生》（日本留学）<br>《五猖会》（被父逼背书）<br>《父亲的病》（庸医害人）</p><p><b>主题：</b>温馨回忆 + 理性批判<br>——回忆童年美好，同时批判封建教育制度</p><p><b>人物：</b><br>长妈妈（粗俗但善良）<br>藤野先生（严谨正直）<br>范爱农（耿直倔强）</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "作者：",
              "opts": [
                "A. 老舍",
                "B. 鲁迅",
                "C. 茅盾",
                "D. 巴金"
              ],
              "ans": 1,
              "exp": "鲁迅回忆散文"
            },
            {
              "diff": "basic",
              "q": "\"朝花夕拾\"意思：",
              "opts": [
                "A. 早晨花晚上掉",
                "B. 中年回忆童年",
                "C. 花开得早",
                "D. 捡花"
              ],
              "ans": 1,
              "exp": "朝花=童年夕拾=回忆"
            },
            {
              "diff": "medium",
              "q": "《从百草园到三味书屋》写：",
              "opts": [
                "A. 旅行",
                "B. 童年乐园→私塾",
                "C. 看病",
                "D. 交友"
              ],
              "ans": 1,
              "exp": "百草园=乐园三味=私塾"
            },
            {
              "diff": "medium",
              "q": "长妈妈形象：",
              "opts": [
                "A. 粗俗但善良",
                "B. 优雅高贵",
                "C. 严厉老师",
                "D. 富家小姐"
              ],
              "ans": 0,
              "exp": "粗俗但善良为鲁迅买山海经"
            },
            {
              "diff": "hard",
              "q": "双重主题：",
              "opts": [
                "A. 只有批判",
                "B. 温馨回忆+理性批判",
                "C. 只有回忆",
                "D. 只有讽刺"
              ],
              "ans": 1,
              "exp": "回忆美好+批判封建"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "朝花夕拾导读",
              "u": "https://search.bilibili.com/all?keyword=朝花夕拾+名著导读"
            }
          ]
        },
        {
          "type": "文言文",
          "topic": "《钟毓钟会》",
          "tagColor": "#fb923c",
          "content": "<p>钟毓钟会少有令誉。<br>年十三魏文帝闻之语其父钟繇曰可令二子来。<br>于是敕见。<br>毓面有汗帝曰卿面何以汗？<br>毓对曰战战惶惶汗出如浆。<br>复问会卿何以不汗？<br>对曰战战栗栗汗不敢出。</p><p  style=\"font-size:14px;color:var(--text2)\">【翻译】钟毓钟会小时候就有好名声。<br>十三岁时魏文帝曹丕听说了让父亲钟繇带二子来见他。<br>召见时钟毓脸上出汗文帝问为何出汗？<br>答恐惧惊慌汗如泉涌。<br>问钟会为何不出汗？<br>答恐惧战栗汗都不敢出来。</p><p><b>人物：</b>兄弟二人都机智过人回答巧妙。钟毓老实实在钟会更加机敏幽默。</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "关系：",
              "opts": [
                "A. 父子",
                "B. 兄弟",
                "C. 朋友",
                "D. 师徒"
              ],
              "ans": 1,
              "exp": "两人是兄弟"
            },
            {
              "diff": "basic",
              "q": "魏文帝是谁：",
              "opts": [
                "A. 曹操",
                "B. 曹丕",
                "C. 曹植",
                "D. 刘备"
              ],
              "ans": 1,
              "exp": "曹丕"
            },
            {
              "diff": "medium",
              "q": "钟会回答机智在：",
              "opts": [
                "A. 说真相",
                "B. 汗不敢出幽默化解",
                "C. 没回答",
                "D. 否认出汗"
              ],
              "ans": 1,
              "exp": "同样紧张却说汗不敢出"
            },
            {
              "diff": "medium",
              "q": "\"战战惶惶\"和\"战战栗栗\"区别：",
              "opts": [
                "A. 完全不同",
                "B. 近义变化显才思",
                "C. 一个怕一个不怕",
                "D. 无区别"
              ],
              "ans": 1,
              "exp": "变化显示才思"
            },
            {
              "diff": "hard",
              "q": "可以看出：",
              "opts": [
                "A. 毓比会聪明",
                "B. 兄弟都机智善辩",
                "C. 文帝很凶",
                "D. 出汗不好"
              ],
              "ans": 1,
              "exp": "两人各有千秋都机智"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "钟毓钟会",
              "u": "https://search.bilibili.com/all?keyword=钟毓钟会+世说新语"
            }
          ]
        },
        {
          "type": "阅读理解",
          "topic": "说明文阅读",
          "tagColor": "#34d399",
          "content": "<p><b>说明文阅读要点：对象+方法+顺序+语言</b></p><div class=\"reading-passage\"><b>📖 《神奇的蜘蛛丝》</b><br><br>蜘蛛丝是自然界中最神奇的材料之一。它的强度是同重量钢丝的5倍弹性比尼龙高出30%。更令人惊叹的是蜘蛛丝完全由蛋白质构成在常温下即可生产不产生任何污染。蜘蛛丝的用途非常广泛。医学上它可以制作手术缝合线和人造韧带因为人体不会排斥这种天然蛋白。军事上防弹衣中加入蜘蛛丝蛋白可以大幅减轻重量。科学家正在尝试通过转基因技术让蚕吐出含有蜘蛛丝蛋白的丝。</div><p><b>对象：</b>蜘蛛丝</p><p><b>方法：</b>列数字(5倍/30%)举例子(手术线/防弹衣)作比较(与钢丝尼龙比)</p><p><b>顺序：</b>特点→用途逻辑顺序</p><p><b>语言：</b>准确(数据)平实</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "说明对象：",
              "opts": [
                "A. 蜘蛛",
                "B. 蜘蛛丝",
                "C. 蚕丝",
                "D. 防弹衣"
              ],
              "ans": 1,
              "exp": "全文围绕蜘蛛丝"
            },
            {
              "diff": "basic",
              "q": "\"5倍\"用了什么方法：",
              "opts": [
                "A. 打比方",
                "B. 列数字",
                "C. 举例子",
                "D. 分类别"
              ],
              "ans": 1,
              "exp": "用具体数字说明"
            },
            {
              "diff": "medium",
              "q": "说明顺序：",
              "opts": [
                "A. 时间",
                "B. 空间",
                "C. 逻辑特点→用途",
                "D. 倒叙"
              ],
              "ans": 2,
              "exp": "先特点再用途逻辑顺序"
            },
            {
              "diff": "medium",
              "q": "说明方法不包括：",
              "opts": [
                "A. 列数字",
                "B. 举例子",
                "C. 抒情",
                "D. 作比较"
              ],
              "ans": 2,
              "exp": "抒情不是说明方法"
            },
            {
              "diff": "hard",
              "q": "\"人体不会排斥\"作用：",
              "opts": [
                "A. 顺便提",
                "B. 解释医学用途的原因",
                "C. 写蛋白质",
                "D. 没作用"
              ],
              "ans": 1,
              "exp": "解释为何可用于医学"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "说明文阅读",
              "u": "https://search.bilibili.com/all?keyword=说明文阅读+方法"
            }
          ]
        }
      ],
      "quiz": [
        {
          "topic": "句式",
          "q": "\"他不得不离开\"改肯定：",
          "opts": [
            "A. 他不离开",
            "B. 他必须离开",
            "C. 可以离开",
            "D. 想离开"
          ],
          "ans": 1,
          "exp": "不得不=必须"
        },
        {
          "topic": "句式",
          "q": "\"作业被我写完\"改把字句：",
          "opts": [
            "A. 我把作业写完",
            "B. 我被作业写",
            "C. 作业把我写",
            "D. 我作业写"
          ],
          "ans": 0,
          "exp": "被→把宾语移前"
        },
        {
          "topic": "名著",
          "q": "《朝花夕拾》共多少篇：",
          "opts": [
            "A. 5",
            "B. 10",
            "C. 15",
            "D. 20"
          ],
          "ans": 1,
          "exp": "共10篇回忆散文"
        },
        {
          "topic": "名著",
          "q": "长妈妈为鲁迅做了什么：",
          "opts": [
            "A. 教读书",
            "B. 买山海经",
            "C. 送日本",
            "D. 批评他"
          ],
          "ans": 1,
          "exp": "为少年鲁迅买山海经"
        },
        {
          "topic": "文言",
          "q": "\"汗不敢出\"体现钟会：",
          "opts": [
            "A. 胆小",
            "B. 幽默机智",
            "C. 不会说话",
            "D. 身体不好"
          ],
          "ans": 1,
          "exp": "同样紧张却幽默化解"
        },
        {
          "topic": "文言",
          "q": "\"令誉\"意思：",
          "opts": [
            "A. 命令名誉",
            "B. 美好的名声",
            "C. 令人失望",
            "D. 命令"
          ],
          "ans": 1,
          "exp": "令=美好誉=名声"
        },
        {
          "topic": "阅读",
          "q": "说明方法常用：",
          "opts": [
            "A. 抒情",
            "B. 列数字/举例子/作比较",
            "C. 写景",
            "D. 议论"
          ],
          "ans": 1,
          "exp": "说明文语言客观"
        },
        {
          "topic": "阅读",
          "q": "写\"人体不排斥\"为：",
          "opts": [
            "A. 写生物",
            "B. 解释医学用途原因",
            "C. 说人体好",
            "D. 凑字"
          ],
          "ans": 1,
          "exp": "解释为何可用于医学"
        }
      ]
    },
    {
      "day": 10,
      "title": "传统与命题",
      "topics": "传统文化·西游记·王子猷·真题·命题作文",
      "sections": [
        {
          "type": "基础运用",
          "topic": "传统文化",
          "tagColor": "#f59e0b",
          "content": "<p><b>一、二十四节气</b><br>春雨惊春清谷天（春）<br>夏满芒夏暑相连（夏）<br>秋处露秋寒霜降（秋）<br>冬雪雪冬小大寒（冬）<br>立春→雨水→惊蛰→春分→清明→谷雨（春）<br>立夏→小满→芒种→夏至→小暑→大暑（夏）<br>立秋→处暑→白露→秋分→寒露→霜降（秋）<br>立冬→小雪→大雪→冬至→小寒→大寒（冬）</p><p><b>二、传统节日</b><br>春节(贴春联)<br>元宵(赏灯吃汤圆)<br>清明(扫墓踏青)<br>端午(赛龙舟吃粽子纪念屈原)<br>中秋(赏月吃月饼)<br>重阳(登高敬老)</p><p><b>三、年龄称谓</b><br>总角(童年)<br>豆蔻(女13-14)<br>及笄(女15)<br>弱冠(男20)<br>而立(30)<br>不惑(40)<br>知天命(50)<br>花甲(60)<br>古稀(70)</p><p><b>四、十二生肖</b><br>子鼠 丑牛 寅虎 卯兔<br>辰龙 巳蛇 午马 未羊<br>申猴 酉鸡 戌狗 亥猪</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "\"清明\"是第几个节气：",
              "opts": [
                "A. 第3个",
                "B. 第5个",
                "C. 第7个",
                "D. 第10个"
              ],
              "ans": 1,
              "exp": "立春→雨水→惊蛰→春分→清明"
            },
            {
              "diff": "basic",
              "q": "端午节纪念谁：",
              "opts": [
                "A. 李白",
                "B. 屈原",
                "C. 杜甫",
                "D. 曹操"
              ],
              "ans": 1,
              "exp": "纪念爱国诗人屈原"
            },
            {
              "diff": "medium",
              "q": "\"花甲\"指多少岁：",
              "opts": [
                "A. 50",
                "B. 60",
                "C. 70",
                "D. 80"
              ],
              "ans": 1,
              "exp": "花甲=60岁天干地支一轮回"
            },
            {
              "diff": "medium",
              "q": "\"子鼠\"中子对应：",
              "opts": [
                "A. 时间子时23-1点",
                "B. 儿子",
                "C. 孩子",
                "D. 小"
              ],
              "ans": 0,
              "exp": "十二地支子时23-1点"
            },
            {
              "diff": "hard",
              "q": "\"总角\"指什么年龄：",
              "opts": [
                "A. 老年",
                "B. 童年",
                "C. 青年",
                "D. 中年"
              ],
              "ans": 1,
              "exp": "总角=儿童头发扎成两个角"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "传统文化常识",
              "u": "https://search.bilibili.com/all?keyword=传统文化+常识+小升初"
            }
          ]
        },
        {
          "type": "名著导读",
          "topic": "《西游记》",
          "tagColor": "#e879f9",
          "content": "<p><b>《西游记》——吴承恩著中国四大名著之一</b></p><p><b>主要内容：</b>唐僧师徒四人西天取经历经九九八十一难。</p><p><b>主要人物：</b>①唐僧——善良但有时是非不分固执<br>②孙悟空——机智勇敢，本领高强，爱憎分明<br>（金箍棒、七十二变、火眼金睛）<br>③猪八戒——好吃懒做但憨厚可爱(九齿钉耙)<br>④沙僧——忠厚老实任劳任怨</p><p><b>经典情节：</b><br>大闹天宫（反抗精神）<br>→ 三打白骨精（火眼金睛，忠诚）<br>→ 真假美猴王（六耳猕猴）<br>→ 三借芭蕉扇（火焰山）</p><p><b>主题：</b>取经 = 追求理想的历程<br>八十一难 = 克服困难的过程</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "作者：",
              "opts": [
                "A. 罗贯中",
                "B. 吴承恩",
                "C. 施耐庵",
                "D. 曹雪芹"
              ],
              "ans": 1,
              "exp": "吴承恩"
            },
            {
              "diff": "basic",
              "q": "孙悟空武器：",
              "opts": [
                "A. 九齿钉耙",
                "B. 金箍棒",
                "C. 青龙刀",
                "D. 禅杖"
              ],
              "ans": 1,
              "exp": "如意金箍棒"
            },
            {
              "diff": "medium",
              "q": "三打白骨精表现：",
              "opts": [
                "A. 爱打架",
                "B. 火眼金睛识别妖魔+忠诚",
                "C. 喜欢白骨精",
                "D. 不喜欢唐僧"
              ],
              "ans": 1,
              "exp": "识破三次变化坚持除妖"
            },
            {
              "diff": "medium",
              "q": "猪八戒形象：",
              "opts": [
                "A. 完美",
                "B. 好吃懒做但憨厚可爱",
                "C. 勤奋",
                "D. 沉默"
              ],
              "ans": 1,
              "exp": "缺点和优点并存"
            },
            {
              "diff": "hard",
              "q": "八十一难象征：",
              "opts": [
                "A. 数字巧合",
                "B. 追求理想必须克服重重困难",
                "C. 佛家数字",
                "D. 随便写的"
              ],
              "ans": 1,
              "exp": "象征取经路上的艰难险阻"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "西游记导读",
              "u": "https://search.bilibili.com/all?keyword=西游记+名著导读+初中"
            }
          ]
        },
        {
          "type": "文言文",
          "topic": "《王子猷雪夜访戴》",
          "tagColor": "#fb923c",
          "content": "<p>王子猷居山阴夜大雪眠觉开室命酌酒。<br>四望皎然因起彷徨咏左思招隐诗。<br>忽忆戴安道时戴在剡即便夜乘小船就之。<br>经宿方至造门不前而返。<br>人问其故王曰吾本乘兴而行兴尽而返何必见戴？</p><p  style=\"font-size:14px;color:var(--text2)\">【翻译】王子猷住山阴夜里下大雪醒来开窗喝酒。<br>四望洁白起身徘徊吟咏。<br>忽然想起戴安道在剡县就立即乘小船前往。<br>经过一夜才到到了门前却不进去就返回了。<br>别人问他原因他说我本是趁兴致去的兴致没了就回来为什么一定要见到戴安道呢？</p><p><b>人物：</b>率性而为任性放达——魏晋名士的典型风度。乘兴而行兴尽而返体现超脱的生活态度。</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "去见谁：",
              "opts": [
                "A. 左思",
                "B. 戴安道",
                "C. 父亲",
                "D. 朋友"
              ],
              "ans": 1,
              "exp": "忽忆戴安道"
            },
            {
              "diff": "basic",
              "q": "\"造门\"意思：",
              "opts": [
                "A. 造门",
                "B. 到了门前",
                "C. 制造",
                "D. 创造"
              ],
              "ans": 1,
              "exp": "造=到"
            },
            {
              "diff": "medium",
              "q": "为何门前不进去：",
              "opts": [
                "A. 迷路",
                "B. 兴致已尽",
                "C. 不在家",
                "D. 害怕"
              ],
              "ans": 1,
              "exp": "乘兴而行兴尽而返"
            },
            {
              "diff": "medium",
              "q": "表现了什么：",
              "opts": [
                "A. 很懒",
                "B. 率性而为的魏晋风度",
                "C. 不好出行",
                "D. 不被欢迎"
              ],
              "ans": 1,
              "exp": "魏晋名士崇尚率性自然"
            },
            {
              "diff": "hard",
              "q": "\"何必见戴\"蕴含：",
              "opts": [
                "A. 不重视朋友",
                "B. 重视内心感受而非形式目的",
                "C. 不重要",
                "D. 不想见人"
              ],
              "ans": 1,
              "exp": "过程满足内心不拘形式"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "王子猷雪夜访戴",
              "u": "https://search.bilibili.com/all?keyword=王子猷雪夜访戴"
            }
          ]
        },
        {
          "type": "阅读理解",
          "topic": "真题演练（一）",
          "tagColor": "#34d399",
          "content": "<p><b>综合阅读真题模拟</b></p><div class=\"reading-passage\"><b>📖 《爷爷的菜园》</b><br><br>爷爷的菜园不大却什么都有：碧绿的青菜红彤彤的番茄爬满竹架的豆角。每天清晨爷爷都会扛着锄头去菜园浇水除草捉虫。他常说土地最诚实你付出多少它就回报多少。去年暑假我也学着种了一畦小青菜。播种浇水等待……第十天嫩绿的芽终于破土而出。那一刻我忽然理解了爷爷的话。原来收获的喜悦不在于果实有多大而在于你亲眼见证了一个生命从种子到餐桌的完整过程。</div><p>涵盖：概括标题赏析写作手法情感主旨</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "用一句话概括本文：",
              "opts": [
                "A. 爷爷有菜园",
                "B. 通过种菜经历明白付出才有收获",
                "C. 暑假种菜",
                "D. 菜园很大"
              ],
              "ans": 1,
              "exp": "事件+道理"
            },
            {
              "diff": "basic",
              "q": "\"土地最诚实\"修辞：",
              "opts": [
                "A. 比喻",
                "B. 拟人",
                "C. 夸张",
                "D. 对比"
              ],
              "ans": 1,
              "exp": "赋予土地人格"
            },
            {
              "diff": "medium",
              "q": "\"破\"字赏析：",
              "opts": [
                "A. 普通",
                "B. 破字写出生命力",
                "C. 绿芽嫩",
                "D. 无特别"
              ],
              "ans": 1,
              "exp": "有力度写出新生命力量感"
            },
            {
              "diff": "medium",
              "q": "\"我忽然理解了\"作用：",
              "opts": [
                "A. 过渡",
                "B. 点明主旨的转折",
                "C. 随便写",
                "D. 开篇"
              ],
              "ans": 1,
              "exp": "从种菜到感悟的转折点"
            },
            {
              "diff": "hard",
              "q": "综合手法：",
              "opts": [
                "A. 只有记叙",
                "B. 借事说理+拟人+首尾呼应",
                "C. 只有描写",
                "D. 只有议论"
              ],
              "ans": 1,
              "exp": "通过小事讲道理"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "小升初阅读真题",
              "u": "https://search.bilibili.com/all?keyword=小升初+阅读理解+真题"
            }
          ]
        },
        {
          "type": "作文",
          "topic": "命题作文",
          "tagColor": "#8b5cf6",
          "content": "<p><b>命题作文：《最难忘的一件事》</b></p><p><b>指导：</b>①选材——选有真情实感的小事<br>②结构——起因→经过→结果→感悟<br>③描写——动作心理神态多种描写<br>④字数——400-500字</p><p><b>范文开头：</b>\"人的记忆就像一片海有些事如浪花转瞬即逝有些却如礁石任凭时光冲刷依然清晰。<br>我最难忘的是十岁那年第一次上台演讲的经历。<br>\"</p><p><b>评分：</b>内容40%+结构20%+语言30%+书写10%</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "命题作文最重要：",
              "opts": [
                "A. 字数多",
                "B. 选材真实有感情",
                "C. 用很多成语",
                "D. 写大事"
              ],
              "ans": 1,
              "exp": "真情实感比技巧重要"
            },
            {
              "diff": "basic",
              "q": "开头方法：",
              "opts": [
                "A. 直叙",
                "B. 比喻式开头",
                "C. 设问",
                "D. 对话"
              ],
              "ans": 1,
              "exp": "海和礁石比喻引难忘"
            },
            {
              "diff": "medium",
              "q": "记叙文结构：",
              "opts": [
                "A. 只有经过",
                "B. 起因→经过→结果→感悟",
                "C. 倒叙",
                "D. 不按顺序"
              ],
              "ans": 1,
              "exp": "完整记叙有头有尾"
            },
            {
              "diff": "medium",
              "q": "\"任凭时光冲刷依然清晰\"作用：",
              "opts": [
                "A. 写海",
                "B. 用比喻强调难忘",
                "C. 凑字",
                "D. 没作用"
              ],
              "ans": 1,
              "exp": "比喻呼应题目"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "命题作文",
              "u": "https://search.bilibili.com/all?keyword=命题作文+写作技巧"
            }
          ]
        }
      ],
      "quiz": [
        {
          "topic": "传统",
          "q": "\"清明\"第几个节气：",
          "opts": [
            "A. 3",
            "B. 5",
            "C. 7",
            "D. 10"
          ],
          "ans": 1,
          "exp": "第5个"
        },
        {
          "topic": "传统",
          "q": "\"不惑\"多少岁：",
          "opts": [
            "A. 30",
            "B. 40",
            "C. 50",
            "D. 60"
          ],
          "ans": 1,
          "exp": "四十不惑"
        },
        {
          "topic": "名著",
          "q": "孙悟空被压哪里：",
          "opts": [
            "A. 火焰山",
            "B. 五行山",
            "C. 花果山",
            "D. 五指峰"
          ],
          "ans": 1,
          "exp": "压在五行山下五百年"
        },
        {
          "topic": "名著",
          "q": "大闹天宫反映：",
          "opts": [
            "A. 爱捣乱",
            "B. 反抗精神",
            "C. 喜欢打架",
            "D. 不爱天宫"
          ],
          "ans": 1,
          "exp": "反抗权威的象征"
        },
        {
          "topic": "文言",
          "q": "乘兴而行意思：",
          "opts": [
            "A. 半途而废",
            "B. 重视内心感受不拘形式",
            "C. 不重视友",
            "D. 做事随便"
          ],
          "ans": 1,
          "exp": "重视体验过程"
        },
        {
          "topic": "文言",
          "q": "\"经宿方至\"宿的意思：",
          "opts": [
            "A. 宿舍",
            "B. 一夜",
            "C. 住宿",
            "D. 星星"
          ],
          "ans": 1,
          "exp": "经宿=经过一夜"
        },
        {
          "topic": "阅读",
          "q": "借事说理核心：",
          "opts": [
            "A. 只写事",
            "B. 通过具体事件引出道理",
            "C. 只说道理",
            "D. 写很多事"
          ],
          "ans": 1,
          "exp": "小事讲普遍道理"
        },
        {
          "topic": "作文",
          "q": "记叙文结构：",
          "opts": [
            "A. 随便写",
            "B. 起因→经过→结果→感悟",
            "C. 只写结果",
            "D. 只写感悟"
          ],
          "ans": 1,
          "exp": "四步结构"
        }
      ]
    },
    {
      "day": 11,
      "title": "名著与半命题",
      "topics": "水浒传·子罕辞玉·真题·半命题作文",
      "sections": [
        {
          "type": "名著导读",
          "topic": "《水浒传》",
          "tagColor": "#e879f9",
          "content": "<p><b>《水浒传》——施耐庵著中国四大名著之一</b></p><p><b>内容：</b>北宋末宋江为首108位好汉在梁山聚义替天行道后被招安。</p><p><b>人物：</b>①宋江——及时雨重义气<br>②武松——景阳冈打虎勇猛<br>③鲁智深——花和尚倒拔垂杨柳粗中有细<br>④林冲——豹子头被逼上梁山的典型<br>⑤李逵——黑旋风鲁莽但忠诚</p><p><b>情节：</b>武松打虎<br>鲁提辖拳打镇关西<br>林冲风雪山神庙<br>智取生辰纲</p><p><b>主题：</b>官逼民反揭露封建社会黑暗歌颂反抗精神</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "作者：",
              "opts": [
                "A. 罗贯中",
                "B. 施耐庵",
                "C. 吴承恩",
                "D. 曹雪芹"
              ],
              "ans": 1,
              "exp": "施耐庵"
            },
            {
              "diff": "basic",
              "q": "多少位好汉：",
              "opts": [
                "A. 36",
                "B. 72",
                "C. 108",
                "D. 100"
              ],
              "ans": 2,
              "exp": "一百零八将"
            },
            {
              "diff": "medium",
              "q": "被逼上梁山的典型：",
              "opts": [
                "A. 宋江",
                "B. 林冲",
                "C. 武松",
                "D. 李逵"
              ],
              "ans": 1,
              "exp": "林冲禁军教头被陷害"
            },
            {
              "diff": "medium",
              "q": "鲁智深绰号：",
              "opts": [
                "A. 及时雨",
                "B. 花和尚",
                "C. 豹子头",
                "D. 黑旋风"
              ],
              "ans": 1,
              "exp": "花和尚鲁智深"
            },
            {
              "diff": "hard",
              "q": "官逼民反意思：",
              "opts": [
                "A. 官员管理",
                "B. 官府逼迫百姓反抗",
                "C. 百姓管理",
                "D. 官员互斗"
              ],
              "ans": 1,
              "exp": "腐败逼百姓造反"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "水浒传导读",
              "u": "https://search.bilibili.com/all?keyword=水浒传+名著导读+初中"
            }
          ]
        },
        {
          "type": "文言文",
          "topic": "《子罕辞玉》",
          "tagColor": "#fb923c",
          "content": "<p>宋人或得玉献诸子罕。<br>子罕弗受。<br>献玉者曰以示玉人玉人以为宝也故敢献之。<br>子罕曰我以不贪为宝尔以玉为宝。<br>若以与我皆丧宝也不若人有其宝。</p><p  style=\"font-size:14px;color:var(--text2)\">【翻译】宋人得美玉献给子罕子罕不接受。<br>献者说我给玉匠看过玉匠认为是宝所以才敢献。<br>子罕说我以不贪为宝你以玉为宝。<br>若给我我俩都失去了宝不如各保其宝。</p><p><b>寓意：</b>清廉自守不贪不占的高尚品格。子罕以不贪为宝比美玉更珍贵。</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "不接受因：",
              "opts": [
                "A. 玉不好",
                "B. 以不贪为宝",
                "C. 太贵",
                "D. 不认识"
              ],
              "ans": 1,
              "exp": "以不贪为宝"
            },
            {
              "diff": "basic",
              "q": "\"献诸子罕\"诸：",
              "opts": [
                "A. 许多",
                "B. 之于(合音词)",
                "C. 各位",
                "D. 诸侯"
              ],
              "ans": 1,
              "exp": "诸=之于"
            },
            {
              "diff": "medium",
              "q": "\"皆丧宝也\"丧：",
              "opts": [
                "A. 丧失",
                "B. 丧事",
                "C. 悲伤",
                "D. 死亡"
              ],
              "ans": 0,
              "exp": "丧失"
            },
            {
              "diff": "medium",
              "q": "子罕的\"宝\"是什么：",
              "opts": [
                "A. 玉",
                "B. 不贪的品质",
                "C. 金钱",
                "D. 官职"
              ],
              "ans": 1,
              "exp": "清廉不贪"
            },
            {
              "diff": "hard",
              "q": "道理：",
              "opts": [
                "A. 玉不重要",
                "B. 清廉品格比物质更珍贵",
                "C. 不要礼物",
                "D. 玉不是宝"
              ],
              "ans": 1,
              "exp": "精神高于物质财富"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "子罕辞玉",
              "u": "https://search.bilibili.com/all?keyword=子罕辞玉"
            }
          ]
        },
        {
          "type": "阅读理解",
          "topic": "真题演练（二）",
          "tagColor": "#34d399",
          "content": "<p><b>综合阅读真题</b></p><div class=\"reading-passage\"><b>📖 《那一束光》</b><br><br>那年冬天特别冷晚自习后我独自走回家路灯坏了几个巷子黑得吓人。我加快脚步心里直打鼓。突然前方出现一束光。是爸爸！他打着手电筒站在巷口棉袄上落满了雪花。\"就知道你怕黑。\"他说得轻描淡写却不知道那一束光照亮的何止是回家的路。从那以后每次走夜路我都会想起那个雪夜想起那束光——它让我知道不管前方的路有多黑总会有人为你留着一盏灯。</div><p>涵盖：标题含义深层象征写作手法情感主旨</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "表层含义：",
              "opts": [
                "A. 人生希望",
                "B. 爸爸的手电筒光",
                "C. 路灯",
                "D. 阳光"
              ],
              "ans": 1,
              "exp": "具体的束光"
            },
            {
              "diff": "basic",
              "q": "\"心里直打鼓\"什么描写：",
              "opts": [
                "A. 动作",
                "B. 心理",
                "C. 外貌",
                "D. 语言"
              ],
              "ans": 1,
              "exp": "内心害怕"
            },
            {
              "diff": "medium",
              "q": "\"棉袄上落满雪花\"妙处：",
              "opts": [
                "A. 写天气",
                "B. 暗示爸爸等了很久",
                "C. 雪花美",
                "D. 凑字"
              ],
              "ans": 1,
              "exp": "细节表现父爱深沉"
            },
            {
              "diff": "medium",
              "q": "深层含义：",
              "opts": [
                "A. 手电筒",
                "B. 象征父爱温暖和人生希望",
                "C. 路灯",
                "D. 月亮"
              ],
              "ans": 1,
              "exp": "父爱如光照亮人生"
            },
            {
              "diff": "hard",
              "q": "结尾\"总会有人为你留灯\"作用：",
              "opts": [
                "A. 写灯",
                "B. 点明主旨+升华主题",
                "C. 随便写",
                "D. 说路灯"
              ],
              "ans": 1,
              "exp": "上升为普遍人生感悟"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "小升初阅读真题",
              "u": "https://search.bilibili.com/all?keyword=小升初+阅读理解+真题演练"
            }
          ]
        },
        {
          "type": "作文",
          "topic": "半命题作文",
          "tagColor": "#8b5cf6",
          "content": "<p><b>半命题：《____的滋味》</b></p><p><b>补题建议：</b>成功的滋味/失败的滋味/成长的滋味/幸福的滋味/离别的滋味——选自己最有感触的</p><p><b>要点：</b>①\"滋味\"要写感受不能只写事件<br>②通过具体事件引出滋味<br>③情感变化清晰</p><p><b>范文开头(成长的滋味)：</b>\"成长是什么滋味？<br>小时候以为是甜的像糖果；后来发现成长更像是柠檬水的味道——入口酸涩回味却有一丝甘甜。<br>\"</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "第一步：",
              "opts": [
                "A. 开始写",
                "B. 补全题目",
                "C. 数字数",
                "D. 写结尾"
              ],
              "ans": 1,
              "exp": "先补题确定方向"
            },
            {
              "diff": "basic",
              "q": "\"滋味\"在题目中意思：",
              "opts": [
                "A. 食物味道",
                "B. 内心感受和体会",
                "C. 食品",
                "D. 烹饪"
              ],
              "ans": 1,
              "exp": "感受和体验"
            },
            {
              "diff": "medium",
              "q": "\"成长像柠檬水\"手法：",
              "opts": [
                "A. 直说",
                "B. 比喻",
                "C. 拟人",
                "D. 排比"
              ],
              "ans": 1,
              "exp": "将感受比作味道"
            },
            {
              "diff": "medium",
              "q": "写滋味最关键：",
              "opts": [
                "A. 只写事件",
                "B. 通过事件写感受",
                "C. 只写感受",
                "D. 写食谱"
              ],
              "ans": 1,
              "exp": "事件为载体感受是核心"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "半命题作文",
              "u": "https://search.bilibili.com/all?keyword=半命题作文+写作"
            }
          ]
        }
      ],
      "quiz": [
        {
          "topic": "名著",
          "q": "《水浒传》主题：",
          "opts": [
            "A. 爱情",
            "B. 官逼民反",
            "C. 神魔",
            "D. 帝王"
          ],
          "ans": 1,
          "exp": "官逼民反"
        },
        {
          "topic": "名著",
          "q": "\"及时雨\"是谁：",
          "opts": [
            "A. 武松",
            "B. 宋江",
            "C. 林冲",
            "D. 李逵"
          ],
          "ans": 1,
          "exp": "宋江绰号"
        },
        {
          "topic": "文言",
          "q": "子罕以何为宝：",
          "opts": [
            "A. 玉",
            "B. 不贪的品质",
            "C. 金钱",
            "D. 官职"
          ],
          "ans": 1,
          "exp": "以不贪为宝"
        },
        {
          "topic": "文言",
          "q": "\"若以与我\"以：",
          "opts": [
            "A. 因为",
            "B. 把",
            "C. 可以",
            "D. 已经"
          ],
          "ans": 1,
          "exp": "若以与我=若把它给我"
        },
        {
          "topic": "阅读",
          "q": "那一束光的深层：",
          "opts": [
            "A. 手电筒",
            "B. 父爱的温暖和人生希望",
            "C. 路灯",
            "D. 太阳"
          ],
          "ans": 1,
          "exp": "父爱如光"
        },
        {
          "topic": "阅读",
          "q": "\"棉袄落满雪花\"暗示：",
          "opts": [
            "A. 雪大",
            "B. 爸爸在雪中等了很久",
            "C. 棉袄脏",
            "D. 冬天冷"
          ],
          "ans": 1,
          "exp": "细节暗示等待久表现父爱"
        },
        {
          "topic": "作文",
          "q": "写滋味最重要：",
          "opts": [
            "A. 写食物",
            "B. 通过事件写出感受",
            "C. 只写事件",
            "D. 写食谱"
          ],
          "ans": 1,
          "exp": "滋味=感受"
        },
        {
          "topic": "综合",
          "q": "\"官逼民反\"含义：",
          "opts": [
            "A. 官员管理",
            "B. 官府腐败逼迫百姓反抗",
            "C. 百姓管理",
            "D. 官员互斗"
          ],
          "ans": 1,
          "exp": "腐败统治逼人民反抗"
        }
      ]
    },
    {
      "day": 12,
      "title": "收官与总结",
      "topics": "红楼梦·赵高指鹿为马·真题·复盘",
      "sections": [
        {
          "type": "名著导读",
          "topic": "《红楼梦》",
          "tagColor": "#e879f9",
          "content": "<p><b>《红楼梦》——曹雪芹著中国四大名著之首</b></p><p><b>内容：</b>以贾宝玉林黛玉薛宝钗的爱情悲剧为主线描写贾史王薛四大家族的兴衰。</p><p><b>人物：</b>①贾宝玉——叛逆厌恶仕途追求真情<br>②林黛玉——才华横溢多愁善感寄人篱下<br>③薛宝钗——端庄贤淑处事周全<br>④王熙凤——精明强干\"凤辣子\"</p><p><b>情节：</b>黛玉葬花(怜花喻己)<br>宝玉挨打(父子冲突)<br>刘姥姥进大观园(贫富对比)<br>元妃省亲(繁华背后的悲凉)</p><p><b>主题：</b>封建社会的末世缩影——千红一哭万艳同悲</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "作者：",
              "opts": [
                "A. 罗贯中",
                "B. 曹雪芹",
                "C. 施耐庵",
                "D. 吴承恩"
              ],
              "ans": 1,
              "exp": "曹雪芹前80回"
            },
            {
              "diff": "basic",
              "q": "黛玉葬花反映：",
              "opts": [
                "A. 喜欢种花",
                "B. 怜花喻己多愁善感",
                "C. 爱劳动",
                "D. 不喜欢花"
              ],
              "ans": 1,
              "exp": "怜惜落花如怜己"
            },
            {
              "diff": "medium",
              "q": "宝玉性格核心：",
              "opts": [
                "A. 热衷功名",
                "B. 叛逆追求真情",
                "C. 老实",
                "D. 粗鲁"
              ],
              "ans": 1,
              "exp": "厌恶科举追求真性情"
            },
            {
              "diff": "medium",
              "q": "刘姥姥进大观园作用：",
              "opts": [
                "A. 搞笑",
                "B. 穷人视角展现贾府奢华",
                "C. 写穷",
                "D. 写农民"
              ],
              "ans": 1,
              "exp": "贫富对比展现奢华"
            },
            {
              "diff": "hard",
              "q": "千红一哭万艳同悲含义：",
              "opts": [
                "A. 花很多",
                "B. 众多女性的悲剧命运",
                "C. 红衣服",
                "D. 花在哭"
              ],
              "ans": 1,
              "exp": "红楼群芳最终都是悲剧"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "红楼梦导读",
              "u": "https://search.bilibili.com/all?keyword=红楼梦+名著导读+初中"
            }
          ]
        },
        {
          "type": "文言文",
          "topic": "《赵高指鹿为马》",
          "tagColor": "#fb923c",
          "content": "<p>赵高欲为乱恐群臣不听乃先设验。<br>持鹿献于二世曰马也。<br>二世笑曰丞相误邪谓鹿为马。<br>问左右左右或默或言马以阿顺赵高或言鹿者。<br>高因阴中诸言鹿者以法。<br>后群臣皆畏高。</p><p  style=\"font-size:14px;color:var(--text2)\">【翻译】赵高想作乱怕群臣不听从就事先试探。<br>牵鹿献给秦二世说是马。<br>二世笑说丞相搞错了吧把鹿说成马。<br>问左右有人沉默有人说马来迎合赵高有人说是鹿。<br>赵高暗中用法律陷害说鹿的人。<br>后来群臣都怕赵高。</p><p><b>寓意：</b>成语指鹿为马——故意颠倒黑白混淆是非。揭露权臣专横和朝政黑暗。出自《史记·秦始皇本纪》。</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "指鹿为马意思：",
              "opts": [
                "A. 分不清",
                "B. 故意颠倒黑白",
                "C. 鹿像马",
                "D. 游戏"
              ],
              "ans": 1,
              "exp": "颠倒是非"
            },
            {
              "diff": "basic",
              "q": "赵高目的：",
              "opts": [
                "A. 眼神不好",
                "B. 试探群臣",
                "C. 开玩笑",
                "D. 真以为马"
              ],
              "ans": 1,
              "exp": "恐群臣不听乃先设验"
            },
            {
              "diff": "medium",
              "q": "说鹿的人如何：",
              "opts": [
                "A. 升官",
                "B. 被赵高陷害",
                "C. 没事",
                "D. 被表扬"
              ],
              "ans": 1,
              "exp": "阴中诸言鹿者以法"
            },
            {
              "diff": "medium",
              "q": "\"阿顺\"意思：",
              "opts": [
                "A. 阿姨顺利",
                "B. 迎合奉承",
                "C. 顺着走",
                "D. 名字"
              ],
              "ans": 1,
              "exp": "阿=迎合顺=顺从"
            },
            {
              "diff": "hard",
              "q": "群臣\"皆畏高\"说明：",
              "opts": [
                "A. 赵高厉害",
                "B. 权臣当道正直者被迫害",
                "C. 群臣胆小",
                "D. 朝廷和谐"
              ],
              "ans": 1,
              "exp": "说真话者被害大家害怕揭露黑暗"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "指鹿为马",
              "u": "https://search.bilibili.com/all?keyword=指鹿为马+成语故事"
            }
          ]
        },
        {
          "type": "阅读理解",
          "topic": "真题演练（三）",
          "tagColor": "#34d399",
          "content": "<p><b>综合阅读真题</b></p><div class=\"reading-passage\"><b>📖 《选择》</b><br><br>初三那年我面临一个选择：继续读普高还是去职校学汽修。父亲说普高有前途母亲说学门手艺实在。我纠结了很久。直到有一天在电视上看到一个纪录片——一个汽修工通过自学成了新能源汽车的工程师。他说不管走哪条路关键是走了之后别回头一直往前走。最终我选择了汽修。三年后当我拿到技能大赛奖杯时我明白了：人生不是单选题每条路都能通向远方只要你认真走。</div><p>涵盖：概括人物主旨理解</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "面临什么选择：",
              "opts": [
                "A. 吃什么",
                "B. 普高还是职校",
                "C. 去哪个城市",
                "D. 看什么电视"
              ],
              "ans": 1,
              "exp": "普高vs职校"
            },
            {
              "diff": "basic",
              "q": "最终选择因：",
              "opts": [
                "A. 父母逼",
                "B. 纪录片启发+每条路都能成功",
                "C. 不喜欢普高",
                "D. 随便选"
              ],
              "ans": 1,
              "exp": "纪录片让明白选择没绝对对错"
            },
            {
              "diff": "medium",
              "q": "\"人生不是单选题\"意思：",
              "opts": [
                "A. 很多题",
                "B. 人生有多种可能每条路可能成功",
                "C. 不要做题",
                "D. 很简单"
              ],
              "ans": 1,
              "exp": "不止一条路通向成功"
            },
            {
              "diff": "medium",
              "q": "题目\"选择\"作用：",
              "opts": [
                "A. 普通标题",
                "B. 点明主题+线索",
                "C. 凑字",
                "D. 没作用"
              ],
              "ans": 1,
              "exp": "标题点明核心事件"
            },
            {
              "diff": "hard",
              "q": "\"只要你认真走\"作用：",
              "opts": [
                "A. 走路小心",
                "B. 点明主旨成败取决于态度",
                "C. 只是结尾",
                "D. 写走路"
              ],
              "ans": 1,
              "exp": "呼应题目升华主题"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "小升初阅读冲刺",
              "u": "https://search.bilibili.com/all?keyword=小升初+阅读+真题"
            }
          ]
        },
        {
          "type": "总结",
          "topic": "重点复盘与答题技巧",
          "tagColor": "#38bdf8",
          "content": "<p><b>语文分班考答题技巧总结</b></p><p><b>一、基础运用</b><br>字音字形据义辨；词语三维度辨析；病句先判类型再修改；标点记清用法；对联注意结构对称</p><p><b>二、诗词鉴赏</b><br>模板：手法→画面→情感</p><p><b>三、文言文</b><br>通读→结合注释→补全省略→提炼寓</p><p><b>四、阅读理解</b><br>概括：谁+做+结果<br>赏析：手法+内容+效果<br>标题：表层+深层+作用<br>人物：正侧面+品质<br>主旨：通过…表达了…</p><p><b>五、作文</b><br>审题准→选材真→结构清→描写细→开头新</p>",
          "problems": [
            {
              "diff": "basic",
              "q": "概括用哪四字：",
              "opts": [
                "A. 谁做结果",
                "B. 好看就行",
                "C. 越长越好",
                "D. 只写事件"
              ],
              "ans": 0,
              "exp": "谁+做什么+结果/情感"
            },
            {
              "diff": "basic",
              "q": "诗词鉴赏模板：",
              "opts": [
                "A. 乱写",
                "B. 手法+画面+情感",
                "C. 只写喜欢",
                "D. 抄原文"
              ],
              "ans": 1,
              "exp": "三步鉴赏法"
            },
            {
              "diff": "medium",
              "q": "改病句第一步：",
              "opts": [
                "A. 乱改",
                "B. 判断病句类型",
                "C. 重写",
                "D. 删掉"
              ],
              "ans": 1,
              "exp": "先判断再修改"
            },
            {
              "diff": "medium",
              "q": "作文最重要：",
              "opts": [
                "A. 字数",
                "B. 真情实感",
                "C. 字好看",
                "D. 多成语"
              ],
              "ans": 1,
              "exp": "真情实感是灵魂"
            },
            {
              "diff": "hard",
              "q": "标题分析三层：",
              "opts": [
                "A. 只看表层",
                "B. 表层+深层+作用",
                "C. 只看深层",
                "D. 只看作用"
              ],
              "ans": 1,
              "exp": "完整三层分析"
            }
          ],
          "videos": [
            {
              "p": "B站",
              "t": "答题技巧",
              "u": "https://search.bilibili.com/all?keyword=小升初+语文+答题技巧"
            }
          ]
        }
      ],
      "quiz": [
        {
          "topic": "名著",
          "q": "《红楼梦》前80回作者：",
          "opts": [
            "A. 高鹗",
            "B. 曹雪芹",
            "C. 罗贯中",
            "D. 施耐庵"
          ],
          "ans": 1,
          "exp": "曹雪芹著高鹗续"
        },
        {
          "topic": "名著",
          "q": "黛玉葬花表现：",
          "opts": [
            "A. 喜欢种花",
            "B. 怜花喻己多愁善感",
            "C. 爱劳动",
            "D. 不喜欢花"
          ],
          "ans": 1,
          "exp": "借落花叹命运"
        },
        {
          "topic": "文言",
          "q": "指鹿为马现形容：",
          "opts": [
            "A. 分不清动物",
            "B. 故意颠倒黑白",
            "C. 鹿像马",
            "D. 马像鹿"
          ],
          "ans": 1,
          "exp": "颠倒是非混淆黑白"
        },
        {
          "topic": "文言",
          "q": "赵高献鹿说马目的：",
          "opts": [
            "A. 眼神不好",
            "B. 试探群臣",
            "C. 开玩笑",
            "D. 真不认识"
          ],
          "ans": 1,
          "exp": "恐群臣不听乃先设验"
        },
        {
          "topic": "阅读",
          "q": "人生不是单选题意思：",
          "opts": [
            "A. 不只一条路能成功",
            "B. 很多考试",
            "C. 不要选择",
            "D. 做多选题"
          ],
          "ans": 0,
          "exp": "人生多种可能"
        },
        {
          "topic": "阅读",
          "q": "标题\"选择\"作用：",
          "opts": [
            "A. 只是标题",
            "B. 点明主题+贯穿全文的线索",
            "C. 凑字",
            "D. 没用"
          ],
          "ans": 1,
          "exp": "标题即主题"
        },
        {
          "topic": "技巧",
          "q": "赏析句子步骤：",
          "opts": [
            "A. 随便写",
            "B. 手法+内容+效果",
            "C. 抄句子",
            "D. 写感受"
          ],
          "ans": 1,
          "exp": "标准三步"
        },
        {
          "topic": "技巧",
          "q": "作文开头最好：",
          "opts": [
            "A. 普通叙述",
            "B. 设问/比喻/场景切入",
            "C. 直接写经过",
            "D. 写结尾"
          ],
          "ans": 1,
          "exp": "吸引阅卷老师"
        }
      ]
    }
  ]
};
