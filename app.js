
(()=>{
'use strict';
const packed='eyJpdGVtcyI6W3siaWQiOiJjb21tZXJjaWFsLW1vYmlsaXR5LWZ1dHVyZXMtbGFiIiwibmFtZSI6eyJ6aCI6IuWVhueUqOi7iuacquS+huenu+WLleS8geWKg+Wvpumpl+WupCIsImVuIjoiQ29tbWVyY2lhbCBNb2JpbGl0eSBGdXR1cmVzIExhYiIsImphIjoi5ZKM5rOw5ZWG55So6LuK44K344OK44Oq44Kq5Z6L5ZWG5ZOB5LyB55S7In0sImZpbGUiOiJDb21tZXJjaWFsIE1vYmlsaXR5IEZ1dHVyZXMgTGFiLnR4dCIsImltZyI6IkNvbW1lcmNpYWwgTW9iaWxpdHkgRnV0dXJlcyBMYWIuanBnIiwidXJsIjoiaHR0cHM6Ly95aWxpY2hhbmc1Mjhoei5naXRodWIuaW8vY29tbWVyY2lhbC1tb2JpbGl0eS1sYWIvIiwic3VtbWFyeSI6eyJ6aCI6IuS7peWPsOeBo+mrmOm9oeWMluOAgeingOWFieW+qeeUpuOAgeWGt+mPiOeJqea1geOAgeWcsOaWueaOpemngeiIh+WIsOW6nOacjeWLmeeCuuiDjOaZr++8jOWwh+WVhueUqOi7iuWVhuWTgeS8geWKg+i9ieWMlueCuuWgtOaZr+Wei+eglOeptue2suermeOAguS9nOWTgeS7peS6uuWPo+e1kOani+OAgVRDT+OAgeacjeWLmeaXheeoi+OAgeW4guWgtOefqemZo+iIh+miqOmaquWIpOa6luaLhuino+WuouaItuS7u+WLme+8jOWRiOePvui7iui8m+mKt+WUruOAgeenn+izg+mHkeiejeOAgeWUruW+jOacjeWLmeiIh+izh+aWmeWbnumli+WmguS9leW9ouaIkOmVt+acn+e2k+eHn+aooeWei+OAgiIsImVuIjoiQnVpbHQgYXJvdW5kIFRhaXdhbuKAmXMgYWdpbmcgc29jaWV0eSwgdG91cmlzbSByZWNvdmVyeSwgY29sZC1jaGFpbiBsb2dpc3RpY3MsIGxvY2FsIHNodXR0bGUgbmVlZHMsIGFuZCBtb2JpbGUgc2VydmljZXMsIHRoaXMgcHJvamVjdCB0dXJucyBjb21tZXJjaWFsIHZlaGljbGUgcHJvZHVjdCBwbGFubmluZyBpbnRvIGEgc2NlbmFyaW8tYmFzZWQgcmVzZWFyY2ggc2l0ZS4gSXQgdXNlcyBkZW1vZ3JhcGhpY3MsIFRDTywgc2VydmljZSBqb3VybmV5cywgbWFya2V0IG1hdHJpY2VzLCBhbmQgcmlzayBjcml0ZXJpYSB0byBjb25uZWN0IHNhbGVzLCBsZWFzaW5nLCBhZnRlcnNhbGVzLCBhbmQgZGF0YSBmZWVkYmFjay4iLCJqYSI6IuWPsOa5vuOBrumrmOm9ouWMluOAgeims+WFieWbnuW+qeOAgeOCs+ODvOODq+ODieODgeOCp+ODvOODs+OAgeWcsOWfn+mAgei/juOAgeioquWVj+Wei+OCteODvOODk+OCueOCkuiDjOaZr+OBq+OAgeWVhueUqOi7iuOBruWVhuWTgeS8geeUu+OCkuOCt+ODiuODquOCquWei+eglOeptuOCteOCpOODiOOBuOWxlemWi+OBl+OBn+S9nOWTgeOBp+OBmeOAguS6uuWPo+ani+mAoOOAgVRDT+OAgeOCteODvOODk+OCueOCuOODo+ODvOODi+ODvOOAgeW4guWgtOODnuODiOODquOCr+OCueOAgeODquOCueOCr+Wfuua6luOCkueUqOOBhOOAgeiyqeWjsuOAgeODquODvOOCueOAgeOCouODleOCv+ODvOOCteODvOODk+OCueOAgeODh+ODvOOCv+a0u+eUqOOCkumVt+acn+mBi+WWtuODouODh+ODq+OBqOOBl+OBpuaVtOeQhuOBl+OBvuOBmeOAgiJ9fSx7ImlkIjoiY29tbWVyY2lhbC12ZWhpY2xlLWludGVsbGlnZW5jZS1haS1wbGFubmluZy1sYWIiLCJuYW1lIjp7InpoIjoi5ZWG55So6LuK5YWo55CD5oOF5aCx6IiHQUnllYblk4HkvIHlioPlr6bpqZflrqQiLCJlbiI6IkNvbW1lcmNpYWwgVmVoaWNsZSBJbnRlbGxpZ2VuY2UgJiBBSSBQbGFubmluZyBMYWIiLCJqYSI6IuWVhueUqOi7iuOCsOODreODvOODkOODq+aDheWgse+8hkFJ5LyB55S744Op44OcIn0sImZpbGUiOiJDb21tZXJjaWFsIFZlaGljbGUgSW50ZWxsaWdlbmNlICYgQUkgUGxhbm5pbmcgTGFiLnR4dCIsImltZyI6IkNvbW1lcmNpYWwgVmVoaWNsZSBJbnRlbGxpZ2VuY2UgJiBBSSBQbGFubmluZyBMYWIuanBnIiwidXJsIjoiaHR0cHM6Ly95aWxpY2hhbmc1Mjhoei5naXRodWIuaW8vY3YtYWktaW50ZWwtbGFiLyIsInN1bW1hcnkiOnsiemgiOiLku6Xlj7DngaPllYbnlKjou4rluILloLTngrrnoJTnqbbotbfpu57vvIzmlbTlkIjlnIvpmpvos4fmlpnluqvjgIHnlKLmpa3lqpLpq5TjgIHljZTmnIPjgIHlrbjooZPnoJTnqbbjgIHms5Xopo/mqJnmupbjgIHou4rpmornrqHnkIboiIfllK7lvozmnI3li5nos4foqIrvvIzlu7rnq4vlj6/ov73muq/nmoTmg4XloLHoiIcgQUkg5ZWG5ZOB5LyB5YqD5Y6f5Z6L44CC57ay56uZ5o6hIEdpdEh1YiBQYWdlcyDntJTpnZzmhYvmnrbmp4vvvIzmlK/mj7TkuInoqp7oiIflm5vniYjlnovvvIzkuKbku6XkvobmupDliIblsaTjgIHlj6/kv6HluqbliIbntJrjgIFBSSBBZ2VudCDliIblt6XjgIHkupLli5XliIbmnpDnlavluIPjgIFQbGF5Ym9va+OAgVRDTyDoqabnrpfoiIfooZPoqp7ooajvvIzljZTliqnnlKLlk4HkvIHlioPlvp7os4fmlpnokpDpm4bjgIHms5Xopo/mqqLmoLjjgIHllYbmpa3liIbmnpDliLDooYzpirfoiIfllK7lvoznrZbnlaXlvaLmiJDovIPlhbfmop3ku7boqqrmmI7nmoTmsbrnrZbot6/lvpHjgIIiLCJlbiI6IlN0YXJ0aW5nIGZyb20gVGFpd2Fu4oCZcyBjb21tZXJjaWFsIHZlaGljbGUgbWFya2V0LCB0aGlzIHByb2plY3QgaW50ZWdyYXRlcyBpbnRlcm5hdGlvbmFsIGRhdGFiYXNlcywgaW5kdXN0cnkgbWVkaWEsIGFzc29jaWF0aW9ucywgYWNhZGVtaWMgcmVzZWFyY2gsIHJlZ3VsYXRvcnkgc3RhbmRhcmRzLCBmbGVldCBtYW5hZ2VtZW50LCBhbmQgYWZ0ZXJzYWxlcyBrbm93bGVkZ2UgaW50byBhIHRyYWNlYWJsZSBBSSBwbGFubmluZyBwcm90b3R5cGUuIEJ1aWx0IGFzIGEgdHJpbGluZ3VhbCBHaXRIdWIgUGFnZXMgc2l0ZSB3aXRoIGZvdXIgdmlzdWFsIHRoZW1lcywgaXQgdXNlcyBzb3VyY2UgZ3JhZGluZywgY3JlZGliaWxpdHkgdGllcnMsIEFJIGFnZW50IHdvcmtmbG93cywgaW50ZXJhY3RpdmUgYW5hbHlzaXMgY2FudmFzZXMsIHBsYXlib29rcywgVENPIHRvb2xzLCBhbmQgZ2xvc3NhcnkgbW9kdWxlcyB0byBzdXBwb3J0IHByb2R1Y3QgcGxhbm5pbmcgZnJvbSBldmlkZW5jZSBjb2xsZWN0aW9uIGFuZCBjb21wbGlhbmNlIHJldmlldyB0byBtYXJrZXQgYW5hbHlzaXMsIG1hcmtldGluZyBjb21tdW5pY2F0aW9uLCBhbmQgc2VydmljZSBzdHJhdGVneS4iLCJqYSI6IuWPsOa5vuOBruWVhueUqOi7iuW4guWgtOOCkui1t+eCueOBq+OAgeWbvemam+ODh+ODvOOCv+ODmeODvOOCueOAgeeUo+alreODoeODh+OCo+OCouOAgeWNlOS8muOAgeWtpuihk+eglOeptuOAgeazleimj+aomea6luOAgeODleODquODvOODiOeuoeeQhuOAgeOCouODleOCv+ODvOOCteODvOODk+OCueaDheWgseOCkue1seWQiOOBl+OAgei/vei3oeWPr+iDveOBqkFJ5ZWG5ZOB5LyB55S744OX44Ot44OI44K/44Kk44OX44Go44GX44Gm5qeL5oiQ44GX44Gf5L2c5ZOB44Gn44GZ44CCR2l0SHViIFBhZ2Vz44Gu57SU6Z2Z55qE5qeL5oiQ44Gn5LiJ6Kqe44Go5Zub44Gk44Gu6KGo56S644OG44O844Oe44Gr5a++5b+c44GX44CB5oOF5aCx5rqQ44Gu6ZqO5bGk5YyW44CB5L+h6aC85bqm5YiG6aGe44CBQUkgQWdlbnTliIbmi4XjgIHliIbmnpDjgq3jg6Pjg7Pjg5DjgrnjgIFQbGF5Ym9va+OAgVRDT+ODhOODvOODq+OAgeeUqOiqnumbhuOCkumAmuOBmOOBpuOAgeizh+aWmeWPjumbhuOAgeazleimj+eiuuiqjeOAgeW4guWgtOWIhuaekOOAgeODnuODvOOCseODhuOCo+ODs+OCsOOAgeOCteODvOODk+OCueaIpueVpeOBvuOBp+OCkuadoeS7tuS7mOOBjeOBq+aVtOeQhuOBl+OBvuOBmeOAgiJ9fSx7ImlkIjoiaW50ZXJhY3RpdmUtY29tbWVyY2lhbC12ZWhpY2xlLXNob3J0cy1wb3J0Zm9saW8iLCJuYW1lIjp7InpoIjoi5ZWG55So6LuK55+t5b2x6Z+z5LqS5YuV5byP5L2c5ZOB6ZuGIiwiZW4iOiJJbnRlcmFjdGl2ZSBDb21tZXJjaWFsIFZlaGljbGUgU2hvcnRzIFBvcnRmb2xpbyIsImphIjoi5ZWG55So6LuK44K344On44O844OI5YuV55S744Kk44Oz44K/44Op44Kv44OG44Kj44OW5L2c5ZOB6ZuGIn0sImZpbGUiOiJJbnRlcmFjdGl2ZSBDb21tZXJjaWFsIFZlaGljbGUgU2hvcnRzIFBvcnRmb2xpby50eHQiLCJpbWciOiJJbnRlcmFjdGl2ZSBDb21tZXJjaWFsIFZlaGljbGUgU2hvcnRzIFBvcnRmb2xpby5qcGciLCJ1cmwiOiJodHRwczovL3lpbGljaGFuZzUyOGh6LmdpdGh1Yi5pby9jb21tZXJjaWFsLXZlaGljbGUtc3RvcnlsYWIvIiwic3VtbWFyeSI6eyJ6aCI6IuS7pSAxMiDmlK/llYbnlKjou4rnn63lvbHpn7PngrrmoLjlv4PvvIzmlbTlkIjln47luILnianmtYHjgIHlrrbluq3lronlhajjgIHnpo/npYnnp7vli5XjgIHplbfpgJTpp5Xpp5vjgIFBREFT44CB5rCj5YCZ6LKs5Lu76IiH6LuK6ZqK5oiQ5pys44CC5L2c5ZOB5bCH5ZOB54mM5rqd6YCa44CB55+t5b2x6Z+z6KGM6Yq344CB6aGn5a6i5peF56iL6IiH5LqS5YuV5byP57ay6aCB57WQ5ZCI77yM6K6T5ZWG55So6LuK55qE56S+5pyD5YO55YC844CB54ef6YGL5qKd5Lu26IiH55Si5ZOB5LyB5YqD6Kqe6KiA6KKr5pu05riF5qWa5Zyw5bGV56S644CCIiwiZW4iOiJDZW50ZXJlZCBvbiB0d2VsdmUgY29tbWVyY2lhbCB2ZWhpY2xlIHNob3J0IGZpbG1zLCB0aGlzIHBvcnRmb2xpbyBpbnRlZ3JhdGVzIHVyYmFuIGxvZ2lzdGljcywgZmFtaWx5IHNhZmV0eSwgd2VsZmFyZSBtb2JpbGl0eSwgbG9uZy1kaXN0YW5jZSBkcml2aW5nLCBBREFTLCBjbGltYXRlIHJlc3BvbnNpYmlsaXR5LCBhbmQgZmxlZXQgY29zdC4gSXQgY29tYmluZXMgYnJhbmQgY29tbXVuaWNhdGlvbiwgc2hvcnQtZm9ybSB2aWRlbyBtYXJrZXRpbmcsIGN1c3RvbWVyIGpvdXJuZXlzLCBhbmQgaW50ZXJhY3RpdmUgd2ViIGRlc2lnbiB0byBjbGFyaWZ5IGNvbW1lcmNpYWwgdmVoaWNsZSB2YWx1ZS4iLCJqYSI6IjEy5pys44Gu5ZWG55So6LuK44K344On44O844OI5YuV55S744KS5Lit5b+D44Gr44CB6YO95biC54mp5rWB44CB5a625peP44Gu5a6J5YWo44CB56aP56WJ56e75YuV44CB6ZW36Led6Zui6YGL6Lui44CBQURBU+OAgeawl+WAmeiyrOS7u+OAgeODleODquODvOODiOOCs+OCueODiOOCkue1seWQiOOBl+OBn+S9nOWTgeOBp+OBmeOAguODluODqeODs+ODieOCs+ODn+ODpeODi+OCseODvOOCt+ODp+ODs+OAgeefreWwuuWLleeUu+ODnuODvOOCseODhuOCo+ODs+OCsOOAgemhp+WuouOCuOODo+ODvOODi+ODvOOAgeOCpOODs+OCv+ODqeOCr+ODhuOCo+ODlldlYuOCkue1hOOBv+WQiOOCj+OBm+OAgeWVhueUqOi7iuOBruekvuS8mueahOS+oeWApOOBqOS8geeUu+iogOiqnuOCkuWPr+imluWMluOBl+OBvuOBmeOAgiJ9fSx7ImlkIjoidHJhbnNuYXRpb25hbC1jb21tZXJjaWFsLXZlaGljbGUtY2hhbm5lbC1zdHJhdGVneSIsIm5hbWUiOnsiemgiOiLlkozms7Dmsb3ou4rml6XmnKwgSElOTyDntpPpirfllYbmipXos4flvozkuYvot6jlnIvllYbnlKjou4rpgJrot6/nh5/pgYvnrZbnlaXnoJTnqbYiLCJlbiI6IlRyYW5zbmF0aW9uYWwgQ29tbWVyY2lhbCBWZWhpY2xlIENoYW5uZWwgU3RyYXRlZ3kgYWZ0ZXIgdGhlIEphcGFuIEhpbm8gRGVhbGVyIEludmVzdG1lbnQiLCJqYSI6IuaXpeacrEhJTk/jg4fjgqPjg7zjg6njg7zmipXos4flvozjga7otorlooPllYbnlKjou4rjg4Hjg6Pjg43jg6vpgYvllrbmiKbnlaXnoJTnqbYifSwiZmlsZSI6IlRyYW5zbmF0aW9uYWwgQ29tbWVyY2lhbCBWZWhpY2xlIENoYW5uZWwgU3RyYXRlZ3kgYWZ0ZXIgdGhlIEphcGFuIEhpbm8gRGVhbGVyIEludmVzdG1lbnQudHh0IiwiaW1nIjoiVHJhbnNuYXRpb25hbCBDb21tZXJjaWFsIFZlaGljbGUgQ2hhbm5lbCBTdHJhdGVneSBhZnRlciB0aGUgSmFwYW4gSGlubyBEZWFsZXIgSW52ZXN0bWVudC5qcGciLCJ1cmwiOiJodHRwczovL3lpbGljaGFuZzUyOGh6LmdpdGh1Yi5pby9oaW5vLWNoYW5uZWwtc3RyYXRlZ3ktbGFiIiwic3VtbWFyeSI6eyJ6aCI6IuS7peWSjOazsOaxvei7iuaKleizh+aXpeacrCBISU5PIOe2k+mKt+WVhuW+jOeahOi3qOWci+mAmui3r+WNlOS9nOeCuuaDheWig++8jOaOouiojuWPsOeBo+W4guWgtOe2k+mpl+OAgeaXpeacrOePvuWgtOefpeitmOiIh+Wci+mam+azleimj+i2qOWLouWmguS9lemAsuWFpeWVhueUqOi7iueUouWTgeS8geWKg+OAguS9nOWTgeaVtOWQiOW4guWgtOaDheWgseOAgVRDT+OAgee2k+mKt+eHn+mBi+OAgeWUruW+jOacjeWLmeOAgUFJIEFnZW50IOiIh+S6uuW3peimhuaguO+8jOWRiOePvui3qOWci+mAmui3r+etlueVpeeahOWPr+iojuirluahhuaetuOAgiIsImVuIjoiVXNpbmcgSG90YWnigJlzIEphcGFuIEhpbm8gZGVhbGVyIGludmVzdG1lbnQgYXMgYSBzdHJhdGVnaWMgY29udGV4dCwgdGhpcyBzdHVkeSBleGFtaW5lcyBob3cgVGFpd2FuIG1hcmtldCBleHBlcmllbmNlLCBKYXBhbmVzZSBkZWFsZXIga25vd2xlZGdlLCBhbmQgZ2xvYmFsIHJlZ3VsYXRvcnkgdHJlbmRzIGNhbiBzdXBwb3J0IGNvbW1lcmNpYWwgdmVoaWNsZSBwbGFubmluZy4gSXQgaW50ZWdyYXRlcyBtYXJrZXQgaW50ZWxsaWdlbmNlLCBUQ08sIGRlYWxlciBvcGVyYXRpb25zLCBhZnRlcnNhbGVzLCBBSSBhZ2VudHMsIGFuZCBodW1hbiByZXZpZXcuIiwiamEiOiLlkozms7Dmsb3ou4rjgavjgojjgovml6XmnKxISU5P44OH44Kj44O844Op44O85oqV6LOH5b6M44Gu6LaK5aKD44OB44Oj44ON44Or5Y2U5Yqb44KS6aGM5p2Q44Gr44CB5Y+w5rm+5biC5aC044Gu57WM6aiT44CB5pel5pys54++5aC044Gu55+l6K2Y44CB5Zu96Zqb6KaP5Yi244Gu5YuV5ZCR44GM5ZWG55So6LuK5LyB55S744Gr44Gp44GG6Zai44KP44KL44GL44KS5qSc6KiO44GX44G+44GZ44CC5biC5aC05oOF5aCx44CBVENP44CB6LKp5aOy5bqX6YGL5Za244CB44Ki44OV44K/44O844K144O844OT44K544CBQUkgQWdlbnTjgIHkurrnmoTlr6nmn7vjgpLntbHlkIjjgZfjgZ/miKbnlaXjg5Xjg6zjg7zjg6DjgafjgZnjgIIifX0seyJpZCI6ImNvbW1lcmNpYWwtdmVoaWNsZS1kcml2ZXItaGVhbHRoLWFuZC1zYWZldHktY29taWNzIiwibmFtZSI6eyJ6aCI6IuWVhueUqOi7iumnlemnm+WBpeW6t+WuieWFqOa8q+eVqyIsImVuIjoiQ29tbWVyY2lhbCBWZWhpY2xlIERyaXZlciBIZWFsdGggYW5kIFNhZmV0eSBDb21pY3MiLCJqYSI6IuWVhueUqOi7iuODieODqeOCpOODkOODvOWBpeW6t+WuieWFqOa8q+eUuyJ9LCJmaWxlIjoiQ29tbWVyY2lhbCBWZWhpY2xlIERyaXZlciBIZWFsdGggYW5kIFNhZmV0eSBDb21pY3MudHh0IiwiaW1nIjoiQ29tbWVyY2lhbCBWZWhpY2xlIERyaXZlciBIZWFsdGggYW5kIFNhZmV0eSBDb21pY3MuanBnIiwidXJsIjoiaHR0cHM6Ly95aWxpY2hhbmc1Mjhoei5naXRodWIuaW8vY3YtZHJpdmVyLWhlYWx0aC1jb21pY3MvIiwic3VtbWFyeSI6eyJ6aCI6IuS7peWVhueUqOi7iumnlemnm+S6uueahOedoeecoOOAgeWnv+WLouOAgeihgOWjk+ihgOezluOAgeijneWNuOiyqOWuieWFqOOAgeWIhuW/g+miqOmaquiIh+WHuui7iuWJjeaqouafpeeCuuS4u+mhjO+8jOWwh+iBt+alreWBpeW6t+mXnOaHt+i9ieWMlueCuuS4ieiqnua8q+eVq+iXneW7iuOAguS9nOWTgeS7peaVmeiCsuWei+WFp+WuuemAo+aOpei7iumaiueuoeeQhuOAgeWUruW+jOmXnOaHt+OAgeWFrOebiuWuieWFqOWuo+WwjuiIh+WTgeeJjOS/oeS7u++8jOiuk+eUouWTgeS8geWKg+e0jeWFpeS6uueahOW3peS9nOiyoOiNt+iIh+mBk+i3r+WuieWFqOaineS7tuOAgiIsImVuIjoiVGhpcyB0cmlsaW5ndWFsIGNvbWljIGdhbGxlcnkgdHJhbnNsYXRlcyBkcml2ZXIgaGVhbHRoIHRvcGljc+KAlHNsZWVwLCBwb3N0dXJlLCBibG9vZCBwcmVzc3VyZSwgbG9hZGluZyBzYWZldHksIGRpc3RyYWN0aW9uIHJpc2ssIGFuZCBwcmUtdHJpcCBjaGVja3PigJRpbnRvIGFjY2Vzc2libGUgY29tbWVyY2lhbCB2ZWhpY2xlIGVkdWNhdGlvbi4gSXQgY29ubmVjdHMgZmxlZXQgbWFuYWdlbWVudCwgYWZ0ZXJzYWxlcyBjYXJlLCBzYWZldHkgYWR2b2NhY3ksIGFuZCBicmFuZCB0cnVzdCB3aGlsZSBrZWVwaW5nIGh1bWFuIHdvcmtsb2FkIHZpc2libGUgaW4gcHJvZHVjdCBwbGFubmluZy4iLCJqYSI6IuedoeecoOOAgeWnv+WLouOAgeihgOWcp+ODu+ihgOezluOAgeiNt+W9ueWuieWFqOOAgeazqOaEj+aVo+a8q+ODquOCueOCr+OAgeWHuueZuuWJjeeCueaknOOBquOBqeOAgeWVhueUqOi7iuODieODqeOCpOODkOODvOOBruWBpeW6t+iqsumhjOOCkuS4ieiogOiqnua8q+eUu+OCruODo+ODqeODquODvOOBq+WxlemWi+OBl+OBn+S9nOWTgeOBp+OBmeOAgui7iumaiueuoeeQhuOAgeOCouODleOCv+ODvOOCseOCouOAgeWuieWFqOWVk+eZuuOAgeODluODqeODs+ODieS/oemgvOOCkue1kOOBs+OAgeWVhuWTgeS8geeUu+OBq+S6uuOBruiyoOiNt+OBqOmBk+i3r+WuieWFqOOCkue1hOOBv+i+vOOBv+OBvuOBmeOAgiJ9fSx7ImlkIjoiY29tbWVyY2lhbC12ZWhpY2xlLW1hcmtldC1haS1pbnRlbGxpZ2VuY2Utb3MiLCJuYW1lIjp7InpoIjoi5ZWG55So6LuK5biC5aC05oOF5aCx6IiH6ZyA5rGC6Lao5YuiIEFJIOaxuuetluezu+e1sSIsImVuIjoiQ29tbWVyY2lhbCBWZWhpY2xlIE1hcmtldCBBSSBJbnRlbGxpZ2VuY2UgT1MiLCJqYSI6IuWVhueUqOi7iuW4guWgtOOCpOODs+ODhuODquOCuOOCp+ODs+OCuSBBSSDmhI/mgJ3msbrlrprjgrfjgrnjg4bjg6AifSwiZmlsZSI6IkNvbW1lcmNpYWwgVmVoaWNsZSBNYXJrZXQgQUkgSW50ZWxsaWdlbmNlIE9TLnR4dCIsImltZyI6IkNvbW1lcmNpYWwgVmVoaWNsZSBNYXJrZXQgQUkgSW50ZWxsaWdlbmNlIE9TLmpwZyIsInVybCI6Imh0dHBzOi8veWlsaWNoYW5nNTI4aHouZ2l0aHViLmlvL0NvbW1lcmNpYWxfVmVoaWNsZV9BSV9BZ2VudF9PUy8iLCJzdW1tYXJ5Ijp7InpoIjoi5bCH5ZWG55So6LuK5biC5aC06KiK6Jmf44CB6aCY54mM6LOH5paZ44CB56u25ZOB5LqL5Lu244CB5rOV6KaP6K6K5YuV6IiH5a6i5oi254++5aC06L2J5YyW54K6IEFJIOi8lOWKqeaxuuetluS7i+mdouOAguS9nOWTgeS7peizh+aWmeS+hua6kOOAgeioiuiZn+WIhumhnuOAgeaDheWig+ino+iugOOAgeS8geWKg+WBh+ioreiIh+S6uuW3peimhuaguOW7uuani+a1geeoi++8jOWNlOWKqeeUouWTgeS8geWKg+WcqOW4guWgtOeglOeptuOAgee2k+mKt+aVmeiCsuOAgeWUruW+jOa6luWCmeiIh+i3qOmDqOmWgOa6nemAmuS4reS/neeVmeWPr+i/vea6r+eahOWIpOaWt+i3r+W+keOAgiIsImVuIjoiVGhpcyBBSS1hc3Npc3RlZCBpbnRlbGxpZ2VuY2UgT1MgdHVybnMgcmVnaXN0cmF0aW9uIGRhdGEsIGNvbXBldGl0b3IgZXZlbnRzLCByZWd1bGF0aW9uIGNoYW5nZXMsIGZpZWxkIG9ic2VydmF0aW9ucywgYW5kIGN1c3RvbWVyIHNpZ25hbHMgaW50byBhIHBsYW5uaW5nIGludGVyZmFjZS4gSXQgc3RydWN0dXJlcyBzb3VyY2VzLCBzaWduYWwgY2xhc3NpZmljYXRpb24sIGNvbnRleHR1YWwgaW50ZXJwcmV0YXRpb24sIHBsYW5uaW5nIGh5cG90aGVzZXMsIGFuZCBodW1hbiByZXZpZXcgdG8gc3VwcG9ydCBtYXJrZXQgcmVzZWFyY2gsIGRlYWxlciBlZHVjYXRpb24sIGFmdGVyc2FsZXMgcHJlcGFyYXRpb24sIGFuZCBjcm9zcy1mdW5jdGlvbmFsIGNvbW11bmljYXRpb24uIiwiamEiOiLnmbvpjLLjg4fjg7zjgr/jgIHnq7blkIjli5XlkJHjgIHopo/liLblpInljJbjgIHnj77loLToprPlr5/jgIHpoaflrqLjgrfjgrDjg4rjg6vjgpJBSeaUr+aPtOWei+OBruaEj+aAneaxuuWumuOCpOODs+OCv+ODvOODleOCp+ODvOOCueOBuOWkieaPm+OBmeOCi+S9nOWTgeOBp+OBmeOAguaDheWgsea6kOOAgeOCt+OCsOODiuODq+WIhumhnuOAgeaWh+iEiOino+mHiOOAgeS8geeUu+S7ruiqrOOAgeS6uueahOWvqeafu+OCkuani+mAoOWMluOBl+OAgeW4guWgtOeglOeptuOAgeiyqeWjsuW6l+aVmeiCsuOAgeOCouODleOCv+ODvOa6luWCmeOAgemDqOmWgOaoquaWreOBruWNlOitsOOCkuaUr+aPtOOBl+OBvuOBmeOAgiJ9fSx7ImlkIjoiaGluby1wcm9kdWN0LWVkdWNhdGlvbi1pbnRlcmFjdGl2ZS1hY2FkZW15IiwibmFtZSI6eyJ6aCI6IkhJTk8g5ZWG55So6LuK5ZWG5ZOB5pWZ6IKy5LqS5YuV5a246ZmiIiwiZW4iOiJISU5PIFByb2R1Y3QgRWR1Y2F0aW9uIEludGVyYWN0aXZlIEFjYWRlbXkiLCJqYSI6IkhJTk8g5ZWG5ZOB5pWZ6IKy44Kk44Oz44K/44Op44Kv44OG44Kj44OW44Ki44Kr44OH44Of44O8In0sImZpbGUiOiJISU5PIFByb2R1Y3QgRWR1Y2F0aW9uIEludGVyYWN0aXZlIEFjYWRlbXkudHh0IiwiaW1nIjoiSElOTyBQcm9kdWN0IEVkdWNhdGlvbiBJbnRlcmFjdGl2ZSBBY2FkZW15LmpwZyIsInVybCI6Imh0dHBzOi8veWlsaWNoYW5nNTI4aHouZ2l0aHViLmlvL0NWX1Byb2R1Y3RfRWR1Y2F0aW9uX0FjYWRlbXkvIiwic3VtbWFyeSI6eyJ6aCI6IuaKiiBISU5PIOWVhueUqOi7iuWVhuWTgeefpeitmOaVtOeQhuaIkOWPr+m7numBuOOAgeWPr+a8lOe3tOOAgeWPr+a4rOmpl+OAgeWPr+WvqeaguOeahOS4ieiqnuS6kuWLleWtuOmZouOAguS9nOWTgeaLhuino+S9v+eUqOWgtOaZr+OAgeW6leebpOi7iumrlOOAgeeHn+mBi+aIkOacrOOAgeertuWTgeavlOi8g+OAgeazleimj+mCiueVjOiIh+mKt+WUruiok+e3tO+8jOWNlOWKqee2k+mKt+WVhuaVmeiCsuW+nuWei+mMhOiomOaGtuW7tuS8uOeCuuaDheWig+eQhuino+OAgemiqOmaquiBsuaYjuiIh+S4gOiHtOWMlumhp+Wuoua6nemAmuOAgiIsImVuIjoiVGhpcyB0cmlsaW5ndWFsIGFjYWRlbXkgdHVybnMgSElOTyBjb21tZXJjaWFsIHZlaGljbGUgcHJvZHVjdCBrbm93bGVkZ2UgaW50byBzZWxlY3RhYmxlLCBwcmFjdGljZS1iYXNlZCwgdGVzdGFibGUsIGFuZCByZXZpZXdhYmxlIGxlYXJuaW5nIG1vZHVsZXMuIEl0IGNvdmVycyB1c2UgY2FzZXMsIGNoYXNzaXMgYW5kIGJvZHksIG9wZXJhdGluZyBjb3N0LCBjb21wZXRpdG9yIGNvbXBhcmlzb24sIGNvbXBsaWFuY2UgYm91bmRhcmllcywgYW5kIHNhbGVzIHRyYWluaW5nIHRvIHN1cHBvcnQgY29uc2lzdGVudCBkZWFsZXIgZWR1Y2F0aW9uIGFuZCBjdXN0b21lciBjb21tdW5pY2F0aW9uLiIsImphIjoiSElOT+WVhueUqOi7iuOBruWVhuWTgeefpeitmOOCkuOAgemBuOaKnuOAgea8lOe/kuOAgeODhuOCueODiOOAgeWvqeafu+OBjOOBp+OBjeOCi+S4ieiogOiqnuOCpOODs+OCv+ODqeOCr+ODhuOCo+ODluWtpue/kuOCteOCpOODiOOBq+aVtOeQhuOBl+OBn+S9nOWTgeOBp+OBmeOAguS9v+eUqOWgtOmdouOAgeOCt+ODo+OCt+ODvOOBqOaetuijheOAgemBi+eUqOOCs+OCueODiOOAgeertuWQiOavlOi8g+OAgeazleimj+Wig+eVjOOAgeiyqeWjsuaVmeiCsuOCkuaJseOBhOOAgeiyqeWjsuW6l+aVmeiCsuOBqOmhp+WuouWvvuW/nOOBruS4gOiyq+aAp+OCkuaUr+aPtOOBl+OBvuOBmeOAgiJ9fSx7ImlkIjoiZnV0dXJlLWNvbW1lcmNpYWwtbW9iaWxpdHktc3RyYXRlZ3ktbGFiIiwibmFtZSI6eyJ6aCI6IuWVhueUqOi7iuacquS+huenu+WLleiIh+aWsOiDvea6kOetlueVpeWvpumpl+WupCIsImVuIjoiRnV0dXJlIENvbW1lcmNpYWwgTW9iaWxpdHkgU3RyYXRlZ3kgTGFiIiwiamEiOiLllYbnlKjou4rjga7mnKrmnaXjg6Ljg5Pjg6rjg4bjgqPjg7vmlrDjgqjjg43jg6vjgq7jg7zmiKbnlaXjg6njg5wifSwiZmlsZSI6IkZ1dHVyZSBDb21tZXJjaWFsIE1vYmlsaXR5IFN0cmF0ZWd5IExhYi50eHQiLCJpbWciOiJGdXR1cmUgQ29tbWVyY2lhbCBNb2JpbGl0eSBTdHJhdGVneSBMYWIuanBnIiwidXJsIjoiaHR0cHM6Ly95aWxpY2hhbmc1Mjhoei5naXRodWIuaW8vRnV0dXJlX0NvbW1lcmNpYWxfTW9iaWxpdHlfU3RyYXRlZ3lfTGFiLyIsInN1bW1hcnkiOnsiemgiOiLogZrnhKbpm7vli5XljJbjgIHmsKvog73jgIHou4roga/ntrLjgIFBREFT44CBQUkg6LuK6ZqK566h55CG6IiHIEVTRyDpnIDmsYLpgLLlhaXllYbnlKjou4rluILloLTlvoznmoTnrZbnlaXmjpLluo/jgILkvZzlk4Hku6Xku7vli5nlnovmhYvjgIHot6/nt5rlr4bluqbjgIHovInph43jgIHoo5zog73mop3ku7bjgIHkv53kv67os4fmupDoiIfms5Xopo/mupblgpnluqblu7rnq4voqZXkvLDmoYbmnrbvvIzljZTliqnmlrDog73mupDoiIfmmbrmhafllYbnlKjou4ropo/lioPlm57liLDlj7DngaPnlKjou4rmg4XlooPoiIflnIvpmpvmqJnmupbjgIIiLCJlbiI6IlRoaXMgc3RyYXRlZ3kgbGFiIGV4YW1pbmVzIGhvdyBlbGVjdHJpZmljYXRpb24sIGh5ZHJvZ2VuLCBjb25uZWN0ZWQgdmVoaWNsZXMsIEFEQVMsIEFJIGZsZWV0IG1hbmFnZW1lbnQsIGFuZCBFU0cgcmVxdWlyZW1lbnRzIHNob3VsZCBiZSBwcmlvcml0aXplZCBpbiBjb21tZXJjaWFsIHZlaGljbGUgcGxhbm5pbmcuIEl0IGV2YWx1YXRlcyBtaXNzaW9uIHR5cGUsIHJvdXRlIGRlbnNpdHksIHBheWxvYWQsIGVuZXJneSBhY2Nlc3MsIHNlcnZpY2UgcmVzb3VyY2VzLCBhbmQgcmVndWxhdG9yeSByZWFkaW5lc3Mgd2l0aGluIFRhaXdhbiB1c2UgY2FzZXMgYW5kIGdsb2JhbCBzdGFuZGFyZHMuIiwiamEiOiLpm7vli5XljJbjgIHmsLTntKDjgIHjgrPjg43jgq/jg4bjg4Pjg4nou4rjgIFBREFT44CBQUnou4rpmornrqHnkIbjgIFFU0fopoHku7bjgYzllYbnlKjou4rluILloLTjgavlhaXjgovpmpvjga7miKbnlaXpoIbluo/jgpLmpJzoqI7jgZnjgovjg6njg5zjgafjgZnjgILku7vli5nlvaLmhYvjgIHot6/nt5rlr4bluqbjgIHnqY3ovInjgIHoo5zntabmnaHku7bjgIHmlbTlgpnos4fmupDjgIHopo/liLbmupblgpnluqbjgpLoqZXkvqHjgZfjgIHlj7Dmub7jga7liKnnlKjloLTpnaLjgajlm73pmpvmqJnmupbjgpLntZDjgbPjgb7jgZnjgIIifX0seyJpZCI6ImNvbW1lcmNpYWwtdmVoaWNsZS10Y28tZmxlZXQtZGVjaXNpb24tc2ltdWxhdG9yIiwibmFtZSI6eyJ6aCI6IuWVhueUqOi7iiBUQ08g6IiH6LuK6ZqK5rG6562W5qih5pOs5ZmoIiwiZW4iOiJDb21tZXJjaWFsIFZlaGljbGUgVENPICYgRmxlZXQgRGVjaXNpb24gU2ltdWxhdG9yIiwiamEiOiLllYbnlKjou4ogVENP44O744OV44Oq44O844OI5oSP5oCd5rG65a6a44K344Of44Ol44Os44O844K/44O8In0sImZpbGUiOiJDb21tZXJjaWFsIFZlaGljbGUgVENPICYgRmxlZXQgRGVjaXNpb24gU2ltdWxhdG9yLnR4dCIsImltZyI6IkNvbW1lcmNpYWwgVmVoaWNsZSBUQ08gJiBGbGVldCBEZWNpc2lvbiBTaW11bGF0b3IuanBnIiwidXJsIjoiaHR0cHM6Ly95aWxpY2hhbmc1Mjhoei5naXRodWIuaW8vVENPX0ZsZWV0X0RlY2lzaW9uX1NpbXVsYXRvci8iLCJzdW1tYXJ5Ijp7InpoIjoi5Lul6LuK5YO544CB5rK56Zu75oiQ5pys44CB57at5L+u5YGc5bel44CB6Lev57ea5Z6L5oWL44CB5L+d6Zqq44CB5q6Y5YC844CB56Kz5oiQ5pys6IiH6KOc6IO95qKd5Lu25bu656uL6LuK6ZqKIFRDTyDmqKHmk6zmoYbmnrbjgILkvZzlk4HljZTliqnkvIHmpa3lrqLmiLbmr5TovIMgSUNF44CBSEVW44CBQkVWIOetieiDvea6kOaWueahiO+8jOS4puaKiuizvOe9ruaxuuetluW+nuWWruS4gOWDueagvOW7tuS8uOWIsOePvumHkea1geOAgeacjeWLmee2sue1oeOAgeazleimj+imgeaxguiIh+mVt+acn+eHn+mBi+mfjOaAp+OAgiIsImVuIjoiVGhpcyBzaW11bGF0b3IgYnVpbGRzIGEgZmxlZXQgVENPIGZyYW1ld29yayBhcm91bmQgdmVoaWNsZSBwcmljZSwgZnVlbCBvciBlbGVjdHJpY2l0eSBjb3N0LCBtYWludGVuYW5jZSBkb3dudGltZSwgcm91dGUgcGF0dGVybiwgaW5zdXJhbmNlLCByZXNpZHVhbCB2YWx1ZSwgY2FyYm9uIGNvc3QsIGFuZCBlbmVyZ3kgYWNjZXNzLiBJdCBoZWxwcyBjb21wYXJlIElDRSwgSEVWLCBCRVYsIGFuZCBvdGhlciBvcHRpb25zIHRocm91Z2ggY2FzaCBmbG93LCBzZXJ2aWNlIG5ldHdvcmtzLCByZWd1bGF0aW9uLCBhbmQgb3BlcmF0aW5nIHJlc2lsaWVuY2UuIiwiamEiOiLou4rkuKHkvqHmoLzjgIHnh4Pmlpnjg7vpm7vlipvosrvjgIHmlbTlgpnlgZzmraLjgIHot6/nt5rlvaLmhYvjgIHkv53pmbrjgIHmrovkvqHjgIHngq3ntKDjgrPjgrnjg4jjgIHoo5zntabmnaHku7bjgpLnlKjjgYTjgabjg5Xjg6rjg7zjg4hUQ0/jgpLlj6/oppbljJbjgZnjgovjgrfjg5/jg6Xjg6zjg7zjgr/jg7zjgafjgZnjgIJJQ0XjgIFIRVbjgIFCRVbnrYnjgpLmr5TovIPjgZfjgIHos7zlhaXliKTmlq3jgpLkvqHmoLzjgYvjgonjgq3jg6Pjg4Pjgrfjg6Xjg5Xjg63jg7zjgIHjgrXjg7zjg5PjgrnntrLjgIHms5Xopo/jgIHplbfmnJ/pgYvnlKjjga7lvLfpna3mgKfjgbjluoPjgZLjgb7jgZnjgIIifX0seyJpZCI6ImNvZGV4LWFwcGxpZWQtaW50ZWxsaWdlbmNlLWxlYXJuaW5nLWxhYiIsIm5hbWUiOnsiemgiOiJDb2RleCDlpJrpoJjln5/mh4nnlKjmioDooZPkupLli5XlrbjlnJIiLCJlbiI6IkNvZGV4IEFwcGxpZWQgSW50ZWxsaWdlbmNlIExlYXJuaW5nIExhYiIsImphIjoiQ29kZXgg5b+c55So55+l6IO944Op44O844OL44Oz44Kw44Op44OcIn0sImZpbGUiOiJDb2RleCBBcHBsaWVkIEludGVsbGlnZW5jZSBMZWFybmluZyBMYWIudHh0IiwiaW1nIjoiQ29kZXggQXBwbGllZCBJbnRlbGxpZ2VuY2UgTGVhcm5pbmcgTGFiLmpwZyIsInVybCI6Imh0dHBzOi8veWlsaWNoYW5nNTI4aHouZ2l0aHViLmlvL2NvZGV4LWFpLXdvcmtzaG9wLyIsInN1bW1hcnkiOnsiemgiOiLlsIcgQUkgY29kaW5nIGFnZW50IOeahOS7u+WLmeaLhuino+OAgeimj+agvOaSsOWvq+OAgeWTgeizqumWgOaqu+OAgeS6uuW3peimhuaguOiIh+WkmuiqnuWFp+WuueeuoeeQhui9ieWMlueCuuS6kuWLleaVmeadkOOAguS9nOWTgeS7pSBHb2FsIG1vZGXjgIFBcHBzaG90c+OAgVBSIHJldmlld+OAgUdpdEh1YiBBY3Rpb27jgIFTdWJhZ2VudHMg6IiHIFByb21wdCDnr4TmnKzlu7rnq4vlj6/mqqLmn6XmtYHnqIvvvIzmlK/mj7TllYbnlKjou4rkvIHlioPjgIHntpPpirfmlZnogrLjgIHos4fmlpnmlbTnkIboiIfmlbjkvY3kuqTku5jmqJnmupbljJbjgIIiLCJlbiI6IlRoaXMgbGFiIHR1cm5zIEFJIGNvZGluZyBhZ2VudCB3b3JrZmxvd3MgaW50byBpbnRlcmFjdGl2ZSBsZWFybmluZzogdGFzayBkZWNvbXBvc2l0aW9uLCBzcGVjaWZpY2F0aW9uIHdyaXRpbmcsIHF1YWxpdHkgZ2F0ZXMsIGh1bWFuIHJldmlldywgYW5kIG11bHRpbGluZ3VhbCBjb250ZW50IG1hbmFnZW1lbnQuIFdpdGggR29hbCBtb2RlLCBhcHBzaG90cywgUFIgcmV2aWV3LCBHaXRIdWIgQWN0aW9ucywgc3ViYWdlbnRzLCBhbmQgcHJvbXB0IHRlbXBsYXRlcywgaXQgc3VwcG9ydHMgcGxhbm5pbmcsIGRlYWxlciBlZHVjYXRpb24sIGRhdGEgb3JnYW5pemF0aW9uLCBhbmQgZGlnaXRhbCBkZWxpdmVyeSBzdGFuZGFyZHMuIiwiamEiOiJBSSBjb2RpbmcgYWdlbnTjga7jgr/jgrnjgq/liIbop6PjgIHku5Xmp5jkvZzmiJDjgIHlk4Hos6rjgrLjg7zjg4jjgIHkurrnmoTlr6nmn7vjgIHlpJroqIDoqp7nrqHnkIbjgpLjgqTjg7Pjgr/jg6njgq/jg4bjgqPjg5bmlZnmnZDjgavjgZfjgZ/kvZzlk4HjgafjgZnjgIJHb2FsIG1vZGXjgIFBcHBzaG90c+OAgVBSIHJldmlld+OAgUdpdEh1YiBBY3Rpb27jgIFTdWJhZ2VudHPjgIFQcm9tcHTjg4bjg7Pjg5fjg6zjg7zjg4jjgavjgojjgorjgIHkvIHnlLvjgIHosqnlo7LlupfmlZnogrLjgIHos4fmlpnmlbTnkIbjgIHjg4fjgrjjgr/jg6vntI3lk4Hjga7mqJnmupbljJbjgpLmlK/mj7TjgZfjgb7jgZnjgIIifX1dLCJ1aSI6eyJ6aCI6eyJsYW5nIjoi5Lit5paHIiwidGl0bGUiOiLllYbnlKjou4rkv6Hku7vnp7vli5XnrZbnlaXlr6bpqZflrqQiLCJzdWJ0aXRsZSI6IuS7peWPsOeBo+WcqOWcsOWgtOaZr+OAgeWci+mam+enu+WLlei2qOWLouOAgeWTgeeJjOeuoeeQhuOAgUFJ5oOF5aCx6IiH5pW45L2N6KGM6Yq377yM5pW055CG5Y2B5YCL5ZWG55So6LuK5LyB5YqD5Y6f5Z6L44CCIiwiZXllYnJvdyI6IkhvdGFpIENvbW1lcmNpYWwgTW9iaWxpdHkgUG9ydGZvbGlvIEdhdGV3YXkiLCJoZXJvTm90ZSI6IuWNgeWAi+S9nOWTgembhuS7peWgtOaZr+eglOeptuOAgeS6kuWLlee2suermeOAgUFJIOaDheWgseaxuuetluOAgeefreW9semfs+iIh+aVmeiCsuWFp+Wuue+8jOWRiOePvuWVhueUqOi7iuWcqOeJqea1geOAgeWuieWFqOOAgeeFp+itt+OAgeiDvea6kOi9ieWei+OAgeWTgeeJjOa6nemAmuiIh+WVhuWTgeS8geWKg+S4reeahOWkmuWxpOasoeWDueWAvOOAgiIsIm9wZW4iOiLplovllZ/kvZzlk4EiLCJtb3JlIjoi6aGv56S65pu05aSaIiwibGVzcyI6IuaUtuWQiCIsImNhdGFsb2ciOiLnm67pjIQiLCJ0aGVtZXMiOiLniYjlnosiLCJsYW5ndWFnZSI6IuiqnuiogCIsIm1hcnF1ZWUiOiLkvZzlk4Hot5Hppqznh4giLCJ3b3JrcyI6IuWNgeWAi+S9nOWTgembhiIsImNvcHlyaWdodCI6IuiRl+S9nOasiuaJgOaciSDCqSAyMDI2IOW8tee+qeixiihZaS1MaSwgQ2hhbmcpIOS/neeVmeaJgOacieasiuWIqSIsImZvb3RlciI6IlByb3RvdHlwZSBQb3J0Zm9saW/vvZzmnKzntrLnq5nngrrkvZzlk4Hpm4blhaXlj6Pljp/lnovvvIzlnJbniYfjgIHmloflrZfoiIfkupLli5Xku4vpnaLnlKjmlrzlsZXnpLrmlrnms5XoiIfkvIHlioPog73lipvjgIIifSwiZW4iOnsibGFuZyI6IkVuZ2xpc2giLCJ0aXRsZSI6IlRydXN0ZWQgQ29tbWVyY2lhbCBNb2JpbGl0eSBTdHJhdGVneSBMYWIiLCJzdWJ0aXRsZSI6IlRlbiBwb3J0Zm9saW8gcHJvdG90eXBlcyBjb25uZWN0aW5nIFRhaXdhbiBmaWVsZCBzY2VuYXJpb3MsIGdsb2JhbCBtb2JpbGl0eSB0cmVuZHMsIGJyYW5kIG1hbmFnZW1lbnQsIEFJIGludGVsbGlnZW5jZSwgYW5kIGRpZ2l0YWwgbWFya2V0aW5nLiIsImV5ZWJyb3ciOiJIb3RhaSBDb21tZXJjaWFsIE1vYmlsaXR5IFBvcnRmb2xpbyBHYXRld2F5IiwiaGVyb05vdGUiOiJUaGVzZSB0ZW4gd29ya3MgdXNlIHNjZW5hcmlvIHJlc2VhcmNoLCBpbnRlcmFjdGl2ZSB3ZWJzaXRlcywgQUkgaW50ZWxsaWdlbmNlIGludGVyZmFjZXMsIHNob3J0LWZvcm0gdmlkZW8sIGFuZCBlZHVjYXRpb24gY29udGVudCB0byBwcmVzZW50IHRoZSBtdWx0aS1sYXllcmVkIHZhbHVlIG9mIGNvbW1lcmNpYWwgdmVoaWNsZXMgaW4gbG9naXN0aWNzLCBzYWZldHksIGNhcmUsIGVuZXJneSB0cmFuc2l0aW9uLCBicmFuZCBjb21tdW5pY2F0aW9uLCBhbmQgcHJvZHVjdCBwbGFubmluZy4iLCJvcGVuIjoiT3BlbiBwcm9qZWN0IiwibW9yZSI6IlNob3cgbW9yZSIsImxlc3MiOiJDb2xsYXBzZSIsImNhdGFsb2ciOiJDYXRhbG9nIiwidGhlbWVzIjoiVGhlbWVzIiwibGFuZ3VhZ2UiOiJMYW5ndWFnZSIsIm1hcnF1ZWUiOiJQb3J0Zm9saW8gTWFycXVlZSIsIndvcmtzIjoiVGVuIFBvcnRmb2xpbyBXb3JrcyIsImNvcHlyaWdodCI6IkNvcHlyaWdodCDCqSAyMDI2IFlpLUxpIENoYW5nLiBBbGwgcmlnaHRzIHJlc2VydmVkLiIsImZvb3RlciI6IlByb3RvdHlwZSBQb3J0Zm9saW/vvZxUaGlzIHBvcnRhbCBpcyBhIHBvcnRmb2xpbyBwcm90b3R5cGU7IGltYWdlcywgdGV4dCwgYW5kIGludGVyZmFjZXMgZGVtb25zdHJhdGUgbWV0aG9kcyBhbmQgcGxhbm5pbmcgY2FwYWJpbGl0eS4ifSwiamEiOnsibGFuZyI6IuaXpeacrOiqniIsInRpdGxlIjoi5L+h6aC844GV44KM44KL5ZWG55So44Oi44OT44Oq44OG44Kj5oim55Wl44Op44OcIiwic3VidGl0bGUiOiLlj7Dmub7jga7nj77loLTjgrfjg4rjg6rjgqrjgIHlm73pmpvjg6Ljg5Pjg6rjg4bjgqPli5XlkJHjgIHjg5bjg6njg7Pjg4nnrqHnkIbjgIFBSeaDheWgseOAgeODh+OCuOOCv+ODq+ODnuODvOOCseODhuOCo+ODs+OCsOOCkue1kOOBtuWNgeOBruS8geeUu+WOn+Wei+OAgiIsImV5ZWJyb3ciOiJIb3RhaSBDb21tZXJjaWFsIE1vYmlsaXR5IFBvcnRmb2xpbyBHYXRld2F5IiwiaGVyb05vdGUiOiLljYHjga7kvZzlk4Hjga/jgIHjgrfjg4rjg6rjgqrnoJTnqbbjgIHjgqTjg7Pjgr/jg6njgq/jg4bjgqPjg5bjgrXjgqTjg4jjgIFBSeaDheWgseOCpOODs+OCv+ODvOODleOCp+ODvOOCueOAgeOCt+ODp+ODvOODiOWLleeUu+OAgeaVmeiCsuOCs+ODs+ODhuODs+ODhOOCkumAmuOBmOOAgeeJqea1geOAgeWuieWFqOOAgeOCseOCouOAgeOCqOODjeODq+OCruODvOi7ouaPm+OAgeODluODqeODs+ODieOCs+ODn+ODpeODi+OCseODvOOCt+ODp+ODs+OAgeWVhuWTgeS8geeUu+OBq+OBiuOBkeOCi+WVhueUqOi7iuOBruWkmuWxpOeahOS+oeWApOOCkuekuuOBl+OBvuOBmeOAgiIsIm9wZW4iOiLkvZzlk4HjgpLplovjgY8iLCJtb3JlIjoi44KC44Gj44Go6KaL44KLIiwibGVzcyI6IumWieOBmOOCiyIsImNhdGFsb2ciOiLnm67pjLIiLCJ0aGVtZXMiOiLjg4bjg7zjg54iLCJsYW5ndWFnZSI6IuiogOiqniIsIm1hcnF1ZWUiOiLkvZzlk4Hjg57jg6vjgq3jg7wiLCJ3b3JrcyI6IuWNgeOBruS9nOWTgSIsImNvcHlyaWdodCI6IuiRl+S9nOaoqeaJgOaciSDCqSAyMDI2IOW8tee+qeixiihZaS1MaSwgQ2hhbmcpIOeEoeaWrei7oui8ieOCkuemgeOBmOOBvuOBmSIsImZvb3RlciI6IlByb3RvdHlwZSBQb3J0Zm9saW/vvZzmnKzjgrXjgqTjg4jjga/kvZzlk4Hpm4blhaXlj6Pjga7jg5fjg63jg4jjgr/jgqTjg5fjgafjgYLjgorjgIHnlLvlg4/jg7vmlofnq6Djg7vjgqTjg7Pjgr/jg7zjg5Xjgqfjg7zjgrnjga/mlrnms5XjgajkvIHnlLvog73lipvjga7mj5DnpLrjgpLnm67nmoTjgajjgZfjgabjgYTjgb7jgZnjgIIifX0sInRoZW1lcyI6eyJ6aCI6WyLlhYnln5/nrZbnlaUiLCLmm5zpu5HnjrvnkoMiLCLmmpbnmb3nt6jovK8iLCLmpbXnsKHntrLmoLwiXSwiZW4iOlsiQXVyb3JhIFN0cmF0ZWd5IiwiR2xhc3MgTmlnaHQiLCJXYXJtIEVkaXRvcmlhbCIsIk1pbmltYWwgR3JpZCJdLCJqYSI6WyLlhYnln5/jgrnjg4jjg6njg4bjgrjjg7wiLCLjgrDjg6njgrnjg4rjgqTjg4giLCLjgqbjgqnjg7zjg6Dnt6jpm4YiLCLjg5/jg4vjg57jg6vjgrDjg6rjg4Pjg4kiXX19';
const data=JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(packed),c=>c.charCodeAt(0))));
const themeKeys=['aurora','night','warm','grid'];
const langLabels={zh:'中文',en:'English',ja:'日本語'};
const state={lang:localStorage.getItem('portalLang')||'zh',theme:localStorage.getItem('portalTheme')||'aurora'};
const app=document.getElementById('app');
let carouselApi=null;
const $=(s,r=document)=>r.querySelector(s);
function t(k){return data.ui[state.lang][k]||data.ui.zh[k]||k}
function esc(x){return String(x).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))}
function clipText(s,n=180){const a=[...s];return a.length<=n?{first:s,more:''}:{first:a.slice(0,n).join(''),more:a.slice(n).join('')}}
function scrollToPortfolio(id){
 const el=document.getElementById(id);
 if(!el) return;
 const header=document.querySelector('.topbar');
 const topOffset=(header?header.getBoundingClientRect().height:0)+26;
 const y=el.getBoundingClientRect().top+window.scrollY-topOffset;
 window.scrollTo({top:Math.max(0,y),behavior:'smooth'});
 if(history&&history.replaceState) history.replaceState(null,'','#'+id);
 el.classList.remove('focus-flash');
 void el.offsetWidth;
 el.classList.add('focus-flash');
 window.setTimeout(()=>el.classList.remove('focus-flash'),1800);
}
function render(){
 document.documentElement.lang=state.lang==='zh'?'zh-Hant':state.lang==='ja'?'ja':'en';
 document.title=t('title');
 document.body.dataset.theme=state.theme;
 const items=data.items;
 app.innerHTML=`<div class="site">
  <a class="skip" href="#works">skip</a>
  <header class="topbar">
    <div class="brandline">
      <div class="eyebrow">${esc(t('eyebrow'))}</div>
      <div class="copyright">${esc(t('copyright'))}</div>
    </div>
    <div class="controls">
      ${Object.keys(langLabels).map(k=>`<button class="pill ${state.lang===k?'active':''}" data-lang="${k}">${langLabels[k]}</button>`).join('')}
      ${themeKeys.map((k,i)=>`<button class="theme-btn ${state.theme===k?'active':''}" data-theme="${k}">${esc(data.themes[state.lang][i])}</button>`).join('')}
    </div>
  </header>
  <main>
    <section class="hero" id="home">
      <div class="hero-copy">
        <div class="eyebrow">${esc(t('eyebrow'))}</div>
        <h1>${esc(t('title'))}</h1>
        <p class="subtitle">${esc(t('subtitle'))}</p>
        <div class="hero-note">${esc(t('heroNote'))}</div>
      </div>
      <div class="hero-video-wrap" aria-label="portfolio hero animation">
        <video class="hero-video" src="video/index.mp4" autoplay muted loop playsinline preload="auto"></video>
        <button class="hero-sound-btn" id="soundBtn" type="button">${esc(soundButtonLabel())}</button>
      </div>
    </section>
    <section class="carousel-section" id="marquee" aria-label="${esc(t('works'))}">
      <h2 class="visually-hidden">${esc(t('marquee'))}</h2>
      <div class="carousel-shell" id="carouselShell">
        <div class="carousel-stage" id="carouselStage">
          ${items.map((item,idx)=>`<button class="carousel-item" data-target="${item.id}" data-index="${idx}" style="--thumb:url('images/${encodeURI(item.img)}')"><span>${idx+1}. ${esc(item.name[state.lang])}</span></button>`).join('')}
        </div>
        <div class="carousel-hint">${esc(t('works'))}</div>
      </div>
    </section>
    <section id="works">
      <div class="section-title"><h2>${esc(t('works'))}</h2><p>${esc(t('heroNote'))}</p></div>
      <div class="portfolio-grid">${items.map((item,i)=>card(item,i)).join('')}</div>
    </section>
  </main>
  <footer class="footer">${esc(t('footer'))}<br>${esc(t('copyright'))}</footer>
 </div>
 <div class="floating">
  <div class="float-panel" id="langPanel">
    <h4>${esc(t('language'))}</h4>
    <div class="lang-grid">
      ${Object.keys(langLabels).map(k=>`<button class="${state.lang===k?'active':''}" data-lang="${k}">${langLabels[k]}</button>`).join('')}
    </div>
  </div>
  <div class="float-panel" id="floatPanel">
    <h4>${esc(t('catalog'))}</h4>
    ${items.map((item,i)=>`<a href="#${item.id}">${i+1}. ${esc(item.name[state.lang])}</a>`).join('')}
    <h4>${esc(t('themes'))}</h4>
    ${themeKeys.map((k,i)=>`<button class="theme-option" data-theme="${k}">${esc(data.themes[state.lang][i])}</button>`).join('')}
  </div>
  <div class="floating-language-row"><button class="float-lang-btn" id="langToggle">${esc(t('language'))}</button></div>
  <div class="float-actions"><button class="menu-btn" id="menuToggle">${esc(t('catalog'))}</button><button class="menu-btn" id="topBtn">↑</button></div>
 </div>
 <div class="shield" aria-hidden="true"></div>`;
 bind();
 initCarousel();
 initHeroAudioControl();
}
function card(item,i){
 const s=item.summary[state.lang];
 const part=clipText(s,180);
 return `<article class="card" id="${item.id}">
  <a class="image-link" href="${esc(item.url)}" target="_blank" rel="noopener">
    <img class="card-img" src="images/${encodeURI(item.img)}" alt="${esc(item.name[state.lang])}">
  </a>
  <div class="card-body">
    <div class="card-index">Portfolio ${String(i+1).padStart(2,'0')}</div>
    <h3>${esc(item.name[state.lang])}</h3>
    <p class="summary"><span>${esc(part.first)}</span>${part.more?`<span class="ellipsis">……</span><span class="more-text">${esc(part.more)}</span>`:''}</p>
    <div class="card-actions">
      <a class="open-btn" href="${esc(item.url)}" target="_blank" rel="noopener">${esc(t('open'))} ↗</a>
      ${part.more?`<button class="more-btn" data-more>${esc(t('more'))}</button>`:''}
    </div>
  </div>
 </article>`;
}

