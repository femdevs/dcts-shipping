function a0_0x4e7e(_0xcda67c,_0x49e403){var _0x3b9032=a0_0x3b90();return a0_0x4e7e=function(_0x4e7e49,_0x1ac679){_0x4e7e49=_0x4e7e49-0x190;var _0x150b2e=_0x3b9032[_0x4e7e49];return _0x150b2e;},a0_0x4e7e(_0xcda67c,_0x49e403);}var a0_0x10b0bc=a0_0x4e7e;(function(_0x37607c,_0x58b2b2){var _0x100b78=a0_0x4e7e,_0x14abd7=_0x37607c();while(!![]){try{var _0x5ec4da=-parseInt(_0x100b78(0x19d))/0x1*(parseInt(_0x100b78(0x196))/0x2)+parseInt(_0x100b78(0x198))/0x3*(parseInt(_0x100b78(0x199))/0x4)+-parseInt(_0x100b78(0x1a5))/0x5*(parseInt(_0x100b78(0x1ac))/0x6)+-parseInt(_0x100b78(0x1b1))/0x7*(parseInt(_0x100b78(0x192))/0x8)+parseInt(_0x100b78(0x1a3))/0x9+parseInt(_0x100b78(0x1a0))/0xa+-parseInt(_0x100b78(0x19a))/0xb*(-parseInt(_0x100b78(0x19b))/0xc);if(_0x5ec4da===_0x58b2b2)break;else _0x14abd7['push'](_0x14abd7['shift']());}catch(_0x413649){_0x14abd7['push'](_0x14abd7['shift']());}}}(a0_0x3b90,0x63c42));function a0_0x3b90(){var _0x1ddcc1=['1515009OMrFrS','4FZvDRp','1133YGCpuc','216084RNpmSi','msg','14jMNsvZ','length','channel_name','1017140uOXSgO','display','Error\x20while\x20trying\x20to\x20save\x20settings:\x20','449370wEmLoC','Unable\x20to\x20get\x20Channel\x20Information','25mzeQPP','block','userConnected','emit','channel-','replace','getElementById','764202eIxapV','value','none','updateChannelName','settings_channel_save','7mEilVR','data','name','5948152KGnZgq','Unable\x20to\x20get\x20channel\x20info.\x20Please\x20try\x20to\x20reload\x20slowly\x20until\x20it\x20works.\x20Known\x20bug!','log','style','103196xPkWJB','token'];a0_0x3b90=function(){return _0x1ddcc1;};return a0_0x3b90();}var channelname=document[a0_0x10b0bc(0x1ab)](a0_0x10b0bc(0x19f)),saveButton=document['getElementById'](a0_0x10b0bc(0x1b0)),serverconfigName,editChannel={};socket[a0_0x10b0bc(0x1a8)](a0_0x10b0bc(0x1a7),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket[a0_0x10b0bc(0x1a8)]('getChannelInfo',{'id':getID(),'token':getToken(),'channel':getUrlParams('id')[a0_0x10b0bc(0x1aa)](a0_0x10b0bc(0x1a9),'')},function(_0x41cfbe){var _0x2bcece=a0_0x10b0bc;try{console[_0x2bcece(0x194)](_0x41cfbe),channelname=document[_0x2bcece(0x1ab)](_0x2bcece(0x19f)),saveButton=document[_0x2bcece(0x1ab)](_0x2bcece(0x1b0)),serverconfigName=_0x41cfbe[_0x2bcece(0x190)][_0x2bcece(0x191)],channelname['value']=serverconfigName,editChannel=_0x41cfbe,console['log'](_0x41cfbe);}catch(_0x5ac965){console[_0x2bcece(0x194)](_0x2bcece(0x1a4)),console[_0x2bcece(0x194)](_0x5ac965),alert(_0x2bcece(0x193));}});function getToken(){var _0x5436b4=a0_0x10b0bc,_0x162e72=getCookie(_0x5436b4(0x197));return _0x162e72==null||_0x162e72['length']<=0x0?null:_0x162e72;}function getID(){var _0x5769c3=a0_0x10b0bc,_0x147af2=getCookie('id');return _0x147af2==null||_0x147af2[_0x5769c3(0x19e)]!=0xc?(_0x147af2=generateId(0xc),setCookie('id',_0x147af2,0x168),_0x147af2):_0x147af2;}function updatePreview(){var _0x3126f6=a0_0x10b0bc;try{channel_name[_0x3126f6(0x1ad)]!=serverconfigName?(console[_0x3126f6(0x194)]('NOt\x20same'),saveButton[_0x3126f6(0x195)][_0x3126f6(0x1a1)]=_0x3126f6(0x1a6)):(console[_0x3126f6(0x194)]('same'),saveButton[_0x3126f6(0x195)][_0x3126f6(0x1a1)]='none');}catch(_0xa97952){console[_0x3126f6(0x194)](_0xa97952);}}function saveSettings(){var _0x2512ae=a0_0x10b0bc;try{channelname[_0x2512ae(0x1ad)]!=null&&channelname['value']['length']>0x0&&channelname['value']!=serverconfigName&&socket[_0x2512ae(0x1a8)](_0x2512ae(0x1af),{'id':getID(),'token':getToken(),'channel':getUrlParams('id'),'name':channelname['value']},function(_0x428a96){var _0x4d805d=_0x2512ae;console[_0x4d805d(0x194)](_0x428a96),alert(_0x428a96[_0x4d805d(0x19c)]);}),saveButton[_0x2512ae(0x195)][_0x2512ae(0x1a1)]=_0x2512ae(0x1ae);}catch(_0x3972a6){alert(_0x2512ae(0x1a2)+_0x3972a6);return;}}