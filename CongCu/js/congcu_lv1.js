var _0x591fec=_0x1ab2;(function(_0x42de24,_0x4ad8ee){var _0x9a1f89=_0x1ab2,_0x1d9364=_0x42de24();while(!![]){try{var _0xaaeeeb=parseInt(_0x9a1f89(0x1bf))/0x1*(parseInt(_0x9a1f89(0x1dc))/0x2)+-parseInt(_0x9a1f89(0x1bb))/0x3+parseInt(_0x9a1f89(0x1b9))/0x4*(-parseInt(_0x9a1f89(0x1a2))/0x5)+-parseInt(_0x9a1f89(0x1d9))/0x6+-parseInt(_0x9a1f89(0x19e))/0x7*(parseInt(_0x9a1f89(0x19b))/0x8)+parseInt(_0x9a1f89(0x1b0))/0x9+parseInt(_0x9a1f89(0x1e5))/0xa;if(_0xaaeeeb===_0x4ad8ee)break;else _0x1d9364['push'](_0x1d9364['shift']());}catch(_0x2f4581){_0x1d9364['push'](_0x1d9364['shift']());}}}(_0x1bd0,0xacdfc));function _0x1ab2(_0x3c4023,_0x5da360){var _0x1bd043=_0x1bd0();return _0x1ab2=function(_0x1ab26f,_0x3049e9){_0x1ab26f=_0x1ab26f-0x18e;var _0x5412f0=_0x1bd043[_0x1ab26f];return _0x5412f0;},_0x1ab2(_0x3c4023,_0x5da360);}let sheetID=_0x591fec(0x1c9),base=_0x591fec(0x1dd)+sheetID+_0x591fec(0x19d),linkBackToLogInPage=_0x591fec(0x1c1),data1=[],user1='',end_time1='',checkRow1=![],dataAll=[];window[_0x591fec(0x1e4)]=init;function init(){checkCookie(),logOut(),renderLuaChonCongCu();}function logOut(){var _0x3c1d2b=_0x591fec,_0x279bb7='';_0x279bb7=_0x3c1d2b(0x1aa),document['getElementById'](_0x3c1d2b(0x1e0))['innerHTML']=_0x279bb7;}function actionLogOut(){var _0x17a7c=_0x591fec;document[_0x17a7c(0x1d1)]=_0x17a7c(0x1df),window['location'][_0x17a7c(0x1b7)]=linkBackToLogInPage;}function checkCookie(){var _0x4c1c52=_0x591fec;let _0x2e1ead=getCookie('usr');var _0x360753=_0x4c1c52(0x1bd),_0x13a842=_0x4c1c52(0x1b1)+_0x2e1ead+'\x22',_0x2134b1=encodeURIComponent(_0x13a842),_0x582357=base+'&sheet='+_0x360753+_0x4c1c52(0x1e8)+_0x2134b1;fetch(_0x582357)[_0x4c1c52(0x1e2)](_0x32bed4=>_0x32bed4[_0x4c1c52(0x1c5)]())[_0x4c1c52(0x1e2)](_0x53764e=>{var _0x4bac54=_0x4c1c52;const _0x782d89=JSON[_0x4bac54(0x1d2)](_0x53764e[_0x4bac54(0x1da)](0x2f)[_0x4bac54(0x1c3)](0x0,-0x2)),_0x392416=[];_0x782d89[_0x4bac54(0x1d4)][_0x4bac54(0x1d6)][_0x4bac54(0x19f)](_0x426ec2=>{var _0x303720=_0x4bac54;_0x426ec2['label']&&_0x392416[_0x303720(0x1cf)](_0x426ec2[_0x303720(0x195)]['toLowerCase']()[_0x303720(0x19c)](/\s/g,''));}),_0x782d89[_0x4bac54(0x1d4)]['rows'][_0x4bac54(0x19f)](_0x4ce59f=>{var _0x19c00d=_0x4bac54;const _0x4eaee0={};_0x392416[_0x19c00d(0x19f)]((_0x59d9e5,_0x49d78f)=>{_0x4eaee0[_0x59d9e5]=_0x4ce59f['c'][_0x49d78f]!=null?_0x4ce59f['c'][_0x49d78f]['v']:'';}),data1=Object[_0x19c00d(0x191)](_0x4eaee0)['map'](_0x2db204=>[_0x2db204,_0x4eaee0[_0x2db204]]),user1=data1[0x0][0x1][_0x19c00d(0x1d7)](),end_time1=data1[0x1][0x1][_0x19c00d(0x1d7)](),checkLogIn1(_0x2e1ead),checkRow1=!![];}),checkRow1==![]&&checkLogIn1(_0x2e1ead);});}function checkLogIn1(_0x3695b8){var _0x10609a=_0x591fec,_0x4ebbdb=new Date();if(user1==_0x3695b8){if(_0x4ebbdb[_0x10609a(0x1e1)]()>Number(end_time1[_0x10609a(0x1c3)](0x5,0x9)))backToLogInPage();else{if(_0x4ebbdb[_0x10609a(0x1e1)]()==Number(end_time1[_0x10609a(0x1c3)](0x5,0x9))){var _0x5d1952=end_time1[_0x10609a(0x1c3)](end_time1[_0x10609a(0x1ce)](',')+0x1,end_time1[_0x10609a(0x1af)]-0x1),_0x19d7c2=_0x5d1952[_0x10609a(0x1c3)](0x0,_0x5d1952['indexOf'](','));if(_0x4ebbdb['getUTCMonth']()>Number(_0x19d7c2))backToLogInPage();else{if(_0x4ebbdb[_0x10609a(0x1b8)]()==Number(_0x19d7c2)){var _0x5a143a=_0x5d1952[_0x10609a(0x1c3)](_0x5d1952[_0x10609a(0x1ce)](',')+0x1,_0x5d1952[_0x10609a(0x1af)]);if(_0x4ebbdb[_0x10609a(0x193)]()>Number(_0x5a143a))backToLogInPage();else{alert(_0x10609a(0x1c7));return;}}else{alert(_0x10609a(0x1c7));return;}}}else{alert(_0x10609a(0x1c7));return;}}}else backToLogInPage();}function backToLogInPage(){var _0x53e089=_0x591fec;alert(_0x53e089(0x192)),window[_0x53e089(0x1bc)][_0x53e089(0x1b7)]=linkBackToLogInPage;}function setCookie(_0x436786,_0x555976,_0x6374d){var _0xfb0ef4=_0x591fec;const _0x497824=new Date();_0x497824['setTime'](_0x497824[_0xfb0ef4(0x1ae)]()+_0x6374d*0x3c*0x3c*0x3e8);let _0x36e3a4='expires='+_0x497824[_0xfb0ef4(0x199)]();document[_0xfb0ef4(0x1d1)]=_0x436786+'='+_0x555976+';'+_0x36e3a4+_0xfb0ef4(0x1a6);}function getCookie(_0x58f3ab){var _0x5f0f8e=_0x591fec;let _0x2486f4=_0x58f3ab+'=',_0xa302df=decodeURIComponent(document[_0x5f0f8e(0x1d1)]),_0x626a7f=_0xa302df[_0x5f0f8e(0x197)](';');for(let _0xdca255=0x0;_0xdca255<_0x626a7f[_0x5f0f8e(0x1af)];_0xdca255++){let _0x55fda7=_0x626a7f[_0xdca255];while(_0x55fda7[_0x5f0f8e(0x198)](0x0)=='\x20'){_0x55fda7=_0x55fda7['substring'](0x1);}if(_0x55fda7[_0x5f0f8e(0x1ce)](_0x2486f4)==0x0)return _0x55fda7[_0x5f0f8e(0x1be)](_0x2486f4['length'],_0x55fda7['length']);}return'';}function renderLuaChonCongCu(){var _0x2035ac=_0x591fec,_0xf50b76='';_0xf50b76=_0x2035ac(0x1ac)+_0x2035ac(0x1b2)+_0x2035ac(0x1ad),document[_0x2035ac(0x1c6)](_0x2035ac(0x1a5))[_0x2035ac(0x1e7)]=_0xf50b76;}function confirmRenderCongCu(){var _0x38fc0e=_0x591fec,_0x5af00c=document['getElementsByName'](_0x38fc0e(0x1e6)),_0x2a27e5=![];for(i=0x0;i<_0x5af00c[_0x38fc0e(0x1af)];i++){if(_0x5af00c[i][_0x38fc0e(0x1ca)]){if(_0x5af00c[i]['value']=='s1')renderCongCu('CC1_LV1',0x1);else _0x5af00c[i]['value']=='s2'&&renderCongCu(_0x38fc0e(0x18e),0x2);_0x2a27e5=!![];}}_0x2a27e5==![]&&alert(_0x38fc0e(0x1d3));}function renderCongCu(_0x18e99d,_0x46e897){var _0x4e7542=_0x591fec,_0x193516=_0x18e99d,_0x4c7c12=_0x4e7542(0x1a3),_0x3369ad=encodeURIComponent(_0x4c7c12),_0x4a174b=base+'&sheet='+_0x193516+_0x4e7542(0x1e8)+_0x3369ad;dataAll=[],fetch(_0x4a174b)[_0x4e7542(0x1e2)](_0x32357e=>_0x32357e[_0x4e7542(0x1c5)]())['then'](_0x3cdefb=>{var _0x1c701b=_0x4e7542;const _0x228941=JSON['parse'](_0x3cdefb[_0x1c701b(0x1da)](0x2f)[_0x1c701b(0x1c3)](0x0,-0x2)),_0x1095f5=[];_0x228941[_0x1c701b(0x1d4)][_0x1c701b(0x1d6)][_0x1c701b(0x19f)](_0x4fa80d=>{var _0x17af0e=_0x1c701b;_0x4fa80d[_0x17af0e(0x195)]&&_0x1095f5[_0x17af0e(0x1cf)](_0x4fa80d[_0x17af0e(0x195)]['toLowerCase']()['replace'](/\s/g,''));}),_0x228941['table'][_0x1c701b(0x1b4)]['forEach'](_0x4614a8=>{var _0x51724c=_0x1c701b;const _0x42edf2={};_0x1095f5[_0x51724c(0x19f)]((_0x2a64a4,_0x1d3d36)=>{_0x42edf2[_0x2a64a4]=_0x4614a8['c'][_0x1d3d36]!=null?_0x4614a8['c'][_0x1d3d36]['v']:'';}),dataAll[_0x51724c(0x1cf)](_0x42edf2);}),_0x46e897==0x1?renderToWebsite1(dataAll):renderToWebsite2(dataAll);});}function renderToWebsite1(_0x588a7a){var _0x38f1c7=_0x591fec;htmlListForm='',htmlListForm=htmlListForm+_0x38f1c7(0x1a8)+_0x38f1c7(0x1db)+_0x38f1c7(0x1cc)+'<th\x20class=\x22table-header-form-real-estate-CongVu\x22>Chủ\x20Đề</th>'+_0x38f1c7(0x1d0)+_0x38f1c7(0x1d8);var _0x34a678='',_0x558200='';for(var _0x50c382=0x0;_0x50c382<_0x588a7a['length'];_0x50c382++){_0x34a678=_0x38f1c7(0x1e3)+_0x588a7a[_0x50c382][_0x38f1c7(0x196)]+_0x38f1c7(0x1c0),_0x558200=_0x38f1c7(0x1cb)+_0x588a7a[_0x50c382][_0x38f1c7(0x18f)],htmlListForm=htmlListForm+'<tr\x20'+'id=\x22info'+String(_0x50c382+0x1)+'\x22'+_0x38f1c7(0x1d5)+_0x38f1c7(0x1c2)+_0x588a7a[_0x50c382]['number']+'</td>'+'<td\x20class=\x22table-data-form-real-estate-CongVu\x22>'+_0x558200+'</span></td>'+_0x38f1c7(0x1c2)+_0x38f1c7(0x1a1)+String(_0x50c382+0x1)+_0x38f1c7(0x1a4)+'\x27'+String(_0x588a7a[_0x50c382][_0x38f1c7(0x1de)])+'\x27'+',\x27'+String(_0x588a7a[_0x50c382]['id'])+'\x27'+')\x22>'+_0x34a678+_0x38f1c7(0x190)+_0x38f1c7(0x1b6)+_0x38f1c7(0x1d8);}htmlListForm=htmlListForm+_0x38f1c7(0x1a0),document[_0x38f1c7(0x1c6)](_0x38f1c7(0x19a))[_0x38f1c7(0x1e7)]=htmlListForm;}function renderToWebsite2(_0x40bb31){var _0x53f12d=_0x591fec;htmlListForm='',htmlListForm=htmlListForm+_0x53f12d(0x1a8)+_0x53f12d(0x1db)+_0x53f12d(0x1cc)+_0x53f12d(0x1a7)+_0x53f12d(0x1b3)+_0x53f12d(0x1d8);var _0x1946de='',_0x2c9e99='';for(var _0x5d30fd=0x0;_0x5d30fd<_0x40bb31[_0x53f12d(0x1af)];_0x5d30fd++){_0x1946de=_0x53f12d(0x1b5)+_0x40bb31[_0x5d30fd][_0x53f12d(0x196)]+_0x53f12d(0x1c0),_0x2c9e99=_0x53f12d(0x1cb)+_0x40bb31[_0x5d30fd][_0x53f12d(0x18f)],htmlListForm=htmlListForm+'<tr\x20'+_0x53f12d(0x1c8)+String(_0x5d30fd+0x1)+'\x22'+'\x20class=\x22table-row-form-real-estate-CongVu\x22>'+_0x53f12d(0x1c2)+_0x40bb31[_0x5d30fd][_0x53f12d(0x1cd)]+_0x53f12d(0x1b6)+'<td\x20class=\x22table-data-form-real-estate-CongVu\x22>'+_0x2c9e99+_0x53f12d(0x1a9)+_0x53f12d(0x1c2)+_0x53f12d(0x1a1)+String(_0x5d30fd+0x1)+_0x53f12d(0x1a4)+'\x27'+String(_0x40bb31[_0x5d30fd][_0x53f12d(0x1de)])+'\x27'+',\x27'+String(_0x40bb31[_0x5d30fd]['id'])+'\x27'+_0x53f12d(0x1c4)+_0x1946de+_0x53f12d(0x190)+_0x53f12d(0x1b6)+_0x53f12d(0x1d8);}htmlListForm=htmlListForm+_0x53f12d(0x1a0),document[_0x53f12d(0x1c6)](_0x53f12d(0x19a))[_0x53f12d(0x1e7)]=htmlListForm;}function goToLink(_0x595b53,_0x3d01a0){var _0x4c5661=_0x591fec;setCookie(_0x4c5661(0x1ab),user1,0x2),setCookie('ID',_0x3d01a0,0x2),window[_0x4c5661(0x194)](_0x595b53,_0x4c5661(0x1ba));}function _0x1bd0(){var _0x4b3869=['<span\x20style=\x22color:black;font-weight:bold;\x22>','<th\x20class=\x22table-header-form-real-estate-CongVu\x22>STT</th>','number','indexOf','push','<th\x20class=\x22table-header-form-real-estate-CongVu\x22>Luyện\x20Tập</th>','cookie','parse','Bạn\x20hãy\x20chọn\x20\x22Luyện\x20Tập\x22\x20hoặc\x20\x22Thi\x20Thử\x22\x20nhé!','table','\x20class=\x22table-row-form-real-estate-CongVu\x22>','cols','toString','</tr>','8126034FayUZH','substr','<tr\x20class=\x22table-row-form-real-estate-CongVu\x22>','4rgjcyJ','https://docs.google.com/spreadsheets/d/','linktodo','usr=;\x20Path=/;\x20Expires=Thu,\x2001\x20Jan\x201970\x2000:00:01\x20GMT;','log_out','getUTCFullYear','then','<button\x20class=\x22button-google-form\x22\x20type=\x22button\x22>','onload','31642650sLqpvN','se_tool','innerHTML','&tq=','CC2_LV1','title','</a>','keys','Bạn\x20cần\x20đăng\x20nhập\x20lại\x20để\x20tiếp\x20tục\x20luyện\x20thi!','getUTCDate','open','label','nametodo','split','charAt','toUTCString','main','1723912uyqzdR','replace','/gviz/tq?','7teFFaH','forEach','</table>','<a\x20href=\x22#info','115snpdip','Select\x20*','\x22\x20onclick=\x22goToLink(','select-tool',';path=/','<th\x20class=\x22table-header-form-real-estate-CongVu\x22>Bộ\x20Đề</th>','<table\x20class=\x22table-form-real-estate-CongVu\x22>','</span></td>','<div><button\x20class=\x22btn-log-out\x22\x20onclick=\x22actionLogOut()\x22><b>Đăng\x20Xuất</b></button></div>','usr','<input\x20type=\x22radio\x22\x20id=\x22s1\x22\x20name=\x22se_tool\x22\x20value=\x22s1\x22>\x20<b><i>Luyện\x20Tập</i></b>&emsp;&ensp;','<div><button\x20class=\x22btn-select-tool\x22\x20onclick=\x22confirmRenderCongCu()\x22><b>OK</b></button></div>','getTime','length','7942464EYkmJG','Select\x20A,\x20D\x20WHERE\x20A\x20=\x20\x22','<input\x20type=\x22radio\x22\x20id=\x22s2\x22\x20name=\x22se_tool\x22\x20value=\x22s2\x22>\x20<b><i>Thi\x20Thử</i></b><br/>','<th\x20class=\x22table-header-form-real-estate-CongVu\x22>Thi\x20Thử</th>','rows','<button\x20class=\x22button-google-form1\x22\x20type=\x22button\x22>','</td>','href','getUTCMonth','192116PdcJHL','_blank','3620358SLDJHU','location','LogIn1','substring','271306hxLJih','</button>','https://luyenthi-ic3.github.io/CongCu/index.html','<td\x20class=\x22table-data-form-real-estate-CongVu\x22\x20style=\x22text-align:center;\x22>','slice',')\x22>','text','getElementById','Chúc\x20bạn\x20luyện\x20thi\x20hiệu\x20quả!','id=\x22info','1soOOOMYSdq89r7CHVtMi10Na7tuP2RoAf6J8cACKzrY','checked'];_0x1bd0=function(){return _0x4b3869;};return _0x1bd0();}