let heroAudioObserver=null;
let heroSoundEnabled=sessionStorage.getItem('heroSoundEnabled')==='1';
function soundButtonLabel(){
 const labels={
   zh:heroSoundEnabled?'聲音已開啟':'開啟聲音',
   en:heroSoundEnabled?'Sound enabled':'Enable Sound',
   ja:heroSoundEnabled?'音声オン':'音声をオン'
 };
 return labels[state.lang]||labels.zh;
}

function initHeroAudioControl(){
 const video=document.querySelector('.hero-video');
 const hero=document.querySelector('#home');
 const btn=document.querySelector('#soundBtn');
 if(!video||!hero) return;

 if(heroAudioObserver && heroAudioObserver.disconnect){
   heroAudioObserver.disconnect();
   heroAudioObserver=null;
 }

 video.loop=true;
 video.playsInline=true;
 video.preload='auto';
 try{ video.volume=1; }catch(e){}

 const isHeroPrimary=()=>{
   const r=hero.getBoundingClientRect();
   const vh=window.innerHeight||document.documentElement.clientHeight||800;
   const visible=Math.min(r.bottom,vh)-Math.max(r.top,0);
   const ratio=Math.max(0,visible)/Math.max(1,Math.min(r.height,vh));
   return ratio>=0.42;
 };

 const updateButton=()=>{
   if(!btn) return;
   btn.textContent=soundButtonLabel();
   btn.classList.toggle('enabled',heroSoundEnabled);
   btn.hidden=!!heroSoundEnabled;
 };

 const setHeroPlayback=(active)=>{
   try{ video.volume=1; }catch(e){}
   if(active){
     video.muted=!heroSoundEnabled;
     const p=video.play();
     if(p && typeof p.catch==='function') p.catch(()=>{});
   }else{
     video.muted=true;
     video.pause();
   }
   updateButton();
 };

 const sync=()=>setHeroPlayback(isHeroPrimary());

 if(btn){
   btn.addEventListener('click',event=>{
     event.preventDefault();
     event.stopPropagation();
     heroSoundEnabled=true;
     sessionStorage.setItem('heroSoundEnabled','1');
     try{ video.volume=1; }catch(e){}
     video.muted=false;
     const p=video.play();
     if(p && typeof p.catch==='function'){
       p.catch(()=>{
         video.muted=true;
         updateButton();
       });
     }
     updateButton();
   });
 }

 if('IntersectionObserver' in window){
   heroAudioObserver=new IntersectionObserver(entries=>{
     const entry=entries[0];
     setHeroPlayback(!!entry && entry.isIntersecting && entry.intersectionRatio>=0.42);
   },{threshold:[0,0.18,0.42,0.65,1]});
   heroAudioObserver.observe(hero);
 }else{
   window.addEventListener('scroll',sync,{passive:true});
   window.addEventListener('resize',sync,{passive:true});
 }

 sync();
}

