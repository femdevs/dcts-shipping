var a0_0x293fbd=a0_0x3ad8;(function(_0x401996,_0x5ec169){var _0x137690=a0_0x3ad8,_0x39c570=_0x401996();while(!![]){try{var _0x20715b=-parseInt(_0x137690(0x101))/0x1*(parseInt(_0x137690(0x103))/0x2)+parseInt(_0x137690(0xfa))/0x3*(parseInt(_0x137690(0xfd))/0x4)+parseInt(_0x137690(0xea))/0x5+-parseInt(_0x137690(0xff))/0x6*(-parseInt(_0x137690(0xe8))/0x7)+-parseInt(_0x137690(0x100))/0x8*(parseInt(_0x137690(0xf6))/0x9)+-parseInt(_0x137690(0xe7))/0xa+-parseInt(_0x137690(0x104))/0xb*(-parseInt(_0x137690(0xfb))/0xc);if(_0x20715b===_0x5ec169)break;else _0x39c570['push'](_0x39c570['shift']());}catch(_0x182fc6){_0x39c570['push'](_0x39c570['shift']());}}}(a0_0x4a3e,0x33c09));var channelname=document[a0_0x293fbd(0x102)](a0_0x293fbd(0xe6)),saveButton=document[a0_0x293fbd(0x102)](a0_0x293fbd(0xf1)),serverconfigName,editGroup={};function a0_0x4a3e(){var _0x2113d1=['replace','value','success','63DKFdEl','Error\x20while\x20trying\x20to\x20save\x20settings:\x20','length','error','6wGYpaW','12nBCaRS','none','752836FkRnGE','block','18dWeTuM','326888pCokoI','223jJYDrX','getElementById','2582kLtjSm','1846669CPzpaw','same','updateGroupName','channel_name','2978890opbTXI','737233iiwFFD','display','1117660YGGOjc','emit','type','msg','log','style','group-','settings_channel_save','userConnected'];a0_0x4a3e=function(){return _0x2113d1;};return a0_0x4a3e();}setupNotify(),socket['emit'](a0_0x293fbd(0xf2),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket[a0_0x293fbd(0xeb)]('getGroupInfo',{'id':getID(),'token':getToken(),'group':getUrlParams('id')[a0_0x293fbd(0xf3)](a0_0x293fbd(0xf0),'')},function(_0x3823ca){var _0x432447=a0_0x293fbd;try{console[_0x432447(0xee)](_0x3823ca),channelname=document['getElementById'](_0x432447(0xe6)),saveButton=document[_0x432447(0x102)](_0x432447(0xf1)),serverconfigName=_0x3823ca['data']['info']['name'],channelname[_0x432447(0xf4)]=serverconfigName,editGroup=_0x3823ca,console[_0x432447(0xee)](_0x3823ca);}catch(_0x5d3a98){console[_0x432447(0xee)]('Unable\x20to\x20get\x20Group\x20Information'),console[_0x432447(0xee)](_0x5d3a98),alert('Unable\x20to\x20get\x20channel\x20info.\x20Please\x20try\x20to\x20reload\x20slowly\x20until\x20it\x20works.\x20Known\x20bug!');}});function a0_0x3ad8(_0x2612b8,_0x461375){var _0x4a3ed9=a0_0x4a3e();return a0_0x3ad8=function(_0x3ad86d,_0x40f0ef){_0x3ad86d=_0x3ad86d-0xe4;var _0x139c0e=_0x4a3ed9[_0x3ad86d];return _0x139c0e;},a0_0x3ad8(_0x2612b8,_0x461375);}function getToken(){var _0x26254f=a0_0x293fbd,_0xb39bfb=getCookie('token');return _0xb39bfb==null||_0xb39bfb[_0x26254f(0xf8)]<=0x0?null:_0xb39bfb;}function getID(){var _0x432dc8=a0_0x293fbd,_0x5c9057=getCookie('id');return _0x5c9057==null||_0x5c9057[_0x432dc8(0xf8)]!=0xc?(_0x5c9057=generateId(0xc),setCookie('id',_0x5c9057,0x168),_0x5c9057):_0x5c9057;}function updatePreview(){var _0x1dc3d8=a0_0x293fbd;try{channel_name['value']!=serverconfigName?(console[_0x1dc3d8(0xee)]('NOt\x20same'),saveButton['style'][_0x1dc3d8(0xe9)]=_0x1dc3d8(0xfe)):(console[_0x1dc3d8(0xee)](_0x1dc3d8(0xe4)),saveButton[_0x1dc3d8(0xef)][_0x1dc3d8(0xe9)]=_0x1dc3d8(0xfc));}catch(_0x86ed9a){console['log'](_0x86ed9a);}}function saveSettings(){var _0x34c08e=a0_0x293fbd;try{channelname[_0x34c08e(0xf4)]!=null&&channelname[_0x34c08e(0xf4)][_0x34c08e(0xf8)]>0x0&&channelname[_0x34c08e(0xf4)]!=serverconfigName&&socket[_0x34c08e(0xeb)](_0x34c08e(0xe5),{'id':getID(),'token':getToken(),'groupId':getUrlParams('id'),'groupName':channelname['value']},function(_0x6b258d){var _0x551293=_0x34c08e;_0x6b258d[_0x551293(0xec)]==_0x551293(0xf5)?notify(_0x6b258d['msg'],_0x551293(0xf5),null,!![]):notify(_0x6b258d[_0x551293(0xed)],_0x551293(0xf9),null,!![]),console[_0x551293(0xee)](_0x6b258d);}),saveButton['style'][_0x34c08e(0xe9)]=_0x34c08e(0xfc);}catch(_0x25c20f){alert(_0x34c08e(0xf7)+_0x25c20f);return;}}