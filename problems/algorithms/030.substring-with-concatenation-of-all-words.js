/**
 * [困难]30. 串联所有单词的子串
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 * 

给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

示例 1：

输入：
  s = "barfoothefoobarman",
  words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。


['bar', 'foo', 'foo', 'bar']

[['bar', 'foo'], ['foo', 'bar']]

示例 2：

输入：
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
输出：[]

[[word, good, good, good, best, word]]

 */

/**
 * 此解法没有用到所有words长度相同的条件，可根据此条件优化，比如使用窗口
 *
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let totalLen = 0
  const wordsDict = {}
  words.forEach((word) => {
    totalLen += word.length
    insertWord(wordsDict, word)
  })

  const res = []
  Object.keys(wordsDict).forEach((word) => {
    let position = 0
    let index = s.indexOf(word, position)
    while (index >= 0) {
      const newStr = s.slice(index + word.length)
      if (newStr.length >= totalLen - word.length) {
        deleteWord(wordsDict, word)
        helper(index, newStr, wordsDict, res)
        insertWord(wordsDict, word)
      }
      position = index + 1
      index = s.indexOf(word, position)
    }
  })
  return res
}

function helper(startIndex, str, wordsDict, res) {
  const keys = Object.keys(wordsDict)
  if (keys.length === 0 && res.indexOf(startIndex) < 0) {
    res.push(startIndex)
    return
  }
  keys.forEach((word) => {
    if (str.indexOf(word) === 0) {
      deleteWord(wordsDict, word)
      helper(startIndex, str.slice(word.length), wordsDict, res)
      insertWord(wordsDict, word)
    }
  })
}

function deleteWord(wordsDict, word) {
  if (wordsDict[word] === 1) {
    delete wordsDict[word]
  } else {
    wordsDict[word] -= 1
  }
}

function insertWord(wordsDict, word) {
  if (typeof wordsDict[word] === 'undefined') {
    wordsDict[word] = 1
  } else {
    wordsDict[word] += 1
  }
}

write('algorithms: 30. 串联所有单词的子串', 'title')

write(findSubstring('aaaaaaaa', ['aa', 'aa', 'aa'])) // [0,1,2]
write(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good'])) // [8]
write(findSubstring('barfoothefoobarman', ['foo', 'bar'])) // [0,9]
write(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])) // []

const str =
  'cxksvbkmmlkwviteqccjhsedjmoyimskmeehhovubiszsodiqhtyaxdlktmuiggukldubzqdjiebyjkpqfpqdsepmqluwrqictcguslddphdyrsowjhbcnsqddmbvclzvqhsksxnhethvnyuxfxzsqpxvdasflscbzumssbbwuluijqhqngkfxhdahvhunjwpgkjylmwixssgizyyhifepigyenttyriebtcogbwftqmcpmcwvhcmsklyxgryxccyvhodiljbbxftjhrerurleejekacheehclvfviqxmnefzowdhswsxcbdmdfvilekzcrukityxyfwmcctwanvdoyptfnbtrnsthoepieoiklwmppkpegssgknmxpfoezilnocxsrfcebqtsdkwjfqppedmvkczjmnzcpwxiebofujyxuwgzpxotdcqnerzteyvwwseauvgoeglyctzrspmvrcjyuiraimwehdfbalretcfxxeppwdnniwnegeeotdsaixdikuodytbxasmwxzlfxzldfstaxmcflfpybdbzzewzylxwmidkjrprjjtgxwnideifjkeiqdjpogncrsmcjetsnnamlpwotftdranhdxytfnvwgkzroukdjmpucnjxscajcqtfptaujwtrguiwouzyhqulddiygjjkbesqyskjofawzisqdrqkjkvnodlwowgrbyhzruihzkezsyrvshhbreqhkbfaymsbmzaftkpvutwotnklutnnydxihcihqcidckkxwzssuogodszzmopmumwbogkhjukleukcufuqvcezxgylunxobvrsbbzkvlxbhiddnzuieyhbeimbxlpzghthksugdrjkznoomkzsiitpqhqquhraqkkbcgjhxstzhjpwtoocxirprjfmqwmhgyikgtrellftwupqldsinlzfwfrmdfvmgfwmyqsmdxhzuwpfbjprwowsvphzuelckjrkbjwejdgdbxkdhzwfnsaljjkdnxixizikigqrmwwnugsdhokxikirtuxjtfibgslozeilagywptbwhmvqwdjszgbsnjutchkdluooaompjooraljypusobvjohdklmuqyogoquaigqwxsjiryclpfjywsdgdpctpqzdivgqbwoapykiypvpuepswsybkcwzsxfbvntylibcglmeciuzojrnesqounppmwshjlgxtjzzumgzwcymlpbrjsfehxtttldfwlcsudrqpzpnbnapfbgovoucnnygadnzqrrkvkckkuanjaeodnfzbzdqpdypgmoydhiysnlehnrsnwjsloropxeeacwjomhuusuohhsqulihjrcuhvixsmdvpbefqnbmhwaodueafnjpellmhulbiqwzscfiqiuxgwomqsmxfvmmhyaqunrcdocvqjfirbiyzwmpoypwtdkcdksxzkacaeasnhbgjlgkhsaxqrvmufoyrjxqvztxdvpscszndfymaamqrhelnvleejxbiqyonpgpihdnpbcpbohuvmfkhtrncoqmgqatfjkpqnffqjutxenuqvhzoyosogeuwhpdqzvipaofjkbiooeejlfzjvrzbytxhidxkyfzavglghtuyzbhlgjwcawdardhcigmgonijvtpdokdnlmatvzxyvdymggqqmcyargmnbbqpnveahhudgtbdwzrehiuwmsyeykrbojqbexelgaomtrrqtiucspyfhxjijajxjcbpbfahfrvyimodwjgpyewhdfrphbmsfnhguhpzakalyoowzunzbjhgqyvxbkrgzyouidtinttnkkkjezjhjsqbslzuvqcvrrrzwkjkgdzsnldtlmdwgtxzewvcpxzgqqhncqzkvackmgexujtbcqcipxmgwlopdvcgndqjdvtpbzoxijamacvrzjxyvnnykpgxuxixucpvddumpvapxxizhhxeukcebjdvimucqjztpvheqivqfdpokosgyxkbipwsbqurcvltquzjcwzkzqyletteqffaubswtonxjasbvrkznljodkbhfunvzsxwvpsrdhqokjpfcceqnqgrckaheoegibceqwvvdljnwyuzcbrsrxlthlcobgwkhyqzwlubyfrvflwimnafknauacickeoteeucrodrvuobikjwxlckyeeyjoctusnawhcpyfhtcvukifgfskpspvrylvtfogfmqhcqpjlrgidopjwiunalltjwpccflhrdrvtgegznocdgnzohposakdwbgagtkxwbtrjzxkoomuuzvkjkadkkhjlpjtittewoxfpwpemdygftsqgttqfcbtrlmbefhbteijbapnfpwkkqcslwjramkuxyveeffzlpkopbevsahdskveigvivhesfcwlhdnstxhkblhtnpyfbwljegrzpysxaqihwxzrxibyvjriasqbobmskfsbdmydejkagmrdutdqevagpsjduvxgarhefihkrukzgcdcxguddvlsnuxjrxrrozvuhfgazqzhuejtlgyqdllsfiewhvqwunsdsydtqfanjmiwujpxuapcktysrqoleirwiwsabupngajcjyzdarflmgddwtradizletninfvwfgyohathrbsdhxjfsaivkjiqcyypdvniemylmrufspkbmthhvpcfanwclwtouhwavunjnhogwyhluqsphwxhjvjutfkpoipjecusmiaiijvcapujmrrxocshhexxnmgrraldklntxlxzarimkzkyceglkfjxtrrkucpeqfznqxmqqufbwrbaxhnhoyfiqwumakqsrsfhrtzhqekoxmouvdckchsufmghyyarqhyhbartebhenxylaavcjnwobeycdytthudiuudavkeljdwkdtopindjrdnudjqlftvznzbklgxvlthqmvfuklgcovysgodlhakwzmjnugifcpvqmbnzovdcqbwzsbkbcvydjhqdpakrphkeixdwuibmjxlbzwddtdgcmxhbxtvpafvleajyikkrkyvluaondwrptastvnivufiafsanengqldbfdrugonxjnqckfkfcrocwiflosufdxikbaejqthzgzcqeoxggnlexqqmkktpjbzkbfwtydtgcvyilxrrlewkwowgapvjruwubsozxjhzgfjrcalpejaazyizodihzedaytbveiwkpgesgphnajpziyyybihdpkfnghlkrhvhnzbwqkjquareyrcczjfqvkebtpmnyjwmkxkajvsfvljucnwbybsunyxjplwnusbgrlicgaieltynjwrhzlbmlzvamtphntngeyjnytrmorbxnufmfiasjwswrkdfdsljqwwrppfgggdtdkhktidcgxyxhdcmyqwqosjekomqxpmaatkvbpxhnyhwdljdbfuszfwjukctzovbjhwnxwwkwdgzppdswzkweihasjtuzoxjywwvsuhoynppfujdvwzaghcbsyxsoubmqzhitoyteqklmwoisqkaxmbpkyhztklllvwhjuapmnazjrhbhrbgffvqdfryrckdzgkjcmapzdqiuzldspjxugpxlgydliikouvsgyjgbzqxacasrjslphkdqiidsqniklbsjkymmpjmtlfkuxxlghowsyzkopvaawtlitzukijdtqppnoavyrsqptcgixgkvbxgxwcjglpzbeqqvrmtigjzbnfknowkrwqostybgnaktraokohuwstyibkvpihgeyxztvabkcldvosfcbbbuxzcajzptgxygwzbrzddbohzcbgheiiyhhchsdylmvlsukuljxrnnymqbsxfchgjoksiqqtcohwirqvdpmsfmevpyuxbbdmrpfzfvujldgtvypaqdsvqwsfwoczrhmiztjgqfqcjyvewmeoqwjiudnqrssizesazdhpjxrsxpytdektctbwzroslgbmmvnlzubitucqjalnevigrmeqfuiqblcnhrbilcqgyuwiukxafhgwtmoagxqhkvxtmabaetgcnfkjpjjurrtmdhnkgfttasmpuqpyjxbzcnirxsoojjcpspbbvuuxpimjydikbjjdwrxvlnlvwokqflrchlaywokussetdnybhxzsmkpkybbgosiwgiwcxgwradmfsmhzkguwsjhtlizbchziswmrcjifowkgitisbcrunanakocmxbxpxjicushiotpxnxrobikoixpunrhlsgcsrlwmdfusylplkgclrmcbkrwzkfkelnyeyuqdznvyamllvnymacnmvllfqymdlkilfaognmgqysbvfbjhextbkhhdftgsfqdmrttgfbwgtzdbdnijmekwntzsoikuypiridaqfyyaybbdommasyxfsyxggjchylyiqayvzywxazcolordookgmhpvstcqgcbxdzseaqbaqfqdvhjjvtqkbhhtajmhnneqoyuopxqhehkzotjmnbyqiflkoztdmzwdaqtpqkyuriwhefvtgtjqywcowyskxonxghoytovmxrtdypwgihyjdazzytkyjzxqioqbcnnbgheeyakihitnltmlmyjwyjogxeizuxbaghfeirprcienbtyqrkmrvaasgktchwdoekuobjffsmsvftlyfxqazquiankjkpxozucddjixxdtcweddevffnznpoayypyopssuxecxbfqgdwjgaglgtmvibvibngseakyaqaxuipalllsorfwksrutpcuelminzgnriklqzlcnwwbpbxzvqvohylllztyaboskadccrgppcsfgrgbhcsrcfcngynhbbbncgqexyvpbnujeamneeegljtsjhbkkcamissiqnxrarcetpsyvyehhabqjcbtgdiovawlqtfqmhxgwrgupmdxoepxistovdeqfdcvyhmloltnczhrnkqcqgzayuquxumfzoayxolozeddfkxswnuovwowqeqqaevctxasmlgnpjrwvootdjhzhxvzdnpgrmimmifavnnkxgiuwwoahxbovwqalhgcworiwyitlxdkenfakvatsbkpzaqkhwpdnillgvfrtkexyjzigcdydnqfpgrxegcroqduliogssfqdfalhglmtbrjjjiormhgckcqsswnmcfrhgcqoochrusbfcrwpyerjjhdbgsqiyhrgmhucjdtfwwmanjpopjxasceyvugvdzbpgvtsapxwlkzbvopmxonqsrqplxkqwlgfibxjquheggfdxwqwmfoewfujegzcuhhclenbbxfjfmncifbumpbiuxtadudxekcprrquqyfwksatzbpltsvnpqovltspdwgwqysgwyehsfcsitfbmdrdthygatxfrdchcuoysshlzlfifmltpcyljxrlsprjuttwpjxkbexdsenzqysidqtopmajbrvwmoudxrpaymdqsspjtjtwbomtameefzctpwxoqmpobugtnxeiizelnqeofjskkugasdoirfyucgqpfuznudzjvfxaqrnbntdiyrqrzrmbxcsdyrsuwterzdurxjskcvscpltqchrbjlgkczgyumrtqlnnufzyduauhwklddmpotbsuhsoulkmxxbtcauhwwbdsnqysdniyoasvugrgqdfneashubftdjnsblneyvcoyumsddatjhjnidueeaxjllemyrtxmxnkszfxfhqopbbxeydladunoybopwlcubooavlfddvsfxrlxuwzxrmnrpchmpliqbwtxhyckuuptldshzrfsfukwwtiogqehoxgvyigucxppahzcygwfaibzbmnjetrttzoriwnmucewldaljxqjfrkjdxsitldmlrfvoshkwnghqhszgilnbvwhvrroeuaplhmbzulxhueabybjimwjkvqhmjvqdxireuufqgcaaiadgbmoqkzafshtbemhduahquohasjcajfimryccxejpndtrpcwlcdbwtkzltbnchxpavtevyqmltffkjbvlhwkajjocmdhvbywyrctpsidnpixzlsksrwvaflcuojprhlqbqlqivtwldtkpowjftefaphugtkxcxpdndwyyrujvpvmdsxklcpntzibusbwpqcdvybupxfmobautyegcwtxvbzpvanlspqoptkhspviswclwjtafnxcqytmaiztarjpmtygkuodstqockqjznnpmgdmqehqxqgjlgrwagbuzrkdbaocobscjxqzeyqbqynegechmddnuosyogaejuiuuzuyzmzrmovutxbfchvzvnzjuzqfwyaqxwqykrqygnsznwgpddoyrnjnpzsnysdxqvyamqysdttqpcgsfwswkbjzdemdyrcpoaraqstulomcquuwroudrgcumqzkjcbxctzvlsryhdazawxrksubayy'
const arr = [
  'otftdranhdxytfnvwgkzroukdj',
  'iflkoztdmzwdaqtpqkyuriwhef',
  'lbsjkymmpjmtlfkuxxlghowsyz',
  'cddjixxdtcweddevffnznpoayy',
  'snjutchkdluooaompjooraljyp',
  'fuszfwjukctzovbjhwnxwwkwdg',
  'frmdfvmgfwmyqsmdxhzuwpfbjp',
  'ukityxyfwmcctwanvdoyptfnbt',
  'mhnneqoyuopxqhehkzotjmnbyq',
  'vtgtjqywcowyskxonxghoytovm',
  'wouzyhqulddiygjjkbesqyskjo',
  'mfiasjwswrkdfdsljqwwrppfgg',
  'zruihzkezsyrvshhbreqhkbfay',
  'rsxpytdektctbwzroslgbmmvnl',
  'jdwrxvlnlvwokqflrchlaywoku',
  'xhnhoyfiqwumakqsrsfhrtzhqe',
  'gtbdwzrehiuwmsyeykrbojqbex',
  'tpcyljxrlsprjuttwpjxkbexds',
  'tsjhbkkcamissiqnxrarcetpsy',
  'keiqdjpogncrsmcjetsnnamlpw',
  'rquqyfwksatzbpltsvnpqovlts',
  'tdgcmxhbxtvpafvleajyikkrky',
  'qvrmtigjzbnfknowkrwqostybg',
  'vluaondwrptastvnivufiafsan',
  'rnsthoepieoiklwmppkpegssgk',
  'cyypdvniemylmrufspkbmthhvp',
  'ihcihqcidckkxwzssuogodszzm',
  'chrusbfcrwpyerjjhdbgsqiyhr',
  'wmeoqwjiudnqrssizesazdhpjx',
  'ommasyxfsyxggjchylyiqayvzy',
  'kwntzsoikuypiridaqfyyaybbd',
  'cwjomhuusuohhsqulihjrcuhvi',
  'wxazcolordookgmhpvstcqgcbx',
  'nusbgrlicgaieltynjwrhzlbml',
  'xrtdypwgihyjdazzytkyjzxqio',
  'xfvmmhyaqunrcdocvqjfirbiyz',
  'fuklgcovysgodlhakwzmjnugif',
  'hzhxvzdnpgrmimmifavnnkxgiu',
  'xsmdvpbefqnbmhwaodueafnjpe',
  'xfbvntylibcglmeciuzojrnesq',
  'cnhrbilcqgyuwiukxafhgwtmoa',
  'xkajvsfvljucnwbybsunyxjplw',
  'zuieyhbeimbxlpzghthksugdrj',
  'gbzqxacasrjslphkdqiidsqnik',
  'jxtrrkucpeqfznqxmqqufbwrba',
  'chziswmrcjifowkgitisbcruna',
  'jyzdarflmgddwtradizletninf',
  'pcktysrqoleirwiwsabupngajc',
  'dkenfakvatsbkpzaqkhwpdnill',
  'kbiooeejlfzjvrzbytxhidxkyf',
  'wlopdvcgndqjdvtpbzoxijamac',
  'xsoojjcpspbbvuuxpimjydikbj',
  'faubswtonxjasbvrkznljodkbh',
  'uqsphwxhjvjutfkpoipjecusmi',
  'nawhcpyfhtcvukifgfskpspvry',
  'xkdhzwfnsaljjkdnxixizikigq',
  'zxgylunxobvrsbbzkvlxbhiddn',
  'alltjwpccflhrdrvtgegznocdg',
  'gffvqdfryrckdzgkjcmapzdqiu',
  'hzedaytbveiwkpgesgphnajpzi',
  'wmpoypwtdkcdksxzkacaeasnhb',
  'hsdylmvlsukuljxrnnymqbsxfc',
  'bbbncgqexyvpbnujeamneeeglj',
  'bjhgqyvxbkrgzyouidtinttnkk',
  'pyuxbbdmrpfzfvujldgtvypaqd',
  'cfanwclwtouhwavunjnhogwyhl',
  'plkgclrmcbkrwzkfkelnyeyuqd',
  'ugvdzbpgvtsapxwlkzbvopmxon',
  'msbmzaftkpvutwotnklutnnydx',
  'pdwgwqysgwyehsfcsitfbmdrdt',
  'elgaomtrrqtiucspyfhxjijajx',
  'biqyonpgpihdnpbcpbohuvmfkh',
  'llmhulbiqwzscfiqiuxgwomqsm',
  'mpucnjxscajcqtfptaujwtrgui',
  'gdzsnldtlmdwgtxzewvcpxzgqq',
  'gdtdkhktidcgxyxhdcmyqwqosj',
  'zubitucqjalnevigrmeqfuiqbl',
  'aymdqsspjtjtwbomtameefzctp',
  'kjezjhjsqbslzuvqcvrrrzwkjk',
  'zavglghtuyzbhlgjwcawdardhc',
  'fawzisqdrqkjkvnodlwowgrbyh',
  'vrzjxyvnnykpgxuxixucpvddum',
  'rdutdqevagpsjduvxgarhefihk',
  'ydhiysnlehnrsnwjsloropxeea',
  'hgjoksiqqtcohwirqvdpmsfmev',
  'jyxuwgzpxotdcqnerzteyvwwse',
  'sozxjhzgfjrcalpejaazyizodi',
  'usobvjohdklmuqyogoquaigqwx',
  'tmdhnkgfttasmpuqpyjxbzcnir',
  'quareyrcczjfqvkebtpmnyjwmk',
  'rmwwnugsdhokxikirtuxjtfibg',
  'qsrqplxkqwlgfibxjquheggfdx',
  'rukzgcdcxguddvlsnuxjrxrroz',
  'oomuuzvkjkadkkhjlpjtittewo',
  'wqwmfoewfujegzcuhhclenbbxf',
  'yjogxeizuxbaghfeirprcienbt',
  'qbwoapykiypvpuepswsybkcwzs',
  'lvtfogfmqhcqpjlrgidopjwiun',
  'rwowsvphzuelckjrkbjwejdgdb',
  'jfqppedmvkczjmnzcpwxiebofu',
  'hygatxfrdchcuoysshlzlfifml',
  'gxqhkvxtmabaetgcnfkjpjjurr',
  'zppdswzkweihasjtuzoxjywwvs',
  'hgyikgtrellftwupqldsinlzfw',
  'kckkuanjaeodnfzbzdqpdypgmo',
  'aiijvcapujmrrxocshhexxnmgr',
  'sjiryclpfjywsdgdpctpqzdivg',
  'kuxyveeffzlpkopbevsahdskve',
  'uqvhzoyosogeuwhpdqzvipaofj',
  'gjhxstzhjpwtoocxirprjfmqwm',
  'cwiflosufdxikbaejqthzgzcqe',
  'qeqqaevctxasmlgnpjrwvootdj',
  'ymggqqmcyargmnbbqpnveahhud',
  'ekomqxpmaatkvbpxhnyhwdljdb',
  'zvamtphntngeyjnytrmorbxnuf',
  'uhoynppfujdvwzaghcbsyxsoub',
  'efhbteijbapnfpwkkqcslwjram',
  'koxmouvdckchsufmghyyarqhyh',
  'tthudiuudavkeljdwkdtopindj',
  'nwwbpbxzvqvohylllztyaboska',
  'dccrgppcsfgrgbhcsrcfcngynh',
  'qdpakrphkeixdwuibmjxlbzwdd',
  'ftgsfqdmrttgfbwgtzdbdnijme',
  'ounppmwshjlgxtjzzumgzwcyml',
  'cpvqmbnzovdcqbwzsbkbcvydjh',
  'pbrjsfehxtttldfwlcsudrqpzp',
  'qbcnnbgheeyakihitnltmlmyjw',
  'ztvabkcldvosfcbbbuxzcajzpt',
  'xfpwpemdygftsqgttqfcbtrlmb',
  'hncqzkvackmgexujtbcqcipxmg',
  'ilfaognmgqysbvfbjhextbkhhd',
  'hvqwunsdsydtqfanjmiwujpxua',
  'yqrkmrvaasgktchwdoekuobjff',
  'egeeotdsaixdikuodytbxasmwx',
  'jfmncifbumpbiuxtadudxekcpr',
  'slozeilagywptbwhmvqwdjszgb',
  'kkugasdoirfyucgqpfuznudzjv',
  'pvapxxizhhxeukcebjdvimucqj',
  'bqurcvltquzjcwzkzqyletteqf',
  'cbrsrxlthlcobgwkhyqzwlubyf',
  'mqzhitoyteqklmwoisqkaxmbpk',
  'nbnapfbgovoucnnygadnzqrrkv',
  'ztpvheqivqfdpokosgyxkbipws',
  'auvgoeglyctzrspmvrcjyuirai',
  'yhmloltnczhrnkqcqgzayuquxu',
  'funvzsxwvpsrdhqokjpfcceqnq',
  'vuhfgazqzhuejtlgyqdllsfiew',
  'gmhucjdtfwwmanjpopjxasceyv',
  'vpscszndfymaamqrhelnvleejx',
  'dzseaqbaqfqdvhjjvtqkbhhtaj',
  'zylxwmidkjrprjjtgxwnideifj',
  'nzohposakdwbgagtkxwbtrjzxk',
  'igvivhesfcwlhdnstxhkblhtnp',
  'trncoqmgqatfjkpqnffqjutxen',
  'vwfgyohathrbsdhxjfsaivkjiq',
  'rdnudjqlftvznzbklgxvlthqmv',
  'kopvaawtlitzukijdtqppnoavy',
  'raldklntxlxzarimkzkyceglkf',
  'nakocmxbxpxjicushiotpxnxro',
  'wxoqmpobugtnxeiizelnqeofjs',
  'smsvftlyfxqazquiankjkpxozu',
  'fwksrutpcuelminzgnriklqzlc',
  'nefzowdhswsxcbdmdfvilekzcr',
  'ibvibngseakyaqaxuipalllsor',
  'znvyamllvnymacnmvllfqymdlk',
  'gcvyilxrrlewkwowgapvjruwub',
  'mwehdfbalretcfxxeppwdnniwn',
  'wwoahxbovwqalhgcworiwyitlx',
  'nmxpfoezilnocxsrfcebqtsdkw',
  'engqldbfdrugonxjnqckfkfcro',
  'grckaheoegibceqwvvdljnwyuz',
  'jcbpbfahfrvyimodwjgpyewhdf',
  'rvflwimnafknauacickeoteeuc',
  'gxygwzbrzddbohzcbgheiiyhhc',
  'wcxgwradmfsmhzkguwsjhtlizb',
  'bikoixpunrhlsgcsrlwmdfusyl',
  'ssetdnybhxzsmkpkybbgosiwgi',
  'vyehhabqjcbtgdiovawlqtfqmh',
  'opmumwbogkhjukleukcufuqvce',
  'vjriasqbobmskfsbdmydejkagm',
  'gjlgkhsaxqrvmufoyrjxqvztxd',
  'yyybihdpkfnghlkrhvhnzbwqkj',
  'kznoomkzsiitpqhqquhraqkkbc',
  'yhztklllvwhjuapmnazjrhbhrb',
  'jjiormhgckcqsswnmcfrhgcqoo',
  'rphbmsfnhguhpzakalyoowzunz',
  'igmgonijvtpdokdnlmatvzxyvd',
  'rsqptcgixgkvbxgxwcjglpzbeq',
  'zldspjxugpxlgydliikouvsgyj',
  'enzqysidqtopmajbrvwmoudxrp',
  'naktraokohuwstyibkvpihgeyx',
  'zlfxzldfstaxmcflfpybdbzzew',
  'mfzoayxolozeddfkxswnuovwow',
  'rodrvuobikjwxlckyeeyjoctus',
  'yfbwljegrzpysxaqihwxzrxiby',
  'croqduliogssfqdfalhglmtbrj',
  'gvfrtkexyjzigcdydnqfpgrxeg',
  'xgwrgupmdxoepxistovdeqfdcv',
  'oxggnlexqqmkktpjbzkbfwtydt',
  'pyopssuxecxbfqgdwjgaglgtmv',
  'svqwsfwoczrhmiztjgqfqcjyve',
  'bartebhenxylaavcjnwobeycdy',
]

write(findSubstring(str, [arr])) // []

const str1 =
  'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab'
const arr1 = [
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
  'ab',
  'ba',
]

write(findSubstring(str1, [arr1])) // []

// tag: 字符串;子串