function bind(){
 document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{state.lang=b.dataset.lang;localStorage.setItem('portalLang',state.lang);render();});
 document.querySelectorAll('[data-theme]').forEach(b=>b.onclick=()=>{state.theme=b.dataset.theme;localStorage.setItem('portalTheme',state.theme);document.body.dataset.theme=state.theme;document.querySelectorAll('[data-theme]').forEach(x=>x.classList.toggle('active',x.dataset.theme===state.theme));});
 document.querySelectorAll('[data-more]').forEach(b=>b.onclick=()=>{const c=b.closest('.card');c.classList.toggle('expanded');b.textContent=c.classList.contains('expanded')?t('less'):t('more');});
 document.querySelectorAll('.carousel-item').forEach(b=>{
   b.setAttribute('role','button');
   b.setAttribute('aria-label',`${b.textContent.trim()} - ${t('open')}`);
   b.addEventListener('click',event=>{
     const shell=document.getElementById('carouselShell');
     if(shell && shell.dataset.dragging==='1') return;
     event.preventDefault();
     event.stopPropagation();
     scrollToPortfolio(b.dataset.target);
   });
 });
 const menuPanel=$('#floatPanel'), langPanel=$('#langPanel');
 $('#menuToggle').onclick=()=>{menuPanel.classList.toggle('open');langPanel.classList.remove('open');};
 $('#langToggle').onclick=()=>{langPanel.classList.toggle('open');menuPanel.classList.remove('open');};
 $('#topBtn').onclick=()=>scrollTo({top:0,behavior:'smooth'});
}
function initCarousel(){
 if(carouselApi&&carouselApi.stop) carouselApi.stop();
 const shell=$('#carouselShell');
 const cards=[...document.querySelectorAll('.carousel-item')];
 if(!shell||!cards.length) return;
 let offset=0, baseSpeed=0.0045, speed=baseSpeed, targetSpeed=baseSpeed, raf=0;
 let dragging=false, lastX=0, lastT=0, dragVelocity=0;
 const n=cards.length;
 function dimensions(){
   const w=shell.clientWidth || window.innerWidth;
   const radius=Math.min(Math.max(w*0.36,260),560);
   return {w,radius};
 }
 function update(){
   const d=dimensions();
   const now=performance.now();
   if(!lastT) lastT=now;
   const dt=Math.min(42, now-lastT);
   lastT=now;
   speed += (targetSpeed-speed)*0.08;
   if(!dragging) offset += speed*dt/16.67 + dragVelocity;
   dragVelocity *= 0.92;
   const tau=Math.PI*2;
   cards.forEach((card,i)=>{
     let theta=((i-offset)/n)*tau;
     let z=Math.cos(theta);
     let x=Math.sin(theta)*d.radius;
     let scale=0.62 + ((z+1)/2)*0.46;
     let opacity=0.26 + ((z+1)/2)*0.74;
     let rotateY=-Math.sin(theta)*34;
     let blur=z<-.35?1.2:0;
     card.style.transform=`translate(-50%,-50%) translateX(${x.toFixed(2)}px) scale(${scale.toFixed(3)}) rotateY(${rotateY.toFixed(2)}deg)`;
     card.style.zIndex=String(Math.round((z+1)*100));
     card.style.opacity=String(opacity.toFixed(3));
     card.style.filter=`blur(${blur}px)`;
   });
   raf=requestAnimationFrame(update);
 }
 function pointerSpeed(clientX){
   const r=shell.getBoundingClientRect();
   const rel=(clientX-r.left)/Math.max(1,r.width);
   if(rel<.32) targetSpeed=-0.035;
   else if(rel>.68) targetSpeed=0.035;
   else targetSpeed=baseSpeed;
 }
 shell.addEventListener('mousemove',e=>pointerSpeed(e.clientX));
 shell.addEventListener('mouseleave',()=>{targetSpeed=baseSpeed;});
 shell.addEventListener('pointerdown',e=>{
   const tapped=e.target.closest?e.target.closest('.carousel-item'):null;
   dragging=true;lastX=e.clientX;dragVelocity=0;
   shell.dataset.dragging='0';
   shell.dataset.downX=String(e.clientX);
   shell.dataset.downY=String(e.clientY);
   shell.dataset.tapTarget=tapped?tapped.dataset.target:'';
   shell.setPointerCapture&&shell.setPointerCapture(e.pointerId);
 });
 shell.addEventListener('pointermove',e=>{
   if(!dragging) return;
   const dx=e.clientX-lastX;
   lastX=e.clientX;
   const startX=Number(shell.dataset.downX||e.clientX);
   if(Math.abs(e.clientX-startX)>8) shell.dataset.dragging='1';
   const d=dimensions();
   const delta=dx/Math.max(240,d.radius)*1.9;
   offset-=delta;
   dragVelocity=-delta*0.08;
   targetSpeed=delta>0?-0.045:0.045;
 });
 const endDrag=(e)=>{
   const wasDragging=shell.dataset.dragging==='1';
   const targetId=shell.dataset.tapTarget||'';
   const startX=Number(shell.dataset.downX||0);
   const startY=Number(shell.dataset.downY||0);
   const dx=e&&typeof e.clientX==='number'?Math.abs(e.clientX-startX):999;
   const dy=e&&typeof e.clientY==='number'?Math.abs(e.clientY-startY):999;
   dragging=false;
   if(e&&e.type==='pointerup'&&!wasDragging&&targetId&&dx<10&&dy<14){
     e.preventDefault();
     e.stopPropagation();
     scrollToPortfolio(targetId);
   }
   setTimeout(()=>{targetSpeed=baseSpeed;shell.dataset.dragging='0';shell.dataset.tapTarget='';},180);
 };
 shell.addEventListener('pointerup',endDrag);
 shell.addEventListener('pointercancel',endDrag);
 shell.addEventListener('lostpointercapture',endDrag);
 raf=requestAnimationFrame(update);
 carouselApi={stop:()=>cancelAnimationFrame(raf)};
}
['contextmenu','copy','cut','dragstart','selectstart'].forEach(evt=>document.addEventListener(evt,e=>e.preventDefault(),{capture:true}));
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&['c','u','s','p','a'].includes(e.key.toLowerCase()))e.preventDefault();if(e.key==='F12')e.preventDefault();});
render();
})();
