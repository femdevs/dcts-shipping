var a0_0x4d0b14=a0_0x4dc5;(function(_0x5618f8,_0x5a4c0d){var _0x2bcc6b=a0_0x4dc5,_0x5be339=_0x5618f8();while(!![]){try{var _0x492d72=-parseInt(_0x2bcc6b(0x12e))/0x1+parseInt(_0x2bcc6b(0x12f))/0x2*(parseInt(_0x2bcc6b(0x148))/0x3)+parseInt(_0x2bcc6b(0x143))/0x4*(-parseInt(_0x2bcc6b(0x146))/0x5)+-parseInt(_0x2bcc6b(0x15d))/0x6+-parseInt(_0x2bcc6b(0x14b))/0x7+-parseInt(_0x2bcc6b(0x13c))/0x8*(parseInt(_0x2bcc6b(0x140))/0x9)+parseInt(_0x2bcc6b(0x152))/0xa*(parseInt(_0x2bcc6b(0x151))/0xb);if(_0x492d72===_0x5a4c0d)break;else _0x5be339['push'](_0x5be339['shift']());}catch(_0x5d9321){_0x5be339['push'](_0x5be339['shift']());}}}(a0_0x4c6b,0xc882e),socket[a0_0x4d0b14(0x154)](a0_0x4d0b14(0x12a),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}));function upload(_0x2b9a56,_0x4f536e){var _0x10b6be=a0_0x4d0b14;if(_0x4f536e==_0x10b6be(0x135))socket[_0x10b6be(0x154)]('fileUpload',{'file':_0x2b9a56[0x0],'filename':_0x2b9a56[0x0][_0x10b6be(0x14f)],'id':getID(),'token':getToken()},function(_0x2415bb){var _0x105628=_0x10b6be;_0x2415bb['type']==_0x105628(0x141)?(settings_icon[_0x105628(0x13b)]=_0x2415bb[_0x105628(0x137)],updatePreview(_0x105628(0x135))):alert(_0x2415bb['msg']),console[_0x105628(0x13a)](_0x2415bb);});else _0x4f536e==_0x10b6be(0x145)&&socket[_0x10b6be(0x154)](_0x10b6be(0x14d),{'file':_0x2b9a56[0x0],'filename':_0x2b9a56[0x0][_0x10b6be(0x14f)],'id':getID(),'token':getToken()},function(_0x358399){var _0x15b210=_0x10b6be;_0x358399['type']=='success'?(settings_banner['value']=_0x358399[_0x15b210(0x137)],updatePreview('settings_profile_banner')):alert(_0x358399[_0x15b210(0x137)]),console['log'](_0x358399);});}function setPreview(){var _0x5cd4a9=a0_0x4d0b14;settings_username=document[_0x5cd4a9(0x136)](_0x5cd4a9(0x15b)),settings_status=document[_0x5cd4a9(0x136)](_0x5cd4a9(0x14c)),settings_aboutme=document[_0x5cd4a9(0x136)]('settings_profile_aboutme'),settings_icon=document['getElementById']('settings_profile_icon'),settings_banner=document[_0x5cd4a9(0x136)](_0x5cd4a9(0x145)),preview_username=document[_0x5cd4a9(0x136)]('profile_username'),preview_status=document[_0x5cd4a9(0x136)](_0x5cd4a9(0x144)),preview_aboutme=document['getElementById'](_0x5cd4a9(0x155)),preview_icon=document[_0x5cd4a9(0x136)]('profile_icon'),preview_banner=document[_0x5cd4a9(0x136)]('profile_banner'),saveButton=document[_0x5cd4a9(0x136)](_0x5cd4a9(0x14a)),preview_icon[_0x5cd4a9(0x132)][_0x5cd4a9(0x130)]=_0x5cd4a9(0x133)+getPFP()+'\x22)',preview_banner['style'][_0x5cd4a9(0x130)]='url(\x22'+getBanner()+'\x22)',settings_username['value']=''+getUsername(),settings_status[_0x5cd4a9(0x13b)]=''+getStatus(),settings_aboutme[_0x5cd4a9(0x149)]=''+getAboutme(),settings_icon[_0x5cd4a9(0x13b)]=''+getPFP(),settings_banner[_0x5cd4a9(0x13b)]=''+getBanner(),preview_username[_0x5cd4a9(0x153)]=_0x5cd4a9(0x12b)+getUsername()+_0x5cd4a9(0x131),preview_status[_0x5cd4a9(0x149)]=''+getStatus(),preview_aboutme[_0x5cd4a9(0x149)]=''+getAboutme();}function saveSettings(){var _0x140089=a0_0x4d0b14;try{settings_icon[_0x140089(0x13b)]!=null&&settings_icon[_0x140089(0x13b)][_0x140089(0x13d)]>0x0&&(setPFP(settings_icon[_0x140089(0x13b)]),console[_0x140089(0x13a)](_0x140089(0x147)),console['log'](settings_icon[_0x140089(0x13b)])),settings_banner[_0x140089(0x13b)]!=null&&settings_banner['value']['length']>0x0&&(setBanner(settings_banner[_0x140089(0x13b)]),console[_0x140089(0x13a)](_0x140089(0x15c)),console[_0x140089(0x13a)](settings_banner['value'])),settings_aboutme[_0x140089(0x13b)]!=null&&settings_aboutme['value'][_0x140089(0x13d)]>0x0&&(setAboutme(settings_aboutme[_0x140089(0x13b)]),console[_0x140089(0x13a)](_0x140089(0x13f))),settings_username['value']!=null&&settings_username[_0x140089(0x13b)][_0x140089(0x13d)]>=0x3&&(setUser(settings_username[_0x140089(0x13b)]),console[_0x140089(0x13a)]('Saved\x20user')),settings_status[_0x140089(0x13b)]!=null&&settings_status[_0x140089(0x13b)][_0x140089(0x13d)]>0x0&&(setStatus(settings_status['value']),console[_0x140089(0x13a)](_0x140089(0x157))),settings_aboutme[_0x140089(0x13b)]!=null&&settings_aboutme[_0x140089(0x13b)][_0x140089(0x13d)]>0x0&&(setAboutme(settings_aboutme['value']),console['log']('Saved\x20about\x20me')),saveButton[_0x140089(0x132)][_0x140089(0x134)]=_0x140089(0x14e);}catch(_0x2b479c){alert(_0x140089(0x159)+_0x2b479c);return;}}function setUser(_0x4983f4){var _0x5dcffe=a0_0x4d0b14;setCookie(_0x5dcffe(0x139),_0x4983f4,0x168);}function setBanner(_0x53761f){setCookie('banner',_0x53761f,0x168);}function setStatus(_0x4627f6){var _0x35cf5a=a0_0x4d0b14;setCookie(_0x35cf5a(0x158),_0x4627f6,0x168);}function setPFP(_0x3336cb){var _0x45d72d=a0_0x4d0b14;setCookie(_0x45d72d(0x150),_0x3336cb,0x168);}function setAboutme(_0x568667){var _0x2bae68=a0_0x4d0b14;setCookie(_0x2bae68(0x142),_0x568667,0x168);}function a0_0x4c6b(){var _0x476faa=['settings_profile_status','fileUpload','none','name','pfp','654665OGujfF','890ImHFbZ','innerHTML','emit','profile_aboutme','block','Saved\x20status','status','Error\x20while\x20trying\x20to\x20save\x20settings:\x20','profile_username','settings_profile_username','Saved\x20Banner','5124570TdjKBn','userConnected','<h2>','settings_profile_aboutme','onload','1601637MhtNzc','1165806fvrbxE','backgroundImage','</h2>','style','url(\x22','display','settings_profile_icon','getElementById','msg','profile_icon','username','log','value','8UwBhBW','length','profile_banner','Saved\x20about\x20me','9266688pahEob','success','aboutme','2372YYfjCG','profile_status','settings_profile_banner','13765knibww','Saved\x20Icon','6dFXWeH','innerText','settings_profile_save','3664178SkYsQs'];a0_0x4c6b=function(){return _0x476faa;};return a0_0x4c6b();}function a0_0x4dc5(_0x26a0f1,_0x392ccb){var _0x4c6bbc=a0_0x4c6b();return a0_0x4dc5=function(_0x4dc5c3,_0x850abd){_0x4dc5c3=_0x4dc5c3-0x12a;var _0x2378d2=_0x4c6bbc[_0x4dc5c3];return _0x2378d2;},a0_0x4dc5(_0x26a0f1,_0x392ccb);}function updatePreview(_0x4a2d87){var _0x3f78a6=a0_0x4d0b14,_0x84fa17=document[_0x3f78a6(0x136)](_0x4a2d87)['value'];try{_0x4a2d87=='settings_profile_username'&&(preview_username[_0x3f78a6(0x153)]=_0x3f78a6(0x12b)+_0x84fa17+_0x3f78a6(0x131)),_0x4a2d87==_0x3f78a6(0x14c)&&(preview_status[_0x3f78a6(0x153)]=''+_0x84fa17),_0x4a2d87==_0x3f78a6(0x12c)&&(preview_aboutme[_0x3f78a6(0x153)]=''+_0x84fa17),_0x4a2d87==_0x3f78a6(0x135)&&(preview_icon[_0x3f78a6(0x132)]['backgroundImage']=_0x3f78a6(0x133)+_0x84fa17+'\x22)'),_0x4a2d87==_0x3f78a6(0x145)&&(preview_banner[_0x3f78a6(0x132)][_0x3f78a6(0x130)]='url(\x22'+_0x84fa17+'\x22)'),preview_username[_0x3f78a6(0x149)]!=getUsername()||preview_status['innerText']!=getStatus()||preview_aboutme[_0x3f78a6(0x149)]!=getAboutme()||settings_icon[_0x3f78a6(0x13b)]!=getPFP()||settings_banner['value']!=getBanner()?(console[_0x3f78a6(0x13a)]('NOt\x20same'),saveButton[_0x3f78a6(0x132)]['display']=_0x3f78a6(0x156)):(console[_0x3f78a6(0x13a)]('same'),saveButton[_0x3f78a6(0x132)][_0x3f78a6(0x134)]=_0x3f78a6(0x14e));}catch(_0x2c6073){console[_0x3f78a6(0x13a)](_0x2c6073);}}window[a0_0x4d0b14(0x12d)]=function(){Sleep(0x1f4),setPreview();};function Sleep(_0x4f95bc){return new Promise(_0x45aa77=>setTimeout(_0x45aa77,_0x4f95bc));}var settings_username=document['getElementById'](a0_0x4d0b14(0x15b)),settings_status=document[a0_0x4d0b14(0x136)]('settings_profile_status'),settings_aboutme=document[a0_0x4d0b14(0x136)](a0_0x4d0b14(0x12c)),settings_icon=document['getElementById'](a0_0x4d0b14(0x135)),settings_banner=document['getElementById'](a0_0x4d0b14(0x145)),preview_username=document[a0_0x4d0b14(0x136)](a0_0x4d0b14(0x15a)),preview_status=document['getElementById'](a0_0x4d0b14(0x144)),preview_aboutme=document[a0_0x4d0b14(0x136)](a0_0x4d0b14(0x155)),preview_icon=document[a0_0x4d0b14(0x136)](a0_0x4d0b14(0x138)),preview_banner=document[a0_0x4d0b14(0x136)](a0_0x4d0b14(0x13e)),saveButton=document[a0_0x4d0b14(0x136)]('settings_profile_save